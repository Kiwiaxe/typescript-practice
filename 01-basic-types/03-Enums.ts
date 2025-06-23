//task 3.1
enum OrderStatus {
	Pending,
	Processing,
	Shipped,
	Delivered,
	Cancelled,
}

const currentStatus: OrderStatus = OrderStatus.Processing;

//task 3.2
enum UserRole {
	admin = 'ADMIN',
	editor = 'EDITOR',
	viewer = 'VIEWER',
}

const userPermission: UserRole = UserRole.admin;
console.log(userPermission);