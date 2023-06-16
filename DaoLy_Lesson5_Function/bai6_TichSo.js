function soNT(n){
    var i = 2
    while(n>1){
        if(n%i==0){
            console.log(i);
            n/=i;
        }else{
            i++
        }
    }
}
soNT(20)
