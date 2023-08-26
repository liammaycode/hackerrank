This function has a parameter of an integer array.
This function rounds each integer according to the following rules:
If the difference between the grade and the next multiple of five is less than three, the grade gets rounded to the next multiple of five.
If the grade is below 38, no rounding occurs.
This function returns the array of rounded grades in O(n) time.

function gradingStudents(grades) {
    let len = grades.length;
    let next = 0;
    for (let i = 0; i < len; i++) {
        next = grades[i] + 5 - ((grades[i] + 5) % 5);
        if (grades[i] >= 38 && next - grades[i] < 3) {
            grades[i] = next;
        }
    }
    return grades;
}