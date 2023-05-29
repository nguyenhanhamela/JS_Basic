//String
var Myname ="Le Thuy Linh"
console.log(Myname)
console.log("find string"+ Myname.indexOf("L")) // index start = 0
console.log("find y" + Myname.lastIndexOf("e",1))

//Object
var obj1 = {
    "age" : 18,
    "name" : "Linh",
    "gender" : "Female",
    "salary" : null
}
console.log(obj1);

//Number
let i = 10;
let j = 20.1;
let str1 = 30.2;

console.log("Check parse int:" + parseInt(j))
console.log("Check parse float:" + parseFloat(j,2))
console.log("Check parse string:" + parseFloat(str1))
console.log(i)
console.log(typeof i)
console.log(typeof j)

//Boolean
var check = true;
var check_1 = false;
console.log(check)
console.log(check_1)

//Array
var arr1 = [[1,2,3]]
var arr2 = [1, "abc", true]