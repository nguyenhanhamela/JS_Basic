function checkString(subString, parentString) {
    for (i = 0; i < parentString.length - subString.length; i++) {
       if(parentString.substring(i, subString.length) == subString){
        return true;
       }
    }
    return false;
}
console.log(checkString("1235", "12345678"))