// task 2.1

type MyPartial<T> = {
	[P in keyof T]?: T[P]
}

interface IPoint<MyPartial> {
	x: number,
	y: number,
}

// task 2.2
type MyReadonly<T> = {
	readonly [P in keyof T]: T[P]
}

type MyStringify<T> = {
	[P in keyof T]: string
}