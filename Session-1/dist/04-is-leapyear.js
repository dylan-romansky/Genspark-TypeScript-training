"use strict";
function isLeapYear(year) {
    return (year % 4 ? false : true);
}
for (let test = 2000; test <= 2022; test++) {
    console.log(test + "" + (isLeapYear(test) ? ": leap" : ""));
}
//# sourceMappingURL=04-is-leapyear.js.map