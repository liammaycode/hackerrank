// This function takes as argument an array of five integers. In O(n) time it calculates the minimum and maximum possible sum of any four integers in the array. 

function miniMaxSum(arr) {
    // Write your code here
    let len = 5;
    let minind = 0;
    let maxind = 0;
    let max = 0;
    let min = 0;
    
    // find min and max
    for (let i = 1; i < len; i++) {
        if (arr[minind] > arr[i]) {
            minind = i;
        } if (arr[maxind] < arr[i]) {
            maxind = i;
        }
    }
    
    // perform additions excluding min and max
    for (let i = 0; i < len; i++) {
        if (i == maxind) { continue; }
        min += arr[i];
    }
    for (let i = 0; i < len; i++) {
        if (i == minind) { continue; }
        max += arr[i];
    }
    console.log(min + " " + max);
}