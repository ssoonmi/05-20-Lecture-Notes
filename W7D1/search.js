function search(array, term) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == term) {
            return i;
        }
    }
    return -1;
}

// The search function below has a linear time complexity O(n)
// When the term is not present, 
    // the search function compares it with all the elements of array one by one. 
// This is the worst case