// This function takes an integer array with a range of values between 1 and 100 as argument.
// The array has only one value in it that does not repeat.
// This function finds the only nonrepeating value in the array and returns it in O(n) time.

function lonelyinteger(a) {
    // Write your code here
    let len = a.length;
    let freq = new Array(100).fill(0);
    for (let i = 0; i < len; i++) {
        freq[a[i]]++;
    }
    for (let i = 0; i < 100; i++) {
        if (freq[i] == 1) {
            return i;
        }
    }
}