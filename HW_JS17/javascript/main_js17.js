"use strict";
let n = +prompt("Please enter a number");
while (n === undefined || isNaN(n)) {
    n = +prompt("Please enter a valid number", n);
}
console.log(n);

function fibonacci (F0, F1, n) {
    if (n ===0) {
        F2=F0;
        return F2;
    }
    if (n===1) {
        F2=F1;
        return F2;
    }
    else {
        if (n < 0) {
        F2=fibonacci(F0, F1, n+2)-fibonacci (F0, F1, n+1);
    } else {
        F2=fibonacci (F0, F1, n-1)+fibonacci (F0, F1, n-2);
    }
        return F2
}
}
let F2=0;

let result=fibonacci(1, 2, n);
console.log(result);
