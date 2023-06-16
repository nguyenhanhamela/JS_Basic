function khoangCach(x1,x2,y1,y2){
    return Math.sqrt(Math.pow((x1-y1),2)+Math.pow((x2-y2),2));
}
var AB = khoangCach(1,2,3,4)
var BC = khoangCach(3,4,5,8)
var AC = khoangCach(1,2,8,9)
var chuVi = AB + AC + BC
console.log(chuVi);