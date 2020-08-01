# Express Application Practice Assessment

**Note:** To read this in a rendered view, open your VS Code Command Palatte
(using Control+Shift+P on Windows, Command+Shift+P on macOS) and choose
"Markdown: Open Preview" or "Markdown: Open Preview to Side".

In this assessment, you are asked to create an Express application. You will
create an Express application that

* Has a page that shows a list of pasta dishes
* Has a page that shows a list of pasta dishes by flavor profile
* Has a page to create a pasta dish
* Is protected from Cross-Site Request Forgeries

In the **images** directory, you will find

* A screenshot of the person listing page
* A screenshot of the person creation form

The screenshots show you what is expected from a _structure_ standpoint. They
are meant to be guides. The tests will _not_ make any assertions about the
styling of your pages, merely the structure of the pages and the data presented
on them.

Use the technologies you have used up to this point. They are all installed in
the **package.json** for your convenience.

* Express.js
* pg (the library to connect to PostgreSQL), Sequelize, and Sequelize CLI
* CSURF middleware
* Pug.js
* cookie-parser middleware
* body-parser middleware
* nodemon (for development purposes)

A **package.json** file already exists with the dependencies. Please run **`npm
install`** to install those before doing your development and running your tests.
Do not remove any dependencies already listed in the **package.json**.

## Running the application

You can run your application in "dev" mode. The **nodemon** package is installed
and runnable from `npm run dev`.

## Running the tests

This is "black-box testing". The tests will _only_ use your Express application.
It will not make connections to the database or directly test your route
handlers. They will merely make HTTP requests of your Express app and analyze
the responses.

To ease your development, tests will run against your **development** database
and _not_ the test database.

**You** will be responsible for creating, migrating, and seeding the data in
your development database.

Run your tests with `npm test`. You can run `npm test test/test-file-name.js`
to run the tests for a specific part of the assessment.
  * Example: To only run the test `01-form-page.js` do, 
    `npm test test/01-form-page.js`

If you get tired of seeing all of the Sequelize failures, you can try running:

```
npm test 2> /dev/null
``` 

That should redirect the annoying messages into oblivion but leave the
mocha output available for you to read. This may prevent you from seeing other
errors, though, so make sure to run it without the `2> /dev/null` if you're 
trying to get a test to pass and need to see error output.

## App Requirements

These are the requirements for the application. Follow them closely. The tests
will attempt to read data from your rendered HTML. 

Read all of the requirements. Determine the data needed to include in your data
model.

Please use port 8081 for your Express.js server.

### The database

Create a database user with `CREATEDB` priveleges:
* The login username that you must use is "express_practice_B_app"
* The login password that you must use is "password"

Initialize Sequelize in your assessment and replace the use your 
`config/config.json` file with the following configuration:

```json
{
  "development": {
    "username": "express_practice_b_app",
    "password": "password",
    "database": "express_practice_b_development",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "seederStorage": "sequelize",
    "logging": false
  }
}
```

Remove `logging: false` if you want to see SQL output in your terminal when 
running tests with `npm test`. 

Create the `development` database with those configurations.

For this assessment, the tests will be using your `development` database
configuration defined in the `config.json` file. **The tests will not be
testing your database explicitly, but test specs DO rely on you setting up the
database AND database constraints properly.** 

You will need to generate and run the migrations, models, and seeders. There is 
no need to run `npm test` until after doing this.

### The data model

You will need to store "pasta" data, "noodle" data, "sauce" data, and 
"flavor profile" data.

You can name the tables and columns however you want but there are certain
constraints on the columns:

A pasta dish should have:
- `label` - Text to label the dish but can only be restricted to 50 characters,
  required
- `description` - Text to describe the dish and can be any amount of characters
- `taste` - A taste "grade" that is a scale with a lowest value of 0, a highest
  value of 10, and can only support numbers like XX.X

A noodle should have:
- A name restricted to 30 characters, required
- A field for keeping track of if this noodle is stuffed or not (e.g. 
  raviolli), default is not stuffed, required

A sauce should have:
- A name restricted to 40 characters, required
- Text to describe the color of the sauce and restricted to 30 characters,
  required

