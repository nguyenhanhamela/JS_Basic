
import data from "./data.js";
import locatorPage from "./locatorPage.js"
import { Builder, By, Key, until } from "selenium-webdriver"
import pkg from "selenium-webdriver/safari.js";
import chrome from "selenium-webdriver/chrome.js"
import { login } from "./addUser.js"


const { getRandomString } = pkg;
const user_info = data.user_input;

async function generateRandomString(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
}
// const randomString = generateRandomString(3);

async function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

async function addCompany(email_input, pass_input) {
    const chromeOptions = new chrome.Options();
    let driver = new Builder()
        .forBrowser('chrome')
        .setChromeOptions(chromeOptions)
        .build();
    driver.manage().window().maximize()
    try {
        await login(email_input, pass_input, driver);
        console.log('Test login successful');

        //GO TO CREATE COMPANY
        const menuButton = await driver.findElement(locatorPage.showMenuButton);
        await driver.wait(until.elementIsVisible(menuButton), 2000);
        await menuButton.click();

        await driver.sleep(2000);
        const xpandCompany = await driver.findElement(locatorPage.xpandCompanyButton);
        await driver.wait(until.elementIsVisible(xpandCompany), 2000);
        await xpandCompany.click();
        const createCompany = await driver.findElement(locatorPage.createCompanyButton);
        createCompany.click();
        await driver.sleep(2000);


        //Create Company
        const company_name = await driver.findElement(locatorPage.companyName);
        //await driver.wait(until.elementIsEnabled(company_name), 2000);
        const company_name_input = await generateRandomString(3) + " Test peformance";
        await company_name.click();
        await company_name.sendKeys(company_name_input);

        const company_des = await driver.findElement(locatorPage.companyDescription);
        const company_des_input = await generateRandomString(5) + " Description";
        //await driver.wait(until.elementIsVisible(company_des), 2000);
        await company_des.sendKeys(company_des_input);

        const e_name = await driver.findElement(locatorPage.engName);
        const e_name_input = "EngName " + await generateRandomString(3);
        await driver.wait(until.elementIsVisible(e_name), 2000);
        await e_name.sendKeys(e_name_input);

        const ef_name = await driver.findElement(locatorPage.engFamilyName);
        const ef_name_input = "EngFamily " + await generateRandomString(3);
        await driver.wait(until.elementIsVisible(ef_name), 2000);
        await ef_name.sendKeys(ef_name_input);

        const email_box = await driver.findElement(locatorPage.email);
        await driver.wait(until.elementIsVisible(email_box), 2000);
        await email_box.sendKeys(email_input)

        const role_box = await driver.findElement(locatorPage.role);
        const role_input = await generateRandomString(3);
        await driver.wait(until.elementIsVisible(role_box), 2000);
        await role_box.sendKeys(role_input);

        const phone_drop = await driver.findElement(locatorPage.phoneDropdown);
        await driver.wait(until.elementIsEnabled(phone_drop), 2000);
        await phone_drop.click();

        const phone_code = await driver.findElement(locatorPage.choosePhone);
        await driver.wait(until.elementIsVisible(phone_code), 2000);
        await phone_code.click();

        const phone_box = await driver.findElement(locatorPage.phoneBox);
        const phone_input = await generateRandomNumber(10000000, 9999999999);
        await driver.wait(until.elementIsVisible(phone_box), 2000);
        await phone_box.sendKeys(phone_input);

        //CHAMPION COMPANY
        if (user_info.role === 2 || user_info.role === 3 || user_info.role === 4) {
            const product_type = await driver.findElement(locatorPage.productType);
            await product_type.click();
            const tag_function = await driver.findElement(locatorPage.tagFunction);
            await tag_function.click();
            const tag_technology = await driver.findElement(locatorPage.tagTechnology);
            await tag_technology.click();

            const check_gft = await driver.findElement(locatorPage.gftCheck);
            //scroll den element
            await driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' })", check_gft);
            await driver.sleep(1000);
            await driver.wait(until.elementIsEnabled(check_gft), 2000);
            await check_gft.click();

            driver.sleep(2000);
            const stages_choose = await driver.findElement(locatorPage.Stages);
            await stages_choose.click();

            const website_box = await driver.findElement(locatorPage.website);
            await driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' })", website_box);
            const website_input = "https://" + await generateRandomString(10);
            await driver.wait(until.elementIsEnabled(website_box), 2000);
            await website_box.sendKeys(website_input);

            const tc_check = await driver.findElement(locatorPage.tc);
            await driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' })", tc_check);
            await driver.wait(until.elementIsEnabled(tc_check), 2000);
            await tc_check.click();

            const policy_check = await driver.findElement(locatorPage.policy);
            await policy_check.click();

            const inYourOwn_box = await driver.findElement(locatorPage.inYourOwn);
            await driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' })", inYourOwn_box);
            const inYourOwn_input = await generateRandomString(10);
            await driver.wait(until.elementIsEnabled(inYourOwn_box), 2000);
            await inYourOwn_box.sendKeys(inYourOwn_input);

            const publish_profile = await driver.findElement(locatorPage.publishProfile);
            await driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' })", publish_profile);
            const publish_profile_input = await generateRandomString(20);
            await driver.wait(until.elementIsEnabled(publish_profile), 2000);
            await publish_profile.sendKeys(publish_profile_input);

            const create_button = await driver.findElement(locatorPage.create);
            await driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' })", create_button);
            await driver.wait(until.elementIsEnabled(publish_profile), 2000);
            console.log("Create button");

        } else if (user_info.role === 5) {
            //FINTECH COMPANY
            const product_stages = await driver.findElement(locatorPage.stateOfProduct);
            await driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' })", product_stages);
            await driver.wait(until.elementIsEnabled(product_stages), 2000);
            await product_stages.click();

            const vetical_service = await driver.findElement(locatorPage.verticalServiceDrop);
            await vetical_service.click();
            const vertical_service_input = await driver.findElement(locatorPage.verticalServiceInput);
            await vertical_service_input.click();

            // const customer_interaction = await driver.findElement(locatorPage.customerInteractionDrop);
            // await customer_interaction.click();
            // const customer_interaction_input = await driver.findElement(locatorPage.customerInteractionInput);
            // await customer_interaction_input.click();

            const product_type = await driver.findElement(locatorPage.productType);
            await product_type.click();

            const tag_function = await driver.findElement(locatorPage.tagFunctionFintech);
            await driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' })", tag_function);
            await driver.wait(until.elementIsEnabled(tag_function), 2000);
            await tag_function.click();

            const tag_technology_fintech = await driver.findElement(locatorPage.tagTechnologyFintech);
            await tag_technology_fintech.click();

            //CLICK GFT
            const gft_check_fintech = await driver.findElement(locatorPage.gftCheck);
            await driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' })", gft_check_fintech);
            await driver.wait(until.elementIsEnabled(gft_check_fintech), 2000);
            await gft_check_fintech.click();

            await driver.sleep(1000)
            const policy_term = await driver.findElement(locatorPage.ppAndTc);
            await driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' })", policy_term);
            await driver.wait(until.elementIsEnabled(policy_term), 2000);
            await policy_term.click();













        }

        const create_button = await driver.findElement(locatorPage.create);
        await driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' })", create_button);
        await driver.wait(until.elementIsEnabled(create_button), 2000);
        console.log("Create button clicked");
        // await create_button.click();



    } catch (e) {
        console.log("error" + e.message);
    }
    // finally {
    //     await driver.quit();
    // }
}

for(let i = 0; i < user_info.length; i++){
    await addCompany(user_info[i].email, user_info[i].pass);
}

