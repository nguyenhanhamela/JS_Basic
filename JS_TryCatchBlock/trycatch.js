//let x = "Hello World"

console.log(x);
try{
    console.log(x);
}
catch(error) { // try không thực hiện được thì // trong catch luôn phải khai báo 1 thuộc tính của đối tượng catch -> error
    console.log(error.message);
}