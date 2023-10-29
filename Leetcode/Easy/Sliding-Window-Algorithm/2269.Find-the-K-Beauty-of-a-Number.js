// The k-beauty of an integer num is defined as the number of substrings of num when it is read as a string that meet the following conditions:

// It has a length of k.
// It is a divisor of num.
// Given integers num and k, return the k-beauty of num.

// Note:

// Leading zeros are allowed.
// 0 is not a divisor of any value.
// A substring is a contiguous sequence of characters in a string.

// Example 1:

// Input: num = 240, k = 2
// Output: 2
// Explanation: The following are the substrings of num of length k:
// - "24" from "240": 24 is a divisor of 240.
// - "40" from "240": 40 is a divisor of 240.
// Therefore, the k-beauty is 2.
// Example 2:

// Input: num = 430043, k = 2
// Output: 2
// Explanation: The following are the substrings of num of length k:
// - "43" from "430043": 43 is a divisor of 430043.
// - "30" from "430043": 30 is not a divisor of 430043.
// - "00" from "430043": 0 is not a divisor of 430043.
// - "04" from "430043": 4 is not a divisor of 430043.
// - "43" from "430043": 43 is a divisor of 430043.
// Therefore, the k-beauty is 2.

// Constraints:

// 1 <= num <= 109
// 1 <= k <= num.length (taking num as a string)

// 1. Solution:
/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function(num, k) {
    // convert the number to string
    let stringNum = num.toString()
    let kBeauty = 0

    // traverse the link until length - k, because we have a bound , window size is k
    for(let i = 0; i < stringNum.length-k; i++) {
        // create a divisor by slicing the window in the size of k on every loop
        let divisor = parseInt(stringNum.slice(i, i+k))
        // check if it is divisor, if it is increment the counter of kBeauty
        if(num % divisor === 0) {
            kBeauty++
        }
    }

    return kBeauty;
};


// 2. Solution:
/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function(num, k) {
    let sNum = num.toString()
    let kBeauty = 0
    let subNum = ''
    // first check string number
    if(sNum.length < k) return 0

    // initialize the window in k size, store the values within window size
    for(let i = 0; i < k; i++) {
        subNum += sNum[i]
    }

    // check if our current window value is divisor, if it is, then increment the kBeauty
    if (num % parseInt(subNum) === 0) kBeauty++

    // traverse the string number, and slide the window
    for(let i = k; i < sNum.length; i++) {
        // remove the char from left most side
        subNum = subNum.slice(1)
        // add the next value to window size
        subNum += sNum[i]
        // after removing the char from left and adding the next element, recheck the condition for kBeauty
        if (num % parseInt(subNum) === 0) kBeauty++
    }

    return kBeauty
    
};