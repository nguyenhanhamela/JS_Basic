/**4. Cho mảng sau: C = [2, 45, 3, 67, 34, 567, 34, 345, 123].
 * Tìm số lớn nhất trong mảng C bằng cách sử dụng vòng for.., lệnh if/else */
let C = [2, 45, 3, 67, 34, 567, 34, 345, 123];

let maxNum = C[0];
for (const x of C) {
  if (maxNum < x) {
    maxNum = x;
  }
}
console.log(`So lon nhat la: ${maxNum}`);
