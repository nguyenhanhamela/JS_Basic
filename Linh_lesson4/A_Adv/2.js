// Viết chương tình kiểm tra loại tam giác với 3 cạnh (> 0) cho trước a, b, c là tam giác thường, cân hay đều 

let a = 3;
let b = 4;
let c = 5;

if (a === b && b === c) {
  console.log("Đây là tam giác đều");
} else if (a === b || b === c || a === c) {
  console.log("Đây là tam giác cân");
} else {
  console.log("Đây là tam giác thường");
}