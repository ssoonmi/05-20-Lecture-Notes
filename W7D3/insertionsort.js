function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currElement = arr[i];
    for (var j = i - 1; j >= 0 && currElement < arr[j]; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currElement;
  }
  return arr;
}

// O(n^2) time complexity
// O(n) time complexity best case if almost already sorted
// O(1) space complexity (no new memory allocation)