// 1. Xây dựng lớp SuperHero gồm 
//      - Thuộc tính: name (string), heroName (string), isPublicName (bool) 
//      - Phương thức: 
//         + display: Hiển thị thông tin cơ bản 
//    Viết chương trình in ra thông tin cơ bản (hiển thị cả name nếu có thể) 
//    của các đối tượng siêu anh hùng sau Captain America (công khai danh tính), 
//    Iron Man (công khai danh tính), Spider Man, Superman, Batman 

class SuperHero {
    constructor (name, heroName, isPublicName){
        this.name = name;
        this.heroName = heroName;
        this.isPublicName = isPublicName
    }
    display(){
        // console.log("Thong tin co ban:", this.name ,",", this.heroName,",", this.isPublicName )
        if(this.name == "Captain America" || this.name == "Iron Man"){
            this.isPublicName = true
            console.log ("Cong khai danh tinh:", this.isPublicName)
        } else{
            this.isPublicName = false
            console.log ("Cong khai danh tinh:", this.isPublicName)
        }
    }
}

const CaptainAmerica = new SuperHero("SupperMan","Hero", true)
CaptainAmerica.display()