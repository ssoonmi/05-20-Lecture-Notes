# Data APIs With Express

## ReST

- **Re**presentational **S**tate **T**ransfer
- Constraints: (only 3 of them listed out of 6)
    1. **Decoupled client-server**: client and server can evolve separately 
      without any dependence on one another.
    2. **Stateless**: No necessary session between the client and the server. 
      Data received from the server can be used by the client independently. 
      HTTP operations are intended to be independent and short-lived.
    3. **Uniform interface**: Each endpoint is meant to be self-describing
      and uniform in their definition. 
          - Each operation is intended to be separated by a separate endpoint or
            URL. 
          - Use the classic CRUD (Create, Read, Update, Delete) operations 
            against a resource that just happens to be in your data model. 
            Allows developers to easily learn the usage pattern of each API.

  

## ReSTful API Endpoints

- Three kinds of URLs
    - Collection Resource URL
        - ex: `/pets`
    - Single Resource URL
        - ex: `/pets/:id`
    - Nested Collections Resource URL
        - ex: `/pets/:id/owners`

Example Endpoints

- GET /pets - gets a list of pets
- GET /pets/:id - gets information about a single pet
- GET /pets/:id/owners - all the owners of the single pet
- GET /owners/:id/comments - all the comments of that owner
- GET /comments/:commentId - get a single comment (redundant to nest under owners)

- GET /pets/new - HTML form for creating a pet
- POST /pets/new - HTML adding a single pet
- POST /pets - JSON adding a single pet
- PUT /pets/:id - editing a single pet
- DELETE /pets/:id - deleting a single pet

- DELETE /pets - deleting many pets
- DELETE /owners/:id/pets - deleting all the pets for a single owner

- GET /owners/:id/pets