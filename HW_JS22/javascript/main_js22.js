'use strict';
document.body.style.backgroundColor='lightpink';
document.body.style.textIndent='20px';

function randomColor() {
    let col1 = Math.floor(Math.random() * 255+1);
    let col2 = Math.floor(Math.random() * 255+1);
    let col3 = Math.floor(Math.random() * 255+1);
    let col4 = Math.random()+0.1;
    return `${col1}, ${col2}, ${col3}, ${col4}`;
}

btnCircle.addEventListener("click", (e) => {
    document.getElementById('btnCircle').style.display = 'none';
    let fragment = document.createDocumentFragment();
    let diameter = document.createElement('input');
    let submit = document.createElement('button');
    diameter.placeholder = 'Diameter of the circle (px)';
    submit.innerHTML = 'Draw';
    fragment.appendChild(diameter);
    fragment.appendChild(submit);
    document.body.appendChild(fragment);
    document.body.insertBefore(fragment, document.getElementById('btnCircle'));

    submit.addEventListener('click', ()=>{
    let circlesDiv = document.createElement('div');
    circlesDiv.setAttribute('style', `width: ${diameter.value * 10 + 20}px`);
    document.body.appendChild(circlesDiv);
    for (let i = 0; i < 100; i++) {
        let circles = document.createElement('div');
        circles.setAttribute("style", `float:left;
        width: ${diameter.value}px;
        height: ${diameter.value}px;
        background-color: rgba(${randomColor()});
        border-radius: 50%;
        border: 1px solid black`);
        circlesDiv.appendChild(circles);
    }
    circlesDiv.addEventListener("click", (e) => {
        circlesDiv.removeChild(e.target)
    });
});
});

