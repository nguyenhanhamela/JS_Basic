/**4. Sử dụng câu lệnh if/else để sắp xếp 3 số sau: x = 3, y = 6, z = 0. In log ra màn hình thứ tự 3 số đó. */
let x = 3,
  y = 6,
  z = 0;

let num = [];
num.push(x, y, z);
// console.log(num); // output : 3, 6, 0

let numSort;
// do ... while: Thực thi lần đầu tiên sau đó mới kiểm tra điều kiện trong while
do {
  numSort = false;
  for (let i = 0; i < num.length - 1; i++) {
    let tmp;
    if (num[i] > num[i + 1]) {
      tmp = num[i];
      num[i] = num[i + 1];
      num[i + 1] = tmp;
      numSort = true;
    }
  }
} while (numSort);

console.log(`SX tang dan voi if/else: ${num}`); // output : 0,3,6

/**CÁCH 2: Sử dụng phương thức sort() để sắp xếp array[] */
// Sắp xếp mảng tăng dần
num.sort((a, b) => a - b);
console.log(`Thu tu tang dan: ${num}`); // output : 0,3,6

num.sort((a, b) => b - a);
console.log(`Thu tu giam dan: ${num}`); // output : 6,3,0
