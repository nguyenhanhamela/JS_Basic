let wordEx = 123426;
// const s = wordEx.toString()
// let i = 0
// while(i<s.length){
//     i+=1
// }
// console.log(i)
let i = 0
do{
    i+=1
    const donVi = wordEx%10
    wordEx = parseInt(wordEx/10)
    if(wordEx===0) break
}while(true)
console.log(i);