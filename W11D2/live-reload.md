# Live Reload Instructions

Allows you to refresh the browser every time your server is restarted using
`nodemon`.

## Setup

Install `livereload` npm package globally ([`livereload` docs]):

`npm install -g livereload`

Install the [LiveReload++ Chrome Extension]

Configure the Extension to only be live reloading for `localhost` routes:

- Under `Site access` in the `LiveReload++` Extenstion options, select 
  `On specific sites`
- Type in `http://localhost`

## Usage

- Have `nodemon` running in a separate terminal
- To trigger a reload on changes to a specific folder, `cd` into that folder in
  a different terminal than nodemon
- Start `livereload` in that folder: `livereload . -w 100` (delay of 100ms,
  might need to increase this depending on how fast `nodemon` is for you)
    - additional configurations: [`livereload` docs]
- Anytime you save any files in that folder and `nodemon` successfully restarts
  the server, your webpage will automatically refresh

[`livereload` docs]: https://www.npmjs.com/package/livereload#method-1-using-the-command-line-interface
[LiveReload++ Chrome Extension]: https://chrome.google.com/webstore/detail/livereload%20%20/ciehpookapcdlakedibajeccomagbfab