// This function has a single parameter: arr which is an array of integers.
// This funciton sorts the array with the Javascript sort function which has a worst case runtime of O(n log n).
// This function creates an array of pairs with the smallest absolute difference in values and returns the array in O(n log n) time.

function closestNumbers(arr) {
    arr.sort(function(a, b){ return a - b });
    let retarr = [];
    let minDiff = Math.abs(arr[0] - arr[1]);
    for (let i = 1; i < arr.length; i++) {
        let a = arr[i - 1];
        let b = arr[i];
        let currDiff = Math.abs(a - b);
        if (currDiff == minDiff) {
            retarr.push(a);
            retarr.push(b);
        } else if (currDiff < minDiff) {
            minDiff = currDiff;
            retarr = [a, b];
        }
    }
    return retarr;
}