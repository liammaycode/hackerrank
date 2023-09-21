// This function has the parameters n: an integer representing the number of pages in a book, and p: representing a target page.
// This funciton assumes the book starts with a page 0 on the left and page one on the right.
// this funciton calculates the minimum number of page turns from either side of the book to open the target page in linear (O(1)) time and returns that integer.

function pageCount(n, p) {
    if (p <= n/2) {
        return Math.floor(p/2);
    } else if (n%2==0) {
        return Math.floor((n+1-p)/2);
    } else {
        return Math.floor((n-p)/2);
    }
}