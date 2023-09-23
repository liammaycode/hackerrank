// This function takes a single unsorted integer array a as a parameter.
// This function returns the length of the longest possible substring where the difference between any two elements is less than 2.
// This function has a worst case runtime of O(n).

function pickingNumbers(a) {
    a = a.sort(function(a, b) {return a - b});
    
    let n = a.length;
    let min = a[0];
    let curr = 1;
    let max = 0;
    for (let i = 1; i < n; i++) {
        if (Math.abs(a[i] - min) <= 1) {
            curr++;
        } else if (curr > max) {
            max = curr;
            curr = 1;
            min = a[i];
        } else {
            curr = 1;
            min = a[i]
        }
    }
    return Math.max(max, curr);
}