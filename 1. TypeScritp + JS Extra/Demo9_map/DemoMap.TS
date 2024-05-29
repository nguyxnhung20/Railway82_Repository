// Cho 1 mảng như sau
let numArr = [1, 3, 4, 7, 9];

// Yêu cầu hãy tạo ra 1 mảng mới với các phần tử tăng thêm 4 đơn vị từ phần tử của mảng numArr
// numArr_New

// let numArr_New: number[] = [];

// numArr.forEach((number) => {
//   let number_new = number + 4;

//   numArr_New.push(number_new);
// });

// console.log(numArr_New);

// Sử dụng vòng map
// let numArr_New = numArr.map(function (number, index) {
//   //   let number_new = number + 4;
//   return number + 4;
// });

let numArr_New = numArr.map((number, index) => number + 4);
console.log(numArr_New);
