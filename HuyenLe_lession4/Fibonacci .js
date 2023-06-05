//Viết chương trình in ra 10 số Fibonacci (số sau bằng tổng của 2 số trước) đầu tiên
let fibonacy = []
for(let i = 0; i<10; i++){
    if(i == 0 || i == 1){
        fibonacy.push(1);
    } else{
        let next_number = fibonacy[i-1] + fibonacy[i-2]
        fibonacy.push(next_number)
    }
}
console.log("chuoi finbonacy là: ", fibonacy);