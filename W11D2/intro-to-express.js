const express = require('express');
const logger = require('morgan');
const app = express();
app.use(logger('dev'));

// creating a middleware:
// app.use((req, res, next) => {
//   // before route handler and subsequent middlewares
//   res.on('finish', () => {
//     // after route handler is done
//   });
//   next();
// });

app.get(`/hello`, (req, res) => {
  res.send('<h1>GET /hello</h1>');
});

app.get(`/`, (req, res) => {
  res.send('<h1>GET /sdfkdfjdkfj</h1>');
});

app.get(`/blogs/hello`, (req, res) => {
  res.send("<h1>GET /blogs/hello</h1>");
});
app.get(`/blogs/:id`, (req, res) => {
  console.log('params', req.params);
  res.send(`
    <h1>GET /blogs/:id</h1>
    <h2>:id is ${req.params.id}</h2>
  `);
});


app.get(`/blogs/:id/comments`, (req, res) => {
  res.send(`
    <h1>GET /blogs/:id/comments</h1>
    <h2>:id is ${req.params.id}</h2>
  `);
});

const port = 3000;

app.listen(port, () => console.log('Server is listening on port', port));