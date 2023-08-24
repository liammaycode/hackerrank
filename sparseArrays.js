// This function receives as argument a collection of strings called 'strings' and a collection of queries called 'queries'. 
// This function returns the frequency that the queries occur in their respective order in a frequency array.
// This function accomplishes this in O(n + m) time.

function matchingStrings(strings, queries) {
    let m = queries.length;
    let n = strings.length;
    let freq = new Array(m);
    for (let i = 0; i < m; i++) {
        freq[i] = 0;
    }
    
    for (let q = 0; q < m; q++) {
        for (let s = 0; s < n; s++) {
            if (queries[q].localeCompare(strings[s]) == 0) {
                freq[q]++;
            }
        }
    }
    return freq;
}