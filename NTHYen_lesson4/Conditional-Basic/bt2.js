// 2. Cho 1 mảng sau const language = ["vn", "en", "de", "us"]. 
// In ra màn hình “Hello World” với 4 ngôn ngữ trên, mặc định là Tiếng Anh

const language = ["vn", "en", "de", "us"];
let hello = "Hello World";
for (let i = 0; i < language.length; i++) {
  switch(language[i]) {
    case "vn":
      hello = "Xin chào thế giới";
      break;
    case "de":
      hello = "Hallo Welt";
      break;
    case "us":
      hello = "Hello World";
      break;
    default:
      hello = "Hello World";
  }
  console.log(hello);
}

