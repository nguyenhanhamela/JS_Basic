// Viết chương trình kiểm tra một số có phải là số palindrome (số mà bằng với số đảo ngược của số đó) hay không (không sử dụng hàm có sẵn) 
// cho truoc 1 so
// neu dao nguoc so do van bang ban dau thi la so palindrome

let n = 0
let s = n.toString()
console.log(s);
let pal = ""
for (let i = s.length - 1; i >= 0; i--) {
    pal += s[i]
    console.log(pal);
}
if (pal == s) {
    console.log(n,"la so palindrome");
} else console.log(n,"khong la so palindrome");