A flavor profile should have:
- Text to describe the flavor (e.g. spicy) and restricted to 20 characters, 
  required

Relationships between the data:

* A pasta dish should have a noodle and a sauce.
* A noodle can be in many different pasta dishes.
* A sauce can be in many different pasta dishes.
* A sauce can have many different flavor profiles.
* A flavor profile can be used to define the taste of many different sauces.

**HINT:** The order in which the data is organized now may not be the order
you want to migrate the tables! Draw a SQL schema with relationships and
foreign keys to make sure you know what table should have what foreign keys
and how to structure your migrations!

Make seeds for the flavors, noodles, and sauces:

Create the following flavor profiles (can include more if you want):

| flavor profiles |
|-----------------|
| Spicy           |
| Savory          |
| Sweet           |
| Creamy          |
| Tangy           |

Create the following noodles (can include more if you want):

| name       | stuffed? |
|------------|----------|
| Linguini   | no       |
| Fettucini  | no       |
| Tortellini | yes      |
| Ravioli    | yes      |
| Udon       | no       |
| Ramen      | no       |

Create the following sauces (can include more if you want):

| name              | color | flavor profiles |
|-------------------|-------|-----------------|
| Alfredo           | white | creamy, savory  |
| Bolognese         | red   | savory          |
| Cheesy Bechamel   | white | creamy          |
| Garlic Soy        | brown | savory          |
| Brown Butter Sage | brown | sweet, creamy   |
| Red Chili Broth   | red   | spicy, savory   |

### Your main file

You must use the **app.js** file to create and configure your Express
application. You must store the instance of your Express.js application in a
variable named "app". That is what is exported at the bottom of the **app.js**
file.

Set up your CSRF middleware to use cookies.

### The route "GET /pasta/create"

This page shows a form in which a visitor can add a new pasta. The form must
have

* a method of "post"
* an action of "/pasta/create"

In the form, you should have these inputs with the provided name:

| Field HTML name | Field type       | Constraints | Default values                             |
|-----------------|------------------|-------------|--------------------------------------------|
| label           | single-line text | required    |                                            |
| description     | multi-line text  |             |                                            |
| taste           | number           |             |                                            |
| noodleId        | dropdown         | required    | One of the pre-defined noodles             |
| sauceId         | dropdown         | required    | One of the pre-defined sauces              |
| _csrf           | hidden           |             | The value provided by the CSURF middleware |

You should also have a submit button.

### The route "POST /pasta/create"

The post handler should validate the data from the HTTP request. If everything
is fine, then it should create a new person and redirect to the route "/".

Remember, all of the data constraints for this assessment can be handled by the
database with the `allowNull` and `unique` flags in your migrations. You **do
not** need to use form validations in this project. They are good to have, in
real applications, but can require too much time for you to integrate them into
this project. Again, you **do not** need to use a form validator, just use
database constraints and let the errors turn into 500 status codes by Express.

If the data does not pass validation, then no new record should be created. It
is ok to just let Express return an error code of 500 in this case. **Note**:
you would not do this in a real application.

### The route "GET /"

When someone accesses your application, they should see a list of pastas that
are stored in your database. The list should contain:

* The pasta's label
* The pasta's noodle
* The pasta's sauce
* The pasta's flavor profiles as a list - also links that that go to 
  `/flavor/:id` where `:id` is the id of the flavor profile
* The pasta's taste factor
* The pasta's description

To create a table in a Pug.js template, you'll use something like the following
code. You probably already know this, but it's included for your reference.

```pug
table
  thead
    tr
      th Header 1
      th Header 2
  tbody
    each thing in things
      tr
        td= thing.property1
        td= thing.property2
```

The tests will use a regular expression to determine if each piece of data is
wrapped with TD tags. For example, to test for the "Ramen"
value appearing in the HTML of the page, the tests would use the following
regular expression.

```
<td[^>]*>\s*Ramen\s*</td>
```

The regular expression will ignore any attributes that you put on the table data
tag as well as any white space around the entry for the data value.

Again, the styling is not important to the tests.

### The route "GET /flavor/:id"

This page shows a list of pastas for that flavor that are stored in your database. 
The list should contain a similar table of pastas to that on the "GET /" route.