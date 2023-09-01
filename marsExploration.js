// This function has a string 's' as a parameter.
// This function assumes that s is a string of 'SOS' substrings.
// This function iterates through s to find the number of characters that have been corrupted and returns that number in O(n) time.

function marsExploration(s) {
    let len = s.length;
    let retval = 0;
    for (let i = 0; i < len; i++) {
        if (i % 3 != 1) { // if it is not the second letter in the triple 
            if (s[i] != 'S') {
                retval++;
            }
        } else if (s[i] != 'O') {
            retval++;
        }
    }
    return retval;
}