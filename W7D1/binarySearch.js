// Binary search only works on a sorted array
// With binary search, you cut the search space in half every time. 
// This means that it reduces the number of searches you must do by half, every time. 
// This is function has logarithmic time complexity: O(logn)



function binarySearch(arr, x, start, end) {
    if (start > end) return false;

    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === x) return true;

    if (arr[mid] > x) {
        return binarySearch(arr, x, start, mid - 1);
    } else {
        return binarySearch(arr, x, mid + 1, end);
    }
}



let arr = [1,3,5,7,8,13,15,23,42];

const x = 5;

let start = 0;

let end = arr.length-1; //8














