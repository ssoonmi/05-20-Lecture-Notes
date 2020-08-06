# Authentication

## Symmetric vs Asymmetric Cryptographic Algorithms

- both are reversible
- Symmetric encryption uses one key for both encryption and decryption
- Asymmetric encryption uses public key for encryption and a private key for decryption.

## Hashing Cryptographic Algorithms

- process is irreversible because some information gets lost on the way
- information that's going through will turn out to be the same every time

- [PBKDF2 Demo]
- [BCrypt Demo]
- [Argon2 Demo]

## Authentication - who

- username and password
- secret code in a text or an app

### Session-based Authentication

- sign up/login with username/password combination
- after signing up or logging in, a unique identifier is stored on the server
  and gets sent to the client as a session cookie. Whenever a request is made
  using that client that unique identifier is used to identify a user on the
  server

## Authorization - what

- lock down the actions you're allowed to perform based on the priveleges you've received
- checks to see who the user is based on authentication method used (like 
  session-based authentication) and checks to see if that user is authorized
  to do a specific action on a request
- **RBAC** - Role-Based Action Control

# Flow

- make user log in
- confirm the username/password combination
- give the user an id saying that they are authenticated
- user needs to present that id whenever they want to do something that's restricted
    - create a post in their name
- express confirms that the user is authorized using this id

## Learning Objectives

- Define the term authentication
- Describe the difference between asymmetric and symmetric cryptographic algorithms
    - Symmetric encryption uses one key for both encryption and decryption
    - Asymmetric encryption uses public key for encryption and a private key for decryption.
- Identify "strong" vs. "broken" hash functions
- Implement session-based authentication in an Express application
- Implement a strong hash function to securely store passwords
- Describe and use the different security options for cookies

[PBKDF2 Demo]: ./pbkdf2.js
[BCrypt Demo]: ./bcrypt.js
[Argon2 Demo]: ./argon2.js