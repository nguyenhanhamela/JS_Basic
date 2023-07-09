/*
2. Xây dựng lớp Time gồm 

     - Thuộc tính: hour (number), minute (number) 

     - Phương thức: 

        + add: tính cộng thêm thời gian 

        + print: Hiển thị giờ phút 

    Viết chương trình in thời gian của đối tượng time1 sau khi đã cộng thêm thời gian của đối tượng time2. 

Ví dụ: 

    time1 có giờ là 1, phút là 30 

    time2 có giờ là 2, phút là 30 

    Tổng thời gian của time1 và time2 là 4 giờ 00 phút 

Hướng dẫn: Sau khi tạo 2 đối tượng time1, time2, sử dụng phương thức add của time1 để tính cộng thêm thời gian của time2 
*/
class Time {
    hour
    minute
    constructor(hour, minute) {
        this.hour = hour
        this.minute = minute
    }

    add(time) {
        let total = this.hour * 60 + this.minute + time.hour * 60 + time.minute;
        return total;
    }

    display(x) {
        const hour1 = Math.round(x / 60);
        const minute1 = x - hour1 * 60
        console.log("Tổng thời gian của time1 và time2 là: " + hour1 + "giờ" + minute1)
    }
}

const time1  = new Time(2,14) 
const time2  = new Time(2,15) 
const total = time1.add(time2)
time1.display(total)