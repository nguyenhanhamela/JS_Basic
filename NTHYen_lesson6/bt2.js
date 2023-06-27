// 2. Xây dựng lớp Time gồm 

//      - Thuộc tính: hour (number), minute (number) 

//      - Phương thức: 

//         + add: tính cộng thêm thời gian 

//         + print: Hiển thị giờ phút 

//     Viết chương trình in thời gian của đối tượng time1 sau khi đã cộng thêm thời gian của đối tượng time2. 

// Ví dụ: 

//     time1 có giờ là 1, phút là 30 

//     time2 có giờ là 2, phút là 30 

//     Tổng thời gian của time1 và time2 là 4 giờ 00 phút 

// Hướng dẫn: Sau khi tạo 2 đối tượng time1, time2, sử dụng phương thức add của time1 để tính cộng thêm thời gian của time2 

class Time{
  constructor(hour, minute){
    this.hour = hour;
    this.minute = minute;
  }

  add(time){
    this.hour += time.hour
    this.minute += time.minute

    if(this.minute > 60){
      this.hour += Math.floor(this.minute/60)
      this.minute = this.minute % 60 
    }

  }

  print(){
      console.log(`${this.hour}h` + `${this.minute}p`)
  }

}

const time1 = new Time (6, 30)
const time2 = new Time (7, 30)

time1.add(time2)
time1.print()