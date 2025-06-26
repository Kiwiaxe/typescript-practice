//task 1.1

interface Container<T> {
	content: T;
}

let stringContainer: Container<string> = {
	content: 'hello'
}
let numberContainer: Container<number> = {
	content: 100
}

//task 1.2

type Result<T, E> = 
	| {success: true, data: T}
	| {success: false, error: E};

class Queue<T> {
	element: T[] = [];
	enqueue = (item: T): void => {
		this.element.push(item)
	}
	dequeue = (): T | undefined => {
		if (this.element.length === 0) return undefined;
		return this.element.shift()
	}
}