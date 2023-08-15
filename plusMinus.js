// This function takes as an argument an array of integers and prints the ratios of positive, negative, and zero values as a decimal.

function plusMinus(arr) {
    let pos = 0;
    let zed = 0;
    let neg = 0;
    let denom = arr.length;
    for (let i = 0; i < denom; i++) {
        if (arr[i]>0) {
            pos++;
        } if (arr[i]==0) {
            zed++;
        } if (arr[i]<0) {
            neg++;
        }
    }
    pos = pos/denom;
    zed = zed/denom;
    neg = neg/denom;
    console.log(pos.toFixed(6) + "\n" + neg.toFixed(6) + "\n" + zed.toFixed(6));
}