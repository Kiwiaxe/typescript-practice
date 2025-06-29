"use strict";
// task 1.1
function LogCreation(constructor) {
    console.log(`экземпляр ${constructor.name} создан!`);
}
// task 1.2
function MeasureExecutionTime(target, propertyKey, descriptor) {
    let originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        const startTime = performance.now();
        const result = originalMethod.apply(this, args);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        console.log(`Method ${propertyKey} completed for ${executionTime}ms`);
        return result;
    };
}
