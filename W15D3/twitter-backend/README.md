# Twitter Backend

## Set Up

* `npm install`
* create a user for the database
* create a `.env` file using `.env.example` as an example
* `npx dotenv sequelize db:create`
* `npx dotenv sequelize db:migrate`
* `npx dotenv sequelize db:seed:all`

## ReSTful API

### Tweets

**GET /api/tweets**

* Returns a list of tweets

```js
{
  tweets: [
    { 
      id, 
      message, 
      createdAt, 
      updatedAt, 
      User: { id, username }
    }
  ]
}
```

**GET /api/tweets/:id**

* Returns a single tweet with the `id` in the params

```js
{
  tweet: [
    { 
      id, 
      message, 
      createdAt, 
      updatedAt, 
      User: { id, username }
    }
  ]
}
```

**POST /api/tweets**

* Must be logged in

* Creates a tweet

* Expects a body of:

```js
{
  message
}
```

* Returns the created tweet

```js
{
  tweet: { 
    id, 
    message, 
    createdAt, 
    updatedAt, 
    User: { id, username }
  }
}
```

**DELETE /api/tweets/:id**

* Must be logged in

* Deletes a tweet with 

* If successful, returns a success message

```js
{
  message: "success"
}
```

### Users

**PUT /api/users/token**

* Logs in a user

* Expects a body of:

```js
{
  username,
  password
}
```

* If successful, returns user information and a token

```js
{
  id,
  username
  token
}
```

**DELETE /api/users/session**

* Logs out a user

* If successful, returns a success message

```js
{
  message: "success"
}
```

**GET /api/users/me**

* Must be logged in

* Returns the current user information

```js
{
  id,
  username
}
```

**POST /api/users**

* Signs up a user

* Expects a body of:

```js
{
  username,
  email,
  password,
  password2
}
```

* `password2` is expected to be the same as `password`

* If successful, returns user information and a token

```js
{
  id,
  username
  token
}
```