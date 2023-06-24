/**Viết hàm tính ước chung lớn nhất của 2 số, hàm nhận đầu vào là 2 số tự nhiên dương, trả lại ước chung lớn nhất của 2 số đó.
- x là ước chung của a và b nếu a và b đều chia hết cho x
- bài này yêu cầu tìm số lớn nhất trong các ước chung */

function findUCLN(a, b) {
  let ucln = 1;
  let min;
  if (a == 0 && b == 0) {
    console.log(`${a} va ${b} khong có UCLN`);
  } else if (a == 0 && b != 0) {
    console.log(`UCLN la: ${b}`);
  } else if (a != 0 && b == 0) {
    console.log(`UCLN la: ${a}`);
  } else {
    if (a > b) {
      min = b;
    } else min = a;

    for (let i = 1; i <= min; i++) {
      if (a % i == 0 && b % i == 0) {
        ucln = i;
      }
    }
    console.log(`UCLN cua ${a} và ${b} la: ${ucln}`);
  }
}

findUCLN(7, 35);
