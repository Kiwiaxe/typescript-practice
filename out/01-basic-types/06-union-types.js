"use strict";
// task 6.1
let statusMessage;
statusMessage = 'loading...';
statusMessage = 500;
// task 6.2
function processInput(input) {
    if (typeof input === 'string') {
        return input.toUpperCase();
    }
    return input * input;
}
