//biến globalVar là biến global vì biến này được khai báo bên ngoài không nằm trong hàm nào, và biến này được sử dụng ở bên trong hàm globalFunc 

var globalVar = "some val"; //global variable            

function globalFunc() { 

  console.log(globalVar); //global variable , result  is "some val" 

} 

globalFunc(); 