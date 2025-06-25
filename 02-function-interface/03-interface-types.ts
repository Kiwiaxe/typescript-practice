// task 3.1
interface ICar {
	brand: string,
	model: string,
	year: number,
};

const myCar: ICar = {
	brand: 'heyndai',
	model: 'h31t',
	year: 2045
}

// task 3.2
type Coordinates = {
	x: number,
	y: number,
}

interface IElectricCar extends ICar {
	batteryRange: number,
}