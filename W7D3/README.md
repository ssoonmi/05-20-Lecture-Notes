# Sorting Algorithms + BSearch

## Bubble Sort
![Bubblesort Gif 1]

![Bubblesort Gif 2]

[Bubble Sort code]

## Insertion Sort
![insertionsort Gif 1]

![insertionsort Gif 2]

[Insertion Sort code]

- a better version of Bubble sort because it makes sure to keep swapping the element to the left until it's in the correct place.

## Selection Sort
![selectionsort Gif 1]

![selectionsort Gif 2]

[Selection Sort code]

- for each element, it finds all the elements to the right of the it that is the minimum value and swaps itself with it if it's less than itself

## Merge Sort
![mergesort Gif 1]

![mergesort Gif 2]

[Merge Sort code]

- splits the elements until you guarantee that the split arrays are sorted (an array with a single element or no elements is always sorted)
- merges the sorted arrays together by examining the least values in each array and adding the lesser one to the merged array

## Quick Sort
![quicksort Gif 1]

![quicksort Gif 2]

[Quick Sort code]

- choose a pivot point(usually the first element) and selects all the elements that are less than it and calls quicksort on that. then selects all elements that are greater than or equal to it and calls quicksort on that.
- then combines the quicksorted version of the elements less than the pivot, the pivot and the quicksorted version of the elements greater than or equal to the pivot

## Binary Search
![binarysearch Gif 1]

[Binary Search code]

- assumes that the input array is already sorted
- searches like looking for a name in the telephone book. Goes to the middle of the telephone book and if the name comes before a name in that page, does the same procedure on the left side of the telephone book. If it comes afterwards, searches the right side of the telephone book.

[Bubblesort Gif 1]: ./bubblesort.gif
[Bubblesort Gif 2]: ./bubblesort2.gif
[Bubble Sort code]: ./bubblesort.js
[insertionsort Gif 1]: ./insertionsort.gif
[insertionsort Gif 2]: ./insertionsort2.gif
[Insertion Sort code]: ./insertionsort.js
[selectionsort Gif 1]: ./selectionsort.gif
[selectionsort Gif 2]: ./selectionsort2.gif
[Selection Sort code]: ./selectionsort.js
[mergesort Gif 1]: ./mergesort.gif
[mergesort Gif 2]: ./mergesort2.gif
[Merge Sort code]: ./mergesort.js
[quicksort Gif 1]: ./quicksort.gif
[quicksort Gif 2]: ./quicksort2.gif
[Quick Sort code]: ./quicksort.js
[binarysearch Gif 1]: ./binarysearch.gif
[Binary Search code]: ./binarysearch.js