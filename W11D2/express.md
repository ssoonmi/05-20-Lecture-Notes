
### Express Application



### Express Request Object

```javascript
req.path // URL path
req.method // method
req.params // route parameters obj (wildcards)
req.query // query parameters obj (anything after the `?` in the URL)
req.body // body of the request (only populated when you use a body-parser middleware)
req.cookies // cookies
```

### Express Response Object

```javascript
res.render()
```


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

### Render an HTML Template



[Docs for `app.set`]: https://expressjs.com/en/api.html#app.set