// 2. Viết chương tình kiểm tra loại tam giác với 3 cạnh (> 0) cho trước a, b, c là tam giác thường, cân hay đều

function kiemTraLoaiTamGiac(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) {
      return "Không phải tam giác";
    } else if (a === b && b === c) {
      return "Tam giác đều";
    } else if (a === b || b === c || c === a) {
      return "Tam giác cân";
    } else {
      return "Tam giác thường";
    }
  }
  console.log(kiemTraLoaiTamGiac(1, 2, 4)); 
  