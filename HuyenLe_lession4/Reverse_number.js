function reverse(number) {
    console.log("number", number);
    var string_number = "" + number + ""
    console.log("string_number", string_number);
    let reverse_string = "";
    let tring_lenth = string_number.length -1
    for(let i = tring_lenth; i>=0; i--){
        reverse_string = reverse_string + string_number.charAt(i);
    }
    console.log("reverse_string", reverse_string)
    if(reverse_string.charAt(0) === "0"){
        for(let j = 0; reverse_string.charAt(j)!== "0"; j++){
            reverse_string = reverse_string.slice(j)
        }
    }
    
    let reverse_number = Number(reverse_string);
    console.log("chuoi so dao ngươc thu duoc la: ", reverse_number)
    
}
reverse(200000000)