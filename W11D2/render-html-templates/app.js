const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('layout', { title: 'Welcome', heading: 'Home' });
});

const port = 8081;

app.listen(port, () => console.log('Server is listening on port', port));