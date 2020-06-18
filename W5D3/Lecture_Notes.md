# SOLID OOP - Lecture Notes

---

## Object-Oriented Programming Explained

### Encapsulation

Developers should not need to know how processes are implemented within the classes they reference.  The constructor and instance methods provide the only interface any user should need to know about.

### Inheritance

Instances of prototypes (classes) exhibit the attributes and behavior of those classes and their ancestors.

> JavaScript, in particular, supports a type of inheritance known as **implementation inheritance** through a mechanism known as **prototypal inheritance**. *Implementation inheritance* means that the data and methods defined on a parent class are available on objects created from classes that inherit from those parent classes. *Prototypal inheritance* means that JavaScript uses prototype objects to make its *implementation inheritance* actually work.

#### Inheritance Terminology

* **Parent [Class]** - also **prototype** (JavaScript), or *super class* - the *immediate* ancestor of this object's class or prototype.

* **Base [Class]** - an *ancestor* class - immediate, ultimate, or somewhere between.

NOTE: Often people will use the term *base class* to mean 'the ultimate ancestor class *from the point of view of the part of the project I care about* - which is to say, a *widget* class might be the base class to all of the controls in my library, but it still might be derived from a *window* class in the framework I'm using to implement my controls.

* **Child [Class]** - a *descendent* class - immediate, final, or somewhere between.

* **Subtype** - as **classes** are often called *"user defined types"*, the process of creating a derived class is often called "subtyping".  Similarly, *base classes* are also sometimes called **supertypes**.

Classes higher in a class heirarchy are said to be more *general*; the process of identifying common features across one's code and producing these more basic classes is called *generalization*.  Classes lower in a heirarchy are conversely more *derived* or *specialized*, and the process of producing them is called *specialization* (or *derivation*, or *subtyping*)

### Polymorphism

Polymorphism relates to the ability of different objects or classes to implement a common behavior in instance-specific ways.  For instance, a collection of *Shape* classes might each implement a `draw` method, each in a shape-appropriate way.  Or a collection of *Animal* classes might each implement a `sound(adjective)` method.  In strongly typed languages, these classes would all be derived from a common *Shape* or *Animal* base class; Python and JavaScript, on the other hand, implement *"duck typing"* (*"if it looks like a duck..."*) which means that any class that implements a method called `draw` or `sound(adjective)` can be called without need for a common ancestor.

***Monkey Patching*** is a term related to *polymorphism*, where a class, prototype or object is given new behavior at run time by adding methods that override default behavior.

---

## Video: The Single Responsibility Principle

The *Single-Responsibility Principle* (SRP) - this is the first of a series on **Object Oriented** ***Design*** **Principles**.

This approach does not apply *only* to classes - do one thing and do it well - the "UNIX" philosophy.

### Alternative Statements of the SRP

* Have only one reason to change a class
* Put like behavior together

Curtis provides an example in the form of an *invoice*.  Two kinds of line items, *expenses* and *fees*, are then attached as *line items*.

NOTE: the behavior of the *expense* class and the *fee* class could be further generalized to a common *lineItem* class.

---

## Video: The Liskov Subsitution Principle

The *Liskov Substitution Principle* (LSP) - this is another of a series on **Object Oriented** ***Design*** **Principles**.

Named for Barbara Liskov - can be summarized as, "don't write dumb methods on your child classes".

### What must be true, in order to comply with this principle:

Generally, *objects should be replaceable with their subtypes*.

**Preconditions** are conditions that must be true before you invoke a method

**Postconditions** are conditions that must be true after you invoke a method

**Invariants** are things that must always be true about the class

* Preconditions cannot be strengthened in a subtype
* Postconditions cannot be weakened in a subtype
* Invariants of the supertype must be preserved in a subtype

Curtis shares an example of a *Square* class that is derived (incorrectly, per the Liskov Substitution Principle) from a *Rectangle* class, as the *Square* class sets the parent *Rectangle* width and heigth to the same value.  The *square* class is theN refactored as an independent class, so that it can have a `setSide` method that reflects its squareness without altering two dimensions on the *Rectangle* class.

Curtis closes with:
* **classes** are about *behavior*
* **inheritance** is about sharing *behavior*
* **LSP** is about *good* behavior

---

## Video: The Law of Demeter

The *Law of Demeter* (LoD) - this is yet another of a series on **Object Oriented** ***Design*** **Principles**.

The **Law of Demeter** promotes loose ***coupling*** *between classes*.

*Coupling* is when one class knows about another class in order to call its methods and properties.

### The LoD Defined:

*A method of an object can only invoke the methods (or use the properties) of the following kinds of objects:*

* methods on the object itself
* any of the objects passed in as parameters to the method
* any object created in the method
* any values stored in the instance variables of the object
* any values stored in global variables

NOTE: The LoD is also refered to as the "one-dot" rule, as one is allowed to invoke `obj.property` but not `obj.relatedObj.property`.

Curtis mentions that the LoD is in particular protecting JavaScript developers from some of the complexities of tracing references in JS code.

---

## Adendum : Homework Commentary

### Using Classes in ES6

Curtis demonstrates how to use compiler errors to write a *stub* for a hypothetical quiz program.

He distinguishes between a *simple* instance variable, and an instance variable that is a container for other objects - the example he gives is an array.  This container-as-instance-variable pattern he refers to as *aggregation*.

He suggests an approach to design that starts with coding possibly related classes separately, and then refactoring them as derived from a common base class, based on any duplicated behavior.

He gives a check list of the terms introduced (in this lecture / ES6)

* Class
* Constructor
* Instance Variables
* Instance Methods
* Aggregation
* Inheritance
