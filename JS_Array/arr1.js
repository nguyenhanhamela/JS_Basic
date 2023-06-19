const array = [1, 2, 3, "a", {"name": "Trang", "age": 18}]
// Lay ra phan tu theo index
// console.log(array[5]);

// Do dai cua array
// console.log(array.length);

// in ra phan tu cuoi cung cua mang
// console.log(array.length-1);
// console.log(array[array.length-1]);

//Thay the gia tri cua tung phan tu trong array
// Thay the gia tri 3 thanh v3
array[2] = "v3";
// console.log(array);

// Them mot phan tu vao array
array.push("test push")
// console.log(array);

// array method
//sort() : Thu tu uu tien : number(0-9) -> object -> string (a-z)
array.sort()
// console.log(array);

// Voi array dung for in de lay index cua array
// dung for of de lay ra cac phan tu cua mang
// for (let i in array){
//     console.log(i);
// }

// forEach()
// Tinh tong cua cac phan tu trong array dung forEach
// let result = 0;
// let arr2 = [1,2,3,4];
// arr2.forEach(sum);

// function sum(index) {
//     result += index;
//     console.log(result);
// }


const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction)

function myFunction(arr, index, item) {
  arr[index] = item * 10;
  
}
console.log(numbers);