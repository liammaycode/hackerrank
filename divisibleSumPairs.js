// This function takes as arguments an array length n, a divisor k, and an array ar.
// This function returns the number of pairs where i < j such that ar[i] + ar[j] is divisible by k.

function divisibleSumPairs(n, k, ar) {
    let retval = 0;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if ((ar[i] + ar[j]) % k == 0) {
                // console.log('found pair: (%d, %d) %d + %d <<<<<<<<<', i, j, ar[i], ar[j]);
                retval++;
            } else {
                // console.log('not a vaild pair: (%d, %d) %d + %d', i, j, ar[i], ar[j]);
            }
        }
    }
    return retval;
}