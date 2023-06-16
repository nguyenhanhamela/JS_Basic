function khoangCach(x1,x2,y1,y2){
    return Math.sqrt(Math.pow((x1-y1),2)+Math.pow((x2-y2),2));
}
console.log("Khoảng cách 2 điểm:",khoangCach(1,2,3,4))
