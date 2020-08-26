# Adding configuration for the API base URL

The `FRUIT_STAND_API_BASE_URL` variable from out thunk example (imported at the top of the `src/actions/fruitActions.js` file) is defined in the `config.js` file:

```javascript
export const FRUIT_STAND_API_BASE_URL = process.env.REACT_APP_FRUIT_STAND_API_BASE_URL;
```


And the `REACT_APP_FRUIT_STAND_API_BASE_URL` environment variable is defined in an `.env` file (located in the root of the React project):

```javascript
`REACT_APP_FRUIT_STAND_API_BASE_URL=http://localhost:8080`
```

Adding configuration for the API base URL keeps you from having to hard-code a value that'll change between environments.