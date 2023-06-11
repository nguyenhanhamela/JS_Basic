//phuong trinh bac mot
var a = 1
var b = 2
if(a==0){
    if(b==0){
        console.log("Phuong trinh vo so nghiem");
    }else{
        console.log("Phuong trinh vo nghiem");
    }
}else{
    console.log("Phuong trinh co la: "+ (-b/a));
}

//phuong trinh bac 2
var c = 1;
var delta;
var x1,x2= 0;
if(a==0){
    if(b==0){
        if(c==0){
            console.log("Phuong trinh vo so nghiem");
        }else{
            console.log("Phuong trinh vo nghiem");
        }
        
    }else{
        console.log("Phuong trinh co nghiem duy nhat: ", (-c/b));
    }
}else{
    delta = (b*b - 4*a*c);
    console.log(delta)
    if(delta>0){
        x1= (-b+Math.sqrt(delta))/(2*a);
        x2= (-b-Math.sqrt(delta))/(2*a);
        console.log("Nghiem thu nhat x1= "+ x1);
        console.log("Nghiem thu nhat x2= "+ x2);
    }else if(delta==0){
        console.log("Phuong trinh co nghiem kep x1=x2 la: ",(-b/(2*a)));
    }else{
        console.log("Phuong trinh vo nghiem");
    }
}