# Browser Basics

## DOM - Document Object Model
- A heirarchy of objects in the **document object**, which includes HTML objects
- the webpage 

## BOM - Browser Object Model
- A heirarchy of objects in the **browser object**, which includes the document object and the **window**
- The browser interface (which contains the webpage)

## Terminology

- **User Interface** - The browser interface, which includes the address bar, the back and forward buttons, bookmarks menu, etc. Includes everything except the requested page content

- **Browser Engine** - Manages the interaction between the UI and the rendering engine

- **Rendering Engine** - Displays, or renders, the requested page content. If the requested content is HTML, it will parse HTML and CSS and render the parsed content.

- **Networking** - Handles network calls, such as HTTP requests

- **JS Interpreter** - Parses and executes JavaScript code

- **UI Backend** - Used for drawing basic widgets like combo boxes and windows; uses operating system user interface methods

- **Data Storage** - The persistence of data stored in the browser, such as cookies

![Browser Layers]

## Request/Response Cycle

![Request/Response Cycle]

- when we ask a server for information, we are making a `request`
  - **http request** is the most common request
- **client** - the browser, or the point asking for the information from the server
- **server** - where the data in the database is stored
- Browser's role in the request/response cycle
  1. Parses HTML, CSS, and JS
  2. Renders that information to the user by constructing and rendering a DOM tree
- You can go to the `Network` tab of your browser’s Developer Tools to view these requests and responses.

## `window` Object

- global context of the Chrome environment

## How to load JS in our HTML pages

- using script tags

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <script type="text/javascript" src="entry.js"></script>
</head>
<body>
</body>
</html>
```

### Remove Render-Blocking

- without render-blocking in script tags will wait for script to load and execute before parsing HTML and rendering it

```html
<script type="text/javascript" src="entry.js"></script>
```

![No Async or Defer]

- **`async`** keyword in a script will fetch the script asynchronously and order of scripts run may be different than specified (whatever script gets loaded first)

```html
<script async type="text/javascript" src="entry.js"></script>
```

![Async]

- **`defer`** keyword in a script will make it so the script executes only after page has been loaded

```html
<script defer type="text/javascript" src="entry.js"></script>
```

![Defer]

- For more information on how to efficiently get rid of render-blocking, check out this resource, [Google Developers Remove Render-Blocking JavaScript]

## Ways to prevent code from being executed until HTML page is loaded

1. `window.onload`

- function set to `window.onload` will be called when the HTML, CSS, images and everything is loaded

```javascript
window.onload = () => {
  console.log('this is printed only after all the HTML elements are displayed');
};
```

2. `DOMContentLoaded` event listener

- will execute code in the callback function to the `eventListener` on `DOMContentLoaded` or when all the HTML elements, or the document has been loaded (doesn't wait for CSS or images)

```javascript
window.addEventListener('DOMContentLoaded', () => {
  console.log('this is printed only after all the HTML elements are displayed');
});
```

3. Adding a script tag after the `body` of a page

```html
<!DOCTYPE html>
<html lang="en">
  <head>
  </head>
  <body>
  </body>
  <script>
    console.log('this is printed only after all the HTML elements are displayed');
  </script>
</html>
```

4. `defer` keyword in a `script` tag

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <script defer type="text/javascript" src="entry.js"></script>
  </head>
  <body>
  </body>
</html>
```

## Cookies

- a way to store data in a form of key-value pairs in our frontend
- one way to persist data throughout multiple user sessions
- we usually store user session information or any information that we don't want to store in a database but would be helpful to us on the frontend
  - ex. Shopping cart, forms saving inputs
- can see cookies stored in your browser by the website you are on by accessing the `Application` tab in your Chrome Dev Tools
  - can delete the cookies in the `Application` tab and refresh to see changes when those cookies are deleted

## Learning Objectives

1. Explain the difference between the BOM (browser object model) and the DOM(document object model).
2. Given a diagram of all the different parts of the Browser identify each part. Use the Window API to change the innerHeight of a user's window.
3. Identify the context of an anonymous functions running in the Browser (the window).
4. Given a JS file and an HTML file, use a script tag to import the JS file and execute the code therein when all the elements on the page load (using DOMContentLoaded)
5. Given a JS file and an HTML file, use a script tag to import the JS file and execute the code therein when the page loads
6. Identify three ways to prevent JS code from executing until an entire HTML page is loaded
7. Label a diagram on the Request/Response cycle.
8. Explain the Browser's main role in the request/response cycle. (1.Parsing HTML,CSS, JS 2. Rendering that information to the user by constructing a DOM tree and rendering it)
9. Given several detractors - identify which real-world situations could be implemented with the Web Storage API (shopping cart, forms saving inputs etc.)
10. Given a website to visit that depends on cookies (like Amazon), students should be able to go to that site add something to their cart and then delete that cookie using the Chrome Developer tools in order to empty their cart.

[Browser Layers]: ./browser_layers.png
[Request/Response Cycle]: ./request_response_cycle.png
[No Async or Defer]: ./no_async_defer.png
[Async]: ./async.png
[Defer]: ./defer.png
[Google Developers Remove Render-Blocking JavaScript]: https://developers.google.com/speed/docs/insights/BlockingJS