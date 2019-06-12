"use strict";

function createNewUser() {
    this.firstName = prompt("What is your name?");
    while (this.firstName === '') {
        this.firstName = prompt('Please specify your name');
    }
    this.lastName = prompt("What is your surname?");
    while (this.lastName === '') {
        this.lastName = prompt('Please specify your surname')
    }
    this.getLogin = function() {
        let newLogin=this.firstName.charAt(0).toLowerCase() + this.lastName.toLowerCase();
        return newLogin;
    }
}

let newUser= new createNewUser();
console.log(newUser.getLogin());