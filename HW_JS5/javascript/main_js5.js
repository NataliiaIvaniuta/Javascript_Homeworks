"use strict";

function createNewUser() {
    let firstName = myCustomPrompt("What is your name?");
    let lastName = myCustomPrompt("What is your surname?");
    let birthday = myCustomPrompt('When is your birthday (dd.mm.yyyy)?');

    this.getAge = function () {
        return parseInt((new Date() - Date.parse(((birthday.split(".")).reverse()))) / (24 * 3600 * 365.25 * 1000));
    };
    this.getLogin = function () {
        return firstName.charAt(0).toLowerCase() + lastName.toLowerCase();
    };
    this.getPassword = function () {
        return firstName.charAt(0).toUpperCase() + lastName.toLowerCase() + (birthday.split("."))[2];
    };
}

function myCustomPrompt(ask) {
    let input;
    do {
        if (!input) {
            input = prompt(ask)
        }
    }
        while (!(input));
    return input;
};

    let newUser = new createNewUser();

    console.log(newUser);
    console.log(newUser.getLogin());
    console.log(newUser.getPassword());
    console.log(newUser.getAge());
