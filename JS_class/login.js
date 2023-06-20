class AccountLogin {
    _email
    _password

    // constructor(email, password) { 
    //     this._email = email
    //     this._password = password
    // }

    setEmail(email) {
        this._email = email
    }

    getEmail() {
        return this._email
    }

    setPassword(password) {
        this._password = password
    }

    getPassword() {
        return this._password
    }
  

    login() {
        //fake lấy được data account từ DB
        if (this._email == 'tester@gmail.com' && this._password == 'password') {
            console.log('login thanh cong');
        } else {
            console.log('sai email hoac mat khau');
        }
    }
    
    display() {
        console.log(this._email, this._password);
    }
}


let accountLogin = new AccountLogin(email, 'tester@gmail.com', password, 'password') //khai báo trong class như nào thì NÊN truyền giá trị theo thứ tự tương ứng
