/**Bài 1: Viết hàm kiểm tra một số có phải số nguyên tố hay không?
 * Hàm này nhận tham số đầu vào là 1 số tự nhiên và trả lại true nếu là số nguyên tố , false nếu không phải.
 * NOTE: Số nguyên tố - lớn hơn 1, chia hết cho 1 và chính nó.
 *       n là số nguyên tố thì trong khoảng từ 2 đến căn bậc hai của n sẽ không tồn tại số mà n chia hết.*/

function soNguyenTo(n) {
  let numFlag = true;
  if (n < 2) {
    numFlag = false;
  } else if (n == 2) {
    numFlag = true;
  } else if (n % 2 == 0) {
    {
      numFlag = false;
    }
  } else {
    for (let i = 3; i < Math.sqrt(n); i += 2) {
      if (n % i == 0) {
        flag = false;
        break;
      }
    }
  }
  console.log(numFlag);
}

soNguyenTo(4);

/**Bài 6: Viết chương trình in ra 1 số dưới dạng tích của các số nguyên tố. Ví dụ: 20 = 2 x 2 x 5
 * Bài này cần kết quả bài 1 và cách sử dụng vòng lặp thích hợp */

// input: n
// arr[] : chứa các số nguyên tố từ 0 đến n
// tính tích các số trong arr[]
