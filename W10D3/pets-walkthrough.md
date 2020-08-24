# Pets Walkthrough

[Database Schema Diagram]

**MAKE SURE TO WRITE OUT ALL THE COMMANDS AND DO NOT COPY PASTE!**

1. Initialize `package.json` to be able to install node packages. 

```
npm init --y
```

1. Install the following node packages:

- `pg`
- `sequelize`
- `sequelize-cli`

This will install sequelize version 6:

```
npm install pg sequelize sequelize-cli
```

If you want, you can install `sequelize` and `sequelize-cli` version 5, which
is the version in the videos, by saying:

```
npm install pg sequelize@5 sequelize-cli@5
```

1. Run `npx sequelize-cli init` to initialize sequelize.

1. Create a database username and password and set those in the `config/config.json`
file.

It should look something like this:
```json
{
  "development": {
    "username": "FILL IN WITH YOUR USERNAME",
    "password": "FILL IN WITH THE PASSWORD",
    "database": "pets_dev",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "seederStorage": "sequelize"
  },
  "test": {
    "username": "FILL IN WITH YOUR USERNAME",
    "password": "FILL IN WITH THE PASSWORD",
    "database": "pets_test",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "seederStorage": "sequelize"
  }
}
```

1. Create the database configured by `config/config.json` by running

```
npx sequelize-cli db:create
```

1. Run the following to generate the migration for creating the PetType table:

```
npx sequelize-cli model:generate --name PetType --attributes type:string
```

1. Edit the migration file generated to make database level validations (constraints).

- Change the `type` of `type` to have a maximum of 50 characters
- Make a NON NULL constraint on the `type` column
- Make a UNIQUE constraint on the `type` column

`type` should look like this:

```javascript
{
  type: {
    allowNull: false,
    type: Sequelize.STRING(50),
    unique: true
  }
}
```

1. Run the migration with:

```
npx sequelize-cli db:migrate
```

Check that the migration ran successfully either in `psql` or in Postbird.

1. Make validations on the model for the `type` column.

We need to make sure that the `type` column on `PetTypes` is a non-empty string.

Initial model validations in `models/pettype.js`:

```javascript
{
  type: DataTypes.STRING
}
```

Should turn into:

```javascript
{
  type: {
    type: DataTypes.STRING,
    validate: {
      notEmpty: true
    }
  }
}
```

1. Create migration and model files for `Owner` with attributes of:
  - `firstName`:`string`
  - `lastName`:`string`

```
npx sequelize-cli model:generate \
  --name Owner \
  --attributes firstName:string,lastName:string
```

1. Make database level validations and constraints for `firstName` and `lastName`.
Both need to be NON NULL with a maximum of 50 characters.

`firstName` and `lastName` should look like this:

```javascript
{
  firstName: {
    allowNull: false,
    type: Sequelize.STRING(50)
  },
  lastName: {
    allowNull: false,
    type: Sequelize.STRING(50)
  }
}
```

1. Run the migration with:

```
npx sequelize-cli db:migrate
```

Check that the migration ran successfully either in `psql` or in Postbird.

1. Create model level validations for `Owner` in the `models/owner.js` file.

Validate that the string for `firstName` and `lastName` can't be empty.

Validations should look like this:

```javascript
{
  firstName: {
    type: DataTypes.String,
    validate: {
      notEmpty: true
    }
  },
  firstName: {
    type: DataTypes.String,
    validate: {
      notEmpty: true
    }
  },
}
```

1. Generate migration and model files for `Pet`. 

```
npx sequelize-cli model:generate \
--name Pet \
--attributes name:string,petTypeId:integer,age:integer
```

1. Make database level validations and constraints in the migrations file

- `name`, `petTypeId`, and `age` are NON NULL
- `name` has max characters of 150
- `petTypeId` has a foreign key constraint and references `"PetTypes"`

Validations should look like this:

```javascript
{
  name: {
    allowNull: false,
    type: Sequelize.STRING(150)
  },
  petTypeId: {
    allowNull: false,
    type: Sequelize.INTEGER,
    references: { model: "PetTypes" }
  },
  age: {
    allowNull: false,
    type: Sequelize.INTEGER
  }
}
```

1. Migrate the migration

1. Make model level validations in the `models/pet.js` file

- `name` cannot be empty

Validations should look like this:

```javascript
{
  name: {
    type: DataTypes.String,
    validate: {
      notEmpty: true
    }
  },
  petTypeId: DataTypes.INTEGER,
  age: DataTypes.INTEGER
}
```

1. Make the relationship between `Pet` and `PetType`.

Because `Pet` has a foreign key of `PetType`, it belongs to `PetType`. That
means `PetType` has many `Pet`s.

In the static method `associate` on `Pet` model, define a `belongsTo` 
association with `PetType` using the `petTypeId`. 

In the static method `associate` on `PetType` model, define a `hasMany` 
association with `Pet` using the `petTypeId`. 

`Pet` model's `associate` static method should have this in it:

```javascript
Pet.belongsTo(models.PetType, { foreignKey: 'petTypeId' });
```

`PetType` model's `associate` static method should have this in it:

