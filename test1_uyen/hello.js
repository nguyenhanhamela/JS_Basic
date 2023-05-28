var name = "uyen";
var age = 25;
var gender = "nu";
var like = "doc sach";
console.log(typeof age)
console.log(typeof like)
// chuôi :string , 
/*dùng để chú thích 
*/
var myname = "uyen";
console.log(myname);
console.log("find string" + myname.indexOf("a"))
console.log("find string" + myname.indexOf("y")) //index luôn bắt đầu từ 0
// object
var object1= {
    "age":16 ,
    "name": "uyen1" ,
    "gender": "girl"
}
console.log(typeof object1)

//Boolean
var check = true;
var check_1 = false;
console.log(typeof check);
console.log(typeof check_1);

//mang
var arr1 = [1, 2, 3]
var arr1 = [1, "abc", true]
//soos
let i = 10;
let j = 10.1;
console.log("check parseInt:" + parseInt(j));
console.log("check  parseInt float" + parseFloat(j , 2));