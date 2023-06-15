try {
    console.log(message);
} catch(e) {
    console.log(e.message);
    console.log(e.name);
    console.log(e.stack);
} finally {
    console.log(add(2,4))
}
function add(a,b) {
    return a+b;
}