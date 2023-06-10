//Bài 1: Cho mảng sau: A = [90, 89, 80, 77, 68]. Sử dụng vòng lặp for để tính số trung bình của mảng A. 

const A = [90, 89, 80, 77, 68];
//Tính tổng tất cả các số -> chia cho số lượng biến
//const tong = A[0] + A[1] + A[2] (nhược điểm là k biết tổng số biến, gõ nhiều lần)

let tong = 0;
for (let i = 0; i < A.length; i++){
    console.log('i = ', i, 'A[i] =', A[i])
    tong += A[i];
}
//console.log('tong = ', tong)

console.log('trung binh cong =', tong/A.length)
