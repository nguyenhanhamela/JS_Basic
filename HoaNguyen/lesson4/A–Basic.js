// 1.Cho 2 số: num_1 = 10, num_2 = 5. Sử dụng câu lệnh rẽ nhanh if/else để log ra màn hình số lớn nhất trong 2 số trên.

let num_1 = 10;
let num_2 = 5;

if (num_1 > num_2) {
  console.log("max:", num_1);
} else {
  console.log("max:", num_2);
}

//2. Cho 1 mảng sau let language =  ["vn", "en", "de", "us"].
//In ra màn hình “Hello World” với 4 ngôn ngữ trên, mặc định là Tiếng Anh

let language = ["vn", "en", "de", "us"];
let defaultLanguage = "en";

if (language.includes(defaultLanguage)) {
  console.log("Hello World");
}

for (let i = 0; i < language.length; i++) {
  if (language[i] == defaultLanguage) {
    console.log("Hello World", language[i]);
  }
}

//3. Viết câu lệnh if/else để tìm ra dấu tích của 3 số x, y, z.
//Ví dụ: x = 3, y = 5, z = -1 thì log ra màn hình “Dấu là -”.
//Ví dụ: x = 1, y = 2, z = 3 thì log ra màn hình “Dấu là +”

let a = 3;
let b = 5;
let c = -1;

if (a * b * c >= 0) {
  console.log("dấu là +");
} else {
  console.log("dấu là -");
}

let x = 1;
let y = 2;
let z = 3;

if (x * y * z >= 0) {
  console.log("dấu là +");
} else {
  console.log("dấu là -");
}

//4. Sử dụng câu lệnh if/else để sắp xếp 3 số sau: x = 3, y = 6, z = 0.
//In log ra màn hình thứ tự 3 số đó.
// let x = 3;
// let y = 6;
// let z = 0;

if (x >= y && x >= z) {
  if (y >= z) {
    console.log(x, y, z);
  } else {
    console.log(x, z, y);
  }
} else if (y >= x && y >= z) {
  if (x >= z) {
    console.log(y, x, z);
  } else {
    console.log(y, z, x);
  }
} else {
  if (x >= y) {
    console.log(z, x, y);
  } else {
    console.log(z, y, x);
  }
}
