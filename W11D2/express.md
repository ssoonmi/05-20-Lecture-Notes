# Express CheatSheet

## Application Object

```javascript
const express = require('express');
const app = require('app'); // creates the Express application
app.set('view engine', 'pug'); // sets the default view engine to be pug
app.get('/', (req, res) => {}); // defines a route with method GET and path of '/'
app.post('/', (req, res) => {}); // defines a route with method POST and path of '/'
app.patch('/', (req, res) => {}); // defines a route with method PATCH and path of '/'
app.put('/', (req, res) => {}); // defines a route with method PUT and path of '/'
app.delete('/', (req, res) => {}); // defines a route with method DELETE and path of '/'
app.use('/users', middleware); // uses a middleware for any path starting with `/users` (first argument is optional)
app.use(express.static(path.join(__dirname, 'public'))) // serves up static files in the `/public` directory
app.listen(port, () => {
  // ... callback executed after server successfully connected to specified port
}); // listen for requests on the specified port
```

## Request Object

```javascript
req.path // URL path
req.method // method
req.params // route parameters obj (wildcards)
req.query // query parameters obj (anything after the `?` in the URL)
req.body // body of the request (only populated when you use a body-parser middleware)
req.cookies // cookies
```

## Response Object

- Status code is `200` by default

```javascript
res.status(404); // sets the status code to 404
res.render('file-view-name', { variable: value }); // executes the file with the variables and sends the result, HTML string, to the client (variables object is optional)
res.json({ message: 'success' }); // Sends the POJO passed in as a JSON response with `Content-Type` header set to `application/json`
res.redirect('/'); // redirects the client to the path of `/`
res.type('application/json'); // sets the `Content-Type` header to `application/json`
res.send(content); // sets the body of the response to `content`
  // if content is an html string, then sets the `Content-Type` header to `text/html`
  // if content is a POJO, then sets the `Content-Type` header to `application/json`
res.end(); // ends the response without any data (optional unless you want to send without data)
```

## Router Object

```javascript
const express = require('express');
const app = express();
const router = express.Router();

router.get('/', (req, res) => {}); // defines a route with method GET and path of '/products'
router.post('/:id', (req, res) => {}); // defines a route with method POST and path of '/products/:id'
router.patch('/', (req, res) => {}); // defines a route with method PATCH and path of '/products'
router.put('/:id/comments', (req, res) => {}); // defines a route with method PUT and path of '/products/:id/comments'
router.delete('/', (req, res) => {}); // defines a route with method DELETE and path of '/products'

app.use('/products', router); // uses the router for the baseUrl path of `/products`
```

## Misc.

### Set and Get Express Settings

- **`app.set`** - sets an Express setting
    - Useful Express Settings:
        - `'view engine'` - The default view engine
        - `'views'` - A directory or an array of directories for the app's views
        - for other settings, See [Docs for `app.set`]
    - ex: Set `pug` to be the default view engine
      ```javascript
      app.set('view engine', 'pug);
      ```
- **`app.get`** - gets an Express setting
    - ex: See what the default view engine is
      ```javascript
      app.get('view engine');
      ```

[Docs for `app.set`]: https://expressjs.com/en/api.html#app.set