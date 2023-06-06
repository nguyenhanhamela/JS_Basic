//Cho 1 mảng sau const language =  ["vn", "en", "de", "us"]. In ra màn hình “Hello World” với 4 ngôn ngữ trên, mặc định là Tiếng Anh 
function ConvertLanguage(tieng) {
    switch (tieng) {
        case "vn":
            console.log("XinChao");
            break;
        case "de":
            console.log("Hallo");
            break;
        case "us":
            console.log("Hi");
            break;
        default:
            console.log("Hello World");

    }
}
ConvertLanguage("kj");
