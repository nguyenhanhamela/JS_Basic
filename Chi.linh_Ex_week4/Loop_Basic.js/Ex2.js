//Cho mảng sau: B = [13,23,12,45,22,48,66,100]. Sử dụng for để log ra màn hình các số chẵn trong mảng B 


const B = [13,23,12,45,22,48,66,100]

for (let i = 0; i < B.length; i++) {
    if (B[i] % 2 == 0) {
        console.log(B[i]);
    }
}


// var n = 123456;
// var i = 0;
// console.log(n/10);
// // while (n == 0) {
// //     n /= 10;
// // }
