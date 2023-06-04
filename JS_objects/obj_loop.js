const memberInfo = {
    "age" : 30,
    "gender" : "female",
    "company" : "Amela"
}

let arrayInfo = []
for (let i in memberInfo) {
    arrayInfo.push(memberInfo[i])
}
console.log(arrayInfo);
// Voi object , khong dung duoc for of, chi dung FOR IN
// Lay ra gia tri cua cac thuoc tinh trong obj , dung FOR IN hoac cach sau
let arrValues = Object.values(memberInfo)
console.log(arrValues);

// Lay ra cac thuoc tinh tron obj, dung 
let arrKeys = Object.keys(memberInfo)
console.log(arrKeys);



//forEach