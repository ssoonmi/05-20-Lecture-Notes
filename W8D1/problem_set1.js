function sumRec(arr) {
  // base case: when no elements in array, sum of all elements is 0
  if (!arr.length) return 0;
  return arr.pop() + sumRec(arr);
}

console.log(sumRec([2, 3, 4])); // 9

// There are many ways you can shuffle a collection. 
// Imagine shuffling a deck of cards, how do you know when to stop shuffling?
// This implementation is moving cards n number of times where n is the length of the array
Array.prototype.shuffle = function() {
  // const arr = this.slice(); // duplicate if returning a new array
  for (let i = 0; i < this.length; i++) {
    const randomIndex = Math.floor(Math.random() * this.length);
    [this[i], this[randomIndex]] = [this[randomIndex], this[i]];
    // [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
    
  }
  return this;
  // return arr;
};

console.log([1, 2, 3, 4, 5, 6, 7, 8, 9].shuffle());

// Without using sets
function pairSum(arr, k) {
  const seen = {};
  arr.forEach(ele => {
    seen[ele] = false;
  })
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const possiblePair = k - num;
    if (seen.hasOwnProperty(possiblePair)) {
      if (possiblePair === Math.min(possiblePair, num)) {
        seen[possiblePair] = true;
      } else {
        seen[num] = true;
      }
    } else {
      delete seen[num];
    }
  }
  const res = [];
  for (let num in seen) {
    if (seen[num]) {
      res.push([Number(num), k - num]);
    }
  }
  return res;
}

// Using Sets
function pairSumWithSets(arr, k) {
  const set = new Set(arr);
  const seen = new Set();
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const possiblePair = k - num;
    if (set.has(possiblePair)) {
      seen.add(Math.min(possiblePair, num));
    }
  }
  const res = [];
  seen.forEach(num => {
    res.push([num, k - num]);
  });
  return res;
}

console.log(pairSum([3, 5, 6, 2], 8)); // [[3, 5], [2, 6]]

function bSearch(arr, target) { // array is sorted
  if (arr.length === 0) return null;
  const midIdx = Math.floor(arr.length / 2);
  const mid = arr[midIdx];

  if (mid === target) return midIdx;
  else if (target < mid) {
    const left = arr.slice(0, midIdx);
    return bSearch(left, target);
  }
  else if (target > mid) {
    const right = arr.slice(midIdx + 1);
    const rightBSearch = bSearch(right, target);
    if (rightBSearch === null) return null;
    else return rightBSearch + midIdx + 1;
  }
}

console.log(bSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 7)); // 6
console.log(bSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 0)); // null