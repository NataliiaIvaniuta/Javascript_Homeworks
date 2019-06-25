'use strict';

const setActive = event => {
    if (event.target.className !== 'tabs-title active') {
        let active = document.getElementsByClassName('tabs-title active')[0];
        let actLi = document.querySelector(`[data-id=${active.innerText}`);
        actLi.dataset.show = "no";
        active.className = 'tabs-title';
        event.target.className = 'tabs-title active';
        let li = document.querySelector(`[data-id=${event.target.innerText}]`);
        li.dataset.show = "yes";
    } else return;
}

document.querySelectorAll(".tabs-title").forEach(el => {
    el.addEventListener("click", setActive);
})