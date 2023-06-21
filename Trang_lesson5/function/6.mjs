// Bài 6: viết chương trình in ra 1 số dưới dạng tích của các số nguyên tố. ví dụ: 20 = 2 x 2 x 5  
// bài này cần kết quả bài 1 và cách sử dụng vòng lặp thích hợp  
import { soNguyenTo } from "./1.mjs";

function tichNguyenTo(n) {
    let bieuThuc = n + ' = '
    let thuaSo = []
    let x = n

    if (soNguyenTo(n) == false) {
        //tim thừa số
        for (let i = 2; i < n; i++) {
            if (soNguyenTo(i) == true) {
                if (n % i == 0) {
                    thuaSo.push[i]
                    x = Math.floor(x / i)
                    console.log('n =', n, 'i =', i);
                }
            } 
        // viết biểu thức    
        for (let j = 0; j < thuaSo.length; j++) {
            bieuThuc += j 
        }
        }
    } else bieuThuc = n + 'là số nguyên tố'

    return bieuThuc
}
console.log(tichNguyenTo(20));

