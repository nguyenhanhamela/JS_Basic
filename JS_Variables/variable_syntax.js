//1.
var x = 1;
let y = "a"
const z =  true; 
//block là 1 khối

if (x >= 1 ){
    var x = 50;
    console.log("first " + x);
}
console.log("second: " + x);
// do var là biến toàn cục nên nó chạy dc vào block "if" bên trên và lấy ra x  50 mặc dù lúc đầu khai báo là 1

//2. 
var x = 1;
let y = "a";
const z =  true; 

if (x >= 1 ){
    let x = 50;
    console.log("first: " + x);
}
console.log("second: " + x);