/**Viết hàm tính diện tích tam giác biết tọa độ 3 đỉnh. Tính bằng công thức heron khi biết độ dài các cạnh*/
function dientichTamGiac(x1, y1, x2, y2, x3, y3) {
  let canh1 = Math.round(
    Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2))
  );
  let canh2 = Math.round(
    Math.sqrt(Math.pow(x1 - x3, 2) + Math.pow(y1 - y3, 2))
  );
  let canh3 = Math.round(
    Math.sqrt(Math.pow(x2 - x3, 2) + Math.pow(y2 - y3, 2))
  );
  const P = (canh1 + canh2 + canh3) / 2;
  const S = Math.sqrt(P * (P - canh1) * (P - canh2) * (P - canh3));
  return S;
}

let dientich = Math.round(dientichTamGiac(2, 4, 5, 6, 7, 3) * 100) / 100; // làm tròn 2 chữ số thập phân
console.log(`Dien tich tam giac = ${dientich}`);
