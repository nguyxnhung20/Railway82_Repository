// hãy viết 1 function dùng để tính tổng 2 số

// Cách 1
function sum(a: number, b: number) {
  let resutl = a + b;
  return resutl;
}

let v_resutl_sum = sum(20, 50);
console.log(`Tổng 2 số là: ${v_resutl_sum}`);

// Cách 2
// Tạo biến tham chiếu đến 1 function
let v_sum = function (a: number, b: number) {
  let resutl = a + b;
  return resutl;
};

// 30,40
let v_resutl_sum_2 = v_sum(30, 40);
console.log(`Tổng hai số là: ${v_resutl_sum_2}`);

// Cách 3
// Arrow Function
let v_sum_3 = (a: number, b: number) => {
  let resutl = a + b;
  return resutl;
};

let v_resutl_sum_3 = v_sum(30, 40);
console.log(`Tổng hai số là: ${v_resutl_sum_3}`);

// Trường hợp đặc biệt, phần phân hàm chỉ có duy nhất 1 dòng lệnh
// let v_sum_4 = (a: number, b: number) => {
//   return a + b;
// };

let v_sum_4 = (a: number, b: number) => a + b;
