var uc = 1
function uCLN(num1,num2){
    for(var i = 1; i<=num1&& i<=num2;i++){
        if(num1%i==0&& num2%i==0){
            uc = i
            
        }
        
    }
    console.log(uc)
}
uCLN(50,200)