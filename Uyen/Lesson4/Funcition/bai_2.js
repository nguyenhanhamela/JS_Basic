function chekNam(nam){
    if(nam % 100 == 0  && nam % 400 ==0){
        return true;
    }else if( nam % 4 ==0){
        return true;
    }else{
        return false;
    }
}


