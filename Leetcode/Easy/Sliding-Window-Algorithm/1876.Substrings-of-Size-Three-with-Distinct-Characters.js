// A string is good if there are no repeated characters.
// Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.
// Note that if there are multiple occurrences of the same substring, every occurrence should be counted.
// A substring is a contiguous sequence of characters in a string.

// Example 1:

// Input: s = "xyzzaz"
// Output: 1
// Explanation: There are 4 substrings of size 3: "xyz", "yzz", "zza", and "zaz". 
// The only good substring of length 3 is "xyz".
// Example 2:

// Input: s = "aababcabc"
// Output: 4
// Explanation: There are 7 substrings of size 3: "aab", "aba", "bab", "abc", "bca", "cab", and "abc".
// The good substrings are "abc", "bca", "cab", and "abc".

// Constraints:

// 1 <= s.length <= 100
// s​​​​​​ consists of lowercase English letters.

// Solution:

 /**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    let count = 0;

    // traverse the string until length - 3, because we need substring in the size of 3
    for(let i = 0; i < s.length - 3; i++) {
        // slice the string with length of 3, we need to find a substring that does not have repeated strings
        let subString = s.slice(i, i+3);
        // create a set from the substring we created
        let set = new Set(subString);
        // set by default removes duplicate chars in the substring, since we need substring with length of 3, we can increment the count if the each window sized length is equal to 3
        if(set.size === 3) count++
    }

    return count;
};