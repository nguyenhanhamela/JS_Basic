//10. Áp dụng các hàm xử lý chuỗi để làm các bài sau:  

var description = "simply dummy text of the printing "
//a. Tìm kiếm chuỗi: indexOf(), lastIndexOf(), search() 
var description = "simply dummy text of the printing ";
console.log(description.indexOf("t"));
console.log(description.lastIndexOf("s"));
console.log(description.search("h"));
//b. Cắt chuỗi: slice(start, end), substring(start, end), substr(start, length) 
console.log(description.slice(7 , 12));
console.log(description.substring(7, 12));
console.log(description.substr(0, 6));
//c. Tìm kiếm và thay thế: replace(str_find, str_replace), 
console.log(description.replace("simply", ""));
//d.Chuyển chữ hoa/thường: toUpperCase()/toLowerCase() 
console.log(description.toUpperCase("simply dummy"));
console.log(description.toLowerCase("simply"));
//e. Nối chuỗi: concat() 
var title = "example"
console.log(description.concat(title));
