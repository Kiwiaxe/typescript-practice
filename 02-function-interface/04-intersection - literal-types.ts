// task 4.1
type LogLevel = 'info' | 'warn' | 'error';

let currentLogLevel: LogLevel = 'warn';

// task 4.2
interface IIdentifiable {
	id: number
}
interface INameable {
	name: string
}
type User = IIdentifiable & INameable;

//task 5.1

interface IImmutablePoint {
	readonly x: number,
	readonly y: number,
}

let immutablePoint: IImmutablePoint = {
	x: 10,
	y: 20,
}
// immutablePoint.x = 30; //ошибка readonly property

//task 5.2

class BlogPost {
	readonly id: number;
	title: string;
	constructor(id: number, title: string) {
		this.id = id;
		this.title = title;
	}
}

let blogPost = new BlogPost(10, 'hello');
// blogPost.id = 20; // readonly

let numbers: readonly number[] = [1, 2, 3, 4];
// numbers.push(5); // error
