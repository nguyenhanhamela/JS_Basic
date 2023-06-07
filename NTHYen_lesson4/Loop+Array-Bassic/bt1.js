// 1. Cho mảng sau: A = [90, 89, 80, 77, 68]. Sử dụng vòng lặp for để tính số trung bình của mảng A.
const A = [90, 89, 80, 77, 68];
var sum = 0;

for (var i = 0; i < A.length; i++) {
  sum += A[i];
}

const average = sum / A.length;
console.log(`Số trung bình của mảng A là ${average}`)