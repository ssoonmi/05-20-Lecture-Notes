const express = require('express');

const app = express();

const port = 8081;

app.set('view engine', 'pug');

// routes

app.get('*', (req, res) => {
  res.render('error', { title: 'Welcome', heading: 'Home' });
});

app.listen(port, () => console.log('Server is listening on port', port));