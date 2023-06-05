function Resize(text) {
    let string_resize = "";
    for (i = text.length - 1; i >= 0; i--) {
      string_resize = string_resize + text.charAt(i);
    }
    console.log("chuoi dao nguoc la: ", string_resize)
}
Resize("test abc")