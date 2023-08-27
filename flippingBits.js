// This function has a parameter of a 32 bit unsigned integer.
// This function returns a 64 bit integer which represents the reversal of the parameter in O(1) time.
// JS defaults to long_integers (64 bits)
// Bitwise operators do not yield the same results for 64 and 32 bit integers
// To simulate a negation (flipping bits) on a 32 bit integer, I subtract the given 64 bit integer from the max value of a 32 bit integer (2^32 - 1 or FFFF FFFF)
function flippingBits(n) {
    return (2**32) - 1 - n;
}