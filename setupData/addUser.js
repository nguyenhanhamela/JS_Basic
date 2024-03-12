import data from './data.js';
import { Builder, By, Key } from "selenium-webdriver"
// const chrome = require('selenium-webdriver/chrome');
import chrome from "selenium-webdriver/chrome.js"
// Tạo options cho trình duyệt Chrome
// const chromeOptions = new chrome.Options();
// chromeOptions.addArguments('--headless');


// const { Builder, By, Key } = require('selenium-webdriver');
async function generateRandomString(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
}

async function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let driver;

async function login(email, pass, driver) {
    await driver.get('https://ihkdev.meetupspark.com/login/');
    const userName = await driver.findElement(By.id('user_login'));
    await userName.sendKeys(email);
    const userPass = await driver.findElement(By.id('user_pass'));
    await userPass.sendKeys(pass);
    const buttonLogin = await driver.findElement(By.id('wp-login-submit'));
    await buttonLogin.click();
}

async function add_user(email_input, pass_input, role_option, driver) {
    //CLICK BUTTON ADD NEW
    const new_user = await driver.findElement(By.xpath(`//a[@class='page-title-action']`));
    await new_user.click();
    // driver.sleep(1000)

    //FORM ADD USER
    const user_name = await driver.findElement(By.id('user_login'));
    const name_input = "A " + await generateRandomString(5);
    await user_name.sendKeys(name_input);

    const user_email = await driver.findElement(By.id('email'));
    await user_email.sendKeys(email_input);
    const fist_name = await driver.findElement(By.id('first_name'));
    const fist_name_input = "F " + await generateRandomString(3);
    await fist_name.sendKeys(fist_name_input);
    const last_name = await driver.findElement(By.id('last_name'));
    const last_name_input = "L " + await generateRandomString(3);
    await last_name.sendKeys(last_name_input);
    const website = await driver.findElement(By.id('url'));
    await website.sendKeys('https://www.google.com');
    const pass = await driver.findElement(By.id('pass1'));
    await pass.clear();
    await driver.sleep(5000);
    await pass.sendKeys(pass_input);
    //choose role
    const role_dropdown = await driver.findElement(By.id('role'));
    await role_dropdown.click();
    // const role_option = await generateRandomNumber(1, 6);
    const option_role = await driver.findElement(By.xpath(`//select[@id='role']/option[${role_option}]`));
    await option_role.click();

    const add_user_button = await driver.findElement(By.id('createusersub'));
    await add_user_button.click();

};
var A = data.user_input;



async function user() {
    // const chrome = require('selenium-webdriver/chrome');
    // // Tạo options cho trình duyệt Chrome
    // const chromeOptions = new chrome.Options();
    // // chromeOptions.addArguments('--headless');
    const chromeOptions = new chrome.Options();
    driver = new Builder()
        .forBrowser('chrome')
        .setChromeOptions(chromeOptions)
        .build();
    try {
        //GOI API LOGIN - Login
        
        await login('Hong00@gmail.com', 'Microman.123', driver);

        //CLICK BUTTON MENU ADMIN
        const admin_site = await driver.findElement(By.id('wp-admin-bar-site-name'));
        await admin_site.click();
        // driver.sleep(1000)
        //CLICK TAB USER
        const user_tab = await driver.findElement(By.id('menu-users'));
        await user_tab.click();
        await driver.sleep(2000)

        for (let i = 2; i <= 3; i++) {
            console.log("Test");
            await add_user(A[i].email, A[i].pass, A[i].role, driver);
            
        }
    } catch (e) {
        console.log("error" + e.message);
    }
    // finally {
    //     await driver.quit();
    // }
}
user()



export { login }
// module.exports = new addUser();