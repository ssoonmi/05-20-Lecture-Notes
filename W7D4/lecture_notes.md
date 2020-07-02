# Lists, Stacks, and Queues

## Learning Objectives

1. Explain and implement a List
2. Explain and implement a Stack
3. Explain and implement a Queue

## Abstract Data Types

>In computer science, an abstract data type (ADT) is a mathematical model for data types. An abstract data type is defined by its behavior (semantics) from the point of view of a user, of the data, specifically in terms of possible values, possible operations on data of this type, and the behavior of these operations. This mathematical model contrasts with data structures, which are concrete representations of data, and are the point of view of an implementer, not a user.
>Formally, an ADT may be defined as a "class of objects whose logical behavior is defined by a set of values and a set of operations"

*--- Wikipedia*

[Linked] Lists, Stacks, and Queues are examples of ADTs.  Other important ADTs that you will encounter are *Sets*, *Multi-Sets* (aka *Bags*), *Maps*, and *Multi-Maps*.  As JavaScript arrays can be used to implement Lists, Stacks and Queues, so JavaScript objects can be used to implement Sets (as keys), Maps (as key/value pairs), and Multi-Sets and Multi-Maps (by mapping keys to a count or an array of values, respectively).

Every higher-level programming language will generally provide some basic implementation of the common ADTs, and will also provide features that you can use to implement your own - though the latter are mostly useful for passing assessments and technical interviews!

## Linked List

A Linked List is a data structure that represents a linear sequence of *vertices* (*nodes*) that has three properties:

1. `head`: The first node in the list
2. `tail`: The last node in the list
3. `length`: The number of nodes in the list

List nodes have particular properties:

* `value`: The value associated with this node
* `next`: The next node in the list
* `previous`: in doubly-linked lists, the prior node in the list

Linked lists contain ordered data, like an array.  The difference lies in how these two ADTs are implemented; in an array the elements are logically (but not necessicarily physically!) *adjacent*; in a linked list they are isolated in distinct nodes that are connected by a chain of *references*.

The homework suggests that linked lists have "no indices, and no random access" - this is not quite the full story, since if you think about it you should see that (a) you certainly could implement indices and random access on a linked list, and that (b) while an array can be indexed in O(1) time, a linked list will have a time complexity of O(n).

Often when you code any of these ADTs you will end up creating two classes that work together; a *Node* class that represents the vertices of the ADT, and an owner class - generically called a *Container* - that will manage its own collection of zero or more Nodes.

The homework mentions singly and doubly-linked lists, as well as circularly linked lists.  "Multiply-Linked" lists are also mentioned but not described; as the geometry of the graph deviates from linearity it is increasingly difficult to describe the corresponding ADT as a "list".

