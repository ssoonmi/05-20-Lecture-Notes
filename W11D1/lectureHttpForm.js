const http = require('http');
const fs = require('fs');

const server = http.createServer(async (req, res) => {
  console.log({ method: req.method, url: req.url });

  if (req.method === 'GET' && req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write(await fs.readFileSync('./lecture.html'));
    res.end();
  } else if (req.method === 'POST' && req.url === '/bananas') {
    let bodyContent = '';
    for await (let chunk of req) {
      bodyContent += chunk;
    }

    const body = bodyContent.split('&')
      .map(keyValuePair => keyValuePair.split('='))
      .map(([key, value]) => [key, value.replace(/\+/g, ' ')])
      .map(([key, value]) => [key, decodeURIComponent(value)])
      .reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
      }, {});

    console.log('Body Content', bodyContent);
    console.log('body', body);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(body));
    res.end();
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>404 Page Not Found</h1>');
    res.end();
  }
});

const port = 5050;

server.listen(port, () => console.log('Server is listening on port', port));