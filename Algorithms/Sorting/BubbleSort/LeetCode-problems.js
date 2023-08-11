// https://leetcode.com/problems/majority-element/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let len = nums.length
    let checked
    do {
        checked = false
        for(let i = 0; i < len; i++) {
            if(nums[i] > nums[i+1]) {
                let temp = nums[i]
                nums[i] = nums[i+1]
                nums[i+1] = temp
                checked = true
            }
        }
    } while(checked)
    return nums[Math.floor(nums.length / 2)]
};