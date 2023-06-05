//Viết chương trình in số thứ tự của số nguyên n (n > 0) với hậu tố st, nd, rd hoặc th (làm bằng cả 2 cách if / else, switch / case) 
//C1: if - else
var i;
for(let n =1; n <= 1000; n++){
    if(n === 1 || n%10 === 1){
        i = n + "st";
    } else if(n ===2 || n%10 === 2){
        i = n +"nd";
    } else if(n === 3 || n%10 === 3){
        i = n +"rd";
    } else {
        i = n + "th";
    }
    console.log("so thu " + n + " là: " + i );
}


for (let n = 1; n <= 30; n++) {
    switch (n) {
        case 1:
            i = n + "st";
            break;
        case 2:
            i = n + "nd";
            break;
        case 3:
            i = n + "rd";
            break;
        default:
            switch (n % 10) {
                case 1:
                    i = n + "st";
                    break;
                case 2:
                    i = n + "nd";
                    break;
                case 3:
                    i = n + "rd";
                    break;
                default:
                    i = n + "th";
                    break;
            }
            break;
    }
    console.log("so thu " + n + " là: " + i);
}
