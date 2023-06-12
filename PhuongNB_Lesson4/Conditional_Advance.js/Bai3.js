//Bài 3: Viết chương trình tìm số lớn nhất trong 3 số 
let a = [2, 5, 1];
let max = a[0];
for (let i = 0; i < a.length; i++){
    if (max <= a[i]){
        max = a[i]
    }
}
console.log(max);

