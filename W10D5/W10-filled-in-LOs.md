# Learning Objectives

## RDBMS And Database Entity Objectives

- Define what a **relational database management system (RDBMS)** is 
    - the software application that manages databases for us.
- Describe what **relational database** is
    - a type of database that stores and provides access to data points that are related to one another
- Define what a **database** is
    - a collection of structured data
- Define what a database **table** is
    - defines how data is stored and contains that data
    - Naming convention: plural, snake_case, lowercased 
- Describe the purpose of a **primary key**
    - uniquely identify a row in the table
- Describe the purpose of a **foreign key**
    - a key used to link two tables together
    - a field (or collection of fields) in one table that refers to the PRIMARY KEY in another table
- Connect to a PostgresQL database with the command line tool `psql`
    - `psql <database_name>`, if no database name is specified, it will connect to the database of the current user in your bash/terminal
- Create a user for the relational database management system
    - Normal User
      ```SQL
      CREATE USER username WITH PASSWORD '<password>';
      ```
    - Create DB Access User
      ```SQL
      CREATE USER username WITH PASSWORD '<password>' CREATEDB;
      ```
    - Superuser
      ```SQL
      CREATE USER username WITH PASSWORD '<password>' SUPERUSER;
      ```

- Create a database in the database management system
    - ```SQL
      CREATE DATABASE database_name WITH OWNER username;
      ```
- Configure a database so that only the owner (and superusers) can connect to it
    - ```SQL
      REVOKE CONNECT ON database_name ON PUBLIC;
      ```
- View a list of databases in an installation of PostgreSQL
    - `\l` in psql command line
    - `psql -c "/l"`
- Create tables in a database
    - ```SQL
      CREATE TABLE puppies (
        name VARCHAR(50),
        age_yrs NUMERIC(3,1),
        breed VARCHAR(100),
        weight_lbs INTEGER,
        microchipped BOOLEAN
      );
      ```
- View a list of tables in a database
    - `\dt` in `psql` command line
- Identify and describe the common data types used in PostgreSQL
    - https://www.postgresql.org/docs/current/datatype.html
- Describe the purpose of the `UNIQUE` and `NOT NULL` constraints, and create columns in database tables that have them
    - `UNIQUE` constraint on a column for a specific table doesn't allow repeated values in that column.
    - `NOT NULL` constraint on a column for a specific table doesn't allow `NULL` values in that column (empty strings are `NOT NULL` so they can be saved even in a `NOT NULL` constraint column)
- Create a **primary key for a table**
    - ```SQL
      CREATE TABLE puppies (
        id SERIAL,
        PRIMARY KEY(id)
      );
      ```
    - ```SQL
      CREATE TABLE puppies (
        id SERIAL PRIMARY KEY
      );
      ```
- Create **foreign key constraints** to relate tables
    - ```SQL
      CREATE TABLE puppies (
        id SERIAL,
        breed_id INTEGER NOT NULL REFERENCES breeds(id),
        PRIMARY KEY(id)
      );
      ```
    - ```SQL
      CREATE TABLE puppies (
        id SERIAL,
        breed_id INTEGER NOT NULL,
        PRIMARY KEY(id),
        FOREIGN KEY (breed_id) REFERENCES breeds(id)
      );
      ```
- Explain that SQL is not case sensitive for its keywords but is for its entity names
    - keywords in SQL are case **insensitive**
    - entity names are case **sensitive**

## SQL Objectives

[PostgresQL docs on Queries]

[PostgresQL docs on Data Manipulation]

- How to use the `SELECT ... FROM ...` statement to select data from a single table
    - ```SQL
      SELECT id, value
      FROM table_name
      ```
- How to use the `JOIN` keyword to join two (or more) tables together into a single virtual table
    - ```SQL
      SELECT t1.num, t2.ord
      FROM t1 
      LEFT JOIN t2 ON t1.t2_id = t2.id 
      WHERE t2.value = 'xxx';
      ```
- How to use the `INSERT` statement to insert data into a table
    - ```SQL
      INSERT INTO products (product_no, name, price)
      VALUES
        (1, 'Cheese', 9.99),
        (2, 'Bread', 1.99),
        (3, 'Milk', 2.99);
      ```
- How to use an `UPDATE` statement to update data in a table
    - Update columns `a`, `b`, and `c` in `table_name`
      ```SQL
      UPDATE `table_name` 
      SET a = 5, b = 3, c = 1 
      WHERE a > 0;
      ```
- How to use a `DELETE` statement to remove data from a table
    - Delete all entries in `table_name`
      ```SQL
      DELETE FROM table_name;
      ```
    - Delete row with id of 1 in `table_name`
      ```SQL
      DELETE FROM table_name
      WHERE id = 1;
      ```
- How to use the `WHERE` clause on `SELECT`, `UPDATE`, and `DELETE` statements to narrow the scope of the command
    - `WHERE` comes after the `JOIN` in `SELECT`
    - `WHERE` comes after `SET` in `UPDATE`
    - `WHERE` comes after `DELETE FROM` in `DELETE`
- How to use a seed file to populate data in a database
    - `psql -f <seed_file_name.sql>`
    - If already in psql? `\i <seed_file_name.sql>`

## ORM and Sequelize Objectives

[Sequelize CheatSheet]

[Sequelize Lecture Videos Pets]

To prepare for this, get practice project down to 50 minutes or less or do it 10 times over.

- How to install, configure, and use Sequelize, an ORM for JavaScript
- How to use database migrations to make your database grow with your application in a source-control enabled way
- How to perform CRUD operations with Sequelize
- How to query using Sequelize
- How to perform data validations with Sequelize
- How to use transactions with Sequelize

### Helpful Sequelize Docs

[Sequelize Migrations Docs]

[Sequelize Associations Docs]

## Format of the Assessment
- 2:55 long assessment
- < 10 MC's
- 2 Free Responses
- SQL Project - 40 minutes
- Sequelize Project - 1 hour 45 minutes

[PostgresQL docs on Data Manipulation]: https://www.postgresql.org/docs/12/dml.html
[PostgresQL docs on Queries]: https://www.postgresql.org/docs/12/queries.html
[Sequelize docs on Associations]: https://sequelize.org/master/manual/assocs.html
[Sequelize Associations Docs]: https://sequelize.org/master/manual/assocs.html
[Sequelize Migrations Docs]: https://sequelize.org/master/manual/query-interface.html
[Sequelize CheatSheet]: ../W10D3/README.md
[Sequelize Lecture Videos Pets]: ../W10D4/README.md