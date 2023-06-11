// Viết chương tình kiểm tra loại tam giác với 3 cạnh (> 0) cho trước a, b, c là tam giác thường, cân hay đều 
var a = 4;
var b = 5;
var c = 3;

if(a<b+c && b<a+c && c<a+b){
    if(a==b && b==c && a==c){
        console.log("Tam giác đều");
    }
    else if(a==b || a==c || b==c){
        console.log("Tam giác cân");
    }
    else if(a*a==b*b+c*c || b*b==a*a+c*c || c*c== a*a+b*b){
        console.log("Tam giác vuông")
    }else{
        console.log("Là tam giác thường")
    }
}
else{
    console.log("Không phải là tam giác");
}