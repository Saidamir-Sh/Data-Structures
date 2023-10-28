// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

// Example 1:
// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109
// 0 <= k <= 105

// Notes:
// We have to return true if there is 2 similar elements in the array and the difference between their indices is less than 'k'
// We have to store elements in the array with their indices to check if there is such case

// Solution:
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let map = new Map();
    
    // Traverse the array
    for(let i = 0; i < nums.length; i++) {
        // we dont need to check if nums[i] == nums[j] because current element (nums[i]) is already in the map and we are just checking if their differences between indices is less then k, if it is not in the map, map.get() returns undefined, and we set the element to map with its index as value
        if(i - map.get(nums[i]) <= k) {
            return true
        } else {
            // else add the element in map with its index
            map.set(nums[i], i)
        }
    }
};