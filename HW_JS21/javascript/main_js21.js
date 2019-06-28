'use strict';
function makeString (obj) {
    return JSON.stringify(obj).toLowerCase();
};

function filterCollection(array, keyWords, flag) {
    if (typeof keyWords !== "string") {
        keyWords = String(keyWords);
    }
    keyWords = keyWords.trim();
    let arrKeyWord = keyWords.split(" ").filter((item) => {
        return item !== "";
    });
    arrKeyWord = arrKeyWord.map((item) => {
        return item.toLowerCase();
    });
    let arr = [];
        if (flag) {
            arr = array.filter((item) => {
                if (typeof item === 'object') {
                    let str = makeString(item);
                    return arrKeyWord.every((e) => {
                        return str.includes(e);
                    })
                } else {
                    return arrKeyWord.every((e) => {
                        return item.toLowerCase().includes(e);
                    });
                }
            });
        } else {
            arr = array.filter((item) => {
                if (typeof item === 'object') {
                    let str = makeString(item);
                    return arrKeyWord.some((e) => {
                        return str.includes(e);
                    })
                } else {
                    return arrKeyWord.some((e) => {
                        return item.toLowerCase().includes(e);
                    });
                }
            });
        }
    return arr;
}

let vehicles = [
    {
        name: "Honda",
        model: "Civic",
        country: "Japan",
        type: "hatchback",
        engine: [
            {
                capacity: "1.8",
                liquid: "petrol",
                type: "turbo"
            }
        ]
    },
    {
        name: "Saab",
        country: "Sweden",
        type: "sedan"
    },
    {
        name: "Toyota",
        model: "Yaris",
        country: "Japan",
        type: "hatchback",
        engine: [
            {
                capacity: "1.4",
                liquid: "gas",
            }
        ]
    },
    {
        name: "BMW",
        model: "5s",
        country: "Germany",
        type: "sedan"
    }
];

console.log(vehicles);
console.log(filterCollection(vehicles, "gas ch", true, 'name', 'country', 'engine.liquid'));

