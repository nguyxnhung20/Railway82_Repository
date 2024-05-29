"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
var Person_1 = require("./Person");
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    // Xây dựng constructor
    function Student(id, name, address, classVti_old, testScore_JavaAdvanced) {
        var _this = _super.call(this, id, name, address) || this;
        _this.classVti_old = classVti_old;
        _this.testScore_JavaAdvanced = testScore_JavaAdvanced;
        return _this;
    }
    // Khai báo get, set cho các thuộc tính mở rộng
    Student.prototype.getClassVti_old = function () {
        return this.classVti_old;
    };
    Student.prototype.getTestScore_JavaAdvanced = function () {
        return this.testScore_JavaAdvanced;
    };
    Student.prototype.setClassVti_old = function (value) {
        this.classVti_old = value;
    };
    Student.prototype.setTestScore_JavaAdvanced = function (value) {
        this.testScore_JavaAdvanced = value;
    };
    // Khai báo phương thức cho Student
    Student.prototype.showStudentInfo = function () {
        console.log("Th\u00F4ng tin student l\u00E0 , ID: ".concat(this.getId(), ", Name: ").concat(this.getName(), ", \u0110\u1ECBa ch\u1EC9: ").concat(this.getAddress(), ", L\u1EDBp VTI c\u0169: ").concat(this.classVti_old, ", \u0110i\u1EC3m Java Advanced: ").concat(this.testScore_JavaAdvanced));
    };
    return Student;
}(Person_1.Person));
exports.Student = Student;
