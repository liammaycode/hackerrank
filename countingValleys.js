// This function has two parameters: an integer steps representing the number of steps taken by a hiker, and a string path which contains the characters U and D.
// The U in path represents a step upward in elevation and the D in path represents a step down in elevation.
// If we define a valley as a substring of steps that begin at a D while elevation is zero and end at a U that brings elevation back to 0, we can count the number of valleys in a given string.
// This function assumes the hiker starts at sea level (elevation 0) and returns the number of valleys that the hiker traverses in O(n) time.

function countingValleys(steps, path) {
    let elevation = 0;
    let count = 0;
    
    for (let i = 0; i < steps; i++) {
        if (path[i] == 'U') {
            elevation++;
            if (elevation == 0) {
                count++;
            }
        } if (path[i] == 'D') {
            elevation--;
        }
    }
    return count;
}