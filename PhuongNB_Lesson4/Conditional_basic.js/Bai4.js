/* Bài 4. Sử dụng câu lệnh if/else để sắp xếp 3 số sau: x = 3, y = 6, z = 0. 
In log ra màn hình thứ tự 3 số đó. */
let x = 3; y = 12; z = 10;
if (x <= y && x <= z) {
    if (y <= z) {
        console.log(x,y,z);
    } else console.log(x,z,y);
} 
if (y <= x && y <= z) {
    if (x <= z) {
        console.log(y,x,z);
    } else console.log(y,z,x);
} 

if (z <= x && z <= y) {
    if (x <= y) {
        console.log(z,x,y);
    } else console.log(z,y,x);
} 