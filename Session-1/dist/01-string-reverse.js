"use strict";
function reverseString(str) {
    let reversed = "";
    for (let char of str) {
        reversed = char + reversed;
    }
    return reversed;
}
console.log("input: this is a test string");
console.log("output: " + reverseString("this is a test string"));
//# sourceMappingURL=01-string-reverse.js.map