```javascript
PetType.hasMany(models.Pet, { foreignKey: 'petTypeId' });
```

1. Do the following for `PetOwner`
- Generate the migration and model files
  - attributes: `petId` and `ownerId`
- Make database level validations and constraints on the migration file
  - references to `Pets` and `Owners` and NON NULL foreign keys
- Migrate
- No model level validations necessary because only foreign keys on this joins
table

```
npx sequelize-cli model:generate \
--name PetOwner \
--attributes petId:integer,ownerId:integer
```

Database level validations:

```javascript
{
  petId: {
    allowNull: false,
    type: Sequelize.INTEGER,
    references: { model: "Pets" }
  },
  ownerId: {
    allowNull: false,
    type: Sequelize.INTEGER,
    references: { model: "Owners" }
  },
}
```

1. Make the appropriate `belongsTo` and `hasMany` relationships between `Pet`
and `PetOwner` and between `PetOwner` and `PetOwner`.

`PetOwner` model's `associate` static method should have this in it:

```javascript
PetOwner.belongsTo(models.Pet, { foreignKey: 'petId' });
```

`Pet` model's `associate` static method should have this in it:

```javascript
Pet.hasMany(models.PetOwner, { foreignKey: 'petId' });
```

`PetOwner` model's `associate` static method should have this in it:

```javascript
PetOwner.belongsTo(models.Owner, { foreignKey: 'ownerId' });
```

`Owner` model's `associate` static method should have this in it:

```javascript
Owner.hasMany(models.PetOwner, { foreignKey: 'ownerId' });
```

1. Create a `belongsToMany` association between `Pet` and `Owner` through 
`PetOwner`.

`Pet` model's `associate` static method should have this in it:

```javascript
Pet.belongsToMany(models.Owner, { 
  through: models.PetOwner, 
  foreignKey: 'petId', 
  otherKey: 'ownerId'
});
```

`Owner` model's `associate` static method should have this in it:

```javascript
Owner.belongsToMany(models.Pet, { 
  through: models.PetOwner, 
  foreignKey: 'ownerId', 
  otherKey: 'petId'
});
```

1. Generate a seeder file that will seed the `PetType`s.

```
npx sequelize-cli seed:generate --name add-pet-types
```

1. Create `PetType`s with the following `types` in the `add-pet-types` seeder
generated:
- `Bird`
- `Cat`
- `Dog`
- `Elephant`

Inside of the `up` callback function:

```javascript
return queryInterface.bulkInsert('PetTypes', [
  { type: 'Bird', createdAt: new Date(), updatedAt: new Date() },
  { type: 'Cat', createdAt: new Date(), updatedAt: new Date() },
  { type: 'Dog', createdAt: new Date(), updatedAt: new Date() },
  { type: 'Elephant', createdAt: new Date(), updatedAt: new Date() }
])
```

Inside of the `down` callback function (usually optional step):

```javascript
await queryInterface.bulkDelete('PetTypes', {
  type: ['Bird', 'Cat', 'Dog', 'Elephant']
})
```

1. Create a `Pet` manually (without a seeder).

Create a file called `insert.js` and fill it with the following:

```javascript
const { Pet, Owner, sequelize } = require('./models/index');

async function insertNewPetUsingBuild() {
  const fido = Pet.build({
    name: 'Fido',
    age: 4,
    petTypeId: 3 // or whatever id PetType with "Dog" type is
  });

  await fido.save();

  const zaphox = Owner.build({
    firstName: "Zaphox",
    lastName: "Beeblebrox"
  });

  await zaphox.save();

  await zaphox.addPet(fido);
  // await fido.addOwner(zaphox);

  sequelize.close();
}

// async function insertNewPetUsingCreate() {
//   const fido = await Pet.create({
//     name: 'Fido',
//     age: 4,
//     petTypeId: 3 // or whatever id PetType with "Dog" type is
//   });

//   const zaphox = await Owner.create({
//     firstName: "Zaphox",
//     lastName: "Beeblebrox"
//   });

//   await zaphox.addPet(fido);
//   await fido.addOwner(zaphox);

//   sequelize.close();
// }

insertNewPetUsingBuild();
// insertNewPetUsingCreate();
```

To create a pet, you can either run the `insertNewPetUsingBuild` function, or
the `insertNewPetUsingCreate` function.

Run `node insert.js`

1. Update `PetType`'s `type` of `Elephant` to be `Hamster`:

Create a file called `update.js` and insert the following:

```javascript
const { PetType, sequelize } = require('./models/index');

async function updateElephant() {
  const petType = await PetType.findByPk(4); // or whatever id type of Elephant is

  petType.type = "Hamster" // set it to have a new type

  await pettype.save(); // save the changes

  sequelize.close();
}

updateElephant();
```

1. Delete the type of `Bird` and `Cat` in `PetType`:

```javascript
const { PetType, sequelize } = require('./models/index');

async function deleteBirdAndCat() {
  await PetType.destroy({
    where: {
      type: ['Bird', 'Cat']
    }
  });

  sequelize.close();
}

deleteBirdAndCat();
```

[Database Schema Diagram]: https://drawsql.app/app-academy/diagrams/pets#