const { Builder, By, Key } = require('selenium-webdriver');

const assert = require("assert")
const driver = new Builder()
    .forBrowser('chrome')
    .build();

// driver.get('https://www.google.com.vn');
// (async () => {
//     try {
//         const input = await driver.findElement(By.name("q"));
//         await input.sendKeys("Selenium JS", Key.RETURN);
//         await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
//     } catch (e) {
//         console.log(e);
//     } finally {
//         // driver.quit();
//     }
// })();

driver.manage().window().maximize()

driver.get('https://demoqa.com/text-box');
(async () => {
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

}) ();
