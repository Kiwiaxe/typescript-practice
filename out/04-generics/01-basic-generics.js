"use strict";
//task 1.1
let stringContainer = {
    content: 'hello'
};
let numberContainer = {
    content: 100
};
class Queue {
    element = [];
    enqueue = (item) => {
        this.element.push(item);
    };
    dequeue = () => {
        if (this.element.length === 0)
            return undefined;
        return this.element.shift();
    };
}
