// task 2.1
class Wallet {
	public owner: string;
	private balance: number;
	constructor (owner: string, balance: number) {
		this.owner = owner;
		this.balance = balance;
	}
	public getBalance = (): number => {
		return this.balance;
	}
}

let myWallet = new Wallet('Kim Vlad', 10000);
// console.log(myWallet.balance)// private
console.log(myWallet.getBalance());

// task 2.2

class Employee {
	protected salary: number;
	constructor (salary: number) {
		this.salary = salary;
	}
}

class Manager extends Employee {
	getBonusSalary = (percent: number): number => {
		return this.salary += (this.salary/100) * percent;
	}
}

let manager = new Manager(100);
console.log(manager.getBonusSalary(15))