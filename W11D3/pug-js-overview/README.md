# How to Set Up an Express-Sequelize Project

## Set up

`npm install` the following 
  - express
  - pug@2
  - sequelize@5
  - pg

`npm install -D` the following:
  - sequelize-cli@5
  - morgan
  - nodemon

create npm scripts for `start` (node) and `dev` (nodemon)

## Sequelize

#### 1. Initialize Sequelize in your app

```
npx sequelize-cli init
```

#### 2. Create the models and migrations

```
npx sequelize-cli model:generate  \
  --name ModelName
  --attributes column1:type,column2:type
```

#### 3. Make database level validations and constraints

- NOT NECESSARY FOR ASSESSMENT

#### 4. Migrate the migrations

```
npx sequelize-cli db:migrate
```

#### 5. Make model level validations and constraints

- NOT NECESSARY FOR ASSESSMENT

#### 6. Make model associations

## Express

#### 1. Create an entry file for your server (usually `app.js` or `server.js`) and
initialize an Express application

```javascript
// app.js
const express = require('express');
const app = express(); // initialize Express app
// Make the server listen for requests on port 3000
const port = 3000;
app.listen(port, () => console.log('Server is listening on port', port));
```

#### 2. Set the default view engine to be `pug`

```javascript
// app.js
// ... after initializing Express app
app.set('view engine', 'pug');
// ...
```

#### 3. Apply your middlewares
    - `morgan` - for logging server requests
    - `cookie-parser` - for adding cookies into `req.cookies` as an object
    - `express.urlencoded` - for adding form data into `req.body` as an object
    - `csurf` - for preventing CSRF attacks (make sure to do this AFTER using
      `express.urlencoded` and `cookie-parser`)

```javascript
// app.js
// ... after setting default view engine
const logger = require('morgan');
app.use(logger('dev'));

const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

const csrfProtection = csrf({ cookie: true });
```

The do one of the following (for the assessment use CSRF on every route):

- If you want CSRF protection on every route:

  ```javascript
  app.use(csrfProtection); // only if you want CSRF protection on every route
  ```

- But if you want to apply csrfProtection for a single route INSTEAD of the all 
  the routes:

  ```javascript
  app.get("/urlpath", csrfProtection, (req, res) => {
    // ...
  });
  ```

#### 4. Create your routes

#### 5. Create your pug templates

#### 6. Include data from Sequelize when rendering templates

#### 7. Include CSRF token on every form