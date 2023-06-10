/**3. Viết chương trình tìm số lớn nhất trong 3 số */

let a = 20,
  b = 5,
  c = 25;

console.log(`Cho 3 so: ${a}, ${b}, ${c}`);
let num = [];
num.push(a, b, c);
// console.log(num); // output: [ 20, 5, 9 ]

let maxNum = num[0];
for (let x of num) {
  if (maxNum < x) {
    maxNum = x;
  }
}
console.log(`So lon nhat trong 3 so la: ${maxNum}`);
