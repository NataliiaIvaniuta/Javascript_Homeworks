"use strict";
let firstNum=parseInt (prompt("Please enter the number #1", 0));
let operation = prompt("Select an operation sign", '+');
let secondNum=parseInt (prompt ("Please enter the number #2", 0));

while(isNaN(firstNum)) {
    firstNum=parseFloat(prompt('Please enter the number #1', firstNum));
}
while(isNaN(secondNum)) {
    secondNum=parseFloat(prompt('Please enter the number #2', secondNum));
}
while (operation!=="+"&& operation!=="-"&& operation!=="*" && operation!=="/") {
    operation = prompt("Select a correct operation sign", operation);
}

function add (firstNum, secondNum){
    return (`${firstNum} + ${secondNum} = ${firstNum + secondNum}`)}
function divide (firstNum, secondNum){
    return (`${firstNum} / ${secondNum} = ${firstNum / secondNum}`)}
function multiply(firstNum, secondNum){
    return (`${firstNum} * ${secondNum} = ${firstNum * secondNum}`)}
function subtract(firstNum, secondNum){
    return (`${firstNum} - ${secondNum} = ${firstNum - secondNum}`)}

switch (operation) {
    case '+':
        console.log (add(firstNum, secondNum));
        break;
    case '-':
        console.log (subtract(firstNum, secondNum));
        break;
    case '*':
        console.log (multiply(firstNum, secondNum));
        break;
    case '/':
        console.log (divide(firstNum, secondNum));
        break;
}