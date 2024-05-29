// hãy viết 1 function dùng để tính tổng 2 số
// Cách 1
function sum(a, b) {
    var resutl = a + b;
    return resutl;
}
var v_resutl_sum = sum(20, 50);
console.log("T\u1ED5ng 2 s\u1ED1 l\u00E0: ".concat(v_resutl_sum));
// Cách 2
// Tạo biến tham chiếu đến 1 function
var v_sum = function (a, b) {
    var resutl = a + b;
    return resutl;
};
// 30,40
var v_resutl_sum_2 = v_sum(30, 40);
console.log("T\u1ED5ng hai s\u1ED1 l\u00E0: ".concat(v_resutl_sum_2));
// Cách 3
// Arrow Function
var v_sum_3 = function (a, b) {
    var resutl = a + b;
    return resutl;
};
var v_resutl_sum_3 = v_sum(30, 40);
console.log("T\u1ED5ng hai s\u1ED1 l\u00E0: ".concat(v_resutl_sum_3));
