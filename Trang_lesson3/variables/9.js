// Thực hành lại bài khai báo biến global sau, chỉ ra vì sao biễn globalVar lại là biến global (biến toàn cục). Trả lời bằng cách  thêm câu trả lời vào comment trước đoạn code này 

var globalVar = "some val"; //global variable vì được khai báo ngoài func        
function globalFunc() { 
  console.log(globalVar); //global variable , result  is "some val" vì được khai báo ngoài func
} 
globalFunc(); 