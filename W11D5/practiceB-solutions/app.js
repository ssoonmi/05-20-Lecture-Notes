/**
 * TODO: Create and configure your Express.js application in here.
 *       You must name the variable that contains your Express.js
 *       application "app" because that is what is exported at the
 *       bottom of the file.
 */

const express = require('express');
const app = express();
const { Noodle, Sauce, Pasta } = require('./models');

app.set('view engine', 'pug');

app.use((req, res, next) => {
  req.setTimeout(1000, () => {
    res.status(500).end();
  });
  res.setTimeout(1000, () => {
    res.status(500).end();
  });
  next();
});

app.use(express.urlencoded({ extended: false }));
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const csrfProtection = require('csurf')({ cookie: true });
app.use(csrfProtection);

app.get('/pasta/create', async (req, res) => {
  const noodles = await Noodle.findAll();
  const sauces = await Sauce.findAll();
  
  res.render('pasta/create', { 
    noodles, 
    sauces, 
    csrfToken: req.csrfToken()
  });
});

app.post('/pasta/create', async (req, res, next) => {
  try {
    req.body.taste = Number(req.body.taste);
    await Pasta.create(req.body);
    res.redirect('/')
  } catch(err) {
    next(err);
  }
});

app.get('/', async (req, res) => {
  const pastas = await Pasta.findAll({
    include: [Noodle, Sauce]
  });

  res.render('pasta/index', { pastas });
});

app.get('/noodle/:id', async (req, res) => {
  const noodle = await Noodle.findByPk(req.params.id);
  if (!noodle) res.status(404).end();
  const pastas = await Pasta.findAll({
    where: { noodleId: req.params.id },
    include: [Noodle, Sauce]
  });

  res.render('noodle/show', { pastas, noodle });
});

app.get('/sauce/:id', async (req, res) => {
  const sauce = await Sauce.findByPk(req.params.id);
  if (!sauce) res.status(404).end();
  const pastas = await Pasta.findAll({
    where: { sauceId: sauce.id },
    include: [Noodle, Sauce]
  });

  res.render('sauce/show', { pastas, sauce });
});

app.use(express.static('public'));

const port = 8081;

app.listen(port, () => console.log('Server is listening on port', port));

/* Do not change this export. The tests depend on it. */
try {
  exports.app = app;
} catch(e) {
  exports.app = null;
}
