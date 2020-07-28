# Pug CheatSheet

- indentation is important
- indendation indicates start of children elements
- tags can be created using CSS class name and id name declaration
    - eg: 
      Pug
      ```pug
      div.red#container
      ```
      HTML
      ```html
      <div class="red" id="container"><div>
      ```
- `tag text` - space between tag name and text will show that text as the
  content of that tag
    - eg:
      Pug
      ```pug
      div hello there!
      ```
      HTML
      ```html
      <div>hello there!<div>
      ```
    - if there is a `#{variable}` in the text, it will interpolate the value
      of that variable in the text
        - eg: if variable `friend='Fido'`
          Pug
          ```pug
          div hello there #{friend}!
          ```
          HTML
          ```html
          <div>hello there Fido!<div>
          ```
- `tag= text` - equals and a space between tag name and text will look for a
  variable name with that text and interpolate the value of that variable as the
  content of that tag
    - eg: if variable `text='Hello World!'`
      Pug
      ```pug
      div= text
      ```
      HTML
      ```html
      <div>Hello World!<div>
      ```
- `tag: anotherTag` (colon and a space) between one tag and another will make 
  the second tag a child of the first
    - eg: 
      Pug
      ```pug
      ul: li List Item
      ```
      HTML
      ```html
      <ul>
        <li>List Item</li>
      </ul
      ```
- `tag(attribute1=value1 attribute2='text')` - a tag followed by parentheses
  surrounding attribute-value pairs will be attributes set on the HTML tag 
    - eg: if variable `type="text"`
      Pug
      ```pug
      input(type=type class='form-inputs' name='email' disabled)
      input(type=type class='form-inputs' name='username' disabled=false)
      ```
      HTML
      ```html
      <input type="text" class="form-inputs" name="email" disabled/>
      <input type="text" class="form-inputs" name="username" />
      ```

## Variable Usage

- variables can be passed into a `pug` template using Express

```javascript
res.render('template-name', { title: 'Hello World!', productUrl: '/products' });
```

`template-name.pug` with the above variables:

```pug
html
  head
    title= title
  body
    h1 Template Name
    ul
      li: a(href="/products") Go To #{productUrl}
```

Will return HTML string that looks like:

```html
<html>
  <head>
    <title>Hello World!</title>
  </head>
  <body>
    <h1>Template Name</h1>
    <ul>
      <li>
        <a href="/products">Go To /products</a>
      </li>
    </ul>
  </body>
</html>
```