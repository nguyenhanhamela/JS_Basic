// hoặc */ var là viết tắt của variable (đây là kiểu chú thích trong JS)
//kiểu số 
var i = 100; // hiểu là: gán giá trị 100 cho biến x
let j = 10.1;
let str1 = "10.2"
console.log(i) // console là đối tượng, log là 
console.log(typeof j) // câu lệnh in ra kiểu dữ liệu của biến ra màn hình
console.log(typeof i)
console.log("check : ");
console.log("Check parse int: " + parseInt(j));
console.log("Check parse float: " + parseFloat(j));
console.log("Check parse float: " + parseFloat(str1));

//kiểu string (bôi đen -> nhấn shift + dấu "")
var myname = "LinhChi";
console.log(myname);
console.log("find string  " + myname.indexOf("c")); // index luôn bắt đầu từ 0, là hàm tìm kiếm
console.log("find string h: " + myname.indexOf("h")) 


//object (bao giờ cũng phải có dấu ngoặc nhọn và các thuộc tính cách nhau bằng dấu phảy, sau 2 chấm là thuộc tính, mk phải truyền giá trị cho nó )
var obj1 = {
    "age":16,
    "name": "Chi",
    "gender": "female"
}
console.log(typeof obj1);

//Boolean
var check = true;
var check_1 = false; 
console.log(typeof check);
console.log(typeof check_1);

//Arrays (có 2 dấu ngoặc vuông, khác ở chỗ obj là đối tượng cụ thể, có thuộc tính cụ thể)
var arr1 = [1,2,3];
var arr2 = [1,"abc", true]




