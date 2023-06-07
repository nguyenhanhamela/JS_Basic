// Viết chương tình kiểm tra loại tam giác với 3 cạnh (> 0) cho trước a, b, c là tam giác thường, cân hay đều 
let a = 3, b = 3, c = 3 ;
if (a != b) {
    if (a != c && b != c) {
        console.log("tam giac thuong 1");
    }
    if (a != c && b === c) {
        console.log("tam giac can 1");
    }
    if (a === c && b != c) {
        console.log("tam giac can 2");
    }
} else if (a === b) {
    if (a != c && b != c) {
        console.log("tam giac can 3");
    }
    if (a === c && b === c)
    console.log("tam giac deu");
} else console.log(error);
