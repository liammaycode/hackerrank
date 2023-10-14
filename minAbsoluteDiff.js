// This function has a single parameter: arr which is an integer array.
// This function determines the minimum difference of all possible pairs of numbers in the array and returns it as an integer in O(n log n) time.

function minimumAbsoluteDifference(arr) {
    arr.sort((a, b) => a - b);
    let n = arr.length;
    let minDiff = Number.MAX_VALUE;
    
    for (let i = 0; i < n; i++) {
        let currDiff = Math.abs(arr[i + 1] - arr[i]);
        if (currDiff < minDiff) {
            minDiff = currDiff;
        }
    }
    return minDiff;
}