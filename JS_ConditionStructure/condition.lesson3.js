//if....else: cấu trúc rẽ nhánh
var x = 9;
//2 dấu bằng vì so sánh, 1 dấu là gán giá trị
if (x % 2 == 0){
    console.log("số chẵn");
} else {
    console.log("số lẻ");
}
console.log("Thành công")

var number = 10;
//số hàng chục: 10 - 99, số hàng trăm: 100-999, số hàng nghìn: 1000-9999, số hàng triệu: 999999
// có thể bỏ đoạn number >=100 v.v do 
if (number >= 10 && number < 100){
    console.log('so hang chuc')
} else if (number >=100 && number <1000){
    console.log("so hang tram")
} else if (number <1000000) {
    if (number < 10000){
        console.log('so hang nghin')
    } else if (number < 100000){
        connsole.log('so hang chuc nghin')
    }else {
        console.log('so hang tram nghin')
    }

}
 
 else {
    console.log("so hang nghin")
}
