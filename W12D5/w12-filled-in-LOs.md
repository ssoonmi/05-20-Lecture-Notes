# Week 12 Learning Objectives

## Algorithms

- Define the term authentication
    - Identification of an actor given known credentials
- Define the term authorization
    - Restriction of access to certain actions for an identified actor
- Describe the difference between asymmetric and symmetric cryptographic algorithms
    - symmetric uses one key for both encryption and decryption
    - asymmetric uses two keys, one for encryption, one for decryption
- Describe the difference between cryptographic functions and hash functions
    - crytographic functions are reversible and the original content can be
      decrypted and restored
    - hash functions are irreversible and the original content **cannot** be
      decrypted and restored
    - hash functions also usually include a **cryptographic salt** to add to the
      original content when put through the hash function to make the hash function's outputs more randomized and protect against rainbow attacks
- Identify "strong" vs. "broken" hash functions
    - Current strong hash functions:
        - Argon2
        - PBKDF2
        - Bcrypt
    - Broken hash functions are especially prone to **Rainbow Attacks**:
        - md5
        - SHA1
    - **Rainbow Attack** - an attack on a site that tries to sign into multiple
      users accounts using a table of common passwords to hashes
    - Both md5 and SHA1 are weak algorithms with well-known rainbow tables and should never be used to store sensitive data at rest.
- Recall that **ReST** is an acronym for **Representational State Transfer**
    
## ReSTful Endpoints

- stateless
- **THERE IS NO RESTFUL STANDARD!!!**
- Identify and describe the RESTful meanings of the combinations of HTTP verbs and endpoint types for both HTML-based applications and APIs
    - HTTP verbs: GET, POST, PUT, PATCH, and DELETE
    - Endpoint types: collections of resources and singular resources
      | Method | Meaning                      |
      |--------|------------------------------|
      | GET    | Get one or some resources    |
      | POST   | Create a resource            |
      | PUT    | Update a resource            |
      | DELETE | Delete one or some resources |
    - Singular resource: `/tasks/:id`
    - Collection of a resource: `/tasks`
    - `POST /tasks` is actually conventionally used for creating a single resource
    - KNOW HOW TO CREATE THESE BASED ON A GIVEN PURPOSE

## Middlewares

### CORS

- **CORS** - Cross-Site Resource Sharing
- Allow requests to come from places of origin other than the server's url origin
- **cors** - package for implementing cross-site resource sharing

### Bearer Token

- **express-bearer-token** - package for extracting bearer tokens from a request in express 

### JSON Web Token

- 3 Parts to a JWT:
    - Header - holds information about how JWT was signed, e.g. the algorithm used
    - Payload - data of the JWT
    - Signature - verifies that the origin of the JWT is the one who signed it
- Describe the components of a JSON Web Token (JWT) and how it is constructed
- Header and payload are base64 encoded and can be easily decoded by anyone
  without the secret
- Auth tokens are used in the processes of:
    - identification
    - authentication
    - authorization
- **jsonwebtoken** - package for signing, decoding, and verifying JWT's
- `jwt.sign(payload, secret)` - creates a JWT with the given `payload` and creates
  a signature with the `secret`
- `jwt.decode(token)` - decodes the `token` and returns the `payload` 
  (doesn't need secret)
- `jwt.verify(token, secret)` - verifies that the JWT was signed with the given  
  `secret` and, if so, returns the `payload`. Otherwise throws an error

### `express.json`

- middleware for parsing the body of an HTTP request that has a `Content-Type`
  of `application/json`

### `express.urlencoded`

- middleware for parsing the body of an HTTP request that has a `Content-Type`
  of `application/x-www-form-urlencoded`

## OAuth 2.0

- Protocol for authenticating users via a trusted 3rd party