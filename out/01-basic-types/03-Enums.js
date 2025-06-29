"use strict";
//task 3.1
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Pending"] = 0] = "Pending";
    OrderStatus[OrderStatus["Processing"] = 1] = "Processing";
    OrderStatus[OrderStatus["Shipped"] = 2] = "Shipped";
    OrderStatus[OrderStatus["Delivered"] = 3] = "Delivered";
    OrderStatus[OrderStatus["Cancelled"] = 4] = "Cancelled";
})(OrderStatus || (OrderStatus = {}));
const currentStatus = OrderStatus.Processing;
//task 3.2
var UserRole;
(function (UserRole) {
    UserRole["admin"] = "ADMIN";
    UserRole["editor"] = "EDITOR";
    UserRole["viewer"] = "VIEWER";
})(UserRole || (UserRole = {}));
const userPermission = UserRole.admin;
console.log(userPermission);
