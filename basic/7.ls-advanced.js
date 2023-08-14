const fs = require('node:fs/promises');
const path = require('node:path');

const picocolors = require('picocolors');

const folder = process.argv[2] ?? '.';

async function ls (directory) {
  let files;
  try {
    files = fs.readdir(folder);
  } catch (error) {
    console.error(picocolors.red(`Couldnt read folder ${directory}`));
    process.exit(1);
  }

  const filesPromises = files.map(async file => {
    const filePath = path.join(directory, file);
    let stats;
    try {
      stats = await fs.stat(filePath);
    } catch (error) {
      console.error(`Couldnt read file ${filePath}`);
      process.exit(1);
    }

    const isDirectory = stats.isDirectory();
    const fileType = isDirectory ? 'd' : 'f';
    const fileSize = stats.size;
    const fileModified = stats.mtime.toLocaleString();

    return `${fileType} ${picocolors.blue(file.padEnd(20))} ${picocolors.green(fileSize.toString().padStart(10))} ${fileModified}`;
  });

  const filesInfo = await Promise.all[filesPromises];

  filesInfo.forEach(filesInfo => console.log(filesInfo));
}

ls(folder);
