const http = require('http');
const fs = require('fs').promises;
const path = require('path');

const server = http.createServer(async (req, res) => {
  let content;

  const ext = path.extname(req.url);
  if (ext === '.jpeg') {
    content = await fs.readFile('./node-http.jpeg');
    res.setHeader('Content-Type', 'image/jpeg');
  } else {
    res.setHeader('Content-Type', 'text/html');
    content = await fs.readFile('./index.html');
  }
  res.statusCode = 200;
  res.end(content);
});

const port = 8081;

server.listen(port, () => {
  console.log('Server is running on port', port);
});