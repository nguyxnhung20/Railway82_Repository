// Hàm lấy ngày tháng hiện tại
export function getNowDate() {
  const date = new Date();
  // Lấy ra ngày hiện tại
  const currentDay = date.getDate();
  // Lấy ra tháng hiện tại
  const currentMonth = date.getMonth() + 1;
  // Lấy ra năm hiện tại
  var currentYear = date.getFullYear();

  //   Trả về định dạng: yyyy-MM-dd
  return currentYear + "-" + currentMonth + "-" + currentDay;
}
