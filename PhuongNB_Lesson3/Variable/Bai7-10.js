// 7. Sử dụng comment trong JS để mô tả đúng kiểu dữ liệu của các biến này: 

let length = 16; //  kiểu number
let lastName = "nguyen"; //  kiểu string
let x = { 
	firstName: "Nick", 
	lastName: "Doe" 
}; // kiểu object

// 8. Thực hành lại bài khai báo biến local sau, chỉ ra vì sao biến x lại là biến local (biến cục bộ). 
function localFunc() { 
  var x = 10; //x là biến local vì biến x được khai báo trong hàm, chỉ có thể truy cập được trong block bao quanh nó được xác định bằng cặp {}
  console.log(x); //10   
} 
localFunc(); 

// 9. Thực hành lại bài khai báo biến global sau, chỉ ra vì sao biến globalVar lại là biến global (biến toàn cục).
var globalVar = "some val"; //global variable            
function globalFunc() { 
  console.log(globalVar); //global variable , result  is "some val" 
} 
globalFunc(); 
// biến globalVar là biến global vì có thể truy cập ở phạm vi hàm số hoặc bên ngoài hàm số

//10. Các biến nào dưới đây được đặt tên đúng. 
var 123 = 40; //sai vì tên biến chỉ có thể bắt đầu bằng chữ hoặc dấu _
var *aa = 250; //sai vì tên biến chỉ có thể bắt đầu bằng chữ hoặc dấu _
var _x_1 = 7; //đúng
var _value = "test"; //đúng

/*nhắc lại qui tắc đặt tên biến
Tên biến phải là các chữ không dấu viết hoa hoặc viết thường, các chữ số từ 0-9 và dấu gạch dưới () và kí hiệu $.​
Tên biến bắt đầu phải là chữ hoặc dấu gạch dưới (_), nếu bắt đầu bằng số là sai.​
Không thể sử dụng các từ dành riêng (như từ khóa JavaScript) làm tên.​
Các tên có phân biệt chữ hoa chữ thường */