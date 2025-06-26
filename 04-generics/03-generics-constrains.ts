// task 3.1

let printName = <T extends {name: string}> (obj: T): void => {
	console.log(obj);
}

printName({name: 'vlad'});
// printName({age: 23}); // нет обящательного поля
printName({name: 'Vlad', age: 23});

// task 3.2

let getProperty = <T, K extends keyof T> (obj: T, key: K): T[K] => {
	return obj[key];
}