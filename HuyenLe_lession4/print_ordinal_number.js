//Viết chương trình in số thứ tự của số nguyên n (n > 0) với hậu tố st, nd, rd hoặc th (làm bằng cả 2 cách if / else, switch / case) 
//C1: if - else
var i;
for(let n =1; n <= 1000; n++){
    if(n === 1){
        i = n + "st";
    } else if(n ===2){
        i = n +"nd";
    } else if(n === 3){
        i = n +"rd";
    } else {
        i = n + "th";
    }
    console.log("so thu " + n + " là: " + i );
}


for(let n =1; n <= 1000; n++){
    switch (n) {
        case 1:
            i = n + "st";
            break;
        case 2:
            i = n +"nd";
            break;
        case 3:
            i = n +"rd";
        default:
            i = n + "th";
            break;
    }
    console.log("so thu " + n + " là: " + i );
}
