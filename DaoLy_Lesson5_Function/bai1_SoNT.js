function soNT(n){
    for(var i = 2;i< n;i++){
        if(n%i==0)return false;
    }
    return true;
}
console.log("Check so nguyen to: ",soNT(14))