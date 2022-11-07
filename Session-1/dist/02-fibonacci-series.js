"use strict";
function fibonacci(num) {
    let last = 0;
    let curr = 1;
    for (let i = 0; i < num; i++) {
        console.log(curr);
        let tmp = curr;
        curr += last;
        last = tmp;
    }
}
console.log("finding first 10");
fibonacci(10);
//# sourceMappingURL=02-fibonacci-series.js.map