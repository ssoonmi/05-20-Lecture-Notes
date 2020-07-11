# Week 8 Learning Objectives

## Binary Trees
1. Explain and implement a Binary Tree.
  - A tree is a collection of nodes and edges between them.
  - It cannot have any cycles, which are edges that form a loop between nodes.
  - We also only consider rooted trees in computer science, which is a tree that has one root node that is able to access all other nodes.
  - For a tree to be a binary tree, each node can have a maximum of two children.
  - It's important to be able to identify and explain tree terminology as well. If given a tree, be able to point out each component.
    - root: The single node of a tree that can access every other node through edges.
    - parent node: A node that is connected to lower nodes in the tree. If a tree only has one node, it is not a parent node because there are no children.
    - child node: A node that is connected to a higher node in the tree. Every node except for the root is a child node of some parent.
    - sibling nodes: Nodes that have the same parent.
    - leaf node: A node that has no children (at the ends of the branches of the tree)
    - internal node: A non-leaf node (aka a parent)
    - path: A series of nodes that can be traveled through edges.
    - subtree: A smaller portion of the original tree. Any node that is not the root node is itself the root of a subtree.
  - Know the basics of each term
    - A non-empty tree has to have a root.
    - A tree doesn't have any parent nodes if there are no children.
    - What's the min/max number of parent and leaf nodes for a tree with 5 nodes?
      - Two extreme implementations:
      ![min-max-nodes-ll.png]
      - Implementing in a chain results in max number of parents and min number of leaves: 4 parents, 1 leaf
      ![min-max-nodes-balanced.png]
      - Implementing as a balanced tree results in min number of parents and max number of leaves: 2 parents, 3 leaves
  - All that we need in order to implement a binary tree is a TreeNode class that can store a value and references to a left and right child. We can create a tree by assigning the left and right properties to point to other TreeNode instances:
  ```javascript
  class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  ```

2. Identify the three types of tree traversals: pre-order, in-order, and post-order.
  - Pre-order: Values are accessed as soon as the node is reached.
  - In-order: Values are accessed after we have fully explored the left but before we explore the right branch.
  - Post-order: Values are accessed after all of our children have been accessed.
  - *Breadth First: The previous three are types of Depth First Traversals. Breadth first accesses values of nodes by level, left to right, top to bottom.
  - Given a tree, be able to determine the order of each traversal type:
    ![Number tree]
    - Breadth First: 20, 9, 24, 7, 11, 23, 27, 3, 10, 17, 36, 30
    - Pre-order: 20, 9, 7, 3, 11, 10, 17, 24, 23, 27, 36, 30
    - In-order: 3, 7, 9, 10, 11, 17, 20, 23, 24, 27, 30, 36
    - Post-order: 3, 7, 10, 17, 11, 9, 23, 30, 36, 27, 24, 20

3. Explain and implement a Binary Search Tree. 
  - A binary search tree is a binary tree with the added stipulation that all values to the left of a node are less than its value and all values to the right are greater than its value.
      - Example of a Binary Search Tree ![Binary Search Tree]
  - Example of a BST with an insert method. You won't be asked to implement a removal:
  ```javascript
  class BST {
    constructor() {
        this.root = null;
    }

    insert(val, currentNode=this.root) {
      if(!this.root) {
        this.root = new TreeNode(val);
        return;
      }

      if (val < currentNode.val) {
        if (!currentNode.left) {
          currentNode.left = new TreeNode(val);
        } else {
          this.insert(val, currentNode.left);
        }
      } else {
        if (!currentNode.right) {
          currentNode.right = new TreeNode(val);
        } else {
          this.insert(val, currentNode.right);
        }
      }
    }
  }
  ```

