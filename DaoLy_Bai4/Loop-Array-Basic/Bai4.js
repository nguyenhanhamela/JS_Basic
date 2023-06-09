var C = [2, 45, 3, 67, 34, 567, 34, 345, 123]
var maxC = C[0];
for(let i=0;i<C.length;i++){
    if(maxC<C[i]){
        maxC= C[i];
    }
}
console.log(maxC)