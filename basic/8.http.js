const http = require('node:http');
const { findAvailablePort } = require('./9.free-port');

const desiredPort = process.env.PORT ?? 3000;

const server = http.createServer((req, res) => {
  console.log('Hello');
  res.end();
});

findAvailablePort(desiredPort).then(port => {
  server.listen(port, () => {
    console.log(`Server running on port ${server.address().port}`);
  });
});
