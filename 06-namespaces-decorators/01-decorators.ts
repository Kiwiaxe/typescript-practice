// task 1.1
function LogCreation(constructor: Function): void {
	console.log(`экземпляр ${constructor.name} создан!`);
}

// task 1.2

function MeasureExecutionTime (
	target: any, 
	propertyKey: string, 
	descriptor: PropertyDescriptor): void {
		let originalMethod = descriptor.value;
		 descriptor.value = function (...args: any[]) {
      const startTime = performance.now();
			const result = originalMethod.apply(this, args);
			const endTime = performance.now();
      const executionTime = endTime - startTime;
			console.log(`Method ${propertyKey} completed for ${executionTime}ms`);
			return result;
		 }
		
}