In this assessment, you will create:

* A database user with a password
* A database owned by that user
* Some tables

Then, you will write a SQL file that will insert data into the tables.

Then, you will write a SQL file that contains a SQL statement that joins the
tables together.

There's an image in the "images" directory that shows the picture of the data
model.

There are mocha tests that determine if it can connect to the database with the
specified user name, password, and database name. Then, it checks the tables to
make sure that they have the structure specified.

Run the tests with "npm test".

# Step 1

Create a database user named "merchant_app" with the password "bhKx5P6V".
There is no file for this. Just do it for your local installation of PostgreSQL.
The tests assume that it exists.

# Step 2

Create a database named "merchant_development" with the owner "merchant_app".
There is no file for this. Just do it for your local installation of PostgreSQL.
The tests assume that it exists.

# Step 3

Create the following tables in the database. Write the CREATE TABLE statements
in the files that match the table name. For example, in the
"create-users-table.sql", write the CREATE TABLE statement for the "users"
table.

The tests will drop all of the tables run the table creation for you automatically.

Do these in order.

The "PK, NOT NULL" specification means it should be a primary key. The "FK" specification
means it should be a foreign key. All columns will be "NOT NULL".

* The "users" table
| Column name | Column type  | Constraints  |
|-------------|--------------|--------------|
| id          | SERIAL       | PK, NOT NULL |
| full_name   | VARCHAR(255) | NOT NULL     |
| created_at  | TIMESTAMP    | NOT NULL     |

* The "merchant_types" table

| Column name | Column type | Constraints  |
|-------------|-------------|--------------|
| id          | SERIAL      | PK, NOT NULL |
| type        | VARCHAR(20) | NOT NULL     |

* The "countries" table

| Column name    | Column type  | Constraints  |
|----------------|--------------|--------------|
| id             | SERIAL       | PK, NOT NULL |
| name           | VARCHAR(100) | NOT NULL     |
| continent_name | VARCHAR(20)  | NOT NULL     |

* The "merchants" table

| Column name      | Column type  | Constraints                |
|------------------|--------------|----------------------------|
| id               | SERIAL       | PK, NOT NULL               |
| merchant_name    | VARCHAR(255) | NOT NULL                   |
| country_id       | INTEGER      | FK, NOT NULL               |
| created_at       | TIMESTAMP    | NOT NULL                   |
| admin_id         | INTEGER      | FK (to users id), NOT NULL |
| merchant_type_id | INTEGER      | FK, NOT NULL               |

You can run just the table tests to make sure your CREATEs are correct.

  npm test -- -g "when created"

# Step 4

Create INSERT statements for the four tables in each of the four files provided
for you. Here is the data that you should include. Don't insert more data than
what is here. Otherwise, the tests in the next section will fail.

* The "users" table

This is not going to be tested. The SQL that you write will. You'll need this
data for your SQL statements to work correctly.

| full_name              | created_at        |
|------------------------|-------------------|
| 'Zaphod Beeblebrox'    | CURRENT_TIMESTAMP |
| 'Blart Versenwald III' | CURRENT_TIMESTAMP |


* The "merchant_types" table

| type        |
|-------------|
| 'Retail'    |
| 'Wholesale' |

* The "countries" table

| name     | continent_name  |
|----------|-----------------|
| 'Brazil' | 'South America' |
| 'China'  | 'Asia'          |
| 'USA'    | 'North America' |

* The "merchants" table

In this section, the foreign keys are not specified by numbers. They show, in
parentheses, the unique value from a row in the seed data, above. Depending on
how you insert them, they may have different ids. Figure out what the id will be
for it and put that in your SQL INSERT statement for "merchants".

For example, if you insert "Brazil" first in your insert-countries-data.sql
file, then you will use 1 as the country_id for (Brazil) below.

The tests will drop and recreate the tables on each test, so the values should
be stable.

| merchant_name           | country_id | created_at        | admin_id | merchant_type_id |
|-------------------------|------------|-------------------|----------|------------------|
| 'Zingo'                 | (Brazil)   | CURRENT_TIMESTAMP | (Zaphod) | (Retail)         |
| 'Widgets International' | (China)    | CURRENT_TIMESTAMP | (Blart)  | (Wholesale)      |
| 'Snglrify'              | (USA)      | CURRENT_TIMESTAMP | (Zaphod) | (Retail)         |
| 'Better Products 4 U'   | (USA)      | CURRENT_TIMESTAMP | (Zaphod) | (Wholesale)      |

* Step 5

Write a SQL statement in joined-data-query.sql that returns the following data
by JOINing the tables:

* users.full_name
* merchant_types.type
* countries.name
* merchants.merchant_name

Order the records on the merchant_name column.

The result should look like this.

| full_name            | type      | name   | merchant_name         |
|----------------------|-----------|--------|-----------------------|
| Zaphod Beeblebrox    | Wholesale | USA    | Better Products 4 U   |
| Zaphod Beeblebrox    | Retail    | USA    | Snglrify              |
| Blart Versenwald III | Wholesale | China  | Widgets International |
| Zaphod Beeblebrox    | Retail    | Brazil | Zingo                 |

npm test