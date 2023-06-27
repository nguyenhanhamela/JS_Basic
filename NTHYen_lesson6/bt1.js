// 1. Xây dựng lớp SuperHero gồm 

//      - Thuộc tính: name (string), heroName (string), isPublicName (bool) 

//      - Phương thức: 

//         + display: Hiển thị thông tin cơ bản 

//    Viết chương trình in ra thông tin cơ bản (hiển thị cả name nếu có thể) của các đối 
//    tượng siêu anh hùng sau Captain America (công khai danh tính), Iron Man (công khai danh tính), Spider Man, Superman, Batman 

 
class SuperHero{
    constructor(name, heroName, isPublicName){
        this.name = name;
        this.heroName = heroName;  
        this.isPublicName = isPublicName;     

    }
    display(){
        console.log(`heroName : ${this.heroName}`);
        if(this.isPublicName){
          console.log(`Name: ${this.name}`)
        }
    }
  }

  const captain = new SuperHero("HHH", "Captain America", true)
  captain.display()
  const iron = new SuperHero("Hiron", "Iron Man", true)
  iron.display()
  const spider = new SuperHero("", "Spider Man", false)
  spider.display()
  const superman = new SuperHero("", "SuperMan", false)
  superman.display()
  const batman = new SuperHero("", "BatMan", false)
  batman.display()