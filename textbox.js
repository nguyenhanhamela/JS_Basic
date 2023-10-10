const { Builder, By, Key } = require('selenium-webdriver');

const driver = new Builder()
    .forBrowser('chrome')
    .build();
driver.get('https://demoqa.com/text-box');
driver.manage().window().maximize();
 //Khai bao function check du lieu
 function CheckValue(input,output, name) {
    if(input != output){
        console.log("sai truong du lieu:" + name + " act: " + input + "exp: " + output );
    } else {
        console.log("đúng dữ liệu: "+ name);
    }   
 }

 function splitValue (output){
    const Arr_out = output.split(":");
    return Arr_out[1];
 }

(async () => {
    try {
        //NHAP USER NAME
        const name_input = "Huyen Le";
        const input_name = await driver.findElement(By.id("userName"));
        await input_name.sendKeys(name_input, Key.RETURN);
        //NHAP MAIL
        const mail_input = "huyenle@gmail.com";
        const input_email = await driver.findElement(By.id("userEmail"));
        await input_email.sendKeys(mail_input, Key.RETURN);
        //NHAP ADRESS.
        const address_input ="KeangNam";
        const input_adress = await driver.findElement(By.id("currentAddress"));
        await input_adress.sendKeys(address_input, Key.RETURN);
        //NHAP PAYMENT
        const payment_input = "Amela"
        const input_payment = await driver.findElement(By.id('permanentAddress'));
        await input_payment.sendKeys(payment_input, Key.RETURN);
        //CLICK SUBMIT.
        // driver.sleep(300);
        const element =  await driver.findElement(By.id("submit"));
        await driver.executeScript("arguments[0].scrollIntoView(true);", element);
        await element.click();
        // driver.sleep(300);
        // Lấy name đã tạo
        const name_output = await driver.findElement(By.id('name'));
        const N_output = await name_output.getText();
        const name_value = splitValue(N_output);
        console.log(name_value)
        //Lấy email đã tạo
        const email_output = await driver.findElement(By.id('email'));
        const e_output = await email_output.getText();
        const email_value =  splitValue(e_output)
        console.log(email_value)
        //Lấy địa chỉ đã tạo
        const output = await driver.findElement(By.id('output'));
        const add_output = output.findElement(By.id('currentAddress'))
        const ad_output = await add_output.getText();
        const add_value =  splitValue(ad_output)
        console.log(add_value)
         //Lấy payment đã tạo
         const pay_output = output.findElement(By.id('permanentAddress'));
        //  await driver.executeScript("arguments[0].scrollIntoView(true);", pay_output);
         const p_output = await pay_output.getText();
         const pay_value = splitValue(p_output)
         console.log(pay_value)

         CheckValue(name_input, name_value, "name")
         CheckValue(mail_input,email_value, "email")
         CheckValue(address_input, add_value, "address")
         CheckValue(payment_input, pay_value, "payment")


    } catch (e) {
        console.log(e);
    } finally {
        driver.quit();
    }
})();