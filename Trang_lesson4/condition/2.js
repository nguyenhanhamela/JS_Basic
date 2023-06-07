// Viết chương tình kiểm tra loại tam giác với 3 cạnh (> 0) cho trước a, b, c là tam giác thường, cân hay đều 
let a = 2, b = 3, c = 3 ;
if (a === b && a===c && b === c) {
    console.log("Tam giac deu");
}
if (a != b) {
    if (a === c || b === c)
    console.log("Tam giac can");
} else console.log("Tam giac thuong");
if (a != c) {
    if (a === b || b === c)
    console.log("Tam giac can");
} else console.log("Tam giac thuong");
if (b != c) {
    if (a === b || a === c)
    console.log("Tam giac can");
} else console.log("Tam giac thuong");