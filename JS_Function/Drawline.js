function drawLine(s) {
    let result = "";
    for (let x = 1; x <= s; x++) 
        result = result + "*"
    return result
}
console.log(drawLine(6));

// let s = 7
// let result = "";
// for (let x = 0; x <= s; x++) {
//     result = result + "*"
// }
// console.log(result)
      