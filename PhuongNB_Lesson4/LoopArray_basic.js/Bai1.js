// BT1: Cho mảng sau: A = [90, 89, 80, 77, 68]. Sử dụng vòng lặp for để tính số trung bình của mảng A. 
const  A = [90, 89, 80, 77, 68]
let tong = 0;
for (let i = 0; i <A.length; i++){
    console.log("Phan tu thu", i, "co gia tri la", A[i])
    tong += A[i];
}
console.log("Tong =", tong)
console.log("TBC = ", tong/A.length)