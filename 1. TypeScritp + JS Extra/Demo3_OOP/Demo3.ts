import Account from "./Account";
import Department from "./Department";
import Position from "./Position";

// Tạo các đối tượng Department
var department1 = new Department(1, "Marketing");
var department2 = new Department(2, "Sale");

// Tạo các đối tượng Position
var position1 = new Position(1, "Dev");
var position2 = new Position(2, "Test");
var position3 = new Position(3, "Scrum_Master");
var position4 = new Position(4, "PM");

// Hiển thị thông tin của các phòng ban
var departments = [department2, department1];

for (var department of departments) {
  department.showDepartment();
}

// Hiển thị chức vị
var positions = [position1, position2, position3, position4];

for (var position of positions) {
  position.showPosition();
}

// Hiển thị Account
var accounts = [
  new Account(
    1,
    "nguyenduyhung.20052002@gmail.com",
    "nguyxnhung",
    "Hưng",
    department1,
    position2
  ),
  new Account(
    2,
    "nguyenduyhung1.20052002@gmail.com",
    "nguyxnhung1",
    "Duy Hưng",
    department2,
    position3
  ),
];

for (var account of accounts) {
  account.showAccount();
}
