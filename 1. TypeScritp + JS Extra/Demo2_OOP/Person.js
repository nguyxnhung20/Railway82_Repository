"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.v_vti = exports.Person = void 0;
// Khai báo class Person
var Person = /** @class */ (function () {
    // Khai báo contructor
    function Person(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    // Khai báo get, set
    Person.prototype.getId = function () {
        return this.id;
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getAddress = function () {
        return this.address;
    };
    Person.prototype.setId = function (value) {
        this.id = value;
    };
    Person.prototype.setName = function (value) {
        this.name = value;
    };
    Person.prototype.setAddress = function (value) {
        this.address = value;
    };
    // Khai báo phương thức
    Person.prototype.go = function () {
        console.log("I can go!!");
    };
    Person.prototype.showInfo = function () {
        console.log("Th\u00F4ng tin person1 l\u00E0 , ID: ".concat(this.id, ", Name: ").concat(this.name, ", \u0110\u1ECBa ch\u1EC9: ").concat(this.address));
    };
    return Person;
}());
exports.Person = Person;
// export var v_vti = "VTI Academy";
var v_vti = "VTI Academy";
exports.v_vti = v_vti;
var v_myAge = 20;
// export default v_myAge;
// // Demo
// var person1 = new Person();
// person1.id = 1;
// person1.name = "Hưng";
// person1.address = "HN";
// var person2 = new Person();
// person2.id = 2;
// person2.name = "Hưng";
// person2.address = "QN";
// console.log(
//   `Thông tin person1 là , ID: ${person1.id}, Name: ${person1.name}, Địa chỉ: ${person1.address}`
// );
