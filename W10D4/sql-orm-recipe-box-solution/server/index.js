const express = require('express');
const fs = require('fs').promises;
const helmet = require('helmet');
const path = require('path');

const app = express();
const assetsPath = path.resolve(__dirname, '..', 'assets');

app.use(helmet());
app.set('view engine', 'pug');

app.use('/', require('./controllers/dashboard'));
app.use('/recipes', require('./controllers/recipes'));
app.use('/ingredients', require('./controllers/ingredients'));
app.use('/instructions', require('./controllers/instructions'));
app.use('/assets', express.static(assetsPath));

app.listen(3000, () => {
  console.log('Recipe box currently accepting requests on port 3000.');
});
