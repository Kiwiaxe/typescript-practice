"use strict";
// task 2.1
let identity = (arg) => {
    return arg;
};
console.log(identity(1));
console.log(identity('hello'));
// task 2.2
let reverseArray = (arr) => {
    return arr.reverse();
};
console.log(reverseArray([1, 2, 3]));
console.log(reverseArray(['a', 'b', 'c']));
