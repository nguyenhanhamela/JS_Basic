import data from "./data.js";
import locatorPage from "./locatorPage.js"
import { Builder, By, Key, until } from "selenium-webdriver"
import pkg from "selenium-webdriver/safari.js";
import chrome from "selenium-webdriver/chrome.js"
import { login } from "./addUser.js"
const chromeOptions = new chrome.Options();
    let driver = new Builder()
        .forBrowser('chrome')
        .setChromeOptions(chromeOptions)
        .build();
    driver.manage().window().maximize()

async function approve(){
    
    try {
        await login('Hong00@gmail.com', 'Microman.123', driver);
        //CLICK BUTTON MENU ADMIN
        const admin_site = await driver.findElement(By.id('wp-admin-bar-site-name'));
        await admin_site.click();
        //


    } catch (e) {

    }
}