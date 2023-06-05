//Viết chương tình kiểm tra loại tam giác với 3 cạnh (> 0) cho trước a, b, c là tam giác thường, cân hay đều 
function checkTriangulat(a,b,c){
    if(a < 0 || b < 0 || c < 0){
        console.log("a,b,c khong phai la 3 canh cua tam giac");
    } else if (a ==0 || b ==0 || c ==0){
        console.log("a,b,c khong phai la 3 canh cua tam giac");
    } else {
        if( a === b || b === c|| a === c){
            console.log("abc la tam giac can");
        } else if(a ===b && a ===c ){
            console.log("abc la tam giác đều");
        } else {
            console.log("abc la tam giac thuong");
        }
    }
}

checkTriangulat(5.5999999999999999,5.5,5.5);
