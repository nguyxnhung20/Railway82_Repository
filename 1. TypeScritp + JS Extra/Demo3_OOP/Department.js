"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Department = /** @class */ (function () {
    // Khai báo contructor
    function Department(DepartmentID, DepartmentName) {
        this.DepartmentID = DepartmentID;
        this.DepartmentName = DepartmentName;
    }
    // Khai bái get, set
    /**
     * Getter DepartmentID
     * @return {Number}
     */
    Department.prototype.getDepartmentID = function () {
        return this.DepartmentID;
    };
    /**
     * Getter DepartmentName
     * @return {String}
     */
    Department.prototype.getDepartmentName = function () {
        return this.DepartmentName;
    };
    /**
     * Setter DepartmentID
     * @param {Number} value
     */
    Department.prototype.setDepartmentID = function (value) {
        this.DepartmentID = value;
    };
    /**
     * Setter DepartmentName
     * @param {String} value
     */
    Department.prototype.setDepartmentName = function (value) {
        this.DepartmentName = value;
    };
    Department.prototype.showDepartment = function () {
        // Khai báo phương thức
        console.log("Th\u00F4ng tin ph\u00F2ng ban l\u00E0: ID ".concat(this.DepartmentID, ", Name ").concat(this.DepartmentName));
    };
    return Department;
}());
exports.default = Department;
