// This function has three parameters: an integer array s, an integer representing a birth day d, and an integer representing birth month m.
// This function determines how many subarrays there are of length m whose values sum is equal to d.
// This function returns the number of subarrays that fit these criteria in O(n^2) time.

function birthday(s, d, m) {
    let n = s.length;
    let sum = 0;
    let retval = 0;
    for (let i = 0; i < n - m + 1; i++) {
        for (let j = i; j < m + i; j++) {
            sum += s[j];
        }
        if (sum == d) {
            retval++;
        }
        sum = 0;
    }
    return retval;
}