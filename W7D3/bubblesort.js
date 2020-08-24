function bubbleSort(array) {
  let swapped = true;
  while (swapped) {
    swapped = false;  // reset swap to false

    // this for will perform a single pass
    for (let i = 0; i < array.length; i++) {

      // if the two value are not ordered...
      if (array[i] > array[i + 1]) {

        // swap the two values
        swap(array, i, i + 1);

        // since you made a swap, remember that you did so
        // b/c we should perform another pass after this one
        swapped = true;
      }
    }
  }

  return array;
}

// O(n^2) time complexity
// O(1) space complexity