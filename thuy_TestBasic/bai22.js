/**Tạo function với 2 tham số (a và b) trả về true hoặc false phụ thuộc vào tống số ký tự của a và b. 
 * Nếu số ký tự của a bằng số ký tự của b thì trả về true nếu không trả về false

Ví dụ
Cho a = 'AB'; b = 'CD'; trả về true
Cho a = 'BA'; b = 'XYZ'; trả về false
Đầu vào: a and b
Đầu ra: true hoạc false; Nếu số ký tự của a bằng số ký tự của b 
*/

function countAB(a, b) {
  let check;
  if (a.length == b.length) {
    check = true;
  } else check = false;
  console.log(check);
}

countAB("thuy", "nguyen");
