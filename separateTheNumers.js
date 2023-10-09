// This function has a single parameter s (a string of numbers).
// This function determines if s follows the pattern a[i] = a[i-1] + 1.
// This function does this by generating a string of equal length using the pattern and determining if they are equal.
// This function returns 'YES' or 'NO' in O(n**2) time.

function separateNumbers(s) {
    for (let end = 1; end <= s.length/2; end++) {
        let first = s.slice(0, end);
        let beaut = first;
        let next = BigInt(first) + 1n;
        
        // generate beautiful string based on first value
        while (beaut.length < s.length) {
            beaut += next;
            next += 1n;
        }
        if (beaut == s) {
            console.log('YES ' + first);
            return;
        }
    }
    console.log('NO');
    return;
}