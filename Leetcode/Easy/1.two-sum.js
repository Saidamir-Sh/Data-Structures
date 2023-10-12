// Topic: [Array, Hash Table]

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// 1. Solution: (brute force)
// Time complexity is O(n^2) since we are checking each pair element in nested loop
var twoSum = function(nums, target) {
    const n = nums.length;

    // create a nested loop in order to check sum of every pair elements is equal to target
    for(let i = 0; i < n; i++) {
        for(let j = i + 1; j > n; j++) {
            if(nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
    return [];
};


// 2. Solution: HashMap
// O(n) - Time complexity since we are using hash map to do lookups, so we just have to loop through once 
var twoSum = function(nums, target) {
    // create a empty hash map to store values in array
    const map = new Map()
    
    // add nums to map
    for(let i = 0; i < nums.length; i++) {
        // divide the target number from nums[i], chech if complement is in map 
        if(map.has(target - nums[i])) {
            // if complement is in map, get that key,value from map and return
            return [map.get(target - nums[i]), i];
        } else {
            // if complement is not in map, keep adding nums[i] to map, so we can build map and keep looking up
            map.set(nums[i], i);
        }
    }
    return []
    
};