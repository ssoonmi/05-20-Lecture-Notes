# JSON and `localStorage`

- **serialize** - converting data into a string (or some other kind of value like "binary") so your program can send it to another computer

- **deserialize** - converting text (or something another computer has sent to your program) and turn it into data

- `JSON.stringify(value)` will turn the value passed into it into a string.
- `JSON.parse(str)` will turn a JSON-formatted string into a JavaScript object.

- **Web Storage API** - has a much larger storage limit than cookies, making it a useful place to store data on the client side

- `sessionStorage` - persists for the duration of the session and ends when a user closes the browser

- `localStorage` - persists past the current session and has no expiration date
  - `localStorage.setItem('key', value)`
  - `const value = localStorage.getItem('key')`

## JSON Learning Objectives

The objective of this lesson is to familiarize you with the JSON format and how to serialize to and deserialize from that format.

The learning objectives for this lesson are that you can:

1. Identify and generate valid JSON-formatted strings
2. Use `JSON.parse` to deserialize JSON-formatted strings
3. Use `JSON.stringify` to serialize JavaScript objects
4. Correctly identify the definition of "deserialize"
5. Correctly identify the definition of "serialize"

This lesson is relevant because JSON is the lingua franca of data interchange.

[JSON Demo]

## `localStorage` Learning Objectives

Below is a complete list of the terminal learning objectives for this lesson. When you complete this lesson, you should be able to perform each of the following objectives. These objectives capture how you may be evaluated on the assessment for this lesson.

1. Write JavaScript to store the value "I <3 falafel" with the key "eatz" in the browser's local storage.
2. Write JavaScript to read the value stored in local storage for the key "paper-trail".

[`localStorage` Demo]

[JSON Demo]: ./json_demo.js
[`localStorage` Demo]: ./localStorage_demo.js