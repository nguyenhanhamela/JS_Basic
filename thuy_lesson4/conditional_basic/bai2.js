const language = ["vn", "en", "de", "us"];

// PRACTICE: FOR
for (let i = 0; i < language.length; i++) {
  console.log(language[i]); // output : vn en de us
}

for (let j in language) {
  console.log(j); // output : 0 1 2 3
}

for (let k of language) {
  console.log(k); // output : vn en de us
}

// 2. In ra màn hình “Hello World” với 4 ngôn ngữ trên, mặc định là Tiếng Anh
for (let lg of language) {
  switch (lg) {
    case "vn":
      console.log("Chào thế giới");
      break;
    case "de":
      console.log("Hello world");
      break;
    case "us":
      console.log("Hallo Welt");
      break;
    default:
      console.log("Hello world");
  }
}
