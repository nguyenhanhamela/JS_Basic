// Viết chương trình in bảng cửu chương từ 1 đến 10 
let x = 1;
for (i = 1; i <= 10; i++) {
    console.log("Bang cuu chuong " + i);
    for (j = 1; j <= 10; j++) {
            console.log(x + " x " + j + " = " + x*j);
    }
    x++
}