# Pets

## Set Up

1. Make a database user with access to create databases using the `config/config.json`
credentials:

```
psql -c "CREATE USER pets_app WITH PASSWORD 'password' CREATEDB"
```

1. Create the database

```
npx sequelize-cli db:create
```

1. Migrate the migrations

```
npx sequelize-cli db:migrate
```

1. Seed the database

```
npx sequelize-cli db:seed:all
```

## [Insert]

```javascript
const fido = Pet.build({
  name: 'Fido',
  age: 4,
  petTypeId: 3 // or whatever id PetType with "Dog" type is
});

await fido.save();
```

OR

```javascript
const fido = await Pet.create({
  name: 'Fido',
  age: 4,
  petTypeId: 3 // or whatever id PetType with "Dog" type is
});
```

## [Update]

```javascript
const petType = await PetType.findByPk(4); // or whatever id type of Elephant is

petType.type = "Hamster" // set it to have a new type

await pettype.save(); // save the changes
```

OR

```javascript
const [numUpdated, updatedPetTypes] = await PetType.update({ 
  type: "Hamster"
}, {
  where: { type: "Elephant" },
  returning: true // necessary otherwise updatedPetTypes will be undefined
}); // returns an array, first element is number of updated rows in database, second element is the actual updated instances
```

## [Delete]

```javascript
await PetType.destroy({
  where: {
    type: ['Bird', 'Cat']
  }
});
```

OR finding then deleting one instance:

```javascript
const bird = await PetType.findOne({ 
  where: {
    type: "Bird"
  }
});

await bird.destroy();
```

## [Querying]

```javascript
const { Pet, Owner, PetType, sequelize } = require('./models/index');

//...
await Pet.findByPk(id) // return a Pet instance by its id

await Pet.findOne({ where: { name: 'Fido' } }) // returns a Pet instance by the name of Fido

await Pet.findAll({ where: { ... } }); // returns an array of Pet instances

await Pet.findCreateFind({ where: { ... } }); // returns an array of Pets that are found, if not found, then created
//
```

## [Querying and Including Associations]

```javascript
const { Pet, Owner, PetType, PetOwner, sequelize } = require('./models/index');

//...
await Pet.findByPk(id, { includes: PetType }) // return a Pet instance by its id and includes the PetType

await Pet.findOne({ 
  where: { name: 'Fido' }, 
  includes: [PetType, PetOwner] 
}) // return a Pet instance by the name of 'Fido' and includes the PetType and PetOwner
//
```

## [Transactions]

```javascript
await sequelize.transaction(async (tx) => { // BEGIN TRANSACTION
  const fido = await Pet.findOne({
    where: { name: 'Fido' }
  }, { transaction: tx }); // pass in the transaction object into each database connection

  fido.name = '';

  await fido.save({ transaction: tx });
}); // COMMIT TRANSACTION
```

[Insert]: ./insert.js
[Update]: ./update.js
[Delete]: ./delete.js
[Querying]: ./querying.js
[Querying and Including Associations]: ./associations
[Transactions]: ./transactions.js