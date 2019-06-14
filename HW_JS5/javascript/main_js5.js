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
    this.birthday = prompt('When is your birthday (dd.mm.yyyy)?').split(".");
    while (this.birthday === '') {
        this.birthday =prompt('Please, specify when is your birthday (dd.mm.yyyy)').split(".");
    }
    this.getAge= function () {
        return parseInt((new Date() - Date.parse((this.birthday.reverse()))) / (24 * 3600 * 365.25 * 1000));
    };
    this.getLogin = function () {
        return this.firstName.charAt(0).toLowerCase() + this.lastName.toLowerCase();
    };
    this.getPassword = function () {
        return this.firstName.charAt(0).toUpperCase() + this.lastName.toLowerCase() + this.birthday[2];
    };
}

let newUser = new createNewUser();

console.log(newUser);
console.log(newUser.getLogin());
console.log(newUser.getPassword());
console.log(newUser.getAge());