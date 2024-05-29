// Bạn hãy xây dựng 1 chương trình máy tính để tính toán
// Tính tổng 2 số
// Tính hiệu 2 số
// ...
function sum(a, b) {
    return a + b;
}
function minus(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
var resultSum = sum(10, 20);
var resultMinus = minus(40, 10);
var resultMultiply = multiply(10, 5);
// Khai báo hàm caculate
function caculate(aInput, bInput, fInput) {
    var v_resutl = fInput(aInput, bInput);
    return v_resutl;
}
// Tính tổng 2 số 50,60
var v_cal_Sum = caculate(50, 60, sum);
console.log("v_cal_Sum = ".concat(v_cal_Sum));
// Tính hiệu 2 số 110, 60
var v_cal_Mi = caculate(110, 60, minus);
console.log("v_cal_Mi = ".concat(v_cal_Mi));
var v_cal_Mul = caculate(20, 25, multiply);
console.log("v_cal_Mul = ".concat(v_cal_Mul));
