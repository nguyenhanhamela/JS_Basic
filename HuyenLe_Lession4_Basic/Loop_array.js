//1. Cho mảng sau: A = [90, 89, 80, 77, 68]. 
//Sử dụng vòng lặp for để tính số trung bình của mảng A. 
console.log("-----------------BÀI 1 -------------");
function average(arrayA) {
    let sum = 0;
    for (let i = 0; i < arrayA.length; i++) {
        sum = sum + arrayA[i];
    }
    let sum_average = sum / arrayA.length
    console.log("Trung bình cộng của dãy là: ", sum_average);
}

let a = [90, 89, 80, 77, 68, 0]
average(a)


//2. Cho mảng sau: B = [13,23,12,45,22,48,66,100]. 
//Sử dụng for để log ra màn hình các số chẵn trong mảng B 
console.log("-----------------BÀI 2 -------------");
function evenNumber(arrB) {
    for (let i = 0; i < arrB.length; i++) {
        if (arrB[i] % 2 === 0) {
            console.log("số chẵn là: ", arrB[i]);
        }
    }
}
evenNumber(a)

//3.Cho chữ số sau: const wordEx = 123426. 
//Sử dụng while để đếm các chữ số của số đã cho. Ví dụ: Tổng chữ số của wordEx là 6 chữ số. 
function count(wordEx) {
    let text = wordEx.toString();
    let leng = text.length
    let i = 0;
    while (i < leng) {
        let numbber = text.charAt(i);
        console.log("Số thứ " + i + " là: " + numbber);
        i++;
    }
}
let abc = 123426
count(abc)


//4. Cho mảng sau: C = [2, 45, 3, 67, 34, 567, 34, 345, 123]. 
//Tìm số lớn nhất trong mảng C bằng cách sử dụng vòng for.., 
//lệnh if/else 
function FindMax(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= max) {
            max = max
        } else {
            max = arr[i]
        }
    }
    console.log("Số lớn nhất trong mảng là: ", max);
}
let C = [2, 45, 3, 67, 34, 567, 34, 345, 123]
FindMax(C)