//Viết chương trình tính giá trị
//  ∑ni=1i2
//  
// ∑
// �
// =
// 1
// �
// �
// 2
function Figma(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i*i;
    }
    console.log("ket qua là: ", sum)
}
Figma(6)
