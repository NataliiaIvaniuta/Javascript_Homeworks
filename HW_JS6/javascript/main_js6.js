"use strict";

function filterBy(someArray, filterType){
    return someArray.filter((el)=> typeof el !== filterType)}

console.log(filterBy(["some", null, "words", 123, "11", null, 55, NaN], typeof "string"));
console.log(filterBy(["some", null, "words", 123, "11", null, 55, NaN], typeof null)); //for another type of data
console.log(filterBy(["some", null, "words", 123, "11", null, 55, NaN], typeof NaN)); //for another type of data
