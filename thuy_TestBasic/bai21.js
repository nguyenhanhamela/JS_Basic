/**Cho 1 chương trình mẫu.
Sử dụng function get_abs để lấy giá trị tuyệt đối của biến x và in ra màn hình

Đầu vào: Không có
Đầu ra: lấy giá trị tuyệt đối của biến x và in ra màn hình

Ví dụ: |-2| = 2, |2| = 2
 */

function get_abs(x) {
  if (x < 0) {
    x *= -1;
  }
  return x;
}

function outPut(x) {
  console.log(`Giá trị tuyệt đối của ${x} là: ${get_abs(x)}`);
}

outPut(-3);
