var x = 3;
var y = 6;
var z = 0;
if(x>y & x>z){
    if(y>z){
        console.log("Thứ tự hiển thị là zyx:" + z+ "<" + y+ "<" + x);
    }
    else{
        console.log("Thứ tự hiển thị là yzx:" + y+ "<" + z+ "<" + x);
    }
}
if(y>x & y>z){
    if(x>z){
        console.log("Thứ tự hiển thị là zxy:" + z + "<" + x+ "<" + y);
    }
    else{
        console.log("Thứ tự hiển thị là xzy:" + x+ "<" + z+ "<" + y);
    }
}
if(z>y & z>y){
    if(x>y){
        console.log("Thứ tự hiển thị là yxz:" + y+ "<" + x+ "<" + z);
    }
    else{
        console.log("Thứ tự hiển thị là xyz:" + x+ "<" + y+ "<" + z);
    }
}