// var n = 34543
// var r = 0;
// var total = 0;
// var bien = 0;
// while(n!=0){
//     r=n%10;
//     total = (total*10)+r;
//     n = n/10
// }
// console.log(total);
// if(bien==total){
//     console.log("La so Palindrome");
// }else{
//     console.log("khong phai so Palindrome");
// }

const n = 345435;
const s = n.toString();
let kq = "";

for(let i = s.length - 1; i>=0;i--){
    kq += s[i];
}
if(kq == n){
    console.log("La so Palindrome");
}else{
    console.log("khong phai so Palindrome");
}