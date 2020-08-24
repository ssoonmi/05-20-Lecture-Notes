// Anagrams
// Our goal today is to write a method that determines if two given words are anagrams.
// This means that the letters in one word can be rearranged to form the other word.
// For example:

// anagram("gizmo", "sally")    # => false
// anagram("elvis", "lives")    # => true
// Assume that there is no whitespace or punctuation in the given strings.


// Phase 4;
// Write one more method fourth_anagram.This time, use two objects to store the 
    // number of times each letter appears in both words.
// Compare the resulting objects.

// What is the time complexity ?




//     Bonus : Do it with only one object.

// Discuss the time complexity of your solutions together, then call over your TA to look at them.









function anagrams(str1, str2) {
    if (str1.length !== str2.length) return false;

    let count = {};

    for (let i = 0; i < str1.length; i++) {
        if (count[str1[i]] === undefined) count[str1[i]] = 0;
        count[str1[i]] += 1;

        if (count[str2[i]] === undefined) count[str2[i]] = 0;
        count[str2[i]] -= 1;
        console.log(count);
    }

    // console.log(count);
    return Object.values(count).every(num => {
        return num === 0;
    })
}


const str1 = "asdfgh";
const str2 = "hgfdsa";

// console.log(anagrams(str1, str2));


const str3 = "asdfghh";
const str4 = "hgfdsaa";

console.log(anagrams(str3, str4));