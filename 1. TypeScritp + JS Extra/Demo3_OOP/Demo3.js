"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Account_1 = require("./Account");
var Department_1 = require("./Department");
var Position_1 = require("./Position");
// Tạo các đối tượng Department
var department1 = new Department_1.default(1, "Marketing");
var department2 = new Department_1.default(2, "Sale");
// Tạo các đối tượng Position
var position1 = new Position_1.default(1, "Dev");
var position2 = new Position_1.default(2, "Test");
var position3 = new Position_1.default(3, "Scrum_Master");
var position4 = new Position_1.default(4, "PM");
// Hiển thị thông tin của các phòng ban
var departments = [department2, department1];
for (var _i = 0, departments_1 = departments; _i < departments_1.length; _i++) {
    var department = departments_1[_i];
    department.showDepartment();
}
// Hiển thị chức vị
var positions = [position1, position2, position3, position4];
for (var _a = 0, positions_1 = positions; _a < positions_1.length; _a++) {
    var position = positions_1[_a];
    position.showPosition();
}
// Hiển thị Account
var accounts = [
    new Account_1.default(1, "nguyenduyhung.20052002@gmail.com", "nguyxnhung", "Hưng", department1, position2),
    new Account_1.default(2, "nguyenduyhung1.20052002@gmail.com", "nguyxnhung1", "Duy Hưng", department2, position3),
];
for (var _b = 0, accounts_1 = accounts; _b < accounts_1.length; _b++) {
    var account = accounts_1[_b];
    account.showAccount();
}
