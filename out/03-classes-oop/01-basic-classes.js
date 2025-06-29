"use strict";
// task 1.1 & 1.2
class Book {
    title;
    author;
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    getDescription = () => {
        return `Книга: ${this.title}, автор: ${this.author}`;
    };
}
let myBook = new Book('how to do', 'Kim Vlad');
console.log(myBook.getDescription());
