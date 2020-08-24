# Environment Variables

Environment variables are used to configure our application with different
settings or store information that should not be publicly available, like an 
API key.

- [How to Set Environment Variables](#how-to-set-environment-variables)
    - [Method 1: Via the Command Line](#method-1:-via-the-command-line)
    - [Method 2: Load from a `.env` file](#method-2:-load-from-a-.env-file)
        - [1st way to use `dotenv`: In App](#1st-way-to-use-dotenv:-in-app)
        - [2nd way to use `dotenv`: Preload](#2nd-way-to-use-dotenv:-preload)
- [How to Use Environment Variables and Define Default Values For Them](#how-to-use-environment-variables-and-define-default-values-for-them)
- [How to use `dotenv` for npm runners like Sequelize CLI](#how-to-use-dotenv-for-npm-runners-like-sequelize-cli)
- [Execute an npm script dynamically with `NODE_ENV`](#execute-an-npm-script-dynamically-with-node-env)
    - [Usage with Method 1](#usage-with-method-1)
    - [Usage with Method 2 (Preload only, not recommended)](#usage-with-method-2-preload-only-not-recommended)

## How to Set Environment Variables

### Method 1: Via the Command Line

Specify the `{environment variable}={value}` before an execution of a command.

```
PORT=8080 NODE_ENV=production node app.js
```

Can also put it in the `package.json` scripts:

```json
{
  "scripts": {
    "start": "PORT=8080 NODE_ENV=production node app.js"
  }
}
```

#### Accessing the Environment Variables

Inside app.js, you can access environment variable by:

```javascript
// app.js
process.env.NODE_ENV; // 'production'
const port = process.env.PORT; // 8080
app.listen(port, () => console.log('Server is listening on port', port));
```

- **NOTE:** `NODE_ENV` is a special environment variable determined by many node
  modules to determine what environment the app is running in
    - Commonly recognized values:
        - `production`
        - `development` (default)
        - `test`

### Method 2: Load from a `.env` file

Express does not have a built-in way to read `.env` files and make environment
variables out of them. 

A `.env` file just holds key-value pairs and typically looks like this:

```env
NODE_ENV=production
PORT=3000
API_KEY=sdi34gji433jgho
SECRET_KEY=secretKey!!!!
KEY=value
```

The `dotenv` npm package can be used to set environment variables for our node
applications with `.env` files.

```
npm install dotenv --save-dev
```

OR

```
npm install -D dotenv
```

**First, add the `.env` file to your `.gitignore`.** (Take a look at 
`.env.example` file to see how your `.env` should look like.) 

Next, create the `.env` file at the root of your application.

#### 1st way to use `dotenv`: In App

Load the environment variables using `dotenv` on application startup.

Configure before you initialize your Express application and your database.

```javascript
// app.js
const express = require('express');

// Load the environment variables from the .env file
require('dotenv').config();
// require('dotenv').config({ path: path.resolve(process.cwd(), '.env.prod') }); // optional setting of `path` 

// ...
```

#### 2nd way to use `dotenv`: Preload

Require the `dotenv` module to load the environment varaibles before your app
starts.

```
node -r dotenv/config app.js
```

OR, to specify the file name and path of the `.env` file you want to use:

```
node -r dotenv/config app.js dotenv_config_path=/custom/path/to/.env
```

`-r` flag on `node` command is short for `--require` which requires a
{module-name}/{function} to be run before running `app.js` (in this case, 
run the function `config` from the `dotenv` node module)

You can also put it as a script in your `package.json`:

```json
{
  "scripts": {
    "start": "node -r dotenv/config app.js"
  }
}
```

## How to Use Environment Variables and Define Default Values For Them

In a JavaScript file, export an object with environment variable names as keys
and the value of the environment variable itself separated by `||` and a default
value (no need for `||` if no default value needs to be specified):

Ex: In a `config.js` file at the root of your application, export the following
object. Default `environment` is `'development'` and default `port` is `8080`.

```javascript
// config.js
module.exports = {
  environment: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 8080,
  db: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
  },
};
```

To use it, you can import the object into any of your application files:

```js
// app.js
// ...
const { port, environment, db } = require('./config);
// ...
app.listen(port, () => console.log('Server is listening on port', port));
```

## How to use `dotenv` for npm runners like Sequelize CLI

`npx` is the command to run `npm` packages (`npm` is the package manager itself).

npm runners are packages that usually are run outside of your application, like
Sequelize CLI.

You can define environment variables from a `dotenv` file in npm runners by
installing an npm package called `dotenv-cli` 

```
npm install dotenv-cli --save-dev
```

To use it, add `dotenv` after `npx` and before the npm package CLI:

```
npx dotenv sequelize-cli db:migrate
```

Now when Sequelize executes, it will be running with the `.env` file configuration.

## Execute an npm script dynamically with `NODE_ENV`

**ONLY RECOMMENDED TO USE FOR METHOD 1**

How you start your application usually depends on if you are running it in 
development, production, test, etc. In Node.js, this environment is determined
by the environment variable, `NODE_ENV`.

Instead of running different npm scripts for every type of environment, you can
run a single script that will dynamically run different commands depending on 
your `NODE_ENV` variable.

To do this, you need to install the `per-env` package:

```
npm install per-env
```

Then in your npm scripts in your `package.json`, you can dynamically set what
`npm start` will run depending on what `NODE_ENV` by creating a script name with
`"start:{value of the NODE_ENV}"` and your `"start"` script should be set to
`"per-env"`:

```json
{
  "scripts": {
    "start": "per-env",
    "start:development": "nodemon app.js",
    "start:production": "node app.js",
  }
}
```

### Usage with Method 1

Now, when you set the `NODE_ENV` variable to "development" before running 
`npm start`:

```
NODE_ENV=development npm start
```

It will actually be running:

```
NODE_ENV=development nodemon app.js
```

### Usage with Method 2 (Preload only, not recommended)

**Not recommended since you should be using `dotenv-cli` in development only!!!**

Rewrite the dynamic script in `package.json` to include `dotenv` before `pre-env`:

```json
{
  "scripts": {
    "start": "dotenv per-env",
    "start:development": "nodemon app.js",
    "start:production": "node app.js",
  }
}
```