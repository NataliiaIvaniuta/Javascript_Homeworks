"use strict";
let custNumber = +prompt("Please enter a number");
while (custNumber === undefined || !isInteger(custNumber)) {
    custNumber = +prompt("Please enter a valid number", custNumber);
}

function isInteger() {
    return custNumber % 1 === 0;
}
    if (custNumber < 5) {
        console.log("Sorry, no numbers");
    } else {
        for (let i = 0; i <= custNumber; i++) {
            if (i % 5===0) {
                console.log(i);

            }
        }
    }
