/*Bài 2: Cho 1 mảng sau const language =  ["vn", "en", "de", "us"]. 
In ra màn hình “Hello World” với 4 ngôn ngữ trên, mặc định là Tiếng Anh */

const language =  ["vn", "en", "de", "us"]
let defaultLanguage = "en"
const str = "Hello World"
for (let i = 0; i < language.length; i++) {
    if (language[i] != defaultLanguage) {
       console.log(str + " " + language[i]);
    } else console.log(str);
}