## Graphs
1. Know the differences between graphs and trees
- A graph can:
  - Consist of any collection of nodes and edges (no limits on connections)
  - Have cycles
  - Have disconnected portions (a forest, with multiple trees, for example)
  - Be missing a root node (don't have to have one node that connects to everything)
- In a tree, we had an idea of children and parents, in a graph we have neighbors (no hierarchy)
2. What are three ways that we can implement a graph? What are each implementations' advantages or disadvantages?
- Adjacency Matrix - 2D Array
  - Visually clear what's going on
  - One axis (outside array) has an entry (inner array) for each node in the graph. If one node is connected to another node in the graph, our entry in the inner array is set to true. Otherwise the entry is false.
  ```javascript
  let matrix = [
  /*          A       B       C       D       E       F   */
  /*A*/    [true,  true,   true,   false,  true,   false],
  /*B*/    [false, true,   false,  false,  false,  false],
  /*C*/    [false, true,   true,   true,   false,  false],
  /*D*/    [false, false,  false,  true,   false,  false],
  /*E*/    [true,  false,  false,  false,  true,   false],
  /*F*/    [false, false,  false,  false,  true,   true]
  ];
  ```
- Adjacency List - POJO
  - Object where every value in the graph has a key
  - Value for the key is an array with each other node that it is connected to (neighbors)
  - Easy to iterate through
  - Doesn't take up as much space as an Adjacency Matrix or Node
  - Can refer to the entire graph by referencing the object
  ```javascript
    let list = {
      a: ['b', 'c', 'e'],
      b: [],
      c: ['b', 'd'],
      d: [],
      e: ['a'],
      f: ['e']
    };
    ```
- Object-Oriented (ex: using Nodes)
  - Similar to our linked list or tree implementations
  - Track the value and the neighbors array as instance variables on the node
  - We don't have a reference to the overall graph with this implementation
  ```javascript
  class GraphNode {
    constructor(val) {
      this.val = val;
      this.neighbors = [];
    }
  }
  ```
3. Given a graph in one of the above implementations, be able to traverse the graph in a breadth-first or depth-first manner.
- We can use recursion or iteration to traverse each node.
- We generally want to keep track of each node that we've visited already so that we don't get trapped in cycles. Easiest way to do this is to keep a Set variable that we update as we traverse to each node.
- The projects from W08D02 and their solutions are a great resource here.
  - Be comfortable with taking either an iterative or a recursive approach to traversing a graph, as well as being able to work with either an adjacency list (like in the friendsOf problem) or a node class (like in the breadthFirstSearch or maxValue problems).
  - Practice taking the implementation that you did in the project and converting it to a different implementation. You probably used recursion for friendsOf, so try using iteration with a stack array, etc.
4. Be able to make conclusions from these traversals
  - Is it possible to get from node A to node B?
    - Here we're really implementing a search, like the breadthFirstSearch problem.
  - What is the maximum/minimum value we can encounter if we start at node X?
    - Instead of returning a boolean, we want to compare values of nodes and return the appropriate value
      - If we do this recursively we can compare this node and to each of its neighbors values and return the maximum up the call stack.
      - If we do this iteratively, we can keep a currentMax variable as we traverse and update it if we find a new max value.
  - etc.

## Network Knowledge
### TCP/IP Model (IP Suite)
1. Given a diagram of the TCP/IP model, be able to label each layer
![tcp-ip-model]
2. Give a brief description of each layer (What is its major concern and an example)
- Application: User-facing data, such as HTTP or FTP (file transfer)
- Transport: Connectivity between clients and servers, such as TCP or UDP
- Internet: Routing between separate networks, such as IP
- Link: Low-level communication between local resources on a network, such as Ethernet
3. How does encapsulation apply to the model?
- Each layer of the model encapsulates the previous.
- For example, the application layer is the data that is being transferred, but the transport layer surrounds this data with transport protocols (such as TCP headers), which are surrounded by IP packets defined by protocols of the internet layer, which are sent along an ethernet cable with standards defined in the link layer.
![encapsulation]

### Internet Protocol
1. What are the main responsibilities of TCP and of IP?
- TCP is responsible for fault-tolerance between networks, allowing for data to be re-sent if it fails to reach its destination
- IP is responsible for the end-to-end nature of networks, allowing data to be sent and received from each host, eliminating a single central system that could take down a whole network
2. What is a packet and what is its general structure?
- Data is sent across networks in small chunks called packets, with headers that have metadata about the packet's destination, contents, etc.
- The packet header always starts with the version number, followed by other metadata fields, then the source and destination addresses
- The TCP segment then follows the IP headers
3. What is the first field in a packet and how is it represented in each version of IP?
- The packet header always starts with the version number, representing either IPv4 or IPv6:
  - IPv4: `0100`, which is 4 in decimal notation
  - IPv6: `0110`, which is 6 in decimal notation
4. Know the two special addresses that we discussed and what they represent.
- Localhost: References the current machine
  - IPv4: 127.0.0.1
  - IPv6: ::1
- All interfaces: Receives all incoming packets on a network
  - IPv4: 0.0.0.0
  - IPv6: ::

### Transport Protocol
1. What is a port?
- Virtual interfaces that the transport protocol uses to determine which application/service our segments are intended for at a destination IP address.
2. What are the two main transport protocols that we discussed? What are the main differences? Give an example use-case for each.
- The two main protocols we discussed are TCP and UDP.
- TCP:
  - TCP is a reliable transport protocol that protects against loss of data and affords consistent connections.
  - Good use case: HTTP, file transfers, media streaming (YouTube, etc.)
- UDP:
  - UDP is an unreliable transport protocol that prioritizes speed. It is connectionless because there are no acknowledgements, just sending of data.
  - Good use case: real-time communication like live video and VoIP, DNS (prioritizing speed here)

### Domain Name System (DNS)
1. What is a domain?
- Domains are the friendly names that we can refer to instead of having to remember IP addresses
2. What is a top-level domain? Subdomain? Know how to parse this information from a URL.
- Top-level domains (TLDs) are the right-most part of the URL before application routes. Moving left we get second-level, third-level, etc., subdomains
- For https://open.appacademy.io/learn/js-py--feb-2020-online/
  - Top-level domain: io
  - Second-level domain: appacademy
  - Third-level domain: open 
3. How are domains tracked? How do we know to associate a domain name with a device?
- Domains are tracked using DNS records in zone files that are maintained by name servers. These records map to IP addresses.
4. There are several common DNS record types; we discussed five important ones. Be familiar with the letters, what they mean, and the use of each record type.
- SOA: Start of Authority. Points to a name server that is the primary authority for the domain. This record is present on every name server.
- NS: Name Servers. Points to name servers for the zone. There will always be at least two name servers per zone for redundancy.
- A / AAAA: Map a resource directly to an IP address. These are the ultimate records that our queries are looking for. `A` records are used for IPv4 addresses and `AAAA` records are used for IPv6 addresses.
- CNAME: Acts as an alias, indicating what resource this domain should also point to. (We often see this with the www subdomain, where a CNAME record for www would exist for google.com, indicating we can request `www.google.com` and get the same response as `google.com`)
- MX: Mail Exchanger. Used to direct messages to a mail server instead of an IP address (allows us to use `@gmail.com` instead of `@123.45.67.89` - which is obviously not the actual address)

### Network Hardware
1. Know the three major network hardware types that we discussed.
- We discussed hubs, switches, and routers.
2. Be able to describe the function of each device and compare/contrast their uses.
- Hub: Layer 1 (Physical Layer) A hub will broadcast to everything that it's connected to. Often considered a 'dumb' device because it just repeats and rebroadcasts data.
- Switch: Layer 2 (Data Link Layer): A switch is able to pass data to a specific device on a network (forward) if it already has a reference (the MAC address of the device), or it can broadcast to all devices (flood) if its MAC address is not in its table yet.
- Router: Layer 3 (Network Layer): A router connects a local network to other networks. A single IP address is used for external communication, then the router can forward to the IP addresses used on the internal network.

## Assessment Format
- 1 hour 40 minute assessment
- ~20 Multiple Choice
- Spec-based problems
  - Problems based on projects you've done this week
- 1-2 Free response
  - 1-2 sentences about the question

[Number tree]: ./number-tree.png
[min-max-nodes-ll.png]: ./min-max-nodes-ll.png
[min-max-nodes-balanced.png]: ./min-max-nodes-balanced.png
[encapsulation]: ./encapsulation.svg
[tcp-ip-model]: ./tcp-ip-model.svg
[Binary Search Tree]: ./binary-search-tree.png