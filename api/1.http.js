const http = require('node:http');

const desiredPort = process.env.PORT ?? 1234;

const server = http.createServer((req, res) => {
  console.log('Hello');
  res.end();
});

server.listen(desiredPort, () => {
  console.log(`Server running on port ${server.address().port}`);
});
