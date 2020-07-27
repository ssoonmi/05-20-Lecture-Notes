# Node HTTP

`http` is a built-in Node module that can be used to create a server.

```javascript
const http = require('http');
const server = http.createServer(async (req, res) => { 
  // ... make a server response, res, using the request, req
});
server.listen(port, () => console.log('Server is running on port', port));
```

## Request Object

```javascript
const server = http.createServer(async (req, res) => { 
  // ... make a server response, res, using the request, req
  req.url // url path of the request
  req.method // method of the request
  req.headers // headers of the request
});
```

### How to get the body of a `POST` request:

```javascript
// ... inside of http.createServer
let bodyContent = '';
for await (let chunk of req) {
  bodyContent += chunk;
}
const req.body = bodyContent.split('&')
  .map(keyValuePair => keyValuePair.split('='))
  .map(([key, value]) => [key, value.replace(/\+/g, ' ')])
  .map(([key, value]) => [key, decodeURIComponent(value)])
  .reduce(acc, ([key, value]) => acc[key] = value, {});
// req.body is an object of all the keys as inputs and their values as values
```

## Response Object

```javascript
const server = http.createServer(async (req, res) => {
  // ...
  res.statusCode = 200; // set the status code of the response
  res.setHeader('Content-Type', 'text/html'); // set a header on the response
  res.writeHead(200, {
    'Content-Type': 'application/json'
  }); // sets the status code and the headers
  res.write('<h1>Hello World!</h1>'); // writes to the body of the response
  res.end(endData); // ends the body of the response 
  // endData is optional but will get appended to the end of the data sent if present
});
```

## Code Examples

[Basic Node HTTP Code]

[Node HTTP Code with Files]

[Node HTTP Code with Form]

[Basic Node HTTP Code]: ./http.js
[Node HTTP Code with Files]: ./httpFile.js
[Node HTTP Code with Form]: ./httpForm.js