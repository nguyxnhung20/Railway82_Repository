import { Person } from "./Person";
import { v_vti } from "./Person";
import { Student } from "./Student";

// import v_Age from "./Person";

var person1 = new Person(1, "Hưng", "HN");
// // person1.id = 1;
// person1.setId(1);
// person1.setName("Hưng");
// person1.setAddress("HN");

var person2 = new Person(2, "Hưng", "QN");
// person2.setId(2);
// person2.setName("Hưng");
// person2.setAddress("QN");

// In thông tin
// console.log(`Đây là ${v_vti}`);

person1.go();
person1.showInfo();
person2.showInfo();

var student1 = new Student(3, "Hùng", "ĐN", "RL79", "9");
var student2 = new Student(4, "Minh", "SG", "RL79", "8.5");

student1.showStudentInfo();
student2.showStudentInfo();

// console.log(`Tuổi của tôi là ${v_Age}`);
