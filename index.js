const { Builder, By, Key } = require('selenium-webdriver');

const driver = new Builder()
    .forBrowser('chrome')
    .build();
driver.get('https://www.google.com.vn');
(async () => {
    try {
        const input = await driver.findElement(By.id("APjFqb"));
        await input.sendKeys("Selenium JS", Key.RETURN);
    } catch (e) {
        console.log(e);
    } finally {
        driver.quit();
    }
})();

// const input = driver.findElement(By.id("APjFqb"));
// input.sendKeys("Selenium JS", Key.RETURN);



