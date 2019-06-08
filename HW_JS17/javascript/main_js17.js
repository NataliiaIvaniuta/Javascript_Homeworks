"use strict";
let n = +prompt("Please enter a number");
while (n === undefined || isNaN(n)) {
    n = +prompt("Please enter a valid number", n);
}

alert (fibonacci(n));

function fibonacci(n) {
     if (n > 1) {
        return fibonacci(n - 1) + fibonacci(n - 2);
    } else if (n<0) {
        return fibonacci(n + 2) - fibonacci(n + 1);
    } else {
        return n;
    }
}

//Formulas
// Fn = Fn − 1 + Fn − 2   //for positive numbers
// F{n}=F{n+2}-F{n+1}     // for negative numbers