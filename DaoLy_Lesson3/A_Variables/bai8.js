// 8.Thực hành lại bài khai báo biến local sau, 
// chỉ ra vì sao biến x lại là biến local (biến cục bộ). 
// Trả lời bằng cách  thêm câu trả lời vào comment trước đoạn code này 

function localFunc() { 
  var x = 10; //local variable   
  console.log(x); //10   

} 
localFunc(); 
//Biến x là biến cục bộ: do chỉ sử dụng ở trong hàm local Func