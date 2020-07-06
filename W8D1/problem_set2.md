# Whiteboarding Problem Set 2

## `isPalindrome`

Write a function that takes a string and returns true if it's a palindrome, false if it's not.

ex: Input of `"acapella"` should output false. Input of `"racecar"` should output true

## `Array#myMap`

Monkey-patch the Array class with a function called `myMap`. Requirement: use `Array#forEach` in the method.

## `mergeSort`

Implement merge sort on an array.

## `binarySearchWithIndexes`

Implement binary search on a sorted array using indexes instead of creating a new array for each side of the binary search.

## `productify`

Given a list of numbers in an array, replace all the numbers with the product of all other numbers. 

ex: Input of `[3, 4, 5]` should ouput `[20, 15, 12]`

Bonus: Do it in O(n) time


## `attendanceRecord`

Given a string that can be any length but comprised of only three letters `A`, `L`, `P`, ex: `"PALLPPA"`. `A` represents absence. `L` represents late. `P` represents present. Return false if there are more than 1 absence **OR** more than 2 **consecutive** lates. Otherwise, return true.

ex: an input of `"PLLP"` would return true. `"PLLLP"` would be false. `"A"` would return true.

## `missingNumber`
If given a scrambled list of n unique integers between 0 and n, return what number is missing.

ex: Input of `[3, 5, 0, 4, 1]` should output `2`

Bonus: Solve it in O(n) time and O(1) space.