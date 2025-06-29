"use strict";
// task 2.1
class Wallet {
    owner;
    balance;
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
    getBalance = () => {
        return this.balance;
    };
}
let myWallet = new Wallet('Kim Vlad', 10000);
// console.log(myWallet.balance)// private
console.log(myWallet.getBalance());
// task 2.2
class Employee {
    salary;
    constructor(salary) {
        this.salary = salary;
    }
}
class Manager extends Employee {
    getBonusSalary = (percent) => {
        return this.salary += (this.salary / 100) * percent;
    };
}
let manager = new Manager(100);
console.log(manager.getBonusSalary(15));