The homework also mentions typical generic operations that are implemented on linked lists: *Insertion*, *Deletion*, *Search* [by value], *Read*/*Write Access* to a selected node, and *Size* (or length) on the container itself.

As mentioned in the homework, the time complexity of insertion and deletion operations on a linked list is O(1), while the search and access operations are O(n).  (why?)  The space complexity for linked lists is O(n) in general.

## Stacks and Queues

Stacks and Queues are both linear collections of Nodes or Values.  They can be implemented as Linked Lists or Arrays.  Stacks are *Last In First Out* (**LIFO**) data structures; Queues are *First In First Out* (**FIFO**).

Stacks are said to have a 'top'; Nodes or Values (depending on implementation) are pushed onto the top, and popped off to remove them.  (The JS Array#push and Array#pop methods can be used to implement a stack).  While there is a 'bottom' to the stack, the bottom node isn't regarded as anything special besides the last item that can be popped.  So a Stack classically has only one active end.

In contrast, a Queue is a data structure with a front and a back, like a line that you might find yourself standing in.  And as with a line you might stand in, generally one end is where new Nodes or Values are added (the back) and the other is where the oldest Nodes or Values are removed (the front).  (Also as in real life, there are reasons why values are pulled from the back - "can't wait this long - I'm giving up!" or added to the front - "this is an EMERGENCY - do it FIRST!" - but these are not the typical use-cases)

As mentioned in the homework, you can use Array#push and Array#shift in JavaScript to implement a simple Queue data structure.  (Can you think of another pair of Array methods you could use?)

Both Stacks and Queues have a length, and in the projects you will maintain these values.  The pure ADTs are length-agnostic; the whole point of these ADTs is that they support insertions and deletions at the expected places in O(1) time.  (Whereas counting the number of items in the list requires...?)  Note also that keeping track of the length of an ADT container by updating an attribute allows us to report the length in O(1) time.

If a Stack or Queue is implemented via a Node type (as you will do in today's projects) the Node will require both a *value* and a *next* property.

For consideration - (a) if there is a *next* property but not a *previous* property, what sort of list is being used to implement a Stack or Queue?  and (b) which direction should *next* point to, in order to minimize the programmatic (and time) complexity of maintaining the underlying list?

Cannonical operations on a Stack are typically `push`, `pop`, and `size`.  For a Queue, the corresponding operations are `enqueue`, `dequeue`, and (yes, you guesed it!) `size`.  (In his lecture, Curtis also mentions a `peek` method for Stacks and Queues, to peek at the Node or Value that is on top of a Stack or the head of a Queue)

If Stacks and Queues are implemented on top of a Linked List, then it should not be surprising that their time complexity behaviors are the same as those of linked lists; O(1) for insertion and deletion, O(n) for access and searches.  As with the underlying list ADT, the space complexity for both Stacks and Queues is proportional to the number of nodes, so O(n).

Both Stacks and Queues are ubiquitous ADTs; the call stack in a running program is an example of a Stack, as is the command history in the shell (or Node), and Browser History functionallity.  Queues are often used when tasks or jobs are scheduled; the text mentions print queues, as well as the lobbies of MPGs.  At the heart of every OS is a job scheduler, and both the Node and Browser JS environment use a task queue to schedule asynchronous execution.

## Lecture

The topics for today are formal concepts from Computer Science - these relate to:

* Data Structures
* Algorithms

Data Structures are *the structure of data*.  We know the concrete data structures *Array*, *Object*, and *String* and *classes* in JS.  But the idea of an *Abstract Data Type* (**ADT**) is about how we can talk about data organization in isolation from the way any particular language implements them.

Sets - for instance - are unordered collections of unique values.  A set has methods to *add*, *remove*, and *query* elements.

Curtis provides an example of implmenting a *Set* on top of an *Array*, but he also mentions that JS has added a *Set* class as of 2016.

Similarly, a *Map* is an ADT that maps a unique collection of keys to a collection of (not necessicarily unique) values.  Maps typically implement *get*, *set* and *delete* methods.

(If you think about it, you can probably see that each namespace in JS is actually a Map, mapping the name of each defined variable onto the value that it represents)

### Why Do These Matter?

Different schemes for storing data have different time and space complexity behavior. Developers chose an ADT that is optimized for the problem to be solved, and then worry about which implementation to use (or develop) once the ADT has been identified. All of this matters more for larger data sets (and less for smaller ones).

Curtis mentions that typically a Stack or Queue will `throw` an `Error` if an attempt is made to `pop` from an empty Stack or `dequeue` from an empty Queue.  (In today's project work this is generally *not* the expected behavior - look at the `spec` tests to determine what behavior is expected from your classes in these cases)

Curtis also discusses the List type, which allows much more flexible access than either Stacks or Queues.  He mentions that the JS Array type is a convenient structure to use to implement a List.  He also points out that the JS Array type can be resized as needed without effort by the programmer, in contrast to array types in many other programming languages.  (Python Lists are analogous to JavaScript Arrays, and do not require any explicit management - but like JS Arrays, this also means that the programmer is at a remove from the very real underlying complexity that still exists when an array has to be reallocated)

## ADTs in Review

* You should know in general what a List, Linked-List, Stack, Queue, Set, and Map are.

* For the Linked-List, Stack and Queue ADTs, you should be familiar with their typical operations, and know what their typical time and space complexities are.
