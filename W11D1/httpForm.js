const http = require('http');
const fs = require('fs').promises;
const path = require('path');

const server = http.createServer(async (req, res) => {
  let content;

  const ext = path.extname(req.url);
  if (req.method === 'POST') {
    let bodyContent = '';
    for await (let chunk of req) {
      bodyContent += chunk;
    }
    // const [fieldName, encodedFieldValue] = bodyContent.split('=');
    // const spacesFieldValue = encodedFieldValue.replace(/\+/g, ' ');
    // const fieldValue = decodeURIComponent(spacesFieldValue);
    // content = `
    //   <h1>I got your request</h1>
    //   <a href="/">GO BACK</a>
    //   <p>You sent ${fieldName} with the value ${fieldValue}</p>
    // `;

    const keyValuePairs = bodyContent.split('&')
      .map(keyValuePair => keyValuePair.split('='))
      .map(([key, value]) => [key, value.replace(/\+/g, ' ')])
      .map(([key, value]) => [key, decodeURIComponent(value)]);

    content = `
      <h1>I got your request</h1>
      <a href="/">GO BACK</a>
    `;
    for (let [fieldName, fieldValue] of keyValuePairs) {
      content += `
        <p>You sent ${fieldName} with the value ${fieldValue}</p>
      `;
    }

    res.setHeader('Content-Type', 'text/html');
  } else if (ext === '.jpeg') {
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
