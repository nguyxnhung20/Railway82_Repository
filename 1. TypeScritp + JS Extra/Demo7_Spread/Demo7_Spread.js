var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// khai báo đối tượng student
var student = {
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
var student_new = __assign(__assign({}, student), { address: "HN", age: 22 });
console.log("id: ".concat(student_new.id));
// Demo mảng
var name_82 = ["Sơn", "Nam", "Lâm"];
var name_82_new = __spreadArray(__spreadArray([], name_82, true), ["Hưng", "Hoàng"], false);
