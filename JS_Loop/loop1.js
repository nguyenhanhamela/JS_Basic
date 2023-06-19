// VD1: tính tổng các số lẻ 1->100
var sum = 0;
for (let i = 1; i < 9; i + 2) {
     sum = sum + i;
}
console.log(sum);


// VD2: cho 1 số n , kiểm tra xem n có phải số nguyên tố ko
var count = 0,
    n = 6;
for (let j = 1; j <= n; j++)
    if (n % j == 0) {
        count++
    };
if (count == 2){
    console.log("n la so nguyen to");
} else console.log("n khong la so nguyen to");