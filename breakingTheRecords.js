This function takes as argument an array of integers and returns the maximum and minimum values in O(n) time

function breakingRecords(scores) {
    // Write your code here
    let n = scores.length;
    let max = 0;
    let min = 0;
    let maxcount = 0;
    let mincount = 0;
    
    max = min = scores[0];
    for (let i = 0; i < n; i++) {
        if (max < scores[i]) {
            max = scores[i];
            maxcount++;
        } if (min > scores[i]) {
            min = scores[i];
            mincount++;
        }
    }
    return [maxcount, mincount];
}