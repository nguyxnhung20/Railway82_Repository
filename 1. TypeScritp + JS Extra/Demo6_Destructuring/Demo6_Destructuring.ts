// object student
let student = {
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

let name_82 = ["Sơn", "Nam", "Lâm"];
// => Destructuring mảng

// let v_1 = name_82[0];
let [v_1, v_2, v_3] = name_82;
console.log(`v_1: ${v_1}`);
console.log(`v_2: ${v_2}`);
console.log(`v_3: ${v_3}`);

export { student };
