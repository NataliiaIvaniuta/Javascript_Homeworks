    "use strict";
let access = ("Welcome, ");
let confirmation = "Are you sure you want to continue?";
let forbidden = "You are not allowed to visit this website:(";
let specify = "Please, specify your ";

  let yourName = prompt("What is your name?");
    while (parseInt(yourName)|| (parseInt(yourName)===0 || yourName==="" || yourName===" ")) {
      yourName=prompt (specify +'real name', yourName);
    }

    let yourAge = +prompt("How old are you?", '18');
    while (isNaN(yourAge)) {
        yourAge = +prompt(specify + "real age", yourAge);
    }
    if (yourAge < 18) {
        alert(forbidden);
    } else if (yourAge >= 18 && yourAge <= 22) {
        if (confirm(confirmation)) {
            alert(access + yourName);
        } else {
            alert(forbidden);
        }
    } else {
        alert(access + yourName)}


