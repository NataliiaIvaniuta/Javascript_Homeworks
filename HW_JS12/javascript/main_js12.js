'use strict';

// creating panel
const panel=document.createElement('div');
const stop=document.createElement('button');
  stop.innerText='Stop';
const resume=document.createElement('button');
  resume.innerText='Resume';

//adding panel
  document.querySelector('.images-wrapper').before(panel);
  panel.appendChild(stop);
  panel.appendChild(resume);
 
let progressFlag=true;
let images = Array.from(document.querySelector('.images-wrapper').children);
let i=0;

//change slides
    let slider = setInterval(()=> {
        if (progressFlag) {
            images.forEach((el) => {
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
