"use strict";
let currentLogLevel = 'warn';
let immutablePoint = {
    x: 10,
    y: 20,
};
// immutablePoint.x = 30; //ошибка readonly property
//task 5.2
class BlogPost {
    id;
    title;
    constructor(id, title) {
        this.id = id;
        this.title = title;
    }
}
let blogPost = new BlogPost(10, 'hello');
// blogPost.id = 20; // readonly
let numbers = [1, 2, 3, 4];
// numbers.push(5); // error
