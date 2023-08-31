This function has a string s as a parameter.
This function populates a frequency array and iterates through it to determine if the string contains at least one of every character in the english alphabet.
This function returns the string 'pangram' if s is a pangram and 'not pangram' if it is not. It does this O(n) time.

function pangrams(s) {
    let freq = new Array(26).fill(0);
    let newStr = s.toLowerCase().replace(/\s+/g, '');
    let len = newStr.length;
    for (let i = 0; i < len; i++) {
        freq[newStr[i].charCodeAt() - 'a'.charCodeAt()]++;
    }
    for (let i = 0; i < 26; i++) {
        if (freq[i] == 0) {
            return 'not pangram';
        }
    }
    return 'pangram';
}