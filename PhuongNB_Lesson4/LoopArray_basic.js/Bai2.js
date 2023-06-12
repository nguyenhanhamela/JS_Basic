//BT2: Cho mảng sau: B = [13,23,12,45,22,48,66,100]. Sử dụng for để log ra màn hình các số chẵn trong mảng B 
const  B = [13,23,12,45,22,48,66,100]
for (let j = 0; j < B.length; j++){
    if(B[j] % 2 == 0){
        console.log(B[j])
    }
}