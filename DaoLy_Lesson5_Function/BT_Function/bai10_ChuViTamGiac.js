function khoangCach(x1,x2,y1,y2){
    return Math.sqrt(Math.pow((x1-y1),2)+Math.pow((x2-y2),2));
}
var AB = khoangCach(1,3,3,4)
var BC = khoangCach(3,4,8,9)
var AC = khoangCach(1,3,8,9)
if(AB <BC+AC && BC <AB+AC && AC<AB+BC){
    var chuVi = AB + AC + BC
    console.log(chuVi);
}
else{
    console.log("Không phai la tam giac nen khong tinh duoc");
}
