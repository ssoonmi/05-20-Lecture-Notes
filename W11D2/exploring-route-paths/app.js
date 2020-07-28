const express = require('express');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'banana'); // sets the views folder to be banana instead of the default "views" folder

app.get('/', (req, res) => {
  const productPaths = [
    `/product/1`,
    `/product/2`,
    `/product/100034`,
    `/product/asdf`
  ];

  const productsPaths = [
    `/products`,
    `/our-products`,
    `/product`,
    `/prodcts`,
    `/productts`,
    `/productos`
  ];

  res.render('nested/index', { productPaths, productsPaths });
});

app.get('/product/:id(\\d+)', (req, res) => {
  req.params.id = parseInt(req.params.id);
  console.log('id', req.params.id);
  if (req.params.id == 2) {
    console.log('Req params id is 2');
  }

  res.json({ productId: `Product ID: ${productId}` });
});

// app.get(/^\/((our-)?produ?ct{1,2}s?|productos)\/?$/i, (req, res) => {
//   res.send(`Products`);
// });

app.get([/^\/(our-)?produ?ct{1,2}s?\/?$/i, '/productos'], (req, res) => {
  if (!req.path.toLowerCase().startsWith('/products')) {
    return res.redirect('/products');
  }
  res.send(`Products`);
});

const port = 8081;

app.listen(port, () => console.log('Server is listening on port', port));
