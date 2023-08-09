const { readFile } = require('node:fs/promises');

// IIFE - Inmediatly invoked function expression
(
  async () => {
    console.log('Reading first file:::');
    const text = await readFile('./archivo.txt', 'utf-8');
    console.log('first text', text);
    console.log(' ---> Do things while reading file');
  }
)();
