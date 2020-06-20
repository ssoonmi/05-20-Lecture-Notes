# SOLID OOP - Learning Objectives

## The Three Pillars of Object Oriented Programming

* encapsulation - objects should "mind their own business"
* inheritance - each object is an instance of its class or prototype, as well as all ancestor classes or prototypes
* polymorphism - each object/class/prototype can be assigned attributes and methods that extend the behavior of its ancestors

## The SOLID Principles

(see [SOLID](https://en.wikipedia.org/wiki/SOLID))

* S - Single-Responsibility Principle - *do one thing, and do it right*
* O - Open-Closed Principle - *software should be open to extension, but closed to modification*
* L - Liskov Substitution Principle - *objects should be replaceable with their subtypes*
* I - Interface Segregation Principle - *many client-specific interfaces are better than one general purpose interface*
* D - Dependency Inversion Principle - *one should depend upon abstractions, not concretions*

## How to Apply the Law of Demeter

*A method of an object can only invoke the methods (or use the properties) of the following kinds of objects:*

* methods on the object itself
* any of the objects passed in as parameters to the method
* any object created in the method
* any values stored in the instance variables of the object
* any values stored in global variables

NOTE: This is certainly a good general principle - however there are situations where it is appropriately violated egregiously, most particularly when one uses an ORM (Object-Relational Mapper) like SQL Alchemy or the Django ORM to express complex queries in procedural language.  In those situations, you may legitimately be asking questions about the `player.medication` related to the `player.team.physician.specialty`.
