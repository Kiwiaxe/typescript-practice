"use strict";
// task 3.1
let printName = (obj) => {
    console.log(obj);
};
printName({ name: 'vlad' });
// printName({age: 23}); // нет обящательного поля
printName({ name: 'Vlad', age: 23 });
// task 3.2
let getProperty = (obj, key) => {
    return obj[key];
};
