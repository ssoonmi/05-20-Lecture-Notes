function isPalindrome(str) {
  // half the problem: check the element at the position i from the start and i from the end
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - i - 1]) return false;
  }
  return true;
}

// O(n) time
// O(1) space

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("acapella")); // false

Array.prototype.myMap = function(cb) {
  const res = [];
  this.forEach((el, i, arr) => {
    res.push(cb(el, i, arr));
  });
  return res;
};

// O(n) time
// O(n) space

// original map
console.log([2, 3, 4].map(el => el + 2)); // [4, 5, 6]
// myMap
console.log([2, 3, 4].myMap(el => el + 2)); // [4, 5, 6]

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const midIdx = Math.floor(arr.length / 2);
  const left = arr.slice(0, midIdx);
  const right = arr.slice(midIdx);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const res = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    const firstLeft = left[i];
    const firstRight = right[j];
    if (firstLeft < firstRight) {
      res.push(left[i]);
      i++;
    } else {
      res.push(right[j]);
      j++;
    }
  }
  while (i < left.length) {
    res.push(left[i]);
    i++;
  }
  while (j < right.length) {
    res.push(right[j]);
    j++;
  }
  return res;
}

// O(n log n) time
// O(n) space (amount of total space is the sum of all the lengths of the arrays created)

console.log(mergeSort([8, 4, 2, 3, 1, 9, 5, 7, 6])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

function bSearchWithIndexes(arr, target, startIdx = 0, endIdx) { // array is sorted
  if (endIdx === undefined) endIdx = arr.length - 1;
  if (endIdx < startIdx) return null;

  const midIdx = Math.floor((endIdx - startIdx) / 2) + startIdx;
  const mid = arr[midIdx];

  if (mid === target) return midIdx;
  else if (target < mid) return bSearchWithIndexes(arr, target, startIdx, midIdx - 1);
  else if (target > mid) return bSearchWithIndexes(arr, target, midIdx + 1, endIdx);
}

// O(log n) time
// O(log n) space (the amount of stack frames)

console.log(bSearchWithIndexes([1, 2, 3, 4, 5, 6, 7, 8, 9], 7)); // 6
console.log(bSearchWithIndexes([1, 2, 3, 4, 5, 6, 7, 8, 9], 0)); // null

function productify(arr) {
  let allProduct = 1;

  for (let i = 0; i < arr.length; i++) {
    allProduct *= arr[i];
  }

  const res = [];
  for (let j = 0; j < arr.length; j++) {
    res.push(allProduct / arr[j]);
  }

  return res;
}

// O(n) time
// O(n) space

console.log(productify([3, 4, 5])); // [20, 15, 12]

function attendanceRecord(str) {
  let holdConsecutiveLates = 0;
  let countAbsences = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'L') {
      holdConsecutiveLates++;
      if (holdConsecutiveLates > 2) return false;
    } else if (str[i] === 'A') {
      countAbsences++;
      if (countAbsences > 1) return false;
    } else {
      holdConsecutiveLates = 0;
    }
  }
  return true;
}

// O(n) time
// O(1) space

console.log(attendanceRecord('PLLP')); // true
console.log(attendanceRecord("PLLLP")); // false
console.log(attendanceRecord("A")); // true

function missingNumber(arr) {
  const countArr = [];

  for (let i = 0; i < arr.length; i++) {
    countArr[arr[i]] = true;
  }

  for (let j = 0; j < countArr.length; j++) {
    if (!countArr[j]) return j;
  }
  return countArr.length;
}

// O(n) time
// O(n) space

console.log(missingNumber([3, 5, 0, 4, 1])); // 2
console.log(missingNumber([3, 5, 0, 4, 1, 2])); // 6 (no missing numbers should return next number)