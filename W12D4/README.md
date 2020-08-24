# JSON Web Tokens and OAuth 2.0

## JWT - JSON Web Token

- Used for defining a user session
- Usually stored in the cookie of the browser and used to identify the user as
  being logged in if they have a valid JWT in a cookie sent with each request

- JWT looks like this: 

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJoZWxsbyI6IndvcmxkIiwiaWF0IjoxNTk2NzQwNzMxLCJleHAiOjE1OTczNDU1MzF9.WinUSEByeSpd_S9fARviDPPrHVnSNCFxHvw20p3jbCM
```

- 3 Parts to a JWT separated by periods `.`
    - **Header** - defines a JWT
        - ex: `{ alg: "hs256", typ: "JWT" }`
    - **Payload** - data that JWT holds
    - **Signature** - used for verifying that the issuer of the JWT is the one who
      holds the **Secret Key**

[JWT Lecture code]

[Token-based Auth Code]

## OAuth 2.0 Demo

- Able to authenticate a user using a third-party OAuth provider
- Use an OAuth provider's authentication to secure username/password 
  combinations instead of storing them yourself

[OAuth 2.0 Demo Code]

[OAuth 2.0 Demo Code]: ./oauth-demo
[JWT Lecture code]: ./jwt-demo.js
[Token-based Auth Code]: ./token-based-auth-walkthrough