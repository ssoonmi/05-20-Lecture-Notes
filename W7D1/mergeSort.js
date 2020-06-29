// For the merge sort, you cut the sort space in half every time.
// In each of those halves, you have to loop through the number of items in the array. 
// This algorithm is log-linear time complexity: O(nlogn)


function merge(leftArray, rightArray) {
    const sorted = [];
    while (leftArray.length > 0 && rightArray.length > 0) {
        const leftItem = leftArray[0];
        const rightItem = rightArray[0];

        if (leftItem > rightItem) {
            sorted.push(rightItem);
            rightArray.shift();
        } else {
            sorted.push(leftItem);
            leftArray.shift();
        }
    }

    while (leftArray.length !== 0) {
        const value = leftArray.shift();
        sorted.push(value);
    }

    while (rightArray.length !== 0) {
        const value = rightArray.shift();
        sorted.push(value);
    }

    return sorted
}

function mergeSort(array) {
    const length = array.length;
    if (length == 1) {
        return array;
    }

    const middleIndex = Math.ceil(length / 2);
    const leftArray = array.slice(0, middleIndex);
    const rightArray = array.slice(middleIndex, length);

    leftArray = mergeSort(leftArray);
    rightArray = mergeSort(rightArray);

    return merge(leftArray, rightArray);
}

