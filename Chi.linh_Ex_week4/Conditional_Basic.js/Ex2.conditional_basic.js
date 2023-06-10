// Bài 2:
//Cho 1 mảng sau const language =  ["vn", "en", "de", "us"]. In ra màn hình “Hello World” với 4 ngôn ngữ trên, mặc định là Tiếng Anh

const language = ["vn", "en", "de", "us"];
let greeting = "Hello World";

if (language[0] === "vn") {
  greeting = "Xin chào thế giới";
} else if (language[2] === "de") {
  greeting = "Halo";
} else if (language[3] === "us") {
  greeting = "Hi";
} 

console.log(greeting);





