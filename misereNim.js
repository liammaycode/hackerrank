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

// This function takes an array of integers s. The integers represent a the number
// of stones/sticks and each index is its own pile. This function determines based on the rules
// of Misere Nim if the first or second player to move wins (winning in this 
// case being the player who does not take the last stone)

// Any two numbers XOR'd with each other results in zero. This makes XOR the 
// perfect operation for finding the remaining value of a set of integers when you 
// have them cancel each other

// note: Cancelling numbers might sound misleading. I don't just mean numbers that
// are equal. It's more like sums that are equal. Representing the game with binary
// arithmetic is the best way to fully understand the solution.
function misereNim(s) {
    let n = s.length;
    let xorVal = 0;
    let ones = true;
    let winner = '';
    
    for (let i = 0; i < n; i++) {
        if (s[i] != 1) {
            ones = false;
            break;
        }
    }
    for (let i = 0; i < n; i++) {
        xorVal ^= s[i];
    }
    
    if (ones) {
        winner = (n % 2 == 0) ? 'First' : 'Second';
    } else {
        winner = (xorVal > 0) ? 'First' : 'Second';
    }
    
    return winner;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);

        const s = readLine().replace(/\s+$/g, '').split(' ').map(sTemp => parseInt(sTemp, 10));

        const result = misereNim(s);

        ws.write(result + '\n');
    }

    ws.end();
}
