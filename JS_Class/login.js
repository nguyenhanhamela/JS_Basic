class AccountLogin{
    _email
    _password
    constructor(email,password){
        this._email = email
        this._password = password
    }
    login(){
        //Fake lay duoc data account tu db
        if(this._email=='tester@gmail.com'&& this._password== 'password'){
            console.log('login thanh cong');
        }else{
            console.log('Sai email hoac mat khau');
        }
    }
}
const accountLogin = new AccountLogin('tester@gmail.com','password')
accountLogin.login()