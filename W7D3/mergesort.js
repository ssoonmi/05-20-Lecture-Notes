function merge(array1, array2) { // assuming they are sorted arr1 = [] arr2 = [5,6,7]
  let merged = []; // [2, 4, 5, 6, 7]

  while (array1.length && array2.length) {
    let ele1 = array1[0];
    let ele2 = array2[0];

    let next;
    if (ele1 < ele2) {
      next = array1.shift();
    } else {
      next = array2.shift();
    }

    merged.push(next);
  }

  return merged.concat(array1, array2);
}


// calling mergeSort log(n) times
// per mergeSort, making how much space? O(n)
// per mergeSort, how many operations we are making? O(n)
function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let midIdx = Math.floor(array.length / 2);
  let leftHalf = array.slice(0, midIdx);
  let rightHalf = array.slice(midIdx);

  let sortedLeft = mergeSort(leftHalf);
  let sortedRight = mergeSort(rightHalf);

  return merge(sortedLeft, sortedRight);
}
// O(n * logn) time AND space complexity // quasilinear