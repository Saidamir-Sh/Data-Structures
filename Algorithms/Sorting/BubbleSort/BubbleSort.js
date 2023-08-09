/*
1. Starting with the first element, compare the current element with the next element of the array.

2. If the current element is greater than the next element of the array, swap them.

3. If the current element is less than the next element, just move to the next element.

4. Start again from Step 1.
*/
// Illustrating the Bubble sort method
// Iteration 1: [6,4,2,5,7] → [4,6,2,5,7] → [4,2,6,5,7] → [4,2,5,6,7] → [4,2,5,6,7]

// Iteration 2:[4,2,5,6,7] → [2,4,5,6,7] → [2,4,5,6,7] → [2,4,5,6,7] → [2,4,5,6,7]

// Iteration 3: [2,4,5,6,7] → [2,4,5,6,7] → [2,4,5,6,7] → [2,4,5,6,7] → [2,4,5,6,7]

// Implementation (basic) -> this function runs on sorted part of the array as well, we need improvements:
let bubbleSort = (arr) => {
    let len = arr.length
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < len; j++) {
            if(arr[j] < arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

// In order to not to run on sorted part of the array, we have to have a variable to keep track of visited elements
let bubbleSortDoWhile = (arr) => {
    let len = arr.length
    let checked
    do {
        checked = false
        for(let i = 0; i < len; i++) {
            if(arr[i] < arr[j + 1]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[j + 1] = temp
                checked = true
            }
        }

    } while (checked)
}


// Visualization : https://visualgo.net/bn/sorting?slide=1.