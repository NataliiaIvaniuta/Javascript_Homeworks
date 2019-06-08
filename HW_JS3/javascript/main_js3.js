"use strict";
let firstNum=parseInt (prompt("Please enter the number #1", 0));
let operation = prompt("Select an operation sign", '+');
let secondNum=parseInt (prompt ("Please enter the number #2", 0));

while(isNaN(firstNum)) {
    firstNum=parseInt(prompt('Please enter the number #1', firstNum));
}
while(isNaN(secondNum)) {
    secondNum=parseInt(prompt('Please enter the number #2', secondNum));
}
while (operation!=="+"&& operation!=="-"&& operation!=="*" && operation!=="/") {
    operation = prompt("Select a correct operation sign", operation);
}
function calculate() {
    let num1=firstNum;
    let num2=secondNum;
    let oper=operation;
    switch (oper) {
        case '+':
            return (num1 + num2);
        case '-':
            return (num1 - num2);
        case '*':
            return (num1 * num2);
        case '/':
            return (num1 / num2);
    }
}
console.log (calculate(firstNum, secondNum, operation));

