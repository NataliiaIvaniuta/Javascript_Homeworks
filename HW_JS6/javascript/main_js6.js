"use strict";

function filterBy(someArray, filterType){
    let filteredArray=someArray.filter(function(el){
        return typeof (el) !== typeof(filterType)
    });
    return filteredArray
};

console.log(filterBy(["some", null, "words", 123, "11", null, 55, NaN], "string"));
console.log(filterBy(["some", null, "words", 123, "11", null, 55, NaN], null));
console.log(filterBy(["some", null, "words", 123, "11", null, 55, NaN], NaN));
