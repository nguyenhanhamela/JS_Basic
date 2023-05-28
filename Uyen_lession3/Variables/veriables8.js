//8. Bien cuc bo
function localFunc() { 

    var x = 10; //local variable   
  
    console.log(x); //10   
  
  } 
  
  localFunc(); 
  console.log(x);//x là biến cục bộ vì x thuộc 1 function , nằm ngoài function khi console thì undifned
  //9. Bien toan cuc
  var globalVar = "some val"; //global variable            

function globalFunc() { 

  console.log(globalVar); //global variable , result  is "some val" 

} 

globalFunc(); 
console.log(globalVar);// neu khai bao ngoài function thì biến vẫn in đc k undifine
//10. Các biến nào sau đây khai báo đúng 
var 123 = 40; //tên biến đặt sai

var *aa = 250; //tên biến đặt sai 

var _x_1 = 7; //tên biến đặt đúng 

var _value = "test"; //tên biến đặt đúng 



 