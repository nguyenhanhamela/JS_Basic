// Bài 6: viết chương trình in ra 1 số dưới dạng tích của các số nguyên tố. ví dụ: 20 = 2 x 2 x 5  
// bài này cần kết quả bài 1 và cách sử dụng vòng lặp thích hợp

function Intich(a){
    let i = 2
    while(a>1){
        if (a%i == 0){
            console.log(i)
            a = a/i
            i = 1

        }
        i++
    }


}
console.log(Intich(20))