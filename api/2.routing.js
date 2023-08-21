const http = require('node:http');

const desiredPort = process.env.PORT ?? 1234;

const processRequets = (req, res) => {
  const { method, url } = req;

  switch (method) {
    case 'GET':
      switch (url) {
        case '/api/get':
          res.setHeader('Content-type', 'text/html; charset-utf-8');
          return res.end('<h1>My Page</h1>');
        default:
          res.statusCode = 404;
          return res.end('<h1>404</h1>');
      }

    case 'POST':
      switch (url) {
        case '/api/post': {
          let body = '';

          req.on('data', chunk => {
            body += chunk.toString();
          });

          req.on('end', () => {
            const data = JSON.parse(body);
            res.writeHead(201, { 'Content-type': 'application/json; charset-utf-8' });
            res.end(JSON.stringify(data));
          });

          break;
        }
      }
      break;
    default:
      res.statusCode = 404;
      res.setHeader('Content-type', 'text/html; charset-utf-8');
      return res.end('<h1>404 not found</h1>');
  }
};

const server = http.createServer(processRequets);

server.listen(desiredPort, () => {
  console.log(`Server running on port ${server.address().port}`);
});
