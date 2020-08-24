/**
 * In this file, you will implement the friendsOf function that will calculate
 * the group of friends that a person has a certain distance from them.
 *
 * @param {Object} adjacencyList - The adjacency list that describes the graph,
 * never null or undefined
 * @param {string} name - The name of the person from where you will start your
 * search, never null or undefined
 * @param {number} distance - The distance away that you will traverse to find
 * the person's friends-of list, always a value greater than or equal to 1
 */



// ------------------------------------------------------------------------------------//

// Instructions:

// The set of tests in test/friends-of-spec.js asks you to write a function 
  // named friendsOf that finds the total set of friends a specified distance 
  // away from a person. It will take the following as parameters:

// 1. The adjacency list (which will always be an object with keys that always 
  // have arrays as values)
// 2. The name of the person whose friends you need to return
// 3. The distance away from the person that you'll use to collect the friends 
  // (this value will always be greater than or equal to 1)


// The following table interprets the distance parameter:

// Distance	Meaning
// 1.	Immediate friends
// 2.	Immediate friends and friends of friends
// 3.	Immediate friends, friends of friends, and the friends of friends of friends
// n.	All the people accessible n steps away from the indicated person

// For example, say you had the following dependency graph.

// const graph = {
//   'carrie':  ['humza', 'jun'],
//   'farrah':  ['humza'],
//   'humza':   ['carrie', 'farrah', 'jun', 'silla'],
//   'jun':     ['carrie', 'silla'],
//   'ophelia': ['travis'],
//   'silla':   ['humza', 'yervand'],
//   'travis':  ['ophelia'],
//   'yervand': ['silla'],
// };

// Then, the following table shows the expected results for the person jun at 
  // different distances.

// Distance	List of people returned by friendsOf
// 1	carrie and silla
// 2	carrie, silla, humza, yervand
// 3	carrie, silla, humza, yervand, farrah
// 4	carrie, silla, humza, yervand, farrah


// ---------------------------------------------------------------------------------



// How do we approach the problem?

// 1. Identify what do we want this function to accomplish
  // Finds the total list of friends a specified distance away from a person
  // Traverse a graph and return node values

// 2. Identify parameters
  // 1. The adjacency list 
  // 2. The name of the person whose friends you need to return
  // 3. The distance away from the person

// 3. Identify return values
  // An array of all friends a specified distance away from a person

// 4. Discuss possible methods of attacking the problem.
  // Options: DFS, BFS, post-order, pre-order, in-order
  // DFS for graphs

// 5. If further clarification is needed, consider psuedo-code
  // Utilize iteration and recursion
  // Iterate through each key
  // Invoke recursive helper function on each key
  // Recursive helper function will recrusively called on all children of a node
  // Keep track of distance







function friendsOf(adjacencyList, name, distance) { // graph, 'jun', 2
  if (!(name in adjacencyList)) return undefined;

  let visited = new Set();

  for (let friend of adjacencyList[name]) { // 'carrie'
    friendsOfRecursion(friend, adjacencyList, visited, distance, 0), // 'carrie', graph, {}, 2, 0
  }

  visited.delete(name)
  return Array.from(visited)
}

function friendsOfRecursion(friend, adjacencyList, visited, maxDistance, currentDistance) { 
  // 'carrie', graph, {}, 2, 0 || 'humza', graph, {'carrie'}, 2, 1 
  if (currentDistance >= maxDistance) return;

  visited.add(friend); // {'carrie'}, {'carrie', 'humza'}

  for (let nextFriend of adjacencyList[friend]) { // 'humza' || 'silla'
    friendsOfRecursion(nextFriend, adjacencyList, visited, maxDistance, currentDistance + 1); 
    //'humza', graph, {'carrie'}, 2, 1
  }
}




// const graph = {
//   'carrie':  ['humza', 'jun'],
//   'farrah':  ['humza'],
//   'humza':   ['carrie', 'farrah', 'jun', 'silla'],
//   'jun':     ['carrie', 'silla'],
//   'ophelia': ['travis'],
//   'silla':   ['humza', 'yervand'],
//   'travis':  ['ophelia'],
//   'yervand': ['silla'],
// };


// friendsOfRecursion(target, adjacencyList, visited, maxDistance, currentDistance);
// adjacencyList and maxDistance will stay the same for every stack
// 1st frame,   target = ,    visited = ,   currentDistance = 
// 2nd frame,   target = ,    visited = ,   currentDistance = 
// 3rd frame,   target = ,    visited = ,   currentDistance = 
// 4th frame,   target = ,    visited = ,   currentDistance = 
// 5th frame,   target = ,    visited = ,   currentDistance = 
// 6th frame,   target = ,    visited = ,   currentDistance = 
// 5th frame,   target = ,    visited = ,   currentDistance = 
// 4th frame,   target = ,    visited = ,   currentDistance = 
// 3rd frame,   target = ,    visited = ,   currentDistance = 
// 2nd frame,   target = ,    visited = ,   currentDistance = 
// 1st frame,   target = ,    visited = ,   currentDistance = 
// Final return value: undefined




/******************************************************************************
 * Do not change code beneath this line.
 */
try {
  exports.friendsOf = friendsOf;
} catch (e) {
  exports.friendsOf = () => { throw new Error('Cannot export friendsOf.') };
}
