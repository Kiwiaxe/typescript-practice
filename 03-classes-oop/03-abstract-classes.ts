// task 3.1

abstract class Animal {
	name: string;
	constructor (name: string) {
		this.name = name;
	}
	abstract makeSound(): string;
	eat = (food: string): void => {
		console.log(`${this.name} ест ${food}`);
	}
}

class Dog extends Animal {
	makeSound = (): string => {
		return `uah!`
	}
}
class Cat extends Animal {
	makeSound = (): string => {
		return `meow!`
	}
}
let dog = new Dog('Taison');
console.log(dog.makeSound());
dog.eat('zhvachka')

let cat = new Cat('CoCo');
console.log(cat.makeSound());
cat.eat('mysor')

