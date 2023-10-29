// You are given a 0-indexed integer array nums, where nums[i] represents the score of the ith student. You are also given an integer k.
// Pick the scores of any k students from the array so that the difference between the highest and the lowest of the k scores is minimized.
// Return the minimum possible difference.

// Example 1:

// Input: nums = [90], k = 1
// Output: 0
// Explanation: There is one way to pick score(s) of one student:
// - [90]. The difference between the highest and lowest score is 90 - 90 = 0.
// The minimum possible difference is 0.
// Example 2:

// Input: nums = [9,4,1,7], k = 2
// Output: 2
// Explanation: There are six ways to pick score(s) of two students:
// - [9,4,1,7]. The difference between the highest and lowest score is 9 - 4 = 5.
// - [9,4,1,7]. The difference between the highest and lowest score is 9 - 1 = 8.
// - [9,4,1,7]. The difference between the highest and lowest score is 9 - 7 = 2.
// - [9,4,1,7]. The difference between the highest and lowest score is 4 - 1 = 3.
// - [9,4,1,7]. The difference between the highest and lowest score is 7 - 4 = 3.
// - [9,4,1,7]. The difference between the highest and lowest score is 7 - 1 = 6.
// The minimum possible difference is 2.

// Constraints:

// 1 <= k <= nums.length <= 1000
// 0 <= nums[i] <= 105

// Solution
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    // sort the array, so in every window size we can calculate the min diff by subtracting right most element and left most element
    nums.sort((a, b) => a - b);
    // to find the min difference we subtract nums[0] from nums[k-1], [k-1] because our array is 0-indexed
    let minDiff = nums[k - 1] - nums[0]

    if (nums.length === 1) return 0;
    //  0, 1, 2, 3, 4, 5, 6, 7, 8, 8 
    // [9, 4, 1, 7, 3, 2, 5, 6, 7, 8],   k = 3
    for(let i = k; i < nums.length; i++) {
        // nums[i] - nums[i-k+1] because we have recalculate the min diff with the new window size, new window size start from k, first it is calculated with nums[k-1] - nums[0]
        minDiff = Math.min(minDiff, nums[i] - nums[i-k+1])
    }

    return minDiff
};