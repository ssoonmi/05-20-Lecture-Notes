# Instructions

## Set Up

### 1. `.gitignore`

Create a `.gitignore` and make sure to keep it up to date with files/folders
that should not be pushed to GitHub!!

```
node_modules/
.env
.DS_Store
```

### 2. `.env`

Create a `.env` file with environment variables to define your database, to
define your port, and define your JWT:

```
DB_USERNAME=
DB_PASSWORD=
DB_DATABASE=
DB_HOST=
PORT=
JWT_SECRET=
JWT_EXPIRES_IN=604800
```

To get your nice `JWT_SECRET`, you can set the value to whatever the output of
the following is when you run it in `node` repl:

```js
require("crypto").randomBytes(32).toString("hex");
```

### 3. `.sequelizerc`

Create a `.sequelizerc` file with the following Sequelize configurations:

```js
const path = require('path');

module.exports = {
  'config': path.resolve('config', 'database.js'),
  'models-path': path.resolve('db', 'models'),
  'seeders-path': path.resolve('db', 'seeders'),
  'migrations-path': path.resolve('db', 'migrations')
};
```

### 4. `config/index.js`

Determine the default values for the environment variables if needed in
`config/index.js`:

```js
module.exports = {
  environment: process.env.NODE_ENV || "development",
  port: process.env.PORT || 8080,
  db: {
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
  },
  jwtConfig: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN,
  }
};
```

### 5. Initialize npm and `npm install`

Run `npm init -y`

`npm install` the following:

  - express
  - pug@2
  - sequelize
  - pg
  - per-env
  - bcryptjs
  - cookie-parser
  - csurf
  - jsonwebtoken
  - express-bearer-token
  - morgan

`npm install -D` the following:
  - sequelize-cli
  - dotenv
  - dotenv-cli
  - nodemon

### `npx sequelize init`

Initialize Sequelize in your project by running:

```
npx sequelize init
```

Replace the `config/database.js` file contents with the following:

```js
const config = require("./index");

const db = config.db;
const username = db.username;
const password = db.password;
const database = db.database;
const host = db.host;

module.exports = {
  development: {
    username,
    password,
    database,
    host,
    dialect: "postgres",
    seederStorage: "sequelize"
  },
};
```

### `package.json` Scripts

Add the following scripts in your `package.json`

```json
{
  "start": "per-env",
  "start:development": "nodemon -r dotenv/config ./bin/www",
  "start:production": "node ./bin/www"
}
```

### `app.js` and `bin/www`

Create a `app.js` file at the root of your project and initialize the
express application and export it at the bottom.

```js
const express = require('express');
const app = express();

module.exports = app;
```

Create a `bin/www` that will import the express app created in `app.js`, authenticate sequelize, and make the app accept requests on the port specified
in your configurations.

```js
const app = require('../app');
const db = require('../db/models');
const { port } = require('../config');

db.sequelize.authenticate()
  .then(() => {
    console.log('Connected to database successfully');
    app.listen(port, () => console.log('Server is listening on port', port));
  })
  .catch(() => {
    console.log('Error connecting to database');
  });
```

### Test your app with a simple route

```js
app.get('/hello', (req, res) => {
  res.send('Hello World!');
});
```

Delete after testing to see if it shows up.

### `app.set('view engine', 'pug')`

Set the app's view engine to pug.

### Middlewares

- morgan
- express.json
- express.urlencoded
- cookie-parser
- csurf

#### `morgan`

Set up morgan's logger middleware:

```js
const morgan = require('morgan');

//...

app.use(morgan('dev'));
```

#### `req.body` middlewares

For requests with `Content-Type` of `application/json`:

```js
app.use(express.json());
```

For requests with `Content-Type` of `application/x-www-form-urlencoded`:

```js
app.use(express.urlencoded({ extended: false }));
```

#### `cookie-parser`

```js
app.use(require('cookie-parser')());
```

OR

```js
const cookieParser = require('cookie-parser');
app.use(cookieParser());
```

#### `csurf`

CSRF Protection on all routes, like the following, is not necessary:

```js
const csrfProtection = require('csurf')({ cookie: true });
app.use(csrfProtection);
```

Instead, use it on individual routes, ex:

```js
app.get('/tasks', csrfProtection, (req, res) => {
  // ...
});
```

### `layout.pug`

Create a general layout page based on how the common page layout on the website
you are creating looks.

### Static Assets

Serve assets in the `public` folder on `/public` route paths:

```js
app.use("/public", express.static('public'));
```

### Adding a favicon

Save a `favicon.ico` in your `public` assets folder and add this into 
`layout.pug`:

```pug
link(rel="icon" href="/public/favicon.ico" type="image/ico")
```

### Page Not Found Error

The last route defined before error middlewares:

```js
// app.js

app.use((req, res, next) => {
  res.render('error-page');
});
```

Create a template called `error-page.pug` in `views` folder that extends
`layout.pug`:

`views/error-page.pug`:

```pug
extends layout.pug

block content
  h1 Page Not Found
```