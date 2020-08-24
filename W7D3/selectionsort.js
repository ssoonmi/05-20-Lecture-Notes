function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    swap(arr, i, minIndex);
  }
  return arr;
}

// O(n^2) polynomial/quadratic time complexity
// O(1) constant space complexity

// quadratic means n^2
// polynomial means n^m where m > 1