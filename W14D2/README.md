# JSX - JavaScript eXtension

- looks very similar to HTML
- translates simple looking HTML syntax to `React.createElement`

| Conversion type	| JSX	                    | JavaScript                                        |
|-----------------|-------------------------|---------------------------------------------------|
| tags            | `<h1></h1> `            |	`React.createElement('h1', null)`                 |
| attributes      | `<img src="foo.png"/>`	| `React.createElement('img', { src: "foo.png" })`  |
| variables	      | `<h1>{message}</h1>`    | `React.createElement('h1', null, message)`        |

- MUST self-close tags

| HTML      | self-closing tag	JSX equivalent |
|-----------|----------------------------------|
| `<br>`    | `<br />`                         |
| `<hr>`    | `<hr />`                         |
| `<img>`	  | `<img />`                        |
| `<input>`	| `<input />`                      |
| `<link>`  | `<link />`                       |

## Function Component

- A function that returns a JSX element

```js
import React from 'react';

const PostList = (props) => {
  return (
    <ul>
      {props.posts.map(post => (
        <li key={post.id}>
          {post.body} by: {post.user}
        </li>
      ))}
    </ul>
  )
};
```

## Babel

- A transpiler that converts modern JavaScript into old version of JavaScript
  that most browsers can understand

## Create React App

- Creates boilerplate React project
- Includes Babel
- Will be using this to create React projects from now on
- Can see error messages on the browser in development mode
- Includes Webpack - a module builder to bundle JavaScript files for the browser

Install `create-react-app` globally (if you don't have it already):

```
npm install -g create-react-app
``` 

Make a boilerplate React project with `create-react-app`:

```
npx create-react-app <project folder name>
```

Use App Academy's simple template for `create-react-app`:

```
npx create-react-app <project folder name> --template @appacademy/simple
```

## JSX files

- Use ES6 import/export syntax
- Always need to import React at the top of the file
- When importing other JavaScript files, no need to add the file extension

```js
import React from 'react';
import App from './App'; // import from `./App.js`
```

## JSX Lecture

[JSX Lecure Code]

## JSX Walkthrough

[JSX Walkthrough Code]

Part 1
- Remove unnecessary boilerplate code that comes with `create-react-app`

Part 2
- Navigation component

Part 3
- PetDetails components

Part 4
- OwnersList components

[JSX Walkthrough Solutions]

[JSX Walkthrough Code]: ./jsx-solutions
[JSX Walkthrough Solutions]: ./jsx-solutions.zip
[JSX Lecure Code]: ./jsx-lecture