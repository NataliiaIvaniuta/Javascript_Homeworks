"use strict";
let person = {
    name: "Debbie",
    age: 21,
    height: 170,
    pets: {
        name: 'Luke',
        kind: 'dog'
    },
    languages: ['English', ['French', 'Italian'], 'Chinese']
};

function cloneObj (person) {
    let propertyName;
    let clone =Array.isArray(person) ? []:{};
    for (propertyName in person) {
        clone[propertyName] = (typeof person[propertyName] === "object") ? cloneObj(person[propertyName]) : person[propertyName];
    }
    return clone;
}

let result = cloneObj(person);

console.log(person);
result.name = 'Debora';
result.pets.name = 'Lucky';
result.pets.kind = 'cat';
result.languages[1] = 'German';
result.height=185;
console.log(result);
