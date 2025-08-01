import { test } from '@playwright/test';

test('Test 02', async ({ page }) => {

    await test.step("Product Page", async () => {
        await page.goto('https://material.playwrightvn.com');
        await page.locator("//a[@href='02-xpath-product-page.html']").click();
        await page.locator('[data-product-id="1"]').dblclick();
        for (let i = 0; i < 3; i++) {
            await page.locator('[data-product-id="2"]').click();
        }
        await page.locator('[data-product-id="3"]').click();
    });
});