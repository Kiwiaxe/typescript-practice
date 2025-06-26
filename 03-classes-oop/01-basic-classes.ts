// task 1.1 & 1.2
class Book {
	title: string;
	author: string;
	constructor (title: string, author: string) {
		this.title = title;
		this.author = author;
	}
	getDescription = (): string => {
		return `Книга: ${this.title}, автор: ${this.author}`
	}
}

let myBook = new Book('how to do', 'Kim Vlad');
console.log(myBook.getDescription());


