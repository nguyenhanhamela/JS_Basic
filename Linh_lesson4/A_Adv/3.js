// Viết chương trình tìm số lớn nhất trong 3 số

let a = 10;
let b = 5;
let c = 8;

let max;

if (a >= b && a >= c) {
  max = a;
} else if (b >= a && b >= c) {
  max = b;
} else {
  max = c;
}

console.log("Số lớn nhất là: " + max);    
  