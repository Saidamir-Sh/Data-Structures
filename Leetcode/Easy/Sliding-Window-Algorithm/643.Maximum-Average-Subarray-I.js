// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

// Example 1:

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
// Example 2:

// Input: nums = [5], k = 1
// Output: 5.00000

// Constraints:

// n == nums.length
// 1 <= k <= n <= 105
// -104 <= nums[i] <= 104

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */


// Solution:
var findMaxAverage = function(nums, k) {
    let windowSum = 0, maxSum = 0

    // Initiliaze window in size of k
    for(let i = 0; i < k; i++) {
        windowSum += nums[i]
    }

    maxSum = windowSum

    // Traverse the array, start from k since we already calculated first the sum of k numbers in the array
    for(let i = k; i < nums.length; i++) {
        // subtract the element from left most side and add next element to window 
       windowSum = windowSum - nums[i-k] + nums[i]
    //    set the maxSum by comparing current window and previous calculation
       maxSum = Math.max(windowSum, maxSum)
    }

    return maxSum / k
};