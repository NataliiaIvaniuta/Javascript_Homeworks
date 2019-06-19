'use strict';
//style
document.body.style.backgroundColor='pink';
document.getElementById("timer").style.fontSize = '30px';
document.body.style.fontSize='20px';
document.body.style.textIndent='20px';

function showArrayList (someArray) {
    const mapArray = `<ul> ${someArray.map(item => `<li> ${item}</li>`)} </ul>`;

    let splitAndJoin = mapArray.split(',').join(' ');
    document.getElementById('container').innerHTML = splitAndJoin;
}

let sec = 10;
function countDown() {
    if (sec < 1) {
        document.body.innerHTML = '';
    }
    else {
        document.getElementById('timer').innerHTML = sec;
        setTimeout(countDown, 1000);
        sec--;
    }
}
(countDown());

// showArrayList(['Paris', 'London', 'Kiev', 'Tokyo', 'Moscow', 'Rome']);
showArrayList(['train', 'bus', 'plane', 'boat', 'car', [1, '2', 3]]);

//не получилось - "Если внутри массива одним из элементов будет еще один массив или объект, выводить его как вложенный список."
