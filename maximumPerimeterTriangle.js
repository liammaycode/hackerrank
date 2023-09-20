// This function takes an integer array sticks as a parameter.
// This function logs the lengths of the valid triangle (having non-zero area and only allowing points at the ends of lengths) with the maximum perimeter. 
// If no valid triangles are found, this function returns -1.
// This function run on O(n^3) time.

function maximumPerimeterTriangle(sticks) {
    // Write your code here
    let n = sticks.length;
    sticks.sort(function(a, b) { return a - b });
    for (let i = n - 1; i > 1; i--) {
        for (let j = i - 1; j > 0; j--) {
            for (let k = j - 1; k >= 0; k--) {
                if (isValid(sticks[i], sticks[j], sticks[k])) {
                    return [sticks[k], sticks[j], sticks[i]];
                }
                console.log('%d %d %d was not a valid triangle', sticks[k], sticks[j], sticks[i]);
            }
        }
    }
    return [-1];
}