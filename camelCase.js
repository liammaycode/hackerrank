// This function takes as argument a string which contains two flags and a string separated by semicolons. 
// The first flag can be 'S' or 'C' which signifies split and combine respectively.
// The second flag can be 'M', 'C', or 'V' which signifies method, class, and variable respectively.
// The first flag is the operation to be perfomed on the string.
// The second flag is the type of string given which affects to method used to combine or split the string.
// This function logs the result the console.

function processData(input) {
    let lines = input.split(/(\s\n|\r\n|\n)/gm);
    let length = lines.length;
    
    for (let str = 0; str < length; str++) {
        // S
        if (lines[str][0] == 'S') {
            if (lines[str][2] == 'M') { // methods
                // console.log("splitting method %s of length %d", lines[str].slice(4, lines[str].length - 2), lines[str].slice(4, lines[str].length - 2).length);
                splitInput(lines[str].slice(4, lines[str].length - 2));
            } else {
                // console.log("splitting class or variable %s of length %d", lines[str].slice(4), lines[str].slice(4).length);
                splitInput(lines[str].slice(4)); // classes and variables
            }
        } else if (lines[str][0] == 'C') { // C
            // console.log("combining class %s of length %d", lines[str].slice(4), lines[str].slice(4).length);
            combineInput(lines[str].slice(4), lines[str][2]);
        }
    }
}

function splitInput(str) {
    let m = 0;
    let n = 0;
    let len = str.length;
    let retval = '';
    for (n = 0; n < len; n++) {
        if (n == len - 1) {
            retval += str.slice(m).toLowerCase();
            m = n;
        } if (str[n] != str[n].toLowerCase() && n != 0) {
            retval += str.slice(m,n).toLowerCase() + ' ';
            m = n;
        } 
    }
    console.log(retval);
}

function combineInput(str, flag) {
    let m = 0;
    let n = 0;
    let words = 0;
    let len = str.length;
    let retval = '';
    for (n = 0; n < len; n++) {
        if (n == len - 1) {
            retval += str[m].toUpperCase() + str.slice(m + 1);
            words++;
            m = n + 1;
            if (flag == 'M') {
                retval += '()';
            }
        } else if (str[n] == ' ') {
            if (words == 0 && flag != 'C') {
                retval += str.slice(m,n);
                words++;
                m = n + 1;
            } else {
                retval += str[m].toUpperCase() + str.slice(m + 1,n);
                words++;
                m = n + 1;
            }
        }
    }
    console.log(retval);
}