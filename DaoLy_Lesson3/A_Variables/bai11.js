/*Cho chuỗi sau: 
var description = "simply dummy text of the printing " 
1. Tìm kiếm chuỗi: indexOf(), lastIndexOf(), search() 
- Tìm vị trí của từ “of” trong chuỗi trên 
- Lấy ra vị trí cuối cùng của chuỗi “the” 

2. Cắt chuỗi: slice(start, end), substring(start, end), substr(start, length) 
- Lấy ra chuỗi “simply dummy” từ chuỗi trên 
3. Tìm kiếm và thay thế: replace(str_find, str_replace), 
- Thay thế từ “dummy” trong chuỗi trên thành ký tự trống 
4. Chuyển chữ hoa/thường: toUpperCase()/toLowerCase() 
- Chuyển đổi chuỗi trên thành toàn bộ chữ hoa 
- Viết hoa ký tự đầu tiên của chuỗi trên 
5. Nối chuỗi: concat() 
- Khai báo chuỗi:  var title = "example" 
- Nối chuỗi trên với chuỗi vừa khai báo	 */

var description = "simply dummy text of the printing " 
console.log("Vị trí của từ “of” trong chuỗi trên "+ description.search('of'))
console.log("Vị trí cuối cùng của chuỗi “the” "+ description.lastIndexOf('the'))
console.log("Lấy ra chuỗi “simply dummy” từ chuỗi trên:"+ description.slice(0,12))
console.log("Lấy ra chuỗi “simply dummy” từ chuỗi trên:"+ description.substring(0,12))
console.log("Lấy ra chuỗi “simply dummy” từ chuỗi trên:"+ description.substr(0,12))
console.log("Thay thế từ “dummy” trong chuỗi trên thành ký tự trống: "+ description.replace("dummy",""))
console.log("Chuyển đổi chuỗi trên thành toàn bộ chữ hoa: "+ description.toUpperCase())
console.log("Viết hoa ký tự đầu tiên của chuỗi trên: "+ description.charAt(0).toUpperCase()+description.slice(1))

var title = "example"
console.log("Nối chuỗi trên với chuỗi vừa khai báo: "+ description.concat(title))