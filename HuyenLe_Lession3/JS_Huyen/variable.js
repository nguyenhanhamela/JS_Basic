//1.
var fruitName = "Orange";
//2
var y = 50;
//3.
function variable_3() {
    console.log(3 + 10);
}
variable_3()
//4.
function variable_4() {
    const x = 10
    let z = x + y;
    console.log("z= " + z);
}
variable_4()
//5. 
var object = {
    firstName: "my", lastName: "name", age: 30
}
/*6. Có 3 loại biến: var, let, const. 
//Biến var: khai báo biến có thể truy cập ở phạm vi hàm số hoặc bên ngoài hàm số, toàn cục(global)​

 với từ khóa var chúng ta có thể khai báo đa dạng các kiểu biến như number, string, boolean, etc.​

Biến let: khai báo biến chỉ có thể truy cập được trong block bao quanh nó được xác định bằng cặp {}.​

Biến const: được sử dụng để khai báo 1 hằng số, và giá trị của nó không thay đổi trong suốt chương trình.
VD: */
function variable_6() {
    var a = 10;
    let b = 20;
    const c = 30
}
//7
let length = 16; // Number
let lastName = "nguyen"; //  String
let x = {
    firstName: "Nick", //String
    lastName: "Doe" //String
};
console.log(typeof (length), typeof (lastName), typeof (x.firstName), typeof (x.lastName))
//8. 
function localFunc() {
    var x = 10; //local variable: Vì được khai báo trong function nên chỉ được sử dụng trong function, nếu khai báo ngàoi function thì cả trong và ngoài function đểu nhận được (global)
    console.log(x); //10   
}
localFunc();
//9. khai báo ngàoi function thì cả trong và ngoài function đểu nhận được (global)
var globalVar = "some val"; //global variable            
function globalFunc() { 
    console.log(globalVar); //global variable , result  is "some val" 
  } 
  globalFunc(); 
//10.
/*
let y  = 10 ; // tên biến đặt đúng 
var 123 = 40; // Tên biến bắt đầu phải là chữ hoặc dấu gạch dưới (_), nếu bắt đầu bằng số là sai.
var *aa = 250; //Tên biến phải là các chữ không dấu viết hoa hoặc viết thường, các chữ số từ 0-9 và dấu gạch dưới () và kí hiệu $.
var _x_1 = 7; // đúng
var _value = "test"; //Đúng
*/
//11. a
function Chain(){
    var description = "simply dummy text of the printing " ;
    const of_index = description.indexOf("of")
    console.log("11.a vị trí của từ of: ", of_index);
    const last_index_the = description.lastIndexOf("the");
    console.log("11.a vị trí cuối cùng của chuỗi “the”: ", last_index_the)
    let string_slice = description.slice(0,13)
    console.log("11.b Chuỗi đã cắt: ",string_slice);
    let string_replace = description.replace("dummy","")
    console.log("11.c Chuỗi sau khi replace: ",string_replace);
    let string_upper_case = description.toUpperCase()
    console.log("11.d Chuỗi sau khi in hoa: ",string_upper_case);
    let first_upper_case = description.charAt(0).toUpperCase()+description.slice(1);
    console.log("11.d Chuỗi sau khi viet hoa ky tu dau: ",first_upper_case);
    var title = "example"
    let String_concat = description.concat(title);
    console.log("11.e Chuỗi sau khi nối: ",String_concat); 
}
Chain();
//11b. 








