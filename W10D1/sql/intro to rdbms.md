# Fundamentals of Relational Database Management Systems

## I. data

You now have some familiarity with data structures and the concept of algorithmic complexity, as expressed in big-O notation.  Every application needs to collect, validate, persist and secure data, and to collate, query and report on that data.  A data management system - or a *database* - is at its core a collection of data structures, algorithms organized to perform all of these functions.

### A. prehistory

You already have some experience reading and writing data from flat files.   Reading from and writing to files is fairly simple, but it is tedious to code and limited in performance.   As data sets increased in size in the 1960s better mechanisms were needed both to manage the integrity of data and to improve upon the processing performance of sequential scans.  In the 1960's, IBM and others took three different approaches to the problem of data management.

* The *heirarchical model* represented data as a tree, with each data node having zero (the root node) or one parent, and some number of child nodes.  (An early example was IBM's Information Management System (IMS))
* The *network model* sought to improve upon the heirarchical model by supporting greater relational complexity; data is typically stored in a doubly-linked list of nodes;  The standard for network databases was called the CODASYL model, published in 1969.
* The *relational model* was developed by Edgar F. Codd while he worked at IBM, and was first published in 1970.  (Significant work was also done by Christopher J. Date; Codd and Date were long-time collaborators who famously disagreed about the need for `NULL` values)

IBM was initially slow to develop the relational model, fearing competition with the company's IMS product.  But within a decade the competition was over; as summarized in a Wikipedia article:

>Until the early 1980s the performance benefits of the low-level navigational interfaces offered by hierarchical and network databases were persuasive for many large-scale applications, but as hardware became faster, the extra productivity and flexibility of the relational model led to the gradual obsolescence of the network model in corporate enterprise usage.

As the SQL language was developed specifically to deal with relational data, since the mid-70's the term "database" has generally meant "relational database, accessed via SQL".  In the last 20 years, increasing use has been made of a different type of database, sometimes referred to as a 'No-SQL' database; these are generally described as *key-value stores*, and are often used as caches and backends for massively distributed applications; Hadoop is an example of this technology.

This week's work will be focused on one particular RDBMS, **PostgreSQL**.  PostgreSQL (also known as *postgres*, as it was written to follow/replace the first UNIX database, INGRES) is free and open source software that scales to enterprise-sized projects, and competes directly with commercial offerings.  Nearly everything you learn about PostgreSQL will apply equally, either directly or indirectly to Oracle, MSSQL, IBM DB2 and other RDBMS's.

NOTE: PostgreSQL is both a mature RDBMS with many advanced features, and one under active development.  There are many powerful features both old and new that time and space will not permit us to examine here, including extensions to support server-side programming in *Python* and *JavaScript*.  Check the documentation to learn more.

### B. terminology

According to "Fundamentals of Database Systems" (Elmasri and Navarathe, 2nd Ed, 1994) the four key concepts of the relational model are defined as:

1. **domain** - a *domain* is a (possibly very large) set of atomic values.  For example, "names" could be a domain with values that are strings, and while the strings themselves could be broken down further into substrings and characters, the database treats them as atoms.

2. **attribute** - a relational *attribute* is simply the pairing of a name (an identifier) and a domain.  An *attribute value* is the further  pairing of an attribute to a specific value; e.g. `color: "blue"`.

3. **tuple** - a *tuple* is an ordered set of values.

4. **relation** - a *relation* is a set of rows.

**Practically speaking**, a domain is more-or-less synonymous with a *data type*.  The implementation of an attribute is referred to as a *column*, a tuple is implemented as a *row* (or *record*), and the implementation of a relation is a *table*.  These terms (data types, columns, rows or records, and tables) are commonly used, and often treated interchangably with their more abstract equivalents.  For some relation, the tuple of *attributes* is referred to as the **header**, while the zero or more tuples of *attribute values* is called the **extent**.

### C. Structured Query Language (SQL)

While various alternative languages have been implemented to manage relational data, the industry standard is **SQL**, pronounced as either "sequel" or "ess-kew-ell".  Like JavaScript, SQL is composed of *expressions* (code that can be evaluated) and *statements* (code that instructs the system to do something).  Unlike JavaScript (which is a *procedural* programming language) SQL is referred to as a *declarative programming language*.  This means that rather than giving the system a list of instructions to perform (a *procedure*) the SQL developer *declares* things that might be true about one or more tables, and the system either fetches (`SELECT`) or modifies (`INSERT, DELETE, UPDATE`) the records in the database that match the declaration.

NOTE: PostgreSQL and other RDBMS's will generally also provide procedural extensions to support more familiar programming features like variables, functions, loops, and exception handling - more on this later.

***Things to know about SQL:***

* SQL is a *case-insensitive* programming language; `SELECT` and `select` are both interpreted as the same keyword.
* SQL *identifiers* (table and column names, etc) are *by default case-insensitive*, and are converted on creation to whatever case (upper or lower) is defined as the default.  (The *default* for this default is **lower** :-D)  You can override this behavior (and pretty much any naming rule) in PostgreSQL by putting double quotes around your identifier - while useful in rare situations (such as using a keyword like `ORDER` as an identifier: `CREATE TABLE "order" ...`), this is in general a *very bad idea*.
* *text data* stored in a SQL database is (of course) *case-sensitive*.
* by *common convention*, SQL keywords are capitalized (`SELECT * FROM`) while identifiers are not (`student`, `course`, `cohort`)

***SQL is like JavaScript, in that:***

* statements are terminated with a semicolon.
* block comments are delimited with `/*` and `*/`.
* whitespace is not significant.

***SQL is different from JavaScript, in that:***

* SQL is a ***declarative*** language; JS is a ***procedural*** language.
* **strings** are delimited with **single quotes**: (`'a string'`); **double quotes** are used for **quoted identifiers only**: (`"Bad Table Name"`).
* **semicolons** at the end of a statement are **required**.
* single-line comments are introduced with two dashes (`-- this is a comment`).
* the equals sign (`=`) serves as **both** the *assignment operator* (`SET attempts = 5 WHERE ...`) and an *equivalence test* (`CASE WHEN attempts = 5 THEN ...`)
* running and committing a statement that makes a change to a database results in a durable, persistant change.  ***In general, you cannot trivially 'undo' accidental changes to your schema or data!***

NOTE: in addition to standard SQL syntax, the postgres SQL dialect includes many shortcut commands introduced with a backslash; `\c <some_db>` connects to the `<some_db>` database; `\d <some_table>` dumps the definition for `<some_table`; `\q` exits the script, etc.  `psql` is the standard CLI program used to interact with PostgreSQL; if invoked with the `-E` flag `psql` will display the corresponding SQL code for any backslash commands.

(*postgres* chapter 4: *SQL Syntax*)

BOOKMARK THIS: for the syntax of ***every PostgreSQL SQL statement***, see the first section (*SQL Commands*) of *postgres* part IV: *Reference*

### D. data types

Relational data is *structured* data; the SQL standard defines types for strings of fixed and variable length, integers, fixed-precision and floating point numbers of various types, dates and times, and boolean values; each type has a corresponding domain.  Particular RDBMS's will often include extra data types in addition to the standard - for intstance, PostgreSQL has types for MAC addresses and geometric primatives.  Most RDBMS's will also allow the developer to define custom data types and constraints.  PostgreSQL can be extended by adding modules that define extended data types, such as GIS types for mapping data.

NOTE: this bit on character strings in postgres, from the version 12 documentation:
>The notations `varchar(n)` and `char(n)` are aliases for `character varying(n)` and `character(n)`, respectively. `character` without length specifier is equivalent to `character(1)`. If `character varying` is used without length specifier, the type accepts strings of any size. The latter is a PostgreSQL extension.

(*postgres* chapter 8: *Data Types*, and table 8.1)

### E. tables

A **table** is composed of (a) a *table name*, (b) a *header* (a list of one or more columns) , and an *extent* (or *body*) of zero or more records, a collection of *constraints* and *indices* that restrict the possible data that can be present, and speed access to it.

It is important to remember that the SQL standard refers to the rows in a table as unordered; this reflects the mathematical definition of a relation as a set of tuples.  In practice, the rows often will come back from the RDBMS in some repeatable order (at least until rows are inserted or deleted), but code should ***never*** rely on this behavior.

Tables are created with a `CREATE TABLE` DDL* statement.  Here is a simple example:

```sql
CREATE TABLE person(
  id SERIAL PRIMARY KEY,        -- SERIAL creates an INTEGER / SEQUENCE pair
  first VARCHAR(50) NOT NULL,   -- postgres does not require a length for strings,
  last VARCHAR(50) NOT NULL,    -- but the ORM will want this for validation
  dob DATE NOT NULL,            -- every person has a Date of Birth
  dod DATE NULL DEFAULT (NULL), -- but living people don't have a (known) Date of Death
  gamer BOOLEAN NOT NULL DEFAULT(TRUE), -- isn't everyone?
  UNIQUE (first, last, dob) -- this is a TABLE constraint that will create an index
); -- this semicolon is required to properly end the statement!
```
NOTES:
* This table has a `PRIMARY KEY` (`id`) associated with an `INTEGER` column that has an associated `SEQUENCE` object that will generate unique values.  This is a *very* common pattern for active data tables, as well as tables created through an ORM (Object Relational Mapper).
* The name fields `first` and `last` have a maximum length of 50 characters.  PostgreSQL does not require this, as the overhead for a variable-length string up to the maximum supported size is constant, but frameworks often will.
* The fields `first`, `last`, `dob` and `gamer` cannot be `NULL`.
* `first`, `last` and `dob` are **required**.  `gamer` is **optional** when data is inserted, as there is a **default value** for this column.
* The `UNIQUE` constraint will cause postgres to reject any insert or update that would result in duplicate values in the `first`, `last` and `dob` columns.  This is accomplished by creating a unique `INDEX` object on these columns, which will generally slow down writes and speed up searches that make use of it.  (for the curious, searches on (`first`, `last`) will be sped up (generally, to O(log(n))); but searches on (`last`,`first`) will still be O(n), because that pairing isn't indexed)

\* DDL = *Data Definition Language* - more on this shortly

(*postgres* chapter 5.1: *Table Basics*)

### F. queries and transactions

An RDBMS *query* - or *SQL query* - is an statement in the SQL language.  ***SQL queries manipulate data.***  Queries are characterized as *Data Manipulation Language* (**DML**) or *Data Definition Language* (**DDL**) depending on whether they manipulate **data** (*DML*) or **metadata** (data-about-data) (*DDL*)

**DDL verbs**
  `CREATE, DROP, ALTER, TRUNCATE, GRANT, REVOKE` etc.

**DML verbs**
  `SELECT, INSERT, UPDATE, DELETE` etc.

SQL statements are grouped into **transactions**, either implicitly as a configuration option on the connection (*autocommit*), or explicitly, in a block of code opened with a `BEGIN` or `START TRANSACTION` statement, possibly including `SAVEPOINT` marks, and ending with either a `COMMIT` statement (to make any pending changes associated with the transaction permanent) or a `ROLLBACK` statement (to cancel any transaction-related changes that have not been committed).

The purpose of a transaction is to group operations that need to all succeed as a set in order to be valid; a typical example is dispensing cash from an ATM; the customer wants to receive the cash, and the bank wants to be sure an account is debited accordingly; if the cash cannot be dispensed for any reason the transaction needs to be cancelled, but if the cash is dispensed an account has to be debited.

(*postgres* chapter 3.4: *Transactions*)

#### 0. select

The most basic SQL statement is the `SELECT` statement; `SELECT`statements read data from the database.  A standalone `SELECT` statement returns the results of the read operation to the client.  A generic `SELECT` statement has the form:

```sql
SELECT <columns>
  [FROM <tables>]                    -- where are we getting this data?
  [WHERE <conditions>]               -- what conditions must it satisfy?
  [GROUP BY <grouping_expressions>]  -- are there any columns to aggregate on?
  [HAVING <group_conditions>]        -- what conditions must aggregates satisfy?
  [ORDER BY <ordering_expressions>]; -- do we want the rows in some order?
```

where all of the clauses between `SELECT <columns>` and the `;` are optional. (the ordering of these clauses is strict, however)

* `<columns>` can be any comma separated combination of constants (`5`), column names (`ssn`), expressions (`first || ' ' || last`), system functions (`CURRENT_DATE`), aggregation expressions (`COUNT(*) AS total`) or the wildcard (`*`).
* `<tables>` is some combination of one or more tables or table-like objects, typically connected with `JOIN` conditions.
* `<conditions>` are conditional (boolean) expressions that restrict the selection to rows that satisfy some logical criteria.
* `<grouping_expressions>` are a subset of the `<columns>`, used with aggregation expressions like `COUNT`, `MAX`, `MIN`.  (In postgres you can also use the column number in the selection list; `GROUP BY 2,3`)
* `<ordering_expressions>` are a list of either `<columns>` or calculated values.

NOTE: `||` is the string concatenation operator in postgres
NOTE2: `+` won't join postgres strings.  I've tried; It doesn't work.

A typical `SELECT` statement might look like this:
```sql
aa=# SELECT first || ' ' || last AS name,
aa-#        AGE(dob) AS age
aa-#   FROM person
aa-#   ORDER BY dob;
      name      |          age
----------------+-----------------------
 David James    | 60 years 1 mon 2 days
 Ronald Stevens | 55 years 13 days
(2 rows)
```

##### a. the `SELECT` clause

The `SELECT` clause is the keyword followed by a comma-separated list of expressions - these can any of attribute names, calculated values, function calls, or constants.  Each expression can also be assigned a name with `AS`, as in `first || ' ' || last AS name`.  `SELECT` queries with multiple tables must qualify duplicated column names with the table name: `person.id`, `cat.id`.  The tables themselves can be assigned aliases: `person AS o`, `cat AS c`.

(*postgres* chapter 7.3: *Select Lists*)

##### b. the `FROM` clause

The `FROM` clause defines which relations will be queried, and how they will be related to each other.  Most useful `SELECT` statements include `FROM` clauses with one or more `JOIN` conditions.

Let's create a `cat` table and populate it with some kitties:

```sql
aa=# CREATE TABLE cat(
aa(#   id SERIAL PRIMARY KEY,
aa(#   name VARCHAR(50) NOT NULL UNIQUE,
aa(#   dob DATE DEFAULT(NULL),
aa(#   dod DATE DEFAULT(NULL),
aa(#   sex CHAR NULL CHECK (sex IN ('F','M')),
aa(#   neutered BOOLEAN DEFAULT(NULL),
aa(#   owner_id INT DEFAULT(NULL) REFERENCES person(id));
CREATE TABLE
aa=# INSERT INTO cat (name, sex, owner_id) values ('Miss Kitty','F',1);
INSERT 0 1
aa=# INSERT INTO cat (name, sex, owner_id, neutered) values ('Zippie','F',1, FALSE);
INSERT 0 1
aa=# INSERT INTO cat (name, sex, owner_id, neutered) values ('Walter','M', NULL, TRUE);
INSERT 0 1
aa=# INSERT INTO cat (name, sex, owner_id, neutered) values ('Nightshade',NULL, NULL, TRUE);
INSERT 0 1
```
Now let's check the data:
```sql
aa=# SELECT * FROM person;
 id | first  |  last   |    dob     | dod | gamer
----+--------+---------+------------+-----+-------
  1 | David  | James   | 1960-06-18 |     | t
  2 | Ronald | Stevens | 1965-07-07 |     | t
(2 rows)

aa=# SELECT * FROM cat;
 id |    name    | dob | dod | sex | neutered | owner_id
----+------------+-----+-----+-----+----------+----------
  1 | Miss Kitty |     |     | F   |          |        1
  2 | Zippie     |     |     | F   | f        |        1
  3 | Walter     |     |     | M   | t        |
  4 | Nightshade |     |     |     | t        |
(4 rows)

```
So to connect these two tables, what kinds of joins are there to chose from?  Considering two tables `left` (in this case, *o*) and `right` (in this case, *c*), the common ones are:
* an `INNER JOIN`, where some condition is met for every pair of rows returned:

```sql
aa=# SELECT o.first, o.last, c.name, c.sex FROM person o INNER JOIN cat c ON o.id = c.owner_id;
 first | last  |    name    | sex
-------+-------+------------+-----
 David | James | Miss Kitty | F
 David | James | Zippie     | F
(2 rows)
```
Note that this is the default `JOIN` behavior, so `INNER` is presumed if not provided:
```sql
aa=# SELECT o.first, o.last, c.name, c.sex FROM person o JOIN cat c ON o.id = c.owner_id;
 first | last  |    name    | sex
-------+-------+------------+-----
 David | James | Miss Kitty | F
 David | James | Zippie     | F
(2 rows)
```
* a `LEFT OUTER JOIN`, where either a condition is met for both rows in the pair, or there is a row in `left` with no matching record in `right`:
(in this case, persons without cats are included)
```sql
aa=# SELECT o.first, o.last, c.name, c.sex FROM person o LEFT OUTER JOIN cat c ON o.id = c.owner_id;
 first  |  last   |    name    | sex
--------+---------+------------+-----
 David  | James   | Miss Kitty | F
 David  | James   | Zippie     | F
 Ronald | Stevens |            |
(3 rows)
```
* a `RIGHT OUTER JOIN`, where either a condition is met for both rows in the pair, or there is a row in `right` with no matching record in `left`:
(in this case, cats without owners are included)
```sql
aa=# SELECT o.first, o.last, c.name, c.sex FROM person o RIGHT OUTER JOIN cat c ON o.id = c.owner_id;
 first | last  |    name    | sex
-------+-------+------------+-----
 David | James | Miss Kitty | F
 David | James | Zippie     | F
       |       | Walter     | M
       |       | Nightshade |
(4 rows)
```
* a `FULL OUTER JOIN`, where either a condition is met for both rows in the pair, or one or the other records has no matching record:
(unmatched persons and cats are both included)

```sql
aa=# SELECT o.first, o.last, c.name, c.sex FROM person o FULL OUTER JOIN cat c ON o.id = c.owner_id;
 first  |  last   |    name    | sex
--------+---------+------------+-----
 David  | James   | Miss Kitty | F
 David  | James   | Zippie     | F
        |         | Walter     | M
        |         | Nightshade |
 Ronald | Stevens |            |
(5 rows)

```
* and finally - **for completeness** - the ***cartesian product***, or dreaded ***cross join***, aka *"the join of no join"*, or *"why does my query never finish?!?!"*
(every row from `left` is now paired with every row from `right`)

```sql
aa=# SELECT o.first, o.last, c.name, c.sex FROM person o, cat c;
 first  |  last   |    name    | sex
--------+---------+------------+-----
 David  | James   | Miss Kitty | F
 Ronald | Stevens | Miss Kitty | F
 David  | James   | Zippie     | F
 Ronald | Stevens | Zippie     | F
 David  | James   | Walter     | M
 Ronald | Stevens | Walter     | M
 David  | James   | Nightshade |
 Ronald | Stevens | Nightshade |
(8 rows)

```
When you **intend** to do this, you can make some pretty cool stuff happen declaratively - but more commonly, a cross join is caused by an *unfortunate coding decision*, like this:
(hint - it will always be true that `o.id = o.id`!)
```sql
aa=# SELECT o.first, o.last, c.name, c.sex FROM person o JOIN cat c ON o.id = o.id;
 first  |  last   |    name    | sex
--------+---------+------------+-----
 David  | James   | Miss Kitty | F
 Ronald | Stevens | Miss Kitty | F
 David  | James   | Zippie     | F
 Ronald | Stevens | Zippie     | F
 David  | James   | Walter     | M
 Ronald | Stevens | Walter     | M
 David  | James   | Nightshade |
 Ronald | Stevens | Nightshade |
(8 rows)

```
(*postgres* chapter 7.2.1: *The FROM Clause*)

##### c. the `WHERE` clause

The `WHERE` clause sets conditions for rows to be included in the result:
```sql
aa=# SELECT o.first, o.last, c.name, c.sex FROM person o JOIN cat c ON o.id = c.owner_id WHERE neutered IS NULL;
 first | last  |    name    | sex
-------+-------+------------+-----
 David | James | Miss Kitty | F
(1 row)
```
Note that the same thing could be accomplished with a fancier join condition:
```sql
aa=# SELECT o.first, o.last, c.name, c.sex FROM person o JOIN cat c ON o.id = c.owner_id AND neutered IS NULL;
 first | last  |    name    | sex
-------+-------+------------+-----
 David | James | Miss Kitty | F
(1 row)
```
(*postgres* chapter 7.2.2: *The WHERE Clause*)

##### d. the `GROUP BY` and `HAVING` clauses

These clauses are used to aggregate data.  `GROUP BY` identifies columns to aggregate on; `HAVING` optionally adds conditions on the aggregated rows:  (in these queries, `cats` is calculated by counting the matching rows with `COUNT(*)`)
```sql
aa=# SELECT o.first, o.last, COUNT(*) AS cats FROM person o JOIN cat c ON o.id = c.owner_id GROUP BY o.first, o.last HAVING COUNT(*) > 1;
 first | last  | cats
-------+-------+------
 David | James |    2
(1 row)

aa=# SELECT o.first, o.last, COUNT(*) AS cats FROM person o JOIN cat c ON o.id = c.owner_id GROUP BY o.first, o.last HAVING COUNT(*) > 2;
 first | last | cats
-------+------+------
(0 rows)
```
(*postgres* chapter 7.2.3: *The GROUP BY and HAVING Clauses*)

##### e. the `ORDER BY` clause
The `ORDER BY` clause does what it says - it orders the rows returned in the dataset.  While lots of clever query tricks can be done with entries in this clause, the most common thing to sort on is the values in one or more columns, optionally reversing the sort order with the keyword `DESC`.
```sql
aa=# SELECT * FROM cat ORDER BY name;
 id |    name    | dob | dod | sex | neutered | owner_id
----+------------+-----+-----+-----+----------+----------
  1 | Miss Kitty |     |     | F   |          |        1
  4 | Nightshade |     |     |     | t        |
  3 | Walter     |     |     | M   | t        |
  2 | Zippie     |     |     | F   | f        |        1
(4 rows)

aa=# SELECT * FROM cat ORDER BY name DESC;
 id |    name    | dob | dod | sex | neutered | owner_id
----+------------+-----+-----+-----+----------+----------
  2 | Zippie     |     |     | F   | f        |        1
  3 | Walter     |     |     | M   | t        |
  4 | Nightshade |     |     |     | t        |
  1 | Miss Kitty |     |     | F   |          |        1
(4 rows)
```
You can also just use the (one-based) index of the column you want to sort on:
```sql
aa=# SELECT * FROM cat ORDER BY 2;
 id |    name    | dob | dod | sex | neutered | owner_id
----+------------+-----+-----+-----+----------+----------
  1 | Miss Kitty |     |     | F   |          |        1
  4 | Nightshade |     |     |     | t        |
  3 | Walter     |     |     | M   | t        |
  2 | Zippie     |     |     | F   | f        |        1
(4 rows)
```
(*postgres* chapter 7.5: *Sorting Rows*)

#### 1. insert

An `INSERT` query adds rows to a table.  There are a couple of options here - the simplest is with one or more tuples of values:
```sql
aa=# INSERT INTO person (first, last, dob)
aa-# VALUES ('David', 'James', '1960-06-18'); -- separate more tuples with commas
INSERT 0 1
```

A slightly more complicated form makes use of a `SELECT` statement:
```sql
aa=# INSERT INTO person(first, last, dob)
aa-#   SELECT last, first, dob
aa-#     FROM person
aa-#     WHERE dob = '1960-06-18';
INSERT 0 1
```

(This is a general pattern that will also apply to `UPDATE` and `DELETE` statements)

(*postgres* chapter 6.1: *Inserting Data*)

#### 2. update

An `UPDATE` query changes existing rows in a table.  As with `INSERT`, we can update a single row:
```sql
aa=# U2DATE person
  SET dob = '1967-02-27'
  WHERE last = 'David'
    AND first = 'James';
UPDATE 1
```
or we can update every row that matches a selection:
```sql
aa=# UPDATE person
aa-#   SET gamer = FALSE
aa-#   WHERE id IN
aa-#     (SELECT id FROM person WHERE first = 'David');
UPDATE 1
```
NOTE: an update operation will fail if it violates a referential constraint.

(*postgres* chapter 6.2: *Updating Data*)

#### 3. delete

A `DELETE` statement removes records from the database.  Similar to `INSERT` and `UPDATE` operations, `DELETE` statements can be targeted with an explicit set of criteria:
```sql
aa=# DELETE
aa-# FROM person
aa-# WHERE dob BETWEEN '1960-01-01' AND '1961-01-01';
DELETE 1
```
Or can remove records that match the results of a `SELECT` statement:
```sql
aa=# DELETE
aa-# FROM person
aa-# WHERE dob IN (SELECT MAX(dob) FROM person);
DELETE 1
```
Alternatively, all records can be removed by running a `DELETE` statement with no `WHERE` clause:
```sql
aa=# DELETE FROM person;
DELETE 0
```
NOTE: a delete operation will fail if it violates a referential constraint.

(*postgres* chapter 6.3: *Deleting Data*)

NOTE: In addition to a (DML) `DELETE` statement, there is a *DDL* statement - `TRUNCATE` - that removes **all** rows from a table.  Because `TRUNCATE` statements are treated as DDL, they are logged differently than `DELETE` statements, and are generally not permitted inside a transaction block. For more information, see `TRUNCATE` in the *SQL Commands* documentation.

## II. relations

While a simple application might only require one table, typical applications will require several (or many) tables to properly organize their data.  The real power of an RDBMS lies in the *constraints* that define the ***relationships*** between the *attributes* (columns) of *relations* (tables).  More on this after we examine ***keys*** and ***indices***.

### keys and other constraints

In general, a ***constraint*** is a rule that valid data must conform to.  `NOT NULL` is an example of a simple constraint that we've already encountered.  A `CHECK CONSTRAINT` is a rule either about the values in a particular column (`CHECK (age < 100)`; a **column constraint**) - or within a row (`
CHECK (start_date <= end_date)`; a **table constraint**).

In a relational database, a (generic) ***key constraint*** is an ordered set of one or more columns whose values taken together are constrained to be unique.  A table's ***primary key*** is often the preferred way to search for specific records and *may* reflect the physical organization of the extent (that is, the ordering of the rows in the table as a data structure); a ***candidate key*** is any collection of columns that are constrained to be unique.  Primary keys are created with a `PRIMARY KEY` constraint (either as a column constraint (on a single column) or a table constraint (if multiple columns are involved)); candidate keys are created by defining `UNIQUE` constraints on either columns or tables.

A ***foreign key*** is an ordered set of one or more columns in a table that are constrained to correspond to a *candidate key* that has been defined on either the same table or another table in the same database.  Foreign keys are created by defining a `FOREIGN KEY` constraint, either as a column constraint or a table constraint.

In practice, all of these constraints are implemented by building a maintained **index** on the target table.

(see *postgres* section 5.4, *Constraints*)

### indexes

An ***index*** is a database object that represents a sorted list of the values contained in an ordered set of one or more columns.  Indexes can be unique (producing a constraint) or can allow duplicates.  Indexes make most of the magic of an RDBMS possible.  Most indexes are implemented as various sorts of *trees*, but other types of indexes are available.

Well designed indexes can *dramatically* improve the performance of an application.  Poorly designed indexes are at best useless overhead.  A good general approach is to start with the indexes that are created by defining `PRIMARY KEY`, `UNIQUE`, and `FOREIGN KEY` constraints, and then add indexes to speed up specific queries based on the columns used.

### normalization

You all had some exposure to the principles of Object Oriented Programming, back in the SOLID OOP week.  ***Database Design*** is the analogous process for developing a well-performing database schema.  As with OOP, the step zero in modeling a real-world situation with a database is to identify the various kinds of things that will matter to your system, while step one is to characterize the significant relationships between those things.

#### NULL values
We defined the `person` table like this:
```sql
CREATE TABLE person(
  id SERIAL PRIMARY KEY,        -- SERIAL creates an INTEGER / SEQUENCE pair
  first VARCHAR(50) NOT NULL,   -- postgres does not require a length for strings,
  last VARCHAR(50) NOT NULL,    -- but the ORM will want this for validation
  dob DATE NOT NULL,            -- every person has a Date of Birth
  dod DATE NULL DEFAULT (NULL), -- but living people don't have a (known) Date of Death
  gamer BOOLEAN NOT NULL DEFAULT(TRUE), -- isn't everyone?
  UNIQUE (first, last, dob) -- this is a TABLE constraint that will create an index
); -- this semicolon is required to properly end the statement!
```
But we could have alternatively done it like this, and added a `dead_person` table:
```sql
CREATE TABLE person(
  id SERIAL PRIMARY KEY,        -- SERIAL creates an INTEGER / SEQUENCE pair
  first VARCHAR(50) NOT NULL,   -- postgres does not require a length for strings,
  last VARCHAR(50) NOT NULL,    -- but the ORM will want this for validation
  dob DATE NOT NULL,            -- every person has a Date of Birth
  gamer BOOLEAN NOT NULL DEFAULT(TRUE), -- isn't everyone?
  UNIQUE (first, last, dob) -- this is a TABLE constraint that will create an index
); -- this semicolon is required to properly end the statement!

CREATE TABLE dead_person(
  person_id INTEGER PRIMARY KEY REFERENCES person(id),
  dod DATE NOT NULL);  -- dead persons should have a Date of Death
```
Mathemeticians and Computer Scientists like to argue about which approach is better.  (This conundrum has an OOP equvalent - is a `DeadPerson` a subtype of `Person`, or is *dead* just a state that a `Person` can be in?)

#### normal forms

Relations can be characterized according to their ***normal form***, as  defined by E. F. Codd and others in the 1970's.  In a nutshell, these forms are defined as increasingly restrictive conditions that a relation must satisfy.  Here are the most commonly used normal forms:

* UNF - Unnormalized Form - data may be non-atomic (array values)
* 1NF - First Normal Form - all data is atomic; relation has a primary key
* 2NF - Second Normal Form - no data is dependant on a part of a candidate key
* 3NF - Third Normal Form - all data is dependant on a candidate key
* BCNF, etc - Boyce-Codd Normal Form and higher place further constraints on the permitted data dependencies.

In practice, a schema that is in 3NF is considered to be fully normalized.

Progressive normalization is generally accomplished by moving attributes that do not depend on the primary key of a relation to other related relations.  (this might make more sense once you see it)

___

Consider an office app for a 'color coordnation specialist".  Part of their log table looks like this (key columns are marked with an asterisk):

**visit**

|   visit\*  | time\*|person\*|fav_color0| fc_rgb0  |fav_color1|fc_rgb1   |fav_color2|fc_rgb2   |
|------------|-------|--------|----------|----------|----------|----------|----------|----------|
| 2020-03-04 | 09:00 | John   | red      | 0xff0000 | gold     | 0xffd700 | green    | 0x00ff00 |
| 2020-03-10 | 09:45 | John   | red      | 0xff0000 | gold     | 0xffd700 | green    | 0x00ff00 |
| 2020-03-14 | 13:00 | John   | red      | 0xff0000 | gold     | 0xffd700 | green    | 0x00ff00 |
| 2020-03-04 | 09:00 | John   | red      | 0xff0000 | gold     | 0xffd700 | green    | 0x00ff00 |
| 2020-03-07 | 12:30 | Dave   | green    | 0x00ff00 | blue     | 0x0000ff |          |          |
| 2020-03-23 | 15:30 | Dave   | green    | 0x00ff00 | blue     | 0x0000ff |          |          |
| 2020-03-21 | 09:15 | Mary   | blue     | 0x0000ff |          |          |          |          |
| 2020-04-04 | 10:45 | Mary   | blue     | 0x0000ff |          |          |          |          |
| 2020-04-17 | 14:00 | Mary   | blue     | 0x0000ff |          |          |          |          |

This data is already in 1NF (assuming it has a primary key; probably `visit, time, person`)  But it doesn't look like favorite colors data depends on the whole key, but rather just the person.
___
We can refactor (*normalize*) this data to look like this:

**visit**

|   visit*   | time* |person*|
|------------|-------|-------|
| 2020-03-04 | 09:00 | John  |
| 2020-03-10 | 09:45 | John  |
| 2020-03-14 | 13:00 | John  |
| 2020-03-04 | 09:00 | John  |
| 2020-03-07 | 12:30 | Dave  |
| 2020-03-23 | 15:30 | Dave  |
| 2020-03-21 | 09:15 | Mary  |
| 2020-04-04 | 10:45 | Mary  |
| 2020-04-17 | 14:00 | Mary  |

**person**

|person*|fav_color0| fc_rgb0  |fav_color1|fc_rgb1   |fav_color2|fc_rgb2   |
|-------|----------|----------|----------|----------|----------|----------|
| John  | red      | 0xff0000 | gold     | 0xffd700 | green    | 0x00ff00 |
| Dave  | green    | 0x00ff00 | blue     | 0x0000ff |          |          |
| Mary  | blue     | 0x0000ff |          |          |          |          |

___
Similarly, we can see that the RGB codes depend only on the colors (or vice-versa), so we can move those to another relation as well:

**visit**

|   visit*   | time* |person*|
|------------|-------|-------|
| 2020-03-04 | 09:00 | John  |
| 2020-03-10 | 09:45 | John  |
| 2020-03-14 | 13:00 | John  |
| 2020-03-04 | 09:00 | John  |
| 2020-03-07 | 12:30 | Dave  |
| 2020-03-23 | 15:30 | Dave  |
| 2020-03-21 | 09:15 | Mary  |
| 2020-04-04 | 10:45 | Mary  |
| 2020-04-17 | 14:00 | Mary  |

**person**

|person*|fav_color0|fav_color1|fav_color2|
|-------|----------|----------|----------|
| John  | red      | gold     | green    |
| Dave  | green    | blue     |          |
| Mary  | blue     |          |          |

**color**

| color*| fc_rgb0  |
|-------|----------|
| red   | 0xff0000 |
| gold  | 0xffd700 |
| green | 0x00ff00 |
| blue  | 0x0000ff |

This data is now in 2NF, since each column is now dependant on the primary key.  But something's still not quite right...  What could it be?
___
The problem is that the only difference between the `fav_color0` attribute and the `fav_color1` and `fav_color2` attributes appears to be the name.  Neither Dave nor Mary have three favorite colors, and what if John wants to pick a fourth one?  The solution is to move the favorite colors to another table or their own:

**visit**

|   visit*   | time* |person*|
|------------|-------|-------|
| 2020-03-04 | 09:00 | John  |
| 2020-03-10 | 09:45 | John  |
| 2020-03-14 | 13:00 | John  |
| 2020-03-04 | 09:00 | John  |
| 2020-03-07 | 12:30 | Dave  |
| 2020-03-23 | 15:30 | Dave  |
| 2020-03-21 | 09:15 | Mary  |
| 2020-04-04 | 10:45 | Mary  |
| 2020-04-17 | 14:00 | Mary  |

**person**

|person*|
|-------|
| John  |
| Dave  |
| Mary  |

**person_color**

|person*|fav_color*|
|-------|----------|
| John  | red      |
| John  | gold     |
| John  | green    |
| Dave  | green    |
| Dave  | blue     |
| Mary  | blue     |

**color**

| color*| fc_rgb0  |
|-------|----------|
| red   | 0xff0000 |
| gold  | 0xffd700 |
| green | 0x00ff00 |
| blue  | 0x0000ff |

This data is now in 3NF, as every value now depends solely on the primary key value for its tuple.
___

#### number and relationships

Relationships can be characterized by the number of matching tuples that can exist on each side.  (In the general case, the count is either zero, one, or more-than-one, but particular relationships can have other constraints - consider how many biological parents a person can have)

Generically, relationships are classed as:

* ***one-to-one***
* ***one-to-many***
* ***many-to-many***

In the ***first*** example in this section (regarding NULL values), the *dead_person* relation was in a **one-to-one** relationship with the *person* relation, since each record in the *dead_person* table maps to exactly one *person* record.  (a Person may not have a corresponding record in the *dead_person* table - that's perfectly okay!)

In the ***last*** example (3NF, above), the *person* relation is in a ***one-to-many*** relationship with both the *visit* and *person_color* table.  The *color* table is also in a one-to-many relationship with the *person_color* table; these last two relationships together implement a ***many-to-many*** relationship between the *person* table and the *color* table.  In this kind of arrangement, the *person_color* table is said to be a **join table**, joining *person* with *color*.  Other attributes of this relationship could be tracked in the *person_color* table; more complicated relationships can also involve join tables that connect more than two other tables.

It is important to understand that a SQL query is not required to respect joins that exist in the database; we can join anything to anything, as long as we can define a relationship.  That said, the indexes that implement `PRIMARY KEY`, `UNIQUE`, and `FOREIGN KEY` constraints will tend to dramatically accellerate queries that make proper use of them.

A diagram that represents database tables and the relationships between them is called an ***Entity Relationship Diagram*** (**ERD**)

### views

A ***view*** is a named SQL object that corresponds to a `SELECT` statement.  Creating a view is simple:
```sql
aa=# CREATE OR REPLACE VIEW person_list AS
aa-#   SELECT first || ' ' || last AS name,
aa-#          AGE(dob) AS age
aa-#     FROM person
aa-#     ORDER BY dob;
CREATE VIEW
```

and using it is equally simple:
```sql
aa=# SELECT * FROM person_list;
      name      |          age
----------------+-----------------------
 David James    | 60 years 1 mon 2 days
 Ronald Stevens | 55 years 13 days
(2 rows)

```
as is getting rid of it:
```sql
aa=# DROP VIEW person_list;
DROP VIEW
```

So what good is a view?  Views can capture complicated `SELECT` queries for reuse, and can be used as data sources in other queries, exactly like tables.  A ***materialized view*** is a special kind of view that can be referenced as a *foreign key*.  Because a view is a database object, views can simplify tuning indexes to optimize query performance.  Also, views are often created as a component of procedural database objects like *stored procedures* and *user-defined functions*.

In general, you probably won't be defining views as a full-stack or front-end developer, but it's still good to know what they are, and what they are for - both for dealing with back-end problems and as a topic for interview questions.

### performance tuning

PostgreSQL and other RDBMS's in general have tools to help the developer figure out where time is being spent in queries.  The `EXPLAIN` verb asks the system to **explain** how it plans to go about running the query:
```sql
aa=# EXPLAIN SELECT * FROM person_list;
                              QUERY PLAN
----------------------------------------------------------------------
 Subquery Scan on person_list  (cost=29.11..32.74 rows=290 width=48)
   ->  Sort  (cost=29.11..29.84 rows=290 width=52)
         Sort Key: person.dob
         ->  Seq Scan on person  (cost=0.00..17.25 rows=290 width=52)
(4 rows)

```
Adding the `ANALYZE` verb instructs the system to run the query and report on its observed performance:
```sql
aa=# EXPLAIN ANALYZE SELECT * FROM person_list;
                                                   QUERY PLAN
----------------------------------------------------------------------------------------------------------------
 Subquery Scan on person_list  (cost=29.11..32.74 rows=290 width=48) (actual time=0.049..0.051 rows=2 loops=1)
   ->  Sort  (cost=29.11..29.84 rows=290 width=52) (actual time=0.047..0.048 rows=2 loops=1)
         Sort Key: person.dob
         Sort Method: quicksort  Memory: 25kB
         ->  Seq Scan on person  (cost=0.00..17.25 rows=290 width=52) (actual time=0.028..0.034 rows=2 loops=1)
 Planning Time: 0.245 ms
 Execution Time: 0.093 ms
(7 rows)
```
Your experience analyzing algorithms should help you understand what these *EXPLAIN* reports mean.  **cost** is an estimated, relative metric; **actual time** reports a hard metric for analyzing the performance of large queries.  As a full-stack developer, you'll want to remember that these tools are here when you have a poorly performing query to impove or answer interview questions about.

(see *postgres* section 14.1, *Using EXPLAIN*)

## III. programming

There is an immense amount of documentation to cover to properly explain the procedural extensions to an RDBMS like postgres.  As little of it has much bearing on this week's material, it will be covered here very lightly!

PostgreSQL supports procedural programming in several languages, including *Python* and *JavaScript*; the simplest one to use was created to directly work with the postgres SQL dialect, and is refered to as ***PL/pgSQL***.

(*postgres* chapter 42: *PL/pgSQL - SQL Procedural Language*)

### cursors

A ***cursor*** is a procedural object that allows a block of code to execute on every row returned by a select statement.  Cursors don't usually stand alone; they are usually embedded in other procedural objects like *functions*, *procedures*, and *triggers*.

(*postgres* chapter 42.7 : *Cursors*)

### stored procedures and functions

***stored procedures*** and ***functions*** are procedural SQL objects with parameters, variables, loops, and various mechanisms to return data.  *functions* can return record sets and serve as stand-ins for tables (like views), and can return values calculated from tuples or relations.  While functions are not allowed to make changes to the database, ***stored procedures*** can; they are able to insert, update or delete data as needed.

(*postgres* chapter 37.3: *User-Defined Functions* and 37.4: *User-Defined Procedures*)

### triggers

A ***trigger*** is a procedural database object that executes whenever a particular event occurs in the database.  Triggers can write to log files, update data in other tables, or even override the attempted operation and either do nothing or do something entirely different.  From the documentation:

>A trigger is a specification that the database should automatically execute a particular function whenever a certain type of operation is performed. Triggers can be attached to tables (partitioned or not), views, and foreign tables.
>
>On tables and foreign tables, triggers can be defined to execute either before or after any `INSERT`, `UPDATE`, or `DELETE` operation, either once per modified row, or once per SQL statement. `UPDATE` triggers can moreover be set to fire only if certain columns are mentioned in the `SET` clause of the `UPDATE` statement. Triggers can also fire for `TRUNCATE` statements. If a trigger event occurs, the trigger's function is called at the appropriate time to handle the event.

(*postgres* chapter 38: *Triggers*)

## IV. administration and security

Every RDBMS designed for multiple users has to deal with the twin problems of **authentication** and **authorization**.

* *Authentication* is the mechanism that confirms the identity of a user.
* *Authorization* is the mechanism that controls access to system resources.

In general, every object in an RDBMS like postgres has a name that is unique in some namespace, has an owner, and (for database objects) has read and write or execute permissions that can be granted or revoked.

* **users** (**roles**) are objects in the *global* namespace that are owned by the system's *superusers*
* **databases** are objects in the *global* namespace that are owned by a *user or role*
* **schemas** are objects located in a *database namespace* that are owned by a *user or role*
* **all other objects** are located in a *schema namespace* (defaulting to the *default* schema, **public**) and owned by a *user or role*

In addition to securing the database against authenticated access (through the 'front door'), most RDBMS's will have provisions for securing (encrypting) the binary files that hold the system's persisted data, to protect against inappropriate access to the system's data files or their backups.  This is referred to as securing 'data at rest', and is typically a requirement for systems that manage medical or financial data.  (We won't worry further about it here)

Additional security requirements often exist related to *logging* and *auditing*.  Both of these activities generally well-supported on full-featured RDBMS's.  (Neither of these will be addressed further here)

### databases and schemas

A **database** is a logical container (a set of *namespaces*) for schemas, but more commonly the (default) `public` schema is the container for relations and their associated data. In PostgreSQL and many other systems, a database is also a *physical* construct that exists on one or more files in the file system.  (These files are generally binary, and often are  encrypted)  Databases have an owner, and rights can be granted and revoked within them.  (These are distinct from the rights required to create or drop an entire database)

A **schema** (in this context) is a logical per-user namespace that exists within any database that the user can connect to.  All of our work has been done in the `public` namespace; this is typical of databases that are the backends for OLTP (OnLine Transaction Processing) websites.

In this example, in the database `aa` there is a single table (`person`), owned by the user `gordon`, and located in the `public` schema.
```sql
aa=# \dt
        List of relations
 Schema |  Name  | Type  | Owner
--------+--------+-------+--------
 public | person | table | gordon
(1 row)
```
(You will generally not need to worry much about this usage of the term *schema*; more often the term is used to refer to a system's *metadata*)

Databases can be created with a `CREATE DATABASE` statement (making use of a *lot* of defaults), as:
```sql
aa=# CREATE DATABASE aaa;
CREATE DATABASE
```
The properties of a database can be changed with an `ALTER DATABASE` statement:
```sql
aa=# ALTER DATABASE aaa OWNER TO hsm;
ALTER DATABASE
```
And a database can ge dropped (*permanently*, unless it is backed up) with a `DELETE DATABASE` statement:
```sql
aa=# DROP DATABASE aaa;
DROP DATABASE
```

(Schemas are similarly managed with `CREATE SCHEMA`, `ALTER SCHEMA` and `DROP SCHEMA` statements)

The container (namespace) for a database instance is the (RDBMS) server instance; the container for a schema instance is the database.

### users and roles

On postgres, **users** and **roles** are interchangable; a *user* is just a role with permission to connect to the database (`LOGIN` permission), and a *role* is an object that can be have permissions granted to it or revoked from it - so in addition to corresponding to a particular user, a `ROLE` can also be a *group* to which other users or groups belong.

Users (roles) are created, altered and dropped with their own set of DDL statements:
```sql
aa=# CREATE USER donald LOGIN PASSWORD 'greyzone';
CREATE ROLE
aa=# ALTER USER donald CREATEDB;
ALTER ROLE
aa=# DROP ROLE donald; -- a USER is a ROLE
DROP ROLE
```
A **superuser** is a user or role that can perform any operation on the RDBMS instance; `SUPERUSER` is just an attribute of users/roles:
```sql
aa=# CREATE ROLE barak SUPERUSER;
CREATE ROLE
aa=# DROP ROLE barak;
DROP ROLE
```

The container for users and roles on postgres is the (RDBMS) server instance.

### authentication schemes

PostgreSQL offers several means to authenticate clients, controlled by a configuration file named `pg_hba.conf`.  This is a flat text file with records composed of the following fields:

* connection type (*local*, *host*, *hostssl*, etc)
* client IP address (if applicable)
* database - a comma-separated list of databases that can be connected to; also the special names `sameuser`, `samerole`, and `all`.
* user - matches a single user or role, or when prefixed with `+` matches the name of a role that the user belongs to, or the special value `all`.
* auth-method - one of:
  * `trust` - the RDBMS *trusts* that the OS has already authenticated the logged in user identified by their username.  Such a user need not actually have a password; often these are 'system' accounts that are not permitted to log in interactively.
  * `reject` - the user is not allowed to connect
  * `password`, `md5`, `scram-sha-256`, etc - authenticates the user with a password, either plaintext (`password`) or a password hashed using the named scheme.
  * `ldap`, `radius`, etc - various methods that use an external authentication server.

A typical (simple) production scheme might use one or more dedicated 'worker' accounts with `trust` authentication to handle routine database tasks (DML), and a privileged password-protected account to manage database deployments and migrations (DDL).

(see *postgres* chapter 20)
