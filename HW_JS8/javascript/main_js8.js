"use strict";

const box = document.createElement('div');
const block = document.createElement('div');
const input = document.createElement('input');
const message = document.createTextNode('Please enter correct price.');
input.setAttribute('placeholder', 'Price');
input.style.marginLeft = '30px';
input.style.display = 'block';
document.querySelector('script').before(box);
box.appendChild(block);
box.appendChild(input);
box.addEventListener('focus', drawBorder());
box.removeEventListener('blur', drawBorder());
input.onblur = () => {
    if (input.value < 0 || isNaN(input.value)||input.value==="") {
        input.style.border = '2px dotted red';
        box.appendChild(message);
    } else {
        block.innerHTML = `<span class="tag is-success is-medium" id="spanPrice">The current price is: $ ${input.value}<button class="delete is-medium" id="cancel" onclick="del()"></button>`;
        input.style.color = "green";
    }
};
input.onfocus = () => {
    block.innerHTML = '';
    input.value = "";
    input.style.border = '';
    message.remove();
    input.style.color = "black";
};

function del() {
    document.getElementById('spanPrice').remove();
    input.value = ""
};

function drawBorder() {
    input.style.outlineColor = 'green';
}
