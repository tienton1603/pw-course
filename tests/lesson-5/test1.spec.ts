import { test } from '@playwright/test';

test('Test 01', async ({ page }) => {

      await test.step ("Register Page", async () =>{
      await page.goto('https://material.playwrightvn.com');
      await page.locator ("//a[@href='01-xpath-register-page.html']").click();
      await page.locator ("//input[@id='username']").fill ("tienton");
      await page.locator ("//input[@id='email']").fill ("tienton1603@gmail.com");
      await page.locator ("//input[@id='female']").check();
      await page.locator ("//input[@id='cooking']").setChecked (true);
      await page.locator ("//select[@id='interests']").selectOption ('music');
      await page.locator ("//select[@id='country']").selectOption ('canada');
      await page.locator ("//input[@id='dob']").type("03/16/1999");
      await page.locator ("//input[@id='profile']").setInputFiles("tests/lesson-5/test-data/profile.png");
      await page.locator ("//textarea[@id='bio']").fill ("Testing text area");
      await page.$eval('id=rating', (e, value) => {
        e.value = value;
        e.dispatchEvent(new Event('input', { 'bubbles': true }));
        e.dispatchEvent(new Event('change', { 'bubbles': true }));
      }, 2);
      // Chưa lấy được favorite color
      const hoverText = page.locator('text=Hover over me');
      await hoverText.hover();
      await page.locator ("//input[@id='newsletter']").setChecked (true);
      // Chưa làm được enable feature
      // Chưa làm được star rating
      // await page.locator ("//input[@id='customDate']").type("09/01/1988");
      await page.click("//button[text()='Register']");
    });
});