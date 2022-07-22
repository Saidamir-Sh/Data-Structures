/*
Reversing array - T1
function reverseArr (a) {
    a.reverse()
    return a
}
*/


//T2 - Hourglass pattern Array
/*
There are hourglasses in . An hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in , then print the maximum hourglass sum. The array will always be .
*/
function hourglassSum(arr) {
    // Write your code here
    let max = -63
    for(let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let sum = 0
            sum = (arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2])
            max = max < sum ? sum : max
        }
    }
    return max
}
let arr =     [[1, 1, 1, 0, 0, 0], [0, 1, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0], [0, 0, 2, 4, 4, 0], [0, 0, 0, 2, 0, 0], [0, 0, 1, 2, 4, 0]]

hourglassSum(arr);

/*
A left rotation operation on an array of size shifts each of the array's elements unit to the left. Given an integer, , rotate the array that many steps left and return the result. 
*/

function rotateLeft(d, arr) {
    // Write your code here
    let rotArr = []
    for(let i = 0; i < arr.length; i++) {
        rotArr.push(arr[i])
    }
    for(let j = 0; j < d; j++) {
      rotArr.shift(rotArr.push(rotArr[0]));
    }
    return rotArr
}