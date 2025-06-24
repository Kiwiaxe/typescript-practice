// task 1.1
function addNumbers (a: number, b: number): number {
	return a + b;
}

//task 1.2
let logItems = function (items: string[], prefix: string = 'Item:'): void {
	items.forEach(item => console.log(`${prefix} ${item}`));
}
logItems(['lol', 'bub', 'shot']);

let sumAllNumbers = (...numbers: number[]): number => {
	return numbers.reduce((total, num) => total + num, 0)
}