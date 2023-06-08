// Viết chương trình in ra một số là số nguyên ban đầu với các chữ số bị đảo ngược thứ tự (bỏ các số 0 ở đầu nếu có). 
// Ví dụ đầu vào 120 thì in ra 21 (không sử dụng hàm có sẵn) 

// Mô tả cách làm
// đi từ phải sang trái
// mỗi lần in 1 kí tự
// đến hết
const n = 100200
const str = n.toString()
let kq = ""
// for (let i = str.length-1; i >= 0; i--) {
//     if (kq.length > 0) 
//         kq += str[i]
//     else {
//         if (str[i] != 0) 
//             kq += str[i]
//     }
//     console.log(str[i], "kq = ", kq);
// }

let x = n
while (x % 10 === 0) {
    x = x / 10
    console.log(x);
}
let s = x.toString()
let kq1 = ""
for (let i = s.length-1; i >= 0; i--) {
    kq1 += s[i]
}
console.log(kq1);


// chia het cho 10 de loai bo so 0 o cuoi
// roi chi viec dao nguoc

