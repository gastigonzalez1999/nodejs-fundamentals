const fs = require('node:fs');

console.log('Reading first file:::');
fs.readFileSync('./archivo.txt', 'utf-8', (_err, text) => {
  console.log(text);
});

console.log('Hacer cosas mientras lee el archivo');

console.log('Reading second file:::');
fs.readFileSync('./archivo2.txt', 'utf-8', (_err, text) => {
  console.log(text);
});

// console.log(secondText);
