function quickSort(array) { // n is the length of the input array
  if (array.length <= 1) {
    return array;
  }

  let pivot = array.shift();
  let left = array.filter(el => el < pivot); // O(n) linear
  let right = array.filter(el => el >= pivot);

  let leftSorted = quickSort(left); // O(log n) best case - O(n) worst case
  let rightSorted = quickSort(right);

  return [...leftSorted, pivot, ...rightSorted]; // O(n) linear
}

// O(n log n) time complexity best case
// O(n^2) time complexity worst case - when all the elements are sorted already
// O(n log n) space complexity best case FOR OUR IMPLEMENTATION
// O(n^2) space complexity worse case FOR OUR IMPLEMENTATION

// O(log n) space complexity for IN-PLACE QUICKSORT (BEST IMPLEMENTATION)

// pivot = 3
// array = [4,2,5]
// left = [2]
// right = [4,5]


// O((3n^2*(logn)) - 2n - 5) === O(n^2 * logn)

