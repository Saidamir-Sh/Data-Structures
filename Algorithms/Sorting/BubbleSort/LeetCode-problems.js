// Problem : Majority Element
// https://leetcode.com/problems/majority-element/description/
// https://leetcode.com/problems/majority-element/solutions/3676530/3-method-s-beats-100-c-java-python-beginner-friendly/
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

// Problem : Sort Colors
// https://leetcode.com/problems/sort-colors/
var sortColors = function(nums) {
    let len = nums.length;
    let checked;
    do {
        checked = false
        for(let i = 0; i < len; i++) {
            if(nums[i] > nums[i+1]) {
                let temp = nums[i]
                nums[i] = nums[i + 1]
                nums[i + 1] = temp
                checked = true
            }
        }
    } while(checked)
    return nums
};

// Problem: Contains Duplicate
// https://leetcode.com/problems/contains-duplicate/description/
var containsDuplicate = function(nums) {
    const set = new Set(nums)
    return set.size !== nums.length
 };

//  https://leetcode.com/problems/merge-sorted-array/description/
var merge = function(nums1, m, nums2, n) {
    for(let j = m, i = 0; i < n; j++, i++) {
        nums1[j] = nums2[i]
    }  
    nums1.sort((a, b) => a-b)
};