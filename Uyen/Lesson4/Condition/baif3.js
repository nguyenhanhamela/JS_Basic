function max2so(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
function max3so(a, b, c) {
    let x = max2so(a, b);
    return (c, x);
}
console.log(max3so(2, 4, 1));