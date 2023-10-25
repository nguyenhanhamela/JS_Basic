const { Builder, By, Key } = require('selenium-webdriver');
const driver = new Builder()
            .forBrowser('chrome')
            .build();

describe("Login form", () => {

    beforeEach(function(){
        driver.manage().window().maximize()

        driver.get('https://www.saucedemo.com/');
    })

    afterEach(async () => {
        if (driver == null) {
            driver.quit();
        }
    });

    it("Login sucess", async () => {
        const userName = "standard_user"
        await driver.findElement(By.id("user-name")).sendKeys(userName)
        const passWord = "secret_sauce"
        await driver.findElement(By.id("password")).sendKeys(passWord)
        await driver.findElement(By.id("login-button")).click()

        const urlLoginsuccess = await driver.getCurrentUrl()
        if(urlLoginsuccess == "https://www.saucedemo.com/inventory.html"){
            console.log("Login sucess12222")
        }
    })

    it("Login wrong username", async () => {
        const wrongUserName = "haiyen"
        await driver.findElement(By.id("user-name")).sendKeys(wrongUserName)
        const passWord1 = "secret_sauce"
        await driver.findElement(By.id("password")).sendKeys(passWord1)
        await driver.findElement(By.id("login-button")).click()
        var messerrorExpect = "Epic sadface: Username and password do not match any user in this service"
        var actualerrorExpect = await driver.findElement(By.className("error-message-container error")).getText()

        console.log(`Case username sai ==>` + (messerrorExpect == actualerrorExpect))
    })

    it("Login wrong password", async () => {
        const UserName1 = "standard_user"
        await driver.findElement(By.id("user-name")).sendKeys(UserName1)
        const wrongPassWord = "yen@123"
        await driver.findElement(By.id("password")).sendKeys(wrongPassWord)
        await driver.findElement(By.id("login-button")).click()
        var messerrorExpect1 = "Epic sadface: Username and password do not match any user in this service"
        var actualerrorExpect1 = await driver.findElement(By.className("error-message-container error")).getText()
    
        console.log("Case sai password -->" + (messerrorExpect1 == actualerrorExpect1))
    })

    it("Login user requied", async () => {
        const requiedUserName = ""
        await driver.findElement(By.id("user-name")).sendKeys(requiedUserName)
        const passWord2 = "secret_sauce"
        await driver.findElement(By.id("password")).sendKeys(passWord2)
        await driver.findElement(By.id("login-button")).click()
        var messerrorExpect2 = "Epic sadface: Username is required"
        var actualerrorExpect2 = await driver.findElement(By.className("error-message-container error")).getText()
    
        console.log("Case bo trong username -->" + (messerrorExpect2 == actualerrorExpect2))
    })

    it("Login password requied", async () => {
        const UserName2 = "standard_user"
        await driver.findElement(By.id("user-name")).sendKeys(UserName2)
        const requiedPassWord = ""
        await driver.findElement(By.id("password")).sendKeys(requiedPassWord)
        await driver.findElement(By.id("login-button")).click()
        var messerrorExpect2 = "Epic sadface: Password is required"
        var actualerrorExpect2 = await driver.findElement(By.className("error-message-container error")).getText()
    
        console.log("Case bo trong password -->" + (messerrorExpect2 == actualerrorExpect2))
    })


})