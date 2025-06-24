// task 4.1
let data: any = 'hello';
data = 99;
console.log(data.toUpperCase()); // не работает на числе

// task 4.2
let value: unknown = 10;
value = 'hello';
if (typeof value === 'string') {
	console.log(value.toUpperCase())
}
