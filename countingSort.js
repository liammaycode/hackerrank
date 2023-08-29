This function has a parameter of an integer array arr with values within the range 0 to 99 inclusive.
This function populates a frequency array of the values in arr and returns it in O(n) time. 

function countingSort(arr) {
    let freq = new Array(100).fill(0);
    for (let i in arr) {
        freq[arr[i]]++;
    }
    return freq;
}