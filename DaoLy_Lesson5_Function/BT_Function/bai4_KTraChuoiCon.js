// function chuoiCon(cha,con){
//     if(typeof cha === 'string' && typeof con === 'string'){
//         console.log(cha.includes(con));
//     }else{
//         console.log("Khong hop le");
//     }
// }
// chuoiCon("abcjdss","acb")

function chuoiCon(value_1,value_2){
    if(typeof value_1 === 'string' && typeof value_2 === 'string'){
        var mangcha = value_1.length > value_2.length ? value_1: value_2
        var mangcon = value_1.length > value_2.length ? value_2: value_1
        var sum = [];
        for(var i of mangcha.split("")){
            for(var j of mangcon.split("")){
                if(i==j){
                    sum.push(j);
                }
            }  
        }
        if(sum.length == mangcon.length){
            console.log(mangcon + " - la con cua - " +mangcha);
        }
        else{
            console.log("khong phai con");
        }
    }else{
        console.log("Khong hop le");
    }
}

chuoiCon("ab","abcjdss")

