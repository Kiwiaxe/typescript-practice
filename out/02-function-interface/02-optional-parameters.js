"use strict";
// task 2.1
function getUserInfo(name, age) {
    if (!age) {
        return name;
    }
    return `${name}, ${age}`;
}
let product1 = {
    id: 123,
    name: 'notebook',
};
let product2 = {
    id: 321,
    name: 'PC',
    description: 'gaming PC',
};
