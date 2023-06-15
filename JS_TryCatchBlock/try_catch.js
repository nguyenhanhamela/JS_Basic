try {
    console.log(message);
} catch(e) {
    console.log(e.message);
    console.log(e.name);
    console.log(e.stack);
} finally {
    console.log("end...");
}

// Ví dụ về kiểm tra json
let jsonObj = '{"age": 10}';
try {
    let infoMember = JSON.parse(jsonObj);
    if (!infoMember.name) {
        throw new SyntaxError("Has no name properties")
    }
    console.log(infoMember.name);
} catch(error) {
    console.log("Json error: " + error.message);
}

// ví dụ về phép chia 2 số
function devide(a, b) {
    return a/b;
}
devide(10,0)