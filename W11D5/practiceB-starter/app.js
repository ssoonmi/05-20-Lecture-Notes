/**
 * TODO: Create and configure your Express.js application in here.
 *       You must name the variable that contains your Express.js
 *       application "app" because that is what is exported at the
 *       bottom of the file.
 */


const express = require('express');
const app = express();
const { } = require('./models');


app.set('view engine', 'pug');

app.use(express.urlencoded({ extended: false }));
app.use(require('cookie-parser')());
app.use(require('csurf')({ cookie: true }));

app.get('/', async (req, res) => {
  res.render('index', {  });
});

const port = 8081;

app.listen(port, () => console.log('Server is listening on port', port));

/* Do not change this export. The tests depend on it. */
try {
  exports.app = app;
} catch(e) {
  exports.app = null;
}
