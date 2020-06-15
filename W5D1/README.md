# Packages

## Built-in Node Packages

To know what we have access to with built-in node packages, we need to know what node version our environment is running in:
- `node --version`
- take a look at the docs: [NodeJS Docs]

- `fs` (file system) - reading and writing files
- `path` - manipulating file paths
- `readline` - reading data from somewhere else (like a file) line-by-line

### Objects of Interest
- `console` - the console object
- `process` - the object representing the running program

For more information about these packages, see here: [Built-in Node Packages]. **You will not be tested on this information for the assessment!!**

## Intro to `npm`

What is `npm`?
- `npm` is a package manager that allows us to use bundled code written by other people and available on the npm online registry
- it's also a `cli` (command line) tool that we can use to interact with the npm online registry

`root` application folder
- contains all your app's files
- includes npm requirements

`package.json` file
- exists at the top of the `root` application folder
- contains metadata - info about the project
- contains scripts - commonly used commands in the project)
- contains dependencies - other packages and their versions that your project relies on
- safe to edit but be careful of using `json` syntax!

`package-lock.json` file
- exists at the top of the `root` application folder
- contains exact details about installed dependencies and their versions
- represents an exact reproducible npm environment
- **do not edit!**

`node_modules` folder
- includes subdirectories for each dependencies
- also includes dependencies of dependencies! Every package you need should be here
- Don't include in git version control system **make sure to .gitignore this folder** 

## `npm` Commands

- `npm` will show npm's help info, including some common commands and how to access more detailed guides.

- `npm init` will set your current project directory up for npm. This requires answering a few questions to generate a `package.json` file, a critical part of npm's dependency management functionality. (`npm init --y` will skip those questions and make a generic `package.json` for you.)

- `npm install` will download and install a package into your project. You can use the `-g` (or `--global`) flag to install a package for use everywhere on your system. 
  - To have some fun, run `npm install -g cowsay`. Once the download's completed, try running `cowsay Hello, world!`.

## How `npm` installs packages

1. You request the package with `npm install {PACKAGE NAME HERE}`.
2. The npm CLI tool updates your `package.json` file to include the package as a dependency and requests the package from the npm registry.
3. npm downloads the package and installs it to the `node_modules `folder in your current directory (one will be created if it's not already there). It chooses the most recent version by default.
4. npm creates a `package-lock.json` file that includes where the installed package is located and exactly which version was used.
5. You're all set! You can now `require('your-package-name-here');` anywhere in your project.

## `.gitignore`

A `.gitignore` file allows us to tell `git` which files and directories to never include in our working directory and to never commit to our git logs.

The `node_modules` folder created by `npm install` contains massive amounts of files that we don't want to be committing and tracking.
- `npm` is a version-controlled package manager already so we don't need to track changes to the code in the `node_modules` folder.
- We only need to commit the versions of the packages we are using specified in the `package.json` and the `package-lock.json` files.

## `npm` Lesson Learning Objectives

1. Explain what "npm" stands for.
2. Explain the purpose of the package.json file and node_modules directory.
3. Given multiple choices, identify the difference between npm's package.json and package-lock.json files.
4. Use npm --version to check what version is currently installed and use npm to update itself to the latest version.
5. Use npm init to create a new package and npm install to add a package as a dependency. Then use require to import the module and utilize it in a JavaScript file.
7. Explain the difference between a dependency and a development dependency.
8. Given an existing GitHub repository, clone the repo and use npm to install it's dependencies.

[NodeJS Docs]: https://nodejs.org/en/docs/
[Built-in Node Packages]: ./built-in-node-packages.md