/**
 * TODO: Create and configure your Express.js application in here.
 *       You must name the variable that contains your Express.js
 *       application "app" because that is what is exported at the
 *       bottom of the file.
 */

const express = require('express');
const app = express();
const { HairColor, Person } = require('./models');
const csurf = require('csurf');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');


const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);
const csrfProtection = csurf({ cookie: true });

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'pug');


app.get('/new-person', csrfProtection, asyncHandler(async (req, res) => {
  const hairColors = await HairColor.findAll({ order: ['color']});
  res.render('new-person-form', { hairColors, token: req.csrfToken() });
}));


app.post('/new-person', csrfProtection, asyncHandler(async (req, res) => {
  await Person.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
    biography: req.body.biography,
    hairColorId: req.body.hairColorId
  });

  res.redirect('/');
}));

app.get('/', asyncHandler(async (req, res) => {
  const people = await Person.findAll({ include: HairColor });
  res.render('person-list', { people });
}));

app.listen(8081, () => {
  console.log('Running express on 8081...');
});

/* Do not change this export. The tests depend on it. */
try {
  exports.app = app;
} catch(e) {
  exports.app = null;
}
