const express = require('express');
const app = express();
const { Pet, Owner, PetType } = require('./models');
const ownerRouter = require('./controllers/owners');
const petRouter = require('./controllers/pets');

app.set('view engine', 'pug');

const logger = require('morgan');

const newMiddleware = (req, res, next) => {
  console.log(req.body);
  // res.body = {

  // };
  res.on('finish', () => {
    console.log('finished');
  });
  next();
};

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true })); // any type of value (not just string and array)

app.use('/owners', ownerRouter);
app.use('/pets', petRouter);

const port = 8080;

app.listen(port, () => console.log('Server is listening on port', port));