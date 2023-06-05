function reverse(number) {
    var string_number = number.toString();
    let reverse_string = "";
    let tring_lenth = string_number.length -1
    for(let i = tring_lenth; i>=0; i--){
        reverse_string = reverse_string + string_number.charAt(i);
    }
    let reverse_number = Number(reverse_string);
    if(reverse_number === number){
        console.log("so nhap vao la so palindrome")
    } else {
        console.log("so nhap vao k phai la so palindrome")
        console.log("chuoi so dao ngươc thu duoc la: ", reverse_number)
    }  
}
reverse(222)