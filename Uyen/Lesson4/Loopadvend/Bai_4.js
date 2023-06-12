//Viết chương trình đảo ngược 1 chuỗi (không sử dụng hàm có sẵn) 
//input: chuỗi "abcdefgh", 
//output: chuooi"hgfedcba";
let A =  [1,2,3,4,5,6,7,8];
let temp;
let lastIndex = A.length -1;
for (let i = 0; i <= lastIndex / 2; i++) {
    temp = A[i];
    A[i] = A[lastIndex  - i];
    A[lastIndex - i] = temp;
}
console.log(A);