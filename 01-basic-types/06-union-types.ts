// task 6.1
let statusMessage: string | number;
statusMessage = 'loading...';
statusMessage = 500;

// task 6.2

function processInput(input:string | number) {
	if (typeof input === 'string') {
		return input.toUpperCase();
	}
	return input * input;
}