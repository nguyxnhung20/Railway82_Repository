"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Position = /** @class */ (function () {
    // Khai báo constructor
    function Position(PositionID, PositionName) {
        this.PositionID = PositionID;
        this.PositionName = PositionName;
    }
    // Các phương thức get và set
    /**
     * Getter PositionID
     * @return {number}
     */
    Position.prototype.getPositionID = function () {
        return this.PositionID;
    };
    /**
     * Getter PositionName
     * @return {'Dev' | 'Test' | 'Scrum_Master' | 'PM'}
     */
    Position.prototype.getPositionName = function () {
        return this.PositionName;
    };
    /**
     * Setter PositionID
     * @param {number} value
     */
    Position.prototype.setPositionID = function (value) {
        this.PositionID = value;
    };
    /**
     * Setter PositionName
     * @param {'Dev' | 'Test' | 'Scrum_Master' | 'PM'} value
     */
    Position.prototype.setPositionName = function (value) {
        this.PositionName = value;
    };
    // Phương thức để hiển thị thông tin vị trí
    Position.prototype.showPosition = function () {
        console.log("Th\u00F4ng tin v\u1ECB tr\u00ED l\u00E0: ID ".concat(this.PositionID, ", Name ").concat(this.PositionName));
    };
    return Position;
}());
exports.default = Position;
