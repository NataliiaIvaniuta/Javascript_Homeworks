'use strict';

function filterCollection(arrayObj, keyWords, flag) {
    let filtereredArr = [];
    let indexFilter = 0;
    let checkFilter = 0;
    let arrayKeys = [];
    let indexArrayKeys = 0;
    for (let i = 3; i < arguments.length; i++) {
        arrayKeys[indexArrayKeys] = arguments[i];
        indexArrayKeys++;
    }

    let arrayWords = keyWords.split(" ");
    let arrayWordsIs = [];


    for (let n = 0; n < arrayObj.length; n++) {
        for (let p = 0; p < arrayWords.length; p++) {
            arrayWordsIs[p] = 0;
        }
        for (let i = 0; i < arrayWords.length; i++) {
            for (let j = 0; j < arrayKeys.length; j++) {
                let isSubKey = arrayKeys[j].indexOf(".");
                if (isSubKey === -1) {
                    if (arrayKeys[j] in arrayObj[n]) {
                        if (arrayObj[n][arrayKeys[j]].indexOf(arrayWords[i]) >= 0) {
                            arrayWordsIs[i]++;
                        }
                    }
                } else {
                    let mainKey = arrayKeys[j].substring(0, isSubKey);
                    let subKey = arrayKeys[j].substring(isSubKey + 1);
                    if (mainKey in arrayObj[n]) {
                        arrayWordsIs[i] = checkSubObject(arrayObj[n][mainKey], subKey, arrayWords[i], arrayWordsIs[i]);
                    }
                }
            }
        }
        for (let i = 0; i < arrayWordsIs.length; i++) {
            if (arrayWordsIs[i] > 0) {
                checkFilter++;
            }
        }

        if (flag === true && checkFilter === arrayWordsIs.length) {
            filtereredArr[indexFilter] = arrayObj[n];
            indexFilter++;
        } else if (flag === false && checkFilter > 0) {
            filtereredArr[indexFilter] = arrayObj[n];
            indexFilter++;
        }
        checkFilter = 0;
    }
    return filtereredArr;
}

function checkSubObject(subObj, subKey, keyWord, currentCount) {
    let countWord = currentCount;
    let checkPoint = subKey.indexOf(".");
    if (checkPoint === -1) {
        if (!Array.isArray(subObj)) {
            if (subKey in subObj) {
                if (subObj[subKey].indexOf(keyWord) >= 0) {
                    countWord++;
                }
            }
        } else {
            for (let i = 0; i < subObj.length; i++) {
                countWord = checkSubObject(subObj[i], subKey, keyWord, countWord);
            }
        }
    } else {
        let mainKey = subKey.substring(0, checkPoint);
        let addKey = subKey.substring(checkPoint + 1);
        if (mainKey in subObj) {
            countWord = checkSubObject(subObj[addKey], addKey, keyWord, countWord);
        }
    }
    return countWord;
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
console.log(filterCollection(vehicles, "apa atch", false, 'name', 'country', 'engine.liquid'));

