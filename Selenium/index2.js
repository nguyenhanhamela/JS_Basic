const { Builder, By, Key } = require('selenium-webdriver');

const assert = require("assert")
const driver = new Builder()
            .forBrowser('chrome')
            .build();

//test suite
describe('Submit form', () => {
    before(function () {
        console.log("Before")
    });

    after(function () {
        console.log('After')
    });

    beforeEach(function () {
        driver.manage().window().maximize()

        driver.get('https://demoqa.com/text-box');
    });

    afterEach(async () => {
        await driver.quit()
    });

    // test cases
    it('Submit success', async () => {
        var userName = "Test"
        await driver.findElement(By.id('userName')).sendKeys(userName);
        var userEmail = "a@gmail.com"
        await driver.findElement(By.id('userEmail')).sendKeys(userEmail);
        var currentAddressdata = "Test2"
        await driver.findElement(By.id('currentAddress')).sendKeys(currentAddressdata);
        var permanentAddressdata = "Test3"
        await driver.findElement(By.id('permanentAddress')).sendKeys(permanentAddressdata);
    
        let elementH = await driver.findElement(By.className('mt-2 justify-content-end row'));
        await driver.executeScript("arguments[0].scrollIntoView(true);", elementH)
    
        await driver.findElement(By.id('submit')).click();
        await driver.sleep(3000);
        var name = await driver.findElement(By.id('name')).getText()
        // console.log(name)
        var actualName = name.split(':')
    
        var email = await driver.findElement(By.id('email')).getText()
        console.log(email, '2222222222222')
        var actualEmail = email.split(':')
    
        var currentAddress = await driver.findElement(By.css('#output #currentAddress'))
            .getText()
        console.log(currentAddress)
        var actualCurrentAddress = currentAddress.split(':')
    
        var permanentAddress = await driver.findElement(By.css('#output #permanentAddress'))
            .getText()
        // console.log(permanentAddress)
        var actualPermanebtAddress = permanentAddress.split(':')
    
    
    
        assert.equal(actualName[1], userName)
        assert.equal(actualEmail[1], userEmail)
        assert.equal(actualCurrentAddress[1], currentAddressdata)
        assert.equal(actualPermanebtAddress[1], permanentAddressdata)
    
    });

    it('Submit failure',async () => {
        console.log("submit failure")

    })
})