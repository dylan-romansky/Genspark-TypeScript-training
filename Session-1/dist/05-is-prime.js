"use strict";
function isPrime(num) {
    if (num <= 1)
        return false;
    if (num == 2)
        return true;
    let squ = Math.sqrt(num);
    for (let div = 2; div < squ; div++) {
        if (num % 2 == 0)
            return false;
    }
    return true;
}
for (let i = 1; i < 20; i++) {
    console.log(i + (isPrime(i) ? ": prime" : ""));
}
//# sourceMappingURL=05-is-prime.js.map