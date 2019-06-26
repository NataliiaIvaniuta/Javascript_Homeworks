"use strict";
const Student = {};
Student.name = prompt('What is your name?');
Student.surname = prompt('What is your last name?');
// console.log(Student);

Student.tabel = {};
const overview = {};
let subject;
let badGrades = 0;
let totalGrades = 0;
let totalSubjects = 0;

do {
    subject = prompt('Please indicate a subject');
    if (subject) {
        const grade = +prompt(`What is your mark in this ${subject}?`);
        overview[subject] = grade;
        if (grade < 4) {
            badGrades++;
        }
        totalSubjects++;
        totalGrades += grade;
    }
} while (subject);

Student.tabel = overview;
if (badGrades === 0) {
    alert("Студент переведен на следующий курс")
} else {
    alert('Учись лучше!)')
}
if (totalGrades / totalSubjects > 7) {
    alert('Студенту назначена стипендия')
}

