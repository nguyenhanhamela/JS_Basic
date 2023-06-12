//Cho 1 mảng sau const language =  ["vn", "en", "de", "us"]. In ra màn hình “Hello World” với 4 ngôn ngữ trên, mặc định là Tiếng Anh 

const language =  ["vn", "en", "de", "us"]
const defaultLanguage = "en"

for (let i = 0; i < language.length; i++) {
    if (language[i] === defaultLanguage) {
      console.log("en","Hello World");
    } else if (language[i] === "de") {
        console.log("de","Hallo Welt");}
     else if (language[i] === "us") {
            console.log("us","Hello Worldd");}
            else
        {
      console.log("vn","Xin chào thế giới");
    }
  }