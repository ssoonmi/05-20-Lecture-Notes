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
// 4. The following table interprets the distance parameter:

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

// 2. Identify parameters

// 3. Identify return values

// 4. Discuss possible methods of attacking the problem.

// 5. If further clarification is needed, consider psuedo-code







function friendsOf(adjacencyList, target, distance) {

}

function friendsOfRecursion(){
  
}

/******************************************************************************
 * Do not change code beneath this line.
 */
try {
  exports.friendsOf = friendsOf;
} catch (e) {
  exports.friendsOf = () => { throw new Error('Cannot export friendsOf.') };
}
