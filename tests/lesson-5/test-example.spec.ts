import { test } from '@playwright/test';

test("Test 01", async ({ page }) => {
  await test.step("Navigate to Register Page", async () => {
    await page.goto('https://material.playwrightvn.com/01-xpath-register-page.html');
  });
  await test.step("Fill info", async () => {
    await page.fill("//input[@id='username']", "Playwright");
    //await page.locator("//input[@id='email']").fill ("tienton1603@gmail.com");
    await page.locator("//input[@id='email']").pressSequentially("tienton1603@gmail.com", { delay: 100 });
    // await page.locator("//input[@id='female']").check();
    await page.locator("//input[@id='male']").check();
    //await page.locator("//input[@id='reading']").setChecked(true);
    await page.locator("//input[@id='traveling']").setChecked(true);
    await page.locator("//select[@id='country']").selectOption("canada");
    await page.locator("//input[@id='profile']").setInputFiles("tests/lesson-5/test-data/image.txt");
  });
});

test('Test 02', async ({ page }) => {

    await test.step("Handle Confirmation Dialog", async () => {
    await page.goto('https://material.playwrightvn.com');
    await page.locator("//a[@href='03-xpath-todo-list.html']").click();
    await page.locator("//input[@id='new-task']").fill("TNNT new task2");
    const taskId = await page.locator("//input[@id='new-task']").inputValue();
    const formattedTaskId = taskId.toLowerCase().replace(/ /g, '-');
    console.log(formattedTaskId);
    //await page.locator ("//button[@id='add-task']").click();
    await page.click("//button[@id='add-task']");
    page.on('dialog', async (dialog) => dialog.accept())
    const dynamicId = `${formattedTaskId}-delete`;
    const deleteButton = page.locator(`#${dynamicId}`);
    //await page.click("//button[text()='Delete']");
    await deleteButton.click();

  });
});

test('Test 03', async ({ page }) => {

  await test.step("Single click", async () => {
    await page.goto('https://material.playwrightvn.com/018-mouse.html');
    await page.locator("//div[@id='clickArea']").click();
  });

  await test.step("Double click", async () => {
    await page.locator("//div[@id='clickArea']").dblclick();
    await page.locator("//div[@id='clickArea']").click({
      clickCount: 2
    });
  });

  await test.step("Shift click", async () => {
    await page.locator("//div[@id='clickArea']").click({
      modifiers: ["Shift"]
    });
  });

  await test.step("Right click", async () => {
    await page.locator("//div[@id='clickArea']").click({
      button: "right"
    });
  });
  
});