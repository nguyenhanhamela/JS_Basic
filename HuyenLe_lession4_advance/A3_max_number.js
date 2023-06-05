//Cách 1
function finMax(a,b,c){
    let max;
    if(a>= b && a >= c){
        max = a;
    } else if (b > a && b > c){
        max = b;
    } else {
        max = c;
    }
    console.log("so lon nhat la: ", max)
}
finMax(4, 5, 5)

//Cách 2

function finMax2(a,b,c){
    let array_number = new Array(a,b,c);
    let max = array_number[0];
    for (let i = 0; i< array_number.length; i++){
        if(max >= array_number[i]) {
            max = max
        } else {
            max = array_number[i]
        }
    }
    console.log("so lon nhat la: ",max);

}
finMax2(4.099999999,5,5.00000000001)
