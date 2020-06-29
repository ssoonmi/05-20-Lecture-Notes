
// So, the outer loop runs the number of times of the items in the array.
// For each one of those loops, the inner loop also runs for 
    // the number of items in the array.
// If there are n values in the array, then a loop inside a loop is n * n.
// This has a polynomial time complexity of n squared: O(n^2)





function bubbleSort(items) {
    var length = items.length;
    for (var i = 0; i < length; i++) {
        for (var j = 0; j < (length - i - 1); j++) {
            if (items[j] > items[j + 1]) {
                var tmp = items[j];
                items[j] = items[j + 1];
                items[j + 1] = tmp;
            }
        }
    }
}














