"use strict";
let userNum=+prompt("Please enter a number", 0);

while(isNaN(userNum) ||userNum === undefined || !isInteger(userNum)) {
    userNum=+prompt('Please enter a number', userNum);
}

function factorial(userNum) {
    if (userNum !== 1) {
        return userNum * factorial(userNum - 1);
    } else {
        return userNum
    }
}
alert (factorial(userNum));


function isInteger() {
    return userNum % 1 === 0;
}
