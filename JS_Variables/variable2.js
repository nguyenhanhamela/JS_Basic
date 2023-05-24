// Kiểu số: Number

let i = 10;
let j = 10.1;
let str1 = "10.2"
console.log(" check : ");
console.log("Check parse int: " + parseInt(j));
console.log("Check parse float: " + parseFloat(j));
console.log("Check parse float str1: " + parseFloat(str1));

console.log(i);
console.log(typeof i)
console.log(typeof j)

// Kiểu chuỗi: String
var myName = "hanh";
console.log(myName);
console.log("find string  ", myName.indexOf("a")) // index luôn bắt đầu từ 0
console.log("find string h: " + myName.indexOf("h"))


// Object
var obj1 = {
    "age": 16,
    "name": "my name",
    "gender": "female",
    "salary": null
}
console.log(typeof obj1);

// Boolean
var check = true;
var check_1 = false;
console.log(typeof check);
 console.log(typeof check_1);

// Mảng
var arr1 = [1,2,3]
var arr2 = [1, "abc", true]