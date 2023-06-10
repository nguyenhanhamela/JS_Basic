/** 1. Cho mảng sau: A = [90, 89, 80, 77, 68].
 * Sử dụng vòng lặp for để tính số trung bình của mảng A. */

let A = [90, 89, 80, 77, 68];
console.log(A.length);

let sumA = 0;
for (const x of A) {
  sumA = sumA + x;
}

let avgA = sumA / A.length;
console.log(avgA);
