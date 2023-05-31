/** Áp dụng các hàm xử lý chuỗi để làm các bài sau:
 * Cho chuỗi:
 */

var description = "simply dummy text of the printing ";

// 1. Tìm kiếm chuỗi: indexOf(), lastIndexOf(), search()
/**  indexOf():
 * Phương thức trả về vị trí đầu tiên mà chuỗi con được tìm thấy trong chuỗi gốc.
 * Nếu không tìm thấy chuỗi con thì sẽ trả về giá trị -1
 */
let subStr1 = "d";
console.log(description.indexOf(subStr1)); // output : 7

/**  lastIndexOf():
 * Phương thức trả về vị trí cuối cùng mà chuỗi con được tìm thấy trong chuỗi gốc.
 * Nếu không tìm thấy chuỗi con thì sẽ trả về giá trị -1
 */
let subStr2 = "y";

console.log(description.lastIndexOf(subStr2)); // output : 11

/** search():
 * Phương thức trả về vị trí đầu tiên mà chuỗi con đó được tìm thấy chuỗi gốc
 * Nếu không tìm thấy chuỗi con thì sẽ trả về giá trị -1
 * Phương thức search() cho phép sử dụng biểu thức chính quy để tìm kiếm chuỗi.
 */
let subStr3 = "ly"; // output : 4
let subStr4 = "mym"; // output : -1
console.log(description.search(subStr3));
console.log(description.search(subStr4));

// Tìm vị trí của từ“ of” trong chuỗi trên
console.log(`Vi tri cua "of" la: ${description.indexOf("of")}`); // output : 18

// Lấy ra vị trí cuối cùng của chuỗi "the"
console.log(`Vi tri cuoi cung cua "the" la: ${description.lastIndexOf("the")}`); // output : 21

// 2. Cắt chuỗi: slice(start, end), substring(start, end), substr(start, length)
/** slice(start, end): */

// Lấy ra chuỗi “simply dummy” từ chuỗi trên
