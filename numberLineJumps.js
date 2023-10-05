// This function has the parameters: x1 (an integer representing starting position of kangaroo 1), v1 (an integer representing velocity of kangaroo 1), x2 (an integer representing starting position of kangaroo 2), and v2 (an integer representing velocity of kangaroo 2).
// This function uses 1D kinematics equation: final position - starting position = velocity * time. Assuming there exists a final position for both kangroos that is equal, time is calculated and captured by t.
// This function returns YES if t is a positive whole number and NO otherwise. This function does this in linear (O)1 time.

function kangaroo(x1, v1, x2, v2) {
    let t = (x2 - x1) / (v1 - v2);
    return (t > 0 && t % 1 == 0) ? 'YES' : 'NO';
}