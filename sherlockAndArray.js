'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// this function returns a string 'YES' if there exists in a given array of integers an index with a sum of all integers to its left equal to the sum of all integers to its right
function balancedSums(arr) {
    let n = arr.length;
    if (n == 1) {
        return 'YES';
    }
    
    let sumL = 0;
    let sumR = arr.slice(1).reduce((a, b) => a + b);
    
    console.log(sumL, ' : ', sumR);
    for (let i = 0; i < n; i++) {
        if (sumL == sumR) {
            console.log('--------- %d = %d ---------', sumL, sumR);
            return 'YES';
        }
        sumL += arr[i];
        sumR -= arr[i + 1];
        console.log(sumL, ' : ', sumR);
    }
    console.log('match not found');
    return 'NO';
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim(), 10);

    for (let TItr = 0; TItr < T; TItr++) {
        const n = parseInt(readLine().trim(), 10);

        const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

        const result = balancedSums(arr);

        ws.write(result + '\n');
    }

    ws.end();
}
