/*9. Thực hành lại bài khai báo biến global sau, 
chỉ ra vì sao biễn globalVar lại là biến global (biến toàn cục). Trả lời bằng cách  
thêm câu trả lời vào comment trước đoạn code này */

var globalVar = "some val"; //global variable            

function globalFunc() { 

  console.log(globalVar); //global variable , result  is "some val" 

} 

globalFunc(); 

/*biến global (biến toàn cục): do biến có thể nhìn thấy giá trị trong suốt chương trình chạy, 
và có thể sử dụng/thay đổi ở bất kì phạm vi nào trong chương trình*/