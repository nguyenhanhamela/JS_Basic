/**2. Viết chương tình kiểm tra loại tam giác với 3 cạnh (> 0) cho trước a, b, c là tam giác thường, cân hay đều
 * NOTE:
 * a, b, c là 3 cạnh của tam giác khi: a + b > c ; a + c > b ; b + c > a
 * Tam giác đều: a = b = c
 * Tam giác cân: a = b || b = c || c = a
 */

let a = 3,
  b = 4,
  c = 3;
console.log(`Cho a = ${a}, b = ${b}, c = ${c}`);

if (a + b > c && a + c > b && b + c > a) {
  if (a == b && b == c && c == a) {
    console.log("a, b, c la 3 canh cua tam giac deu");
  } else if (a == b || b == c || c == a) {
    console.log("a, b, c la 3 canh cua tam giac can");
  } else {
    console.log("a, b, c la 3 canh cua tam giac thuong");
  }
} else {
  console.log("a, b, c khong phai 3 canh cua tam giac");
}
