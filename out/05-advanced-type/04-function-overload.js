"use strict";
function formatValue(value) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    return `number: ${value}`;
}
console.log(formatValue('coc'));
console.log(formatValue(5));
function greetUser(name, lastName) {
    if (!lastName) {
        return `hello mr. ${name}`;
    }
    return `hello mr. ${name} ${lastName}`;
}
console.log(greetUser('Vlad'));
console.log(greetUser('Vlad', 'Kim'));
