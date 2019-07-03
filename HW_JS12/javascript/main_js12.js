'use strict';

//to start automatically
// window.addEventListener('load', counter);
// creating panel
const panel=document.createElement('div');
const stop=document.createElement('button');
  stop.innerText='Stop';
const resume=document.createElement('button');
  resume.innerText='Resume';
// const timer=document.createElement('span');
//   timer.style.color='red';
//adding panel
  document.querySelector('.images-wrapper').before(panel);
  panel.appendChild(stop);
  panel.appendChild(resume);
  // panel.appendChild(timer);

let progressFlag=true;
let images = Array.from(document.querySelector('.images-wrapper').children);
let i=0;

//change slides
    let slider = setInterval(()=> {
        if (progressFlag) {
            images.forEach((el) => {
                // el.classList.toggle('fade');
                el.setAttribute('hidden', 'true');
            });
        images[i].removeAttribute('hidden');
        (i === images.length - 1) ? i = 0 : i++;
    }
    }, 10000);


//panel event
panel.addEventListener('click', (event)=> {
    if (event.target===stop) {
        progressFlag=false
    } else if (event.target===resume){
        progressFlag=true;
    }
});
//
//   ///timer settings
// let slideInterval;
// let timerCount;
// //
// let countdown=()=>{
//     let timeLeft=9
//
// }
