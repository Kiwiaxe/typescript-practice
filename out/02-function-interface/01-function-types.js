"use strict";
// task 1.1
function addNumbers(a, b) {
    return a + b;
}
//task 1.2
let logItems = function (items, prefix = 'Item:') {
    items.forEach(item => console.log(`${prefix} ${item}`));
};
logItems(['lol', 'bub', 'shot']);
let sumAllNumbers = (...numbers) => {
    return numbers.reduce((total, num) => total + num, 0);
};
