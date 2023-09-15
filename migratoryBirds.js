// This function has a single integer array as a parameter.
// This function assumes the range in values of arr is 0<n<6.
// This function returns the lowest value that has the highest frequency in arr in O(n) time.

function migratoryBirds(arr) {
    let n = arr.length;
    let freq = new Array(6).fill(0);
    for (let i = 0; i < n; i++) {
        freq[arr[i]]++;
    }
    
    let maxInd = 5;
    let maxFreq = freq[5];
    for (let i = 4; i > 0; i--) {
        if (freq[i] >= maxFreq) {
            maxFreq = freq[i];
            maxInd = i;
        }
    }
    return maxInd;
}