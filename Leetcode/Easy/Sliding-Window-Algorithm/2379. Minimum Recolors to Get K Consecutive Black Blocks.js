// You are given a 0-indexed string blocks of length n, where blocks[i] is either 'W' or 'B', representing the color of the ith block. The characters 'W' and 'B' denote the colors white and black, respectively.
// You are also given an integer k, which is the desired number of consecutive black blocks.
// In one operation, you can recolor a white block such that it becomes a black block.
// Return the minimum number of operations needed such that there is at least one occurrence of k consecutive black blocks.

// Example 1:

// Input: blocks = "WBBWWBBWBW", k = 7
// Output: 3
// Explanation:
// One way to achieve 7 consecutive black blocks is to recolor the 0th, 3rd, and 4th blocks
// so that blocks = "BBBBBBBWBW". 
// It can be shown that there is no way to achieve 7 consecutive black blocks in less than 3 operations.
// Therefore, we return 3.
// Example 2:

// Input: blocks = "WBWBBBW", k = 2
// Output: 0
// Explanation:
// No changes need to be made, since 2 consecutive black blocks already exist.
// Therefore, we return 0.

// Solution:
/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(blocks, k) {
    // Initialize minCount with the desired number of consecutive black blocks (k)
    let minCount = k;
    // Initialize whiteBlock counter to keep track of consecutive white blocks
    let whiteBlock = 0;

    // Iterate through the blocks string
    for(let i = 0; i < blocks.length; i++) {
        // If the current block is white ('W'), increment the whiteBlock counter
        if(blocks[i] === 'W') whiteBlock++;

        // Check if there are k or more blocks in consideration
        if(i >= k - 1) {
            // If the block k positions back is white, decrement whiteBlock counter
            if(blocks[i - k] === 'W') whiteBlock--;
            // Update minCount with the minimum of its current value and whiteBlock counter
            minCount = Math.min(minCount, whiteBlock);
        }
    }

    // Return the minimum number of operations needed (minCount) to achieve k consecutive black blocks
    return minCount;
};
