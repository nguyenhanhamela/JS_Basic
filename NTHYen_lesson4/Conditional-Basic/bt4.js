// 4. Sử dụng câu lệnh if/else 
// để sắp xếp 3 số sau: x = 3, y = 6, z = 0. In log ra màn hình thứ tự 3 số đó.

var x = 3
var y = 6
var z = 0
if (x > y && x > z) {
    if (y > z) {
      console.log(z, y, x); 
    } else {
      console.log(y, z, x);
    }
  } else if (y > x && y > z) {
    if (x > z) {
      console.log(z, x, y);
    } else {
      console.log(x, z, y);
    }
  } else {
    if (x > y) {
      console.log(y, x, z);
    } else {
      console.log(x, y, z);
    }
  }