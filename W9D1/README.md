# Intro to CSS

## Linking Stylesheets in HTML

Use the `<link>` tag:

```html
<html>
  <head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css">
    <link rel="stylesheet" href="/styles/site.css">
    <link rel="stylesheet" href="in-same-folder.css">
  </head>
  <body>
  </body>
</html>
```

Absolute path to another website's CSS: 

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css">
```

Relative path to your website url. ex: to access a CSS file on your localhost server at `http://localhost:3000/styles/site.css`:

```html
<link rel="stylesheet" href="/styles/site.css">
<link rel="stylesheet" href="in-same-folder.css">
```

## Importing CSS in CSS Files

Absolute path imports:
```css
@import url('https://fonts.googleapis.com/css2?family=Liu+Jian+Mao+Cao&display=swap');
```

Relative path imports:
```css
@import url('./styles/site.css');
@import "in-same-folder.css";
```

## CSS Selectors

- **Type selectors** -- matches elements by node name (e.g. `div`, `li`, `a`, `p`)
```css
div {
  background-color: red;
}
```

- **Class selectors** -- matches elements by class name (e.g. `<button class=“active”>`)
```css
.active {
  background-color: red;
}
```

To select a `button` with class of `active`:
```css
button.active {
  background-color: blue;
}
```

- **ID selectors** -- matches elements by ID name (e.g. `<div id=”list-1”>`)
```css
#list-1 {
  background-color: red;
}
```

- **Universal selectors** -- matches elements of any type (e.g. *)

To turn all elements `background-color: red`:
```css
* {
  background-color: red;
}
```

- **Attribute selectors** -- matches elements based on the presence or value of a given attribute (e.g. a `[title]` matches all a elements with a title attribute)

To select all elements with a `title` attribute:
```css
[title] {
  background-color: red;
}
```
> The title attribute specifies extra information about an element. The information is most often shown as a tooltip text when the mouse moves over the element.

To select all `input` tags with the `type` attribute of `submit`, `<input type="submit">`:
```css
input[type="submit"] {
  background-color: red;
}
```


## Compound `class` selectors
```html
<div class="box yellow"></div>
<div class="box orange"></div>
<div class="circle orange"></div>
```

Select the `div` with classes of `box` and `yellow`:
```css
.box.yellow {
  background-color: yellow;
}
```

This **will NOT** select the `div` with classes of `box` and `yellow` because there is a space between the class names:
```css
.box .yellow {
  background-color: yellow;
}
```

## One rule for many selectors

Separate selectors with a comma, `,`, to make a single rule for all selectors:

Make `h1`, `h2`, `h3`, `h4`, `h5`, `h6` all have `font-size: 14px;`:
```css
h1, h2, h3, h4, h5, h6 {
  font-size: 14px;
}
```

## Combinators

- **Descendant selectors** - represented by two selectors with just **white space in between them** (syntax: A(spaces, tabs, line breaks)B). This will select any element (B) that is a descendant of the first element (A).

To select all `<abbr>` descendants of `<p>`:
```css
p abbr {
  text-transform: uppercase;
}
```

Will select all the following `<abbr>` tags:
```html
<p>
  <abbr></abbr>
  <div>
    <abbr></abbr>
    <div>
      <abbr></abbr>
    </div>
  </div>
</p>
```

- **Adjacent sibling selectors** - The `+` selector selects adjacent siblings (syntax: A + B). This means that the second element (B) **directly follows** the first (A), and both share the same parent.

```css
h1 + h2 {
  font-style: italic;
}
```

Will select `h2`:
```html
<body>
  <h1>
  </h1>
  <h2>
  </h2>
</body>
```

Will **not** select `h2`:
```html
<body>
  <h1>
  </h1>
  <div></div>
  <h2>
  </h2>
</body>
```

- **Direct child selector** - The `> `selector selects nodes that are **direct children** of the first element (syntax: A > B). It will match every element B that is **immediately neste**d inside an element A. This is different than the descendant selector because it selects only the direct children of an element.

```css
.menu > .is-active {
  background-color: #ffe0b2;
}
```

Will select `<div class="is-active">`:
```html
<body>
  <div class="menu">
    <div class="is-active">
      Belka
    </div>
  </div>
</body>
```

Will **NOT** select `<div class="is-active">`:
```html
<body>
  <div class="menu">
    <div>
      <div class="is-active">
        Strelka
      </div>
    </div>
  </div>
</body>
```

## Pseudo-classes Selectors

Some examples of Pseudo-classes:
- **active**: applies to elements like buttons when activated by a person, like when they "push down" on the button
- **checked**: applies to radio inputs, checkbox inputs, and options in drop downs when the user has toggled it into an "on" state
- **disabled**: applies to any disabled element, like a disabled button or input
- **first-child**: applies to the first element among a group of sibling elements
- **focus**: applies to elements that have the current focus, like inputs and buttons
- **hover**: applies to elements that currently have the pointing device (cursor) directly over it (it is problematic on touchscreens because it may never match the element because there is no persistent pointing device)
- **invalid**: applies to any form element in an invalid state due to client-side form validation
- **last-child**: applies to the last element among a group of sibling elements
not(selector): represents elements that do not match the provided selector
- **required**: applies to form elements that are required
- **valid**: applies to any form element in a valid state
- **visited**: applies to anchor tags of which the user has already been to the URL that the href points to

To select `<a>` on `hover` pseudo-selector: 
```css
a:hover {
  background-color: red;
}
```

To select `<a>` on `hover` of a `<button>` parent:

```css
button:hover a {
  background-color: red;
}
```

```html
<body>
  <button>
    <a></a>
  </button>
</body>
```

## Pseudo-selectors

The two that you will use most often are the `::after` and the `::before` pseudo-selectors. Both of them create a pseudo-element as a child of the element to which the property applies. 

Pseudo-selector example:
```html
<body>
  <main>
  </main>
</body>
```

```css
main::after {
  background-color: red;
  height: 30px;
  width: 30px;
}
```

The same as: 
```html
<body>
  <main>
  </main>
  <div class="after">
  </div>
</body>
```

```css
main + .after {
  background-color: red;
  height: 30px;
  width: 30px;
}
```

## CSS Properties
- `font-family` - can use built-in font families or imported font families like [Google Fonts]
  - `font-family: 'Times New Roman', sans-serif;` - if `Times New Roman` does not exist or load properly, default to `sans-serif`
- `font-size` - can be expressed with different unit sizes like `px`, `em`, or `rem`
  - `em` is relative `font-size` to its parent, `font-size: 1.4em;` is 1.4 times the font-size of its parent
  - `rem` is relative `font-size` to the root `html` element, `font-size: 2rem;` is 2 times the font-size of the root element, `html` tag
- `font-style` - for italicizing, `font-style: italic;`
- `font-weight` - for different units of boldness, `font-weight: 700;` or `font-weight: bold;`
- `text-align` - for aligning text within an element, `center`, `right`, `left`
- `text-decoration` - for underlining, `text-decoration: underline;` or `text-decoration: none;`
- `text-transform` - for changing the case of the content, `capitalize`, `undercase`, `uppercase`

[Google Fonts]: https://fonts.google.com/