/*1. Xây dựng lớp SuperHero gồm 

     - Thuộc tính: name (string), heroName (string), isPublicName (bool) 

     - Phương thức: 

        + display: Hiển thị thông tin cơ bản 

   Viết chương trình in ra thông tin cơ bản (hiển thị cả name nếu có thể) của các đối tượng siêu anh hùng sau Captain America (công khai danh tính), Iron Man (công khai danh tính), Spider Man, Superman, Batman 
   */

class SuperHero {
    name
    heroName
    isPublicName

    constructor(name, heroName,isPublicName){
        this.name = name
        this.heroName = heroName
        this.isPublicName = isPublicName
    }

    displayInfor(){
        let publicName = "PublicName"
        if(this.isPublicName === true){
            publicName = publicName
        } else {
            publicName = "Not PublicName"
        }
        if(this.name === ""){        
            return `${this.heroName} - ${publicName}`
        }
        return `${this.name} - ${this.heroName} - ${publicName}`
    }
}

const Captain_America = new SuperHero("Captain", "Captain America", true)
const Iron_Man = new SuperHero("", "Iron Man", true)
const Spider_Man = new SuperHero("", "Spider Man", false)
const  Superman = new SuperHero("", " Superman", false)
const Batman = new SuperHero("", "Batman", true)

console.log(Captain_America.displayInfor())
console.log(Iron_Man.displayInfor())
console.log(Spider_Man.displayInfor())
console.log(Superman.displayInfor())
console.log(Batman.displayInfor())