# AJAX - Asynchronous JavaScript and XML

- Asynchronous - interact with the server in the background without blocking any other events from happening on the web page.
- JavaScript - the engine behind AJAX
- XML - Response type used in the old days, now it's largely replaced by JSON

## AJAX Flow

**Pre-AJAX Flow** - refreshes the page whenever a request is made. Doesn't allow any user interaction while request is happening.

![Pre-AJAX Flow]

**AJAX Flow** - makes a request asynchronously and allows user interaction with other parts of the webpage while request is loading. **Doesn't cause a refresh**

![AJAX Flow]

- Improved User Experience
- Improved Application Performance
  - Lower Bandwidth
  - Decreased Network Requests
- More Complex

## [Example Project] - Categories

Uses this API: https://jservice.xyz/

## Cat Project API

### GET /kitten/image
Fetches an image from an external API, "https://api.thecatapi.com/v1/images/search?size=small", that returns information on a random cat image url.

```json
{
  "score": 0,
  "comments": [],
  "src": string (image url)
}
```

If it doesn't succeed, it returns an error message.

```json
{
  "message": string
}
```

### PATCH /kitten/upvote
Increments the score of the current kitten by 1 and returns the current score.

```json
{
  "score": number
}
```

### PATCH /kitten/downvote
Decrements the score of the current kitten by 1 and returns the current score.

```json
{
  "score": number
}
```

### POST /kitten/comments
Creates a new comment for the current kitten.

Send a comment.

```json
{ 
  "comment": string
}
```
    
Returns all the comments of the kitten in the order that they were created.

```json
{
  "comments": [ string ]
}
```

## Learning Objectives

- Explain what an AJAX request is
- Identifying the advantages of using an AJAX request.
- Identify what the acronym AJAX means and how it relates to modern Web programming
- Describe the different steps in an AJAX request/response cycle
- Fully use the fetch API to make dynamic Web pages without refreshing the page

[Pre-AJAX Flow]: ./pre-ajax.png
[AJAX Flow]: ./ajax.png
[Example Project]: ./example-project/README.md