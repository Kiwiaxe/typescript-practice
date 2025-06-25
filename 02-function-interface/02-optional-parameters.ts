// task 2.1

function getUserInfo (name: string, age?: number): string {
	if (!age) {
		return name;
	}
	return `${name}, ${age}`
}

// task 2.2

type Product = {
	id: number,
	name: string,
	description?: string,
};

let product1: Product = {
	id: 123,
	name: 'notebook',
}
let product2: Product = {
	id: 321,
	name: 'PC',
	description: 'gaming PC',
}
