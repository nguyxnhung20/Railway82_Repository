// Bạn hãy xây dựng 1 chương trình máy tính để tính toán
// Tính tổng 2 số
// Tính hiệu 2 số
// ...

function sum(a: number, b: number) {
  return a + b;
}

function minus(a: number, b: number) {
  return a - b;
}

function multiply(a: number, b: number) {
  return a * b;
}

let resultSum = sum(10, 20);
let resultMinus = minus(40, 10);
let resultMultiply = multiply(10, 5);

// Khai báo hàm caculate
function caculate(aInput, bInput, fInput) {
  let v_resutl = fInput(aInput, bInput);
  return v_resutl;
}

// Tính tổng 2 số 50,60
let v_cal_Sum = caculate(50, 60, sum);
console.log(`v_cal_Sum = ${v_cal_Sum}`);

// Tính hiệu 2 số 110, 60
let v_cal_Mi = caculate(110, 60, minus);
console.log(`v_cal_Mi = ${v_cal_Mi}`);

let v_cal_Mul = caculate(20, 25, multiply);
console.log(`v_cal_Mul = ${v_cal_Mul}`);

function x() {
  function y() {}
  return y;
}
