# Lecture notes

Review full application:

1. Review
  * data model in documentation
  * review structure of app using express-generator
  * review sequelize-generated assets
2. Show and review router for routes/pets.js
3. Show and review templates views/pets/index.pug and views/pets/details.pug
4. Add new data handler for API in app.js

    ```js
    // with imports
    const petsApiRouter = require('./routes/api-pets');

    // with mounted routes
    app.use('/api/pets', petsApiRouter);
    ```

5. Complete new pet API router

    ```js
    const express = require('express');
    const asyncHandler = require('express-async-handler');
    const { Pet, PetType, Owner } = require('../models');
    const router = express.Router();

    /* GET users listing. */
    router.get('/', asyncHandler(async function(_, res) {
      const pets = await Pet.findAll({
        order: ['name'],
        include: [Owner]
      });
      const data = pets.map(pet => ({
        id: pet.id,
        name: pet.name,
        numberOfOwners: pet.Owners.length,
        href: `/pets/${pet.id}`
      }));
      res.json(data);
    }));

    module.exports = router;
    ```

6. Show browser with JSON at http://localhost:8081/api/pets
7. Refactor to repository
  1. Create a new directory "data"
  2. Create a file pet-data.js
  3. Implement the repository pattern

    ```js
    const { Pet, Owner } = require('../models');

    async function all() {
      const pets = await Pet.findAll({
        order: ['name'],
        include: [Owner]
      });
      return pets.map(pet => ({
        id: pet.id,
        name: pet.name,
        numberOfOwners: pet.Owners.length
      }));
    }

    module.exports = {
      all
    };
    ```

  4. Update the api-pets.js file

    ```js
    const express = require('express');
    const asyncHandler = require('express-async-handler');
    const petData = require('../data/pet-data');
    const router = express.Router();

    /* GET users listing. */
    router.get('/', asyncHandler(async function(_, res) {
      const pets = await petData.all();
      res.json(pets);
    }));

    module.exports = router;
    ```

  5. Update the pets.js file

    ```js
    const express = require('express');
    const asyncHandler = require('express-async-handler');
    const { Pet, PetType, Owner } = require('../models');

    const petData = require('../data/pet-data');

    const router = express.Router();

    /* GET users listing. */
    router.get('/', asyncHandler(async function(_, res) {

      const pets = await petData.all();

      res.render('pets/index', { pets })
    }));

    /* GET pet/id listing. */
    router.get('/:id', asyncHandler(async function(req, res) {
      const pet = await Pet.findByPk(req.params.id, {
        include: [Owner, PetType]
      });
      res.render('pets/detail', { pet })
    }));

    module.exports = router;

8. Add the pet-data one method to get one pet.

```js
const { Pet, PetType, Owner } = require('../models');

async function all() {
  const pets = await Pet.findAll({
    order: ['name'],
    include: [Owner]
  });
  return pets.map(pet => ({
    id: pet.id,
    name: pet.name,
    numberOfOwners: pet.Owners.length,
    href: `/pets/${pet.id}`
  }));
}

async function one(id) {
  return await Pet.findByPk(id, {
    include: [Owner, PetType]
  });
}

module.exports = {
  all,
  one
};
```

Replace the uses in both route handlers that need it.
