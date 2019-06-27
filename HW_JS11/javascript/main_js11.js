'use strict';

const buttons = document.querySelectorAll(".btn");
// console.log(buttons);
document.body.addEventListener("keypress", event => {
    buttons.forEach(el => {
        if (el.innerText.toLowerCase() === event.key.toLowerCase()) {
            el.style.backgroundColor = "blue";
        } else el.style.backgroundColor = "";
    });
});