"use strict";

// create student
function createStudent() {
    const student = {
        name: (checkInput('What is your name?')),
        surname: (checkInput('What is your last name?'))
    };
    student.tabel = {};
    return student;
};

//create tabel
function createTabel (student) {
    let subject;
    do {
        subject = prompt('Please indicate a subject');
        if (subject || subject !== null) {
            student["tabel"][subject] = checkGrades();
        }
    } while (subject);
    return student;
};

//passed or not
function checkExcellence(student) {
    let badGrades = 0;
    for (let subject in student.tabel) {
        if (student.tabel[subject] <= 4)
            badGrades++;
    }
    if (badGrades === 0) {
        alert("Студент переведен на следующий курс");
    } return student
};
function checkAverage (student) {
    let totalGrades = 0;
    let totalSubjects = 0;
    for (let [subject, grade] of Object.entries(student.tabel)) {
        totalGrades += grade;
        totalSubjects++;
    }
    if ((totalGrades / totalSubjects) > 7) {
        alert('Студенту назначена стипендия')
    } else {
        alert('Study better!')
    }
    return student;
};

//check grades' input
const checkGrades=(grade)=> {
    grade = +prompt(`What is your mark in this subject?`);
    if (grade < 1 || grade > 12 || !grade || isNaN(grade)) {
        grade = +prompt(`What is your mark in this subject?`)
    }
    return grade;
};

//check name/surname input
function checkInput(ask) {
    let input;
    do {
        if (!input) {
            input = prompt(ask)
        }
    }
    while (!(input));
    return input;
};

//
const newStudent = createStudent();
const tabel=createTabel(newStudent);
checkAverage(newStudent);
checkExcellence(newStudent);
console.log(newStudent.tabel);
console.log(tabel);
