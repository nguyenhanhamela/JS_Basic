// const, var, let
const arr1 = [1,2,3,"a",{"name":"name1","age":30}]

for (let i = 0; i<arr1.length;i++){
    console.log(i);
}

// console.log(arr1[0]);

// console.log(arr1[4]);

// in ra độ dài của mảng
// console.log(arr1.length);

//in ra phần tử cuối cùng của mảng
// console.log(arr1[arr1.length-1]);

//thay đổi giá trị đã có trong mảng (3 thành v3)
 arr1[2]="v3"
// console.log(arr1);

//thêm 1 phần tử vào mảng
 arr1.push("test push")
// console.log(arr1);

//sắp xếp mảng
arr1.sort()
console.log(arr1);
// -> [ 1, 2, 3, { name: 'name1', age: 30 }, 'a' ]
// -> [ 1, 2, { name: 'name1', age: 30 }, 'a', 'test push', 'v3' ] // sắp xếp số -> object -> chuỗi (alpha)

// với mảng dùng for... in sẽ in ra index của mảng
for (let j in arr1) {
    console.log(j);
}

// với mảng dùng for... of sẽ in ra các phần tử của mảng
for (let k of arr1) {
    console.log(k);
}

