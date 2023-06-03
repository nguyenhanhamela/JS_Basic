/** Áp dụng các hàm xử lý chuỗi để làm các bài sau: */

var description = "simply dummy text of the printing";

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
/** slice(start, end):
 * Phương thức slice() trả về một phần của chuỗi gốc dựa trên vị trí bắt đầu và kết thúc.
 * Đối số start chỉ định vị trí bắt đầu của chuỗi con cần lấy, và đối số end chỉ định vị trí kết thúc của chuỗi con (không bao gồm vị trí này).
 * Nếu không có đối số end được chỉ định, phương thức sẽ lấy tất cả các ký tự từ vị trí start đến hết chuỗi gốc.
 */
let subStr5 = description.slice(0, 6);
console.log(subStr5); // output : simply

/** substring(start, end):
 * Phương thức substring() cũng trả về một phần của chuỗi dựa trên vị trí bắt đầu và kết thúc.
 * Tuy nhiên, nếu đối số end không được chỉ định, phương thức sẽ lấy đến cuối chuỗi gốc.
 * Ngoài ra, nếu đối số start sau đối số end, phương thức sẽ hoán đổi chúng để đảm bảo rằng start < end.
 */
let subStr6 = description.substring(7, 13);
console.log(subStr6); //output : dummy

/** substr(start, length):
 * Phương thức substr() trả về một phần của chuỗi dựa trên vị trí bắt đầu và độ dài của chuỗi con cần lấy.
 * Đối số start chỉ định vị trí bắt đầu, và đối số length chỉ định độ dài của chuỗi con cần lấy.
 */
let subStr7 = description.substr(13, 7);
console.log(subStr7); // output : text of

// Lấy ra chuỗi “simply dummy” từ chuỗi trên
console.log(description.slice(0, 12));

// 3. Tìm kiếm và thay thế: replace(str_find, str_replace)
let newDescription1 = description.replace("text", "number");
console.log(newDescription1); // output : simply dummy number of the printing

/** Biểu thức /the/gi được sử dụng để tìm kiếm tất cả các chuỗi con "the" và thay thế chúng bằng "a".
 * Cờ g và i đều được sử dụng. Cờ g để tìm kiếm toàn bộ chuỗi, cờ i để không phân biệt chữ hoa và chữ thường.
 */
let str = "The quick brown fox jumps over the lazy dog";
let newStr = str.replace(/the/gi, "a");
console.log(newStr); // Output: "A quick brown fox jumps over a lazy dog"

// Thay thế từ “dummy” trong chuỗi trên thành ký tự trống
let newDescription2 = description.replace("dummy", "");
console.log(newDescription2); // output : simply  number of the printing

// 4. Chuyển chữ hoa/thường: toUpperCase()/toLowerCase()
// Chuyển đổi từ "TRUONG DAI HOC THUONG MAI" thành "Truong dai hoc THUONG MAI"
let word = "TRUONG DAI HOC THUONG MAI";
let subStr8 = word.slice(1, 14).toLowerCase(); // output : ruong dai hoc
let restOfWord = word.slice(14);
// console.log(restOfWord); // output :  THUONG MAI
let newWord1 = word.charAt(0) + subStr8 + restOfWord;
console.log("newWord1: " + newWord1); // output : Truong dai hoc THUONG MAI

// Chuyển đổi chuỗi trên thành toàn bộ chữ hoa
console.log(description.toUpperCase()); // output : SIMPLY DUMMY TEXT OF THE PRINTING

// Viết hoa ký tự đầu tiên của chuỗi trên
/**Sử dụng phương thức charAt() để lấy kí tự đầu tiên của chuỗi và sau đó sử dụng phương thức toUpperCase() để chuyển đổi kí tự đó thành chữ hoa.
 * Sử dụng phương thức slice() để lấy các kí tự còn lại của chuỗi*/
let firstChar = description.charAt(0).toUpperCase();
let restOfString = description.slice(1);
let newDescription3 = firstChar + restOfString;
console.log(newDescription3); // output : Simply dummy text of the printing

// 4. Nối chuỗi: concat()
var title = "example";
// Nối chuỗi description với chuỗi vừa khai báo
let subStr9 = description.concat(" ", title);
console.log(subStr9); // output : simply dummy text of the printing example
