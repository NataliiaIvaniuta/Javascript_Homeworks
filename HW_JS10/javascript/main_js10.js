'use strict';
let icon = document.querySelectorAll('.fas');

for (let i = 0; i < icon.length; i++) {
    icon[i].addEventListener('click', showHidden);
}

//change icons-input visibility on click
function showHidden(event) {
    if (event.target.classList.contains('fa-eye')) {
        event.target.previousElementSibling.type = 'text';
        event.target.classList.remove('fa-eye');
        event.target.classList.add('fa-eye-slash');
    } else {
        event.target.classList.remove('fa-eye-slash');
        event.target.classList.add('fa-eye');
        event.target.previousElementSibling.type = 'password';
    }
}

let inputPswrd = document.getElementsByClassName("inputClass")[0];
let confirmPswrd = document.getElementsByClassName("inputClass")[1];
let submit = document.getElementsByClassName('btn')[0];
const message = document.createElement('p');
message.innerText = 'The passwords do not match';
message.style.color = 'red';
//compare inputs
submit.addEventListener('click', (ev) => {
    ev.preventDefault(); //prevent default reload
    if (!inputPswrd.value || !confirmPswrd.value) {
        alert('Please specify the password')
    } else if
        (inputPswrd.value === confirmPswrd.value) {
        alert('Welcome!')
    } else {
        document.querySelector('button').before(message);
    }
});
//delete message on a next try
document.querySelectorAll('.inputClass').forEach((el) => {
    el.onfocus = () => {
        message.remove()
    }
});
