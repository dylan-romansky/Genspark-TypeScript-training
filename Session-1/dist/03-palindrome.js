"use strict";
function isPalindrome(input) {
    let str = "" + input;
    let reversed = "";
    for (let char of str) {
        reversed = char + reversed;
    }
    return (reversed === str ? true : false);
}
console.log("this is a pen");
console.log(isPalindrome("this is a pen"));
console.log("racecar");
console.log(isPalindrome("racecar"));
console.log("1234");
console.log(isPalindrome(1234));
console.log("1234321");
console.log(isPalindrome(1234321));
//# sourceMappingURL=03-palindrome.js.map