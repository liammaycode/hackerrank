// This function has the parameters d (an integer representing the number of rotations needed) and arr (an integer array).
// This function returns an integer array of the transformed arr in linear (O(1)) time.

function rotateLeft(d, arr) {
    return arr.slice(d).concat(arr.slice(0, d));
}