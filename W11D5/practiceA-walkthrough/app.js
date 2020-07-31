/**
 * TODO: Create and configure your Express.js application in here.
 *       You must name the variable that contains your Express.js
 *       application "app" because that is what is exported at the
 *       bottom of the file.
 */

const express = require('express');
const app = express();
const { HairColor, Person } = require('./models');

app.set('view engine', 'pug');

// app.use(express.urlencoded({ extended: false }));
// app.use(require('cookie-parser')());
// app.use(require('csurf')({ cookie: true }));

app.use(express.urlencoded({ extended: false }));
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const csrfProtection = require('csurf')({ cookie: true });
app.use(csrfProtection);

app.use((req, res, next) => {
  req.setTimeout(1000, () => {
    res.status(500).end();
  });
  res.setTimeout(1000, () => {
    res.status(500).end();
  });

  next();
});

app.get('/new-person', async (req, res) => {
  const hairColors = await HairColor.findAll();
  const csrfToken = req.csrfToken();
  res.render('create', { hairColors, csrfToken });
});

app.post('/new-person', async (req, res, next) => {
  try {
    await Person.create(req.body);
    res.redirect('/');
  } catch(err) {
    // next(err);
  }
});

app.get('/', async (req, res) => {
  const people = await Person.findAll({
    include: HairColor
  });
  res.render('index', { people });
});


const port = 8081;

app.listen(port, () => console.log('Server is listening on port', port));

/* Do not change this export. The tests depend on it. */
try {
  exports.app = app;
} catch(e) {
  exports.app = null;
}
