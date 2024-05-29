"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Account = /** @class */ (function () {
    // Khai báo constructor
    function Account(AccountID, Email, Username, FullName, Department, Position) {
        this.AccountID = AccountID;
        this.Email = Email;
        this.Username = Username;
        this.FullName = FullName;
        this.Department = Department;
        this.Position = Position;
    }
    // Các phương thức get và set
    Account.prototype.getAccountID = function () {
        return this.AccountID;
    };
    Account.prototype.setAccountID = function (value) {
        this.AccountID = value;
    };
    Account.prototype.getEmail = function () {
        return this.Email;
    };
    Account.prototype.setEmail = function (value) {
        this.Email = value;
    };
    Account.prototype.getUsername = function () {
        return this.Username;
    };
    Account.prototype.setUsername = function (value) {
        this.Username = value;
    };
    Account.prototype.getFullName = function () {
        return this.FullName;
    };
    Account.prototype.setFullName = function (value) {
        this.FullName = value;
    };
    Account.prototype.getDepartment = function () {
        return this.Department;
    };
    Account.prototype.setDepartment = function (value) {
        this.Department = value;
    };
    Account.prototype.getPosition = function () {
        return this.Position;
    };
    Account.prototype.setPosition = function (value) {
        this.Position = value;
    };
    // Phương thức để hiển thị thông tin của Account
    Account.prototype.showAccount = function () {
        console.log("Th\u00F4ng tin Account: ID ".concat(this.AccountID, ", Email ").concat(this.Email, ", Username ").concat(this.Username, ", FullName ").concat(this.FullName));
        this.Department.showDepartment();
        this.Position.showPosition();
    };
    return Account;
}());
exports.default = Account;
