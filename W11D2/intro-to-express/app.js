const express = require('express');

const app = express(); // application

// configuration
// connect to database
// defining middlewares
// routes

const port = 5050;

app.listen(port, () =>  console.log('Server is listening on port', port));