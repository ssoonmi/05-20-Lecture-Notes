# a/A Online May 2020 - Week 19 Day 5 - Microservices

## I. Homework Topics

### A. Learning Objectives

**Microservices Objectives**

Microservices is an approach to designing and implementing applications that emerged over time as an alternative to monolithic architectures as developers yearned for a better way to create and maintain large applications. When you complete this lesson, you should be able to

* Describe what a monolithic application is
* Describe the benefits and challenges of a monolithic architecture
* Describe what a microservice is
* Describe the benefits and challenges of a microservice-based architecture
* Identify and organize an application's capabilities into a collection of microservices
* Describe the properties of loosely coupled and highly cohesive microservices
* Explain the disadvantages of sharing a database across microservices
* Identify two strategies for introducing a breaking change to a microservice
* Describe the options for creating a UI for a microservices-based application
* Describe the benefits of using Docker to develop microservices-based applications
* Describe how to use Docker Compose to define the services that makeup a microservices-based application

### B. Monolithic Applications

*Monolithic architecture* (literally, a "single stone") is used to describe systems or subsystems that are developed and managed as a single (generally "large") unit.  Borrowing from a wikipedia article:

> In software engineering, a monolithic application describes a software application that is designed without modularity. Modularity is desirable, in general, as it supports reuse of parts of the application logic and also facilitates maintenance by allowing repair or replacement of parts of the application without requiring wholesale replacement.

>...

> In its original use, the term "monolithic" described enormous mainframe applications with no usable modularity. This, in combination with the rapid increase in computational power and therefore rapid increase in the complexity of the problems which could be tackled by software, resulted in unmaintainable systems and the "software crisis".

As presented in the curriculum, we are using this term in a narrower sense, to describe web applications that are built out of distinct broad horizontal components - for example, a single database layer, business logic layer, and presentation layer.  This architecture tends to encourage team specialization, with groups of individuals responsible for one particular layer, extending horizontally across the application.

In response, the microservice-based approach was developed.  Each microservice can be (relatively) independently developed and deployed.  Benefits are: increased implementation flexibility, scalability, and technological diversity.

Microservice-based applications have drawbacks as well - interprocess calls are more expensive than calls within the same layer, and data consistency requires additional coordination not needed in the monolithic approach.  Refactoring changes that impact responsibilities can be significantly more complicated than in the monolithic approach, as can operational considerations.

### C. Microservice Architecture

**capabilities (and not 'data')**

Start by thinking about use-cases - what the app *does* - rather than how these actions are implemented.

The examples provided - capabilities (these appear to be the microservices themselves):

* Customer Support
* Catalog Management
* Order Processing
* User Authentication

And some of the use-cases (activities):

* A customer views products
* A customer searches for a product
* A customer views the detail for a product
* A customer adds a product to their cart
* A customer logs in
* A customer logs out
* A customer registers
* A customer edits their account information
* A customer places an order
* A customer views their order history
* A customer views the status of an order

**Organization**

Each microservice is a complete technology stack containing server-side APIs and databases and *sometimes* client-side UI elements.

**Service boundaries and technology choices**

Because each microservice is its own entity (and is *bounded* by its APIs) each can be implemented with the technologies best suited to the capability that the microservice addresses.

**Modeling a microservice**

* Microservices should be loosely coupled and tightly cohesive.
* Hidden models represent persisted data that is specific and private to this microservice
* Shared models represent persisted data that needs to be shared with other microservices

**Integrating microservices**

* RESTful APIs / GraphQL
* RPC Remote Procedure Call (like gRPC)
* Message Brokers (RabbitMQ)

**Orchestration and Choreography**

* Synchronous and Asynchronous multi-step operations

**Shared Databases**

* Simplifies some aspects of design
* Discouraged due to potential for update inconsistencies and increased coupling
* (Inconsistencies can be mitigated by building the data integrity into the database itself)

**Record references**

stale data is mentioned - solution is to expect the consuming microservice to fetch the data (again) before acting on it.  This has an associated cost - also, it has the potential to produce a "race condition".  (The correct solution is to use the database to enforce transactional consistency if this is critical)

**Handling change**

* don't change the public interface
* be as flexible as possible with incoming data
* Postel's Principle: be conservative in what you do; liberal in what you accept
  * coexist endpoints within the same service (expand/contract or parallel change pattern)
  * introduce a new versioned endpoint
    * `/api/v1/`
    * `/api/v2/`

**Sharing code across microservices**

* write DRY code
* do not produce unnecessary coupling

**Creating user interfaces**

Several different approaches are mentioned:

* API Composition - one UI layer talks to all microservices
  * easiest to implement and make consistent - generally one team does the UI
* UI Fragment Composition - one UI layer talks to UI components in the microservices
  * difficult to make UI consistent
  * difficult to support native mobile applications
* API Gateway or BFF (Backend-For-Frontend)
  * single API Gateway layer marshalls all of the microservices into a consistent API - web/native clients will call into this layer
* Hybrid approach - mix-and-match

### D. Microservices With Docker

(The application partitioning scheme mentioned in the previous section is taken as an example)

(This is a LONG, detailed walk-through - possibly more complex than the projects for the day)

## II. Lectures [0:24]

### A. Microservice Based Applications

**Monolithic Applications**

A monolithic app is one organized in broad horizontal layers.  Ssuch an app needs to be developed with all of the good habits you have learned so far.

typical layers:

* client-side UI
* server-side APIs
* databases

Pros:

* Straightforward testing and deployment
* One developer can make rapid, sweeping changes
* Development tools work well with these projects when they are relatively small

Cons:

* Difficult to manage complexity as application size increases
* Difficult for one developer (new developers!) to understand the application
* Development tools don't work as well as the project scales

**Microservice-Based Applications**

An application can alternatively be built out of _microservices_.  A *microservice* is:

* a small, self-contained service
* contains vertically integrated databases, APIs and sometimes UI components
* is combined with other microservices to create an application
* can be independently updated and deployed

This approach has consequences for the business organziation of the teams producing the application.

Pros:

* Easier change management
* Improved scalability
* Technolgical diversity (also easier to integrate new tech, as existing microservices need not be disrupted)

Cons:

* Performance can be impacted due to increased cost of communication between microservices
* More difficult to maintain data consistency (institutional data dictionaries help here)
* Change management can be difficult
* Operational complexity is increased

### B. Microservices Design

**How to design microservices-based applications**

* think about capabilities rather than data
* loosely coupled; highly cohesive

**Modeling a microservice**

* Shared models - contain shared external data
* Hidden models - contain data that is private to the service

**Integrating microservices**

* RESTful APIs
* gRPC - open source Remote Procedure Call specification
* Message Brokers - make use of notify / subscribe pattern

Different approaches involve synchronous or asynchronous communication protocols.

Shared databases are attractive, but couple independent microservices.

Example - multiple paths to create a record might fail to enforce business rules
(Counter Example - enforce the business rules through database triggers)

Stale data is mentioned - solution is to expect the consuming microservice to fetch the data (again) before acting on it.

**Handling change**

* don't change the public interface
* be as flexible as possible with incoming data
* Postel's Principle: be conservative in what you do; liberal in what you accept
  * coexist endpoints within the same service (expand/contract or parallel change pattern)
  * introduce a new versioned endpoint
    * `/api/v1/`
    * `/api/v2/`

**Sharing code across microservices**

* write DRY code
* do not produce unnecessary coupling

**Creating user interfaces**

Several different approaches are mentioned:

* API Composition - one UI layer talks to all microservices
  * easiest to implement and make consistent - generally one team does the UI
* UI Fragment Composition - one UI layer talks to UI components in the microservices
  * difficult to make UI consistent
  * difficult to support native mobile applications
* API Gateway or BFF (Backend-For-Frontend)
  * single API Gateway layer marshalls all of the microservices into a consistent API - web/native clients will call into this layer
* Hybrid approach - mix-and-match

## III. Microservices Project (Phase 1 and 2) [4:00]

* Build an Express app and put it in a container
* Build a Flask app and put it in a container

## IV. Get Ready For Your Second Group Project

Much of this material has been superceeded by the project expectations that the instructors have prepared.  There is still very good advice about how to approach documenting and decomposing your feature list.
