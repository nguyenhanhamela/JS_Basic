/**Viết hàm tính khoảng cách 2 điểm bất kì trong mặt phẳng.
 * Biết khoảng cách giữa 2 điểm A(x1, y1) và B (x2, y2) là căn bậc 2 của: (x1 - x2)^2 + (y1-y2)^2 */

function khoangcach(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

let AB = Math.round(khoangcach(2, 3, 5, 6)); // Math.round() : làm tròn số đến gần số nguyên nhất và trả về một số nguyên.

console.log(`khoang cach AB = ${AB}`);
