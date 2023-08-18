// This function takes as argument a string representing time in the am/pm (HH:MM:SSAM) format and returns a string representing the time in 24hr format (HH:MM:SS)

function timeConversion(s) {
    // Capturing substrings
    let hours = s.slice(0, 2);
    let ampm = s.slice(8);
    let val = parseInt(hours);
    let newHours = 0;

    if (ampm == 'AM' && val == 12) {
        newHours = (val + 12) % 24;
    } else if (ampm == 'PM' && 1 <= val && val <= 11) {
        newHours = (val + 12) % 24;
    } else {
        return (s.slice(0, 8));
    }

    if (newHours < 10) {
        return ('0' + newHours.toString() + s.slice(2, 8));
    } else {
        return (newHours.toString() + s.slice(2, 8));
    }
}