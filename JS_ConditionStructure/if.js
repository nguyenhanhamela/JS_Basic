// var x = 10;
// if (x % 2 == 0) {
//     console.log('So chan');
// } else {
//     console.log('So le');
// }
// console.log('Thanh cong');

var n = 10000000;
if (n >= 10 && n < 100) {
    console.log('So hang chuc');
} else if (n < 1000) {
    console.log('So hang tram');
} else if (n < 1000000) {
    if (n < 10000) {
        console.log('So hang nghin');
    } else if (n < 100000) {
        console.log('So hang chuc nghin');
    } else {
        console.log('So hang tram nghin');
    }
}    
else {
    console.log('So hang trieu');
}