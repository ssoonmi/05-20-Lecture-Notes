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

## Learning Objectives

- Explain what an AJAX request is
- Identifying the advantages of using an AJAX request.
- Identify what the acronym AJAX means and how it relates to modern Web programming
- Describe the different steps in an AJAX request/response cycle
- Fully use the fetch API to make dynamic Web pages without refreshing the page

[Pre-AJAX Flow]: ./pre-ajax.png
[AJAX Flow]: ./ajax.png
[Example Project]: ./example-project/README.md