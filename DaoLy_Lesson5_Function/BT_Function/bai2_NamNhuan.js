function namNhuan(n){
    if(n%100==0 && n%400==0){
        return true
    } else if(n%100==0 && n%400!=0){
        return false
    }else if(n%100!=0 && n%4 ==0){
        return true
    }else if(n%100!=0 && n%4 ==0){
        return false
    }
    else{
        return false
    }

}
console.log("Check nam nhuan: ", namNhuan(2023));