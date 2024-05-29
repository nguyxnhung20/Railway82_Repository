// object student
var student = {
    id: 1,
    name: "Hưng",
    gender: true,
};
// let v_id = student.id;
// let v_name = student.name;
// let v_gender = student.gender;
// Destructuring
// let { id: v_id, name: v_name, gender: v_gender } = student;
// console.log(`v_id: ${v_id}`);
// console.log(`v_name: ${v_name}`);
// console.log(`v_gender: ${v_gender}`);
// let { id, name, gender } = student;
var name_82 = ["Sơn", "Nam", "Lâm"];
// => Destructuring mảng
// let v_1 = name_82[0];
var v_1 = name_82[0], v_2 = name_82[1], v_3 = name_82[2];
console.log("v_1: ".concat(v_1));
console.log("v_2: ".concat(v_2));
console.log("v_3: ".concat(v_3));
