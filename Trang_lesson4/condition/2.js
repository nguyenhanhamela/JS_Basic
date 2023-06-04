// Viết chương tình kiểm tra loại tam giác với 3 cạnh (> 0) cho trước a, b, c là tam giác thường, cân hay đều 
let a = 2, b = 3, c = 3 ;
if (a === b && a === c && b === c) {
    console.log("Tam giac deu");
} else if (a != b && b == c) {
    console.log("Tam giac can 1");
} else if (a != b && a == c) {
    console.log("Tam giac can 2");
} else if (b != c && a == b) {
    console.log("Tam giac can 3");
}
else console.log("Tam giac thuong");

// if (a != b && a!= c && b != c) {
//     console.log("Tam giac thuong");
// } else if (a == b) {
//     console.log("Tam giac can1");
// } else if (a == c) {
//     console.log("Tam giac can2");
// } else if (b == c) {
//     console.log("Tam giac can3");
// }
//  else console.log("Tam giac deu");