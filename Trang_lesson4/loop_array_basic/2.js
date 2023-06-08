// Cho mảng sau: B = [13,23,12,45,22,48,66,100]. Sử dụng for để log ra màn hình các số chẵn trong mảng B 
let B = [13,23,12,45,22,48,66,100]

// for bình thường
// for (let i = 0; i < B.length; i++) {
//     if (B[i] % 2 == 0) {
//         console.log(B[i]);
//     }
// }

// let A = []
// for (let i = 0; i < B.length; i++) {
//     if (B[i] % 2 == 0) {
//         A.push(B[i]);
//     }
// }
// console.log(A);

// for in
// console.log("Xu ly bang for in");
// for (i in B) {
//     if (B[i] % 2 === 0) {
//         console.log(B[i]);
//     }
// } 

// for of
// console.log("Xu ly BANG FOR OF");
// for (i of B) {
//     if (i % 2 === 0) {
//         console.log(i);
//     } 
// }
//while
console.log("Xu ly bang while");
let i = 0
while (i < B.length) {
    if (B[i] % 2 === 0) {
        console.log(B[i]);
    } 
}