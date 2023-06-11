var date = new Date();
var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
for(var i = 0; i<=lastDay;i++){
    if(i%2!=0){
        console.log(i);
    }
}