# Express and Pug

## What is Express?

- Node.js framework
- makes common web dev tasks easier to implement
- reduces boilerplate code
- unopinionated and minimalistic
    - doesn't tell you how you need to structure your project
    - no structure for authentication or database access
- handles routing, basic error handling
- easy to define middlewares

Features:

- Routing
- Middleware
- Utility properties and methods
- Template engine integration

## Express Routes

HTTP endpoints are mapped to **routes** in Express

A **route** in Express consists of:

- an HTTP method
- a path or URI
- a route handler function

Express has a list of routes and will match a request's method and URI to the
list. The route handler function of the first one from that list of routes that
matches will be run.

- ex: [intro-to-express.js]
  list of Express routes in the order created:

    - `GET` `/hello`
    - `GET` `/`
    - `GET` `/blogs/:id`
    - `GET` `/blogs/hello`
    - `GET` `/blogs/:id/comments`
  
  Matching routes:

  - request: `GET` `/` => route handler: `GET` `/`
  - request: `GET` `/hello` => route handler: `GET` `/hello`
  - request: `GET` `/blogs/2` => route handler: `GET` `/blogs/:id`
  - request: `GET` `/blogs/2/comments` => route handler: `GET` `/blogs/:id/comments`
  - request: `GET` `/blogs/hello` => route handler: `GET` `/blogs/:id`
      - The route handler for `GET` `/blogs/hello` can never get called because
        the `GET` `/blogs/:id` gets created first and matches to that route
        before it can match to `/blogs/hello`
      - to hit the correct route handler, the route for `/blogs/hello` needs to
        be defined BEFORE the route `/blogs/:id`
  - request: `GET` `/blogs` => route handler: `404` not found response
  - request: `POST` `/` => route handler: `404` not found response
  - request: `POST` `/hello` => route handler: `404` not found response

[intro-to-express.js]: ./intro-to-express.js