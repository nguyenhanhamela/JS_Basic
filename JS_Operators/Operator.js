// cộng 2 số
const x = 1, y = 2 //khai báo gộp như này hoặc tách 2 dòng (nếu k cùng 1 kiểu let, var, const)
let z = x+y
console.log(z)

// cộng 2 chuỗi
let str1 = "linhchi", str2 = "amela"
let str = str1 +  " " + str2 // "" là in thêm dấu cách 
console.log(str)

// trừ, nhân, chia BTVN
let n1 = 100, n2 = 3
console.log("chia lấy chính xác giá trị: " + n1/n2);
console.log("chia lấy phần dư: " + n1%n2);

// toán tử tăng giảm
let n = 1
let checkn4 = n++;
console.log("n4: " + checkn4); 
console.log("n: " + n); 

let checkn3 = ++n;
let result = checkn3
console.log("n3" + checkn3); 
