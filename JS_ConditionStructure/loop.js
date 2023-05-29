/*
*/ 
// tính tổng các số lẻ 1->100
// var sum = 0;
// for (let i = 1; i < 100; i + 2) {
//     result = sum + i;
// }
// console.log(result);


// cho 1 số n , kiểm tra xme n có phải số nguyên tố hay 0
var count = 0,
    n = 6;
for (let i = 1; i <= n; i++)
//  {
    if (n % i == 0) {
        count++
    };
// }
if (count == 2){
    console.log("n la so nguyen to");
} else console.log("n khong la so nguyen to");


const n = 7;
let check = true;
for (let i = 1; i < n; i++) 
    if ()