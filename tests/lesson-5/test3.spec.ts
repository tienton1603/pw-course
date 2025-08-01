import { test } from '@playwright/test';

test('Test 03', async ({ page }) => {

        await test.step("To do Page", async () => {
        await page.goto('https://material.playwrightvn.com');
        await page.locator("//a[@href='03-xpath-todo-list.html']").click();
        for (let i = 1; i <= 100; i++) {
            await page.locator("//input[@id='new-task']").fill("Todo " + i);
            await page.click("//button[@id='add-task']");
        }
        page.on('dialog', async (dialog) => dialog.accept())
        for (let i = 1; i <= 100; i++){
            if  (i % 2 !== 0)
            {
        const taskId = "todo-"+i;
    console.log(taskId);
    const dynamicId = `${taskId}-delete`;
    const deleteButton = page.locator(`#${dynamicId}`);
    await deleteButton.click();
            }
        }
       

    });
});