//tính tổng bình phương các số từ 1 ->n và giai thừa của n
//Có 2 chức năng là :
// Tính tổng bình phương
// Tính giai thừa

// function tinhTongBinhPhuong(){

// }




// let number = 3;
// let sum = 0;
// for (let i=1;i<=number;i++){
//     sum +=i*i;
// }
// console.log(sum);
// //tinh giai thua
// var tich = 1;
// for (let i=1;i<=number;i++){
//     tich *=i;
// }
// console.log(tich);



// function add(a,b){
//     let x = a+b;
//     return x;
//     // console.log(sum); Không chạy do sau hàm return 
//     console.log(x);
// }
// console.log(add(3,4));

// function checkNT0(n){
//     let count = 0;
//     for(let i = 1; i<=n; i+=1){
//         if(n%i===0)count++
//     }
//     return count===2;
// }
// function checkNT(n){
//     for(let i = 2; i<n; i++){
//         if(n%i===0)return false;
//     }

//     return true;
// }
// console.log("Check so nguyen to: ",checkNT(7));

// const add = (a,b)=>{
//     return a+ b;
// }
// console.log(add(3,4));


let m = 5
let n = 3

function drawLine(x){
    let s = ""
    for(let i=1;i<=x;i++){
        s+="*"
    }
    console.log(s);
}
for(let j=1;j<=n;j++){
    drawLine(n)
}

module.exports={
    drawLine
}