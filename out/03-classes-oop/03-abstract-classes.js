"use strict";
// task 3.1
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    eat = (food) => {
        console.log(`${this.name} ест ${food}`);
    };
}
class Dog extends Animal {
    makeSound = () => {
        return `uah!`;
    };
}
class Cat extends Animal {
    makeSound = () => {
        return `meow!`;
    };
}
let dog = new Dog('Taison');
console.log(dog.makeSound());
dog.eat('zhvachka');
let cat = new Cat('CoCo');
console.log(cat.makeSound());
cat.eat('mysor');
