// Cho mảng sau: A = [90, 89, 80, 77, 68]. Sử dụng vòng lặp for để tính số trung bình của mảng A. 
const A = [90,89,80,77,68]
// cộng tất cả các số
// chia cho số lượng biến

let tong = 0;
for(let i = 0; i<A.length; i++){
    console.log("i=",i,"A[i]=",A[i]);
    tong += A[i];
}
console.log("tong  =", tong)
console.log("TBC =", tong/A.length)