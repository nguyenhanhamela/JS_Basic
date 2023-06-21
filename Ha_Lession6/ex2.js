// 2. Xây dựng lớp Time gồm 
// - Thuộc tính: hour (number), minute (number) 
// - Phương thức: 
//    + add: tính cộng thêm thời gian 
//    + print: Hiển thị giờ phút 
// Viết chương trình in thời gian của đối tượng time1 sau khi đã cộng thêm thời gian của đối tượng time2. 
// Ví dụ: 
// time1 có giờ là 1, phút là 30 
// time2 có giờ là 2, phút là 30 
// Tổng thời gian của time1 và time2 là 4 giờ 00 phút 
// Hướng dẫn: Sau khi tạo 2 đối tượng time1, time2, sử dụng phương thức add của time1 để tính cộng thêm thời gian của time2 

class Time {
    constructor(hour, minute){
        this.hour = hour;
        this.minute = minute
    }
    add(a,b){
        // const x = (this.hour + a) * 60;
        // const y = this.minute + b;
        // const time = x + y 
        // this.hour = Math.floor(time / 60)
        // this.minute = (time % 60)

        this.hour = this.hour + a
        this.minute = this.minute + b

        if(this.minute >= 60){
            this.hour = this.hour + 1
            this.minute = this.minute - 60
        } else{
            this.hour = this.hour
        }
    }
    print(){
        console.log("Gio la", this.hour)
        console.log("Phut la", this.minute)
        
    }
}

const KQ = new Time(1,21)
KQ.add(1,40)
KQ.print()