// // Bài 3: Viết câu lệnh if/else để tìm ra dấu tích của 3 số x, y, z. 
// //Ví dụ: x = 3, y = 5, z = -1 thì log ra màn hình “Dấu là -”. 
// //Ví dụ: x = 1, y = 2, z = 3 thì log ra màn hình “Dấu là +” 

let x, y, z;
let tich = x*y*z;
if (tich > 0) {
    console.log("Dấu tích là +");
  }
else if (tich < 0) {
    console.log('Dấu tích là -');
}
else {
    console.log('Tích bằng 0')
};

    
