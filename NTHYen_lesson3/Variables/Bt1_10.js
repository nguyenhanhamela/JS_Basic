// BT1
var fruitName = "Orange"
// BT2
var y = 50
// BT3
console.log(3+10)
// BT4
// let x = 10
var z = x+y
console.log(z)
// BT5
let firstName = "my" ; lastName = "name"; age = 30
// BT7
// let length = 16; biến length đang có kiểu dữ liệu là number 
// let lastName = "nguyen"; biến lastName đang có kiểu dữ liệu là string 
// let x = { 
//     firstName: "Nick", 
//     lastName: "Doe" 
// }; biến x đang có kiểu dữ liệu là object

// BT8

function localFunc() {

    var x = 10; //local variable đây là biến local(cục bộ) vì được khai báo trong function
    
    console.log(x); //10
    
    }
    
    localFunc();

// BT9
var globalVar = "some val"; //global variable đây là biến toàn cục vì được khai báo bên ngoài function

function globalFunc() {

console.log(globalVar); //global variable , result is "some val"

}

globalFunc();

// BT10

// var 123 = 40; tên biến đặt sai 

// var *aa = 250; tên biến đặt sai 

// var _x_1 = 7; tên biến đặt đúng 

// var _value = "test" tên biến đặt đúng 