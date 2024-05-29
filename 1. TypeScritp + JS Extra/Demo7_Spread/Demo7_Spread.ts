// khai báo đối tượng student
let student = {
  id: 1,
  name: "Hưng",
  gender: true,
};

// bạn hay tạo đối tượng student_new: id: 1, name: "Hưng", gender: true, address:"HN", age:22

// let student_new = {
//   id: 1,
//   name: "Hưng",
//   gender: true,
//   address: "HN",
//   age: 22,
// };

let student_new = {
  ...student,
  address: "HN",
  age: 22,
};

console.log(`id: ${student_new.id}`);

// Demo mảng
let name_82 = ["Sơn", "Nam", "Lâm"];

let name_82_new = [...name_82, "Hưng", "Hoàng"];
