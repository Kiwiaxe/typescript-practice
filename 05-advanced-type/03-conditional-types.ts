// task 3.1
type IsNumber<T> = T extends number ? true : false;
type A = IsNumber<'hello'>;
type B = IsNumber<10>

// task 3.2

type ArrayElementType<T> = T extends (infer U)[] ? U : never;
