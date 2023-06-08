// Viết chương trình in ra 10 số Fibonacci (số sau bằng tổng của 2 số trước) đầu tiên 



// viet ra các số fibonacci (số sau bằng tổng của 2 số trước) dầu tiên rồi cho vào 1 mảng
//  n + n1 = n2
// in ra 10 số : dừng lặp khi array.length = 9
// in mảng
let arr = [0,1] //2 so fibonacci dau tien
let i = 0

while (arr.length < 10) {
    const next = arr[i] + arr[i+1]
    arr.push(next)
    i++ 
}
// for (let i = 0; i < 8; i++) {
//     let next = arr[i] + arr[i+1]
//     arr.push(next) 
// } 
console.log("10 so fibonacci dau tien la ",arr);

