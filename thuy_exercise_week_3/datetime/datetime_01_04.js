console.log(new Date()); // output: mặc định lấy ngày/giờ hiện tại, giờ UTC (7 tiếng trước)
console.log(new Date("2023-05-31")); // output : 2023-05-31T00:00:00.000Z  , default là 0h

/** BAI TAP:
 * 1. Tạo 1 đối tượng Date, in ra terminal ngày tháng năm hiện tại
 * 2. Từ bài 1, lấy ra năm hiện tại (4 chữ số)
 * 3. Từ bài 1, lấy ra tháng hiện tại (2 chữ số)
 * 4. Từ bài 1, lấy ra ngày hiện tại (2 chữ số) */

var date = new Date();

console.log(
  date.getFullYear(),
  date.getMonth(), // index từ 0 (tháng 1) đến 11(tháng 12)
  date.getDate(), // output: ngày hiện tại trong tháng
  date.getDay(), // index từ 0(thứ 2) đến 6(CN) , output: ngày hiện tại trong tuần
  date.getHours(), // output: giờ hiện tại
  date.getMinutes(), // output: phút hiện tại
  date.getSeconds() // output: giây hiện tại
);

console.log(date.getFullYear()); // output: năm hiện tại dạng YYYY

let monthNow = ("0" + (date.getMonth() + 1)).slice(-2);
console.log(monthNow); // output : tháng hiện tại dạng MM

let dateNow = ("0" + date.getDate()).slice(-2);
console.log(dateNow); // output : ngày hiện tại dạng DD
