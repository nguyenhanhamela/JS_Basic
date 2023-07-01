/**Viết hàm tính diện tích tối đa của tam giác biết chu vi của nó, 
hàm này nhận tham số là chu vi của tam giác, in ra diện tích tối đa có thể của tam giác, 
biết độ dài các cạnh và chu vi đều là số nguyên 

- Gợi ý: gọi độ dài 3 cạnh là a,b,c và chu vi là CV , vậy thì a + b + c = CV
cần tìm các bộ giá trị (a,b,c) là các số nguyên dương thỏa mãn công thức trên, 
mỗi bộ giá trị đó sẽ có một diện tích cụ thể, hàm cần tìm ra bộ có diện tích lớn nhất 

Công thức tính diện tích: S = căn bậc hai của (p *(p-a) * (p-b) * (p-c)) 
Với p = (a + b + c) /2
 */

function maxS(cv) {
  let a, b, c;
  let p = cv / 2;
  let s1, s2, s3;
  let s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
}
