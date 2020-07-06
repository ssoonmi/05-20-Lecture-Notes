function binarySearch(array, target) {
  if (array.length === 0) {
    return false;
  }

  let midIdx = Math.floor(array.length / 2);
  
  if (target < array[midIdx]) {
    let leftHalf = array.slice(0, midIdx);

    return binarySearch(leftHalf, target);
  } else if (target > array[midIdx]) {
    let rightHalf = array.slice(midIdx + 1);

    return binarySearch(rightHalf, target);
  } else {
    return true;
  }
}

// 
// O(logn) logarithmic time complexity
// O(1) space complexity