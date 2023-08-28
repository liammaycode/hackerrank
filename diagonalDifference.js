// This function has a parameter of a 2D integer array.
// This function calculates the sum of values making a diagonal from the top left index to the bottom right index and the sum of values from the top right index to the bottom left index. 
// This funciton then returns the absolute value of the difference between these values in O(n) time.
function diagonalDifference(arr) {
    let width = arr.length;
    let j = width - 1;
    let a = 0; 
    let b = 0;
    for (let i = 0; i < width; i++) {
        a += arr[i][i];
        b += arr[i][j--];
    }
    return Math.abs(a - b);

}