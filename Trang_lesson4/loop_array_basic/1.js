// Cho mảng sau: A = [90, 89, 80, 77, 68]. Sử dụng vòng lặp for để tính số trung bình của mảng A. 

let A = [90, 89, 80, 77, 68]
let sum = 0

// for bình thường
// for (let i = 0; i < A.length; i++){
//     sum += A[i]
// }

//forOf
// for (i of A) {
//     sum += i;
// }

// for in
for (i in A) {
    // console.log(i, A[i]);
    sum += A[i]
}
let average = sum / A.length
console.log(average);

