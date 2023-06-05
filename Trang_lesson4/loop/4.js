// Viết chương trình đảo ngược 1 chuỗi (không sử dụng hàm có sẵn) 
//input: Hoc JS basics
//expected output: scisab SJ coH
let str1 = "Hoc JS basics"
let str2 = ""

for (let i = str1.length - 1; i >= 0; i--) {
    str2 += str1.charAt(i);
}
console.log(str2); // in ra output
