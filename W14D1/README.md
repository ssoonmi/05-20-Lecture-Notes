# Intro to React

Easy Links:

- [React.createElement Demo]
- [React.createElement Examples]
- [React.createElement Practice Problems]
- [React.createElement Practice Solutions]

## Why React?

React was created by Facebook to create dynamic webpages using JavaScript that
had individual components that could re-render or update if and only if they
needed to be updated. The entire webpage didn't need to be updated if only a
single component needed a small change.

In the following image, Facebook's website is separated into components by
functionality. Each component controls it's own information without really
having to rely on the other components on the webpage.

![Facebook Image]

It's costly to re-render the entire Facebook's website for the purpose of
entering text into the text field of the post form. Facebook came up with a way
to only re-render the text field in the form without re-rendering all the other
components on the page.

## `React.createElement`

`React.createElement` makes a virtual DOM element that React will use to create
an actual DOM element and updates the actual DOM only if it needs to.

`React.createElement` syntax:

```js
React.createElement(
  type,
  [props],
  [...children]
);
```

- `type` can be a string of the tag name, or a function that returns a React
  element
- `props` should be in an object (property names are camelCase)
- To put a `class` property on an element, use `className` instead of `class`
- Any arguments passed in after the second will be considered child elements

[React.createElement Demo]

### Practice

[React.createElement Examples]

Example 1:

```html
<h1>Hello Programmers!</h1>
```

```js
const h1 = React.createElement(
  'h1',
  null,
  'Hello Programmers!'
);
```

Example 2:

```html
<ul class="left-nav">
  <li>Home</li>
  <li>Contacts</li>
</ul>
```

```js
const home = React.createElement('li', null, 'Home');
const contacts = React.createElement('li', null, 'Contacts');
const ul = React.createElement(
  'ul',
  { className: 'left-nav' },
  home,
  contacts
);
```

Example 3:

```html
<ul class="post-list">
  <li class="post">
    <div>
      <div>Title 1</div>
      <div>Body 1</div>
    </div>
  </li>
  <li class="post">
    <div>
      <div>Title 2</div>
      <div>Body 2</div>
    </div>
  </li>
  <li class="post">
    <div>
      <div>Title 2</div>
      <div>Body 2</div>
    </div>
  </li>
</ul>
```

```js
const post = (props) => {
  const { title, body } = props;
  return React.creatElement(
    'li',
    { className: "post" },
    React.createElement(
      'div',
      null,
      React.createElement('div', null, title),
      React.createElement('div', null, body)
    )
  );
}

const posts = [
  { title: 'Title 1', body: 'Body 1' },
  { title: 'Title 2', body: 'Body 2' },
  { title: 'Title 3', body: 'Body 3' },
].map((props) => React.createElement(post, props));

const postList = React.createElement(
  'ul',
  { className: 'post-list' },
  ...posts
);
```

[React.createElement Practice Problems]

[React.createElement Practice Solutions]

[Facebook Image]: ./facebook.jpeg
[React.createElement Demo]: ./createElement
[React.createElement Examples]: ./example.js
[React.createElement Practice Problems]: ./practice.js
[React.createElement Practice Solutions]: ./solution.js