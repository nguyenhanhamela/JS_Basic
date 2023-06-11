// Quy luật của dãy số Fibonacci: số tiếp theo bằng tổng của 2 số trước, 2 số đầu tiên của dãy số là 0, 1. Ví dụ: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...
var n= 10;
var f0= 0;
var f1= 1;
var fn= 1;
if(n<0){
    console.console.log("Khong phai Fibonacci");
}else if( n==0|| n==1){
    console.log(n);
}else{
    for(var i=2;i<n;i++){
        f0 = f1;
        f1 = fn;
        fn = f0+f1;
        console.log(fn)
    }
}

