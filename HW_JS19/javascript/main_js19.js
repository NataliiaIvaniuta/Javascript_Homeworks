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
    let clone = {};
    for (let propertyName in person) {
        if (typeof person[propertyName] === "object") {
            clone[propertyName] = cloneObj(person[propertyName]);
        } else if (Array.isArray(person[propertyName])) {
            for (let arrayElement of person[propertyName]) {
                if(Array.isArray(arrayElement) || typeof arrayElement === 'object'){
                    clone[propertyName].push(cloneObj(arrayElement));
                } else {
                    clone[propertyName].push(arrayElement);
                }
            }
        } else {
            clone[propertyName] = person[propertyName];
        }
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