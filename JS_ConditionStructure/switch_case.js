

// let month = 4;
// switch (month) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:

// }

// let sum = 0
// // for(let i=1;i<=100;i++)
// for(let i=1;i<=100;i+=2)
// if(i%2===1)
// console.log(sum=sum+i)


//kiểm tra xem n có phải số nguyên tố hay không
// let n = 17
// let count = 0
// for(let i=1;i<=n;i+=1) { //biến chạy = i, vòng lặp đến n, giá trị i+1
//     if(n%i==0) // nếu chia cho chính nó
//         {
//         count +=1 //nếu chia hết thì +1
//             //console.log(i)
//         }
// }
// // console.log(count)

// if(count==2) 
//     console.log(n, "la so nguyen to")
// else
//     console.log(n, "khong phai so nguyen to")

//kiểm tra xem n có phải số nguyên tố không (cách 2)
let n = 2
let check = true
for (let i=2;i<n;i++)
if(n%i==0)
{console.log("Khong phai so nguyen to")
 check = False
break}
if(check==true)
console.log("So nguyen to")