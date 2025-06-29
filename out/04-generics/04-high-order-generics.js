"use strict";
// task 4.1
let applyTransformation = (value, transformFunc) => {
    return transformFunc(value);
};
const numToString = (num) => String(num);
const result1 = applyTransformation(123, numToString);
console.log(result1);
