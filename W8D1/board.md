- input: two sets of arrays 
- not unique in each set ex: [3, 3, 3]
- output: all intersections between the input sets, possibly an array

ex: [3, 4, 5] and [2, 4, 7] => [4]
ex: [2, 2, 4, 4, 5] and [2, 3, 4] => [2, 4]

for each element in first array, check if it's included in the second, if it is, push into result array.

// arr1 = [3, 4, 5] and arr2 = [2, 4, 7]
function aIntersect(arr1, arr2) { 
  const res = new Set();

  const obj2 = {};
  for (let j = 0; j < arr2.length; j++) {
    const ele2 = arr2[j];
    obj2[ele2] = true;
  }

  for (let i = 0; i < arr1.length; i++) { // i = 2
    const ele1 = arr1[i]; // ele1 = 5
    if the element is included in the second array then push into result
  }
  return res; // [4]
}

// n is the length of arr1
// m is the length of arr2
// O(n * m) time complexity
// space complexity O(m) where m < n

// O(n) time complexity where n > m