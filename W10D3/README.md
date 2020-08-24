# W10D3 Sequelize Notes

ORM - Object Relational Mapping

With sequelize and orms, we want to do something easily like:
- instructions belongs to recipes
- grab all the instructions for this particular recipe
- create a new instruction and attach it to this recipe
- Create a new recipe using these parameters
- Have a method for getting all the instructions and ingredients of a recipe;

Migration
- anything that changes our database schema
- handles database level validations and constraints

Components of a Database Schema
- tables
- column names
- constraints
- indexes

Model
- handles associations, model level validations, and other methods we can define
ourselves for a model

packages:
- sequelize
- sequelize-cli
- pg

## Sequelize-Cli CheatSheet

`npx sequelize-cli init` - initialize sequelize tools in the project

`npx sequelize-cli db:create` - create database with configuration in `config/config.json` file

`npx sequelize-cli db:drop` - drop database with configuration in `config/config.json` file

`npx sequelize-cli model:generate` - creates a migration file and a model file to edit (does NOT create the table in the database!)
  - key-value arguments:
      - `--name`: Name of the model **Needs to be singular, Capitalized, and CamelCase**
          - will create a table name that is pluralized, Capitalized, and CamelCase
          - will create a model in the model file with a class that is singular, Capitalized, and CamelCase
          - e.g. `--name MeasurementUnit`
      - `--attributes`: List of table column and type pairs separated by commas. Table column and type separated by colon.
          - e.g. `--attributes name:string,order:int` cannot be separated by spaces
          - e.g. `--attributes column1:type1,column2:type2,column3:type3`

`npx sequelize-cli migration:generate --name <name of migration>` - creates a migration file that isn't for creating a table/model
  - Some common migrations: [Sequelize Migrations Cheatsheet]

`npx sequelize-cli db:migrate` - migrates any of the migrations files that haven't been migrated to the database yet (creates/modifies tables in the database)

`npx sequelize-cli seed:generate`- creates a seeder file
  - key-value arguments:
      - `--name`: Name of the seed, eg. `--name seed-movies`

`npx sequelize-cli db:seed:all` - runs the seed files that haven't been run yet

## Sequelize Migrations

[Sequelize Migrations Docs]

[Sequelize Migrations Cheatsheet]

## Sequelize Associations

[Sequelize Associations Docs]

[Sequelize Associations Cheatsheet]

## [Pets Walkthrough]

- walkthrough with Migrations, Insertion, Updating, Deleting videos

[Sequelize Associations Docs]: https://sequelize.org/master/manual/assocs.html
[Sequelize Migrations Docs]: https://sequelize.org/master/manual/query-interface.html
[Sequelize Associations Cheatsheet]: ./sequelize-associations.md
[Sequelize Migrations Cheatsheet]: ./sequelize-migrations.md
[Pets Walkthrough]: ./pets-walkthrough.md