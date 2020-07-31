# Filled In Learning Objectives

## Regular Expressions

- Define the effect of the * operator and use it in a regular expression
- Define the effect of the ? operator and use it in a regular expression
- Define the effect of the + operator and use it in a regular expression
- Define the effect of the . operator and use it in a regular expression
- Define the effect of the ^ operator and use it in a regular expression
- Define the effect of the $ operator and use it in a regular expression
- Define the effect of the [] bracket expression and use it in a regular expression
- Define the effect of the - inside brackets and use it in a regular expression
- Define the effect of the ^ inside brackets and use it in a regular expression
    - See [RegExp Cheat Sheet](../W11D1/reg-ex.md)
    - See [RegExp Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

## HTTP

- Identify the five parts of a URL
    - See Monday's Practices URLs Reading
    ```
    foo://example.com:8042/over/there?name=ferret#nose

    scheme://authority/path?query#fragment
    ```
    - scheme and authority are **required**

## Pug

- Declare HTML tags and their associated ids, classes, attributes, and content
    - ```
      tag(attribute1="value" attribute2=variable) Literal String
      ```

## Express Routing

- Define routes with parameters and with regular expressions
    - See [Monday lecture videos](https://open.appacademy.io/learn/js-py---may-2020-online/week-11-may-2020-online/exploring-route-paths---part-2)
    - Parameters Ex: parameter of `id` 
      ```js
      app.get('/blogs/:id/comments', ...);
      ```
          will match routes like:
          - `GET /blogs/2/comments`
          - `GET /blogs/232434/comments`
          - `GET /blogs/hello/comments`
    - Regular Expressions Ex: only word characters in parameters
      ```js
      app.get('/blogs/\\w+/comments', ...);
      ```
          will match routes like:
          - `GET /blogs/hello/comments`
          - `GET /blogs/e/comments`
          but not routes like:
          - `GET /blogs/2/comments`
          - `GET /blogs/232434/comments`
          - `GET /blogs//comments`

## Format of the Assessment

- ~5 MC's
- Express Project - expected to be 2 hours and 30 minutes
- 2 hours and 40 minutes long