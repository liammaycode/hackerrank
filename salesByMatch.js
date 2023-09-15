// This function has two parameters: an integer n representing the length of array ar, and an integer array ar.
// This function determines how many matching pairs of numbers with values from 1 to 100 inclusive there are in ar.
// This function returns the number of pairs it found in ar in O(n) time.

function sockMerchant(n, ar) {
    let pairs = 0;
    let freq = new Array(100 + 1).fill(0);
    for (let i = 0; i < n; i++) {
        if (++freq[ar[i]] % 2 == 0) {
            pairs++;
        }
    }
    console.log(pairs);
    return pairs;
}