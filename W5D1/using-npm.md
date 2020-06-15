`npm --version` or `npm -v` - check what npm version you are using

`npm install -g npm@latest` - install the latest version of npm globally

`npm init` - create a `package.json` file
  - answer the questions to fill out some of the fields in the `package.json` file
  - do `npm init --y` to skip the questions

`npm install package-name` - installs a package with that package name
  - try `npm install colors`
  - check out what happened in the `package.json` file and the `node_modules` folder

`.gitignore` the `node_modules` folder

`npm uninstall package-name` - uninstalls a package with that package name
  - try installing `lodash`
  - try uninstalling `lodash`
  - see what happens in your `package.json` and your `node_modules` folder

`npm install lodash@3.0.0` - installs the lodash package with version 3.0.0

`npm update lodash` will update the lodash package to the latest version

`npm update` will update all dependencies

can reinstall a dependency with a specific version using `npm install`
  - try `npm install lodash@3.10.0`
  - then reinstall it with 4.0.0: `npm install lodash@4.0.0`

`npm audit` will display vulnerabilities in dependencies based on severity level (Low-Moderate-High-Critical)

`npm audit fix` will update the package to a minor patch version if available

`npm audit fix --force` if the fix requires an upgrade to a major patch version, it will
  - updating your code to a new major version may break some parts of your application! Make sure you want to do this before continuing

## Defining Scripts
```json
{
  "scripts": {
    "start": "node index.js",
    "watch": "nodemon index.js",
    "test": "mocha --watch"
  }
}
```

to run `start` or `test` scripts:
- `npm start`
- `npm test`

to run any custom scripts (i.e. `watch`):
- `npm run watch`