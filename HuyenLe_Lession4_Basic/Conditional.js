//1. Cho 2 số: num_1 = 10, num_2 = 5. 
//Sử dụng câu lệnh rẽ nhanh if/else để log ra màn hình số lớn nhất trong 2 số trên. 
console.log(" ---------------bai 1-------------");
function Compare (num_1, num_2) {
    let max = num_1;
    if(num_1 >= num_2){
        max = max
    } else {
        max = num_2
    }
    console.log("Số lớn nhất trong 2 số là: " , max);
}
Compare(10,5)


//2. Cho 1 mảng sau const language =  ["vn", "en", "de", "us"]. 
//In ra màn hình “Hello World” với 4 ngôn ngữ trên, mặc định là Tiếng Anh 
console.log(" ---------------bai 2-------------");

function HelloWorld(arrayA) {
    for(let i = 0; i<= arrayA.length; i++){
        switch (arrayA[i]) {
            case "vn":
                console.log("Chào thế giới");
                break; 
            case "en":
                console.log("hello world");
                break;
            case "de":
                console.log("Hallo Welt"); 
                break;
            case "us":
                console.log("Hallo Welt us");
                break;
            default:
                console.log("hello world");
                break;
        }
    }
}
let A = ["vn", "en", "de", "us"]
HelloWorld(A)

//Viết câu lệnh if/else để tìm ra dấu tích của 3 số x, y, z. 
//Ví dụ: x = 3, y = 5, z = -1 thì log ra màn hình “Dấu là -”.
// Ví dụ: x = 1, y = 2, z = 3 thì log ra màn hình “Dấu là +” 
console.log(" ---------------bai 3-------------");
function dauTich(x,y,z){
    if(x < 0|| y< 0||z <0){
        console.log("Dấu là -");
    } else {
        console.log("Dấu là +");
    }
}
dauTich(-1,2,3)

//Sử dụng câu lệnh if/else để sắp xếp 3 số sau: x = 3, y = 6, z = 0. 
//In log ra màn hình thứ tự 3 số đó. 

console.log(" ---------------bai 4-------------");
function arrange(x,y,z) {
    let arrayA = new Array(x,y,z);
    let arr_length =  arrayA.length
    for(let i = 0; i < arr_length-1; i++){
        for(let j = 0; j < arr_length - i - 1; j++){
            if (arrayA[j] > arrayA[j + 1]) {
                let temp = arrayA[j];
                arrayA[j] = arrayA[j + 1];
                arrayA[j + 1] = temp;
              } 
        }
    }
    console.log("Dãy số sau khi sắp xếp: " + arrayA);
}
arrange(8,7,13)
