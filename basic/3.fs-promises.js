// This is only te be used in native modules
// that don't have native promises

// const { promisify } = require('node:util');
// const readFilePromise = promisify(fs.readFile)

const fs = require('node:fs/promises');

console.log('Reading first file:::');
fs.readFileSync('./archivo.txt', 'utf-8')
  .then(text => {
    console.log(text);
  });

console.log('Do things while reading file');

console.log('Reading second file:::');
fs.readFileSync('./archivo2.txt', 'utf-8')
  .then(text => {
    console.log(text);
  });

// console.log(text);
