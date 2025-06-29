// task 4.1
function formatValue (value: string): string;
function formatValue (value: number): string;
function formatValue (value: number | string): string {
	if (typeof value === 'string') {
		return value.toUpperCase()
	}
	return `number: ${value}`
}
console.log(formatValue('coc'));
console.log(formatValue(5));

// task 4.2

function greetUser (name: string): string;
function greetUser (name: string, lastName: string): string;
function greetUser (name: string, lastName?: string): string {
	if (!lastName) {
		return `hello mr. ${name}`
	}
	return `hello mr. ${name} ${lastName}`;
}

console.log(greetUser('Vlad'));
console.log(greetUser('Vlad', 'Kim'));
