/**Viết hàm tính chu vi tam giác, biết tọa độ 3 đỉnh. Chu vi là tổng độ dài các cạnh. */
function chuviTamGiac(x1, y1, x2, y2, x3, y3) {
  let canh1 = Math.round(
    Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2))
  );
  let canh2 = Math.round(
    Math.sqrt(Math.pow(x1 - x3, 2) + Math.pow(y1 - y3, 2))
  );
  let canh3 = Math.round(
    Math.sqrt(Math.pow(x2 - x3, 2) + Math.pow(y2 - y3, 2))
  );
  const C = canh1 + canh2 + canh3;
  return C;
}

let chuvi = chuviTamGiac(2, 4, 5, 6, 7, 3);
console.log(`Chu vi tam giac = ${chuvi}`);
