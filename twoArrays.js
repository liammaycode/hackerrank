This function has the parameters of an integer k, an integer array A, and an integer array B.
This function determines if there is a possible tranformation of A and B such that there are n unique pairs of indexes (A[i], B[i]) whose sums are greater than equal to k.
This function returns 'YES' if such a configuration exists and 'NO' if it does not. It does this O(n^2) time.

function twoArrays(k, A, B) {
    let n = A.length;
    let greedySum = Number.MAX_SAFE_INTEGER;
    let greedyIndex = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let sum = A[i] + B[j];
            if (sum >= k) {
                if (sum < greedySum) {
                    greedySum = sum;
                    greedyIndex = j;
                }
            }
        }
        if (greedySum == Number.MAX_SAFE_INTEGER) {
            return 'NO';
        }
        let temp = B[i];
        B[i] = B[greedyIndex];
        B[greedyIndex] = temp;
        greedySum = Number.MAX_SAFE_INTEGER;
    }
    return 'YES';
}