// task 4.1

let applyTransformation = <T, U> (value: T, transformFunc: (arg: T) => U): U => {
	return transformFunc(value)
}

const numToString = (num: number): string => String(num);
const result1 = applyTransformation(123, numToString);
console.log(result1);