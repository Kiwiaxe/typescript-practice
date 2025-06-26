// task 2.1

let identity = <T> (arg: T): T => {
	return arg
}
console.log(identity(1));
console.log(identity('hello'));

// task 2.2

let reverseArray = <T> (arr: T[]): T[] => {
	return arr.reverse()
}
console.log(reverseArray([1, 2, 3]));
console.log(reverseArray(['a', 'b', 'c']));
