'use strict';
//adding button
    const newTheme = document.createElement('div');
    const buttonNewTheme=document.createElement('button');
    document.body.prepend(newTheme);
    newTheme.appendChild(buttonNewTheme);
    buttonNewTheme.style.backgroundColor='teal';
    buttonNewTheme.innerText='Change color theme';

    //function
    buttonNewTheme.addEventListener('click', function () {
    localStorage.setItem('mode', (localStorage.getItem('mode') || 'dark') === 'dark' ? 'light' : 'dark');
    localStorage.getItem('mode') === 'dark' ? document.querySelector('body').classList.add('dark') : document.querySelector('body').classList.remove('dark')
});
    document.addEventListener('DOMContentLoaded', () => {
    ((localStorage.getItem('mode') || 'dark') === 'dark') ? document.querySelector('body').classList.add('dark') : document.querySelector('body').classList.remove('dark')
});

