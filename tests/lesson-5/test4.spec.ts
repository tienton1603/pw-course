import { test } from '@playwright/test';

test('Test 04', async ({ page }) => {

    await test.step("Personal Notes", async () => {
        await page.goto('https://material.playwrightvn.com');
        await page.locator("//a[@href='04-xpath-personal-notes.html']").click();
        // Note 1
        await page.locator("//input[@id='note-title']").fill("Robot phục vụ người dân làm thủ tục hành chính");  
        await page.locator ("//textarea[@id='note-content']").fill ("Robot lễ tân trả lời thắc mắc của người dân, hướng dẫn quy trình, giúp rút ngắn nhiều thời gian làm thủ tục tại các trung tâm phục vụ hành chính công trên địa bàn Thủ đô từ 1/8.");
        await page.click("//button[@id='add-note']");
        // Note 2
        await page.locator("//input[@id='note-title']").fill("Tia sét lập kỷ lục dài nhất thế giới");  
        await page.locator ("//textarea[@id='note-content']").fill ("Các nhà nghiên cứu phát hiện tia sét megaflash phá kỷ lục khi đánh giá lại dữ liệu vệ tinh bằng phương pháp tính toán mới. Dữ liệu từ vệ tinh cũng cung cấp nhiều chi tiết hơn những quan sát trước đây, cho phép nhà khoa học xác định tia sét megaflash riêng lẻ trong cơn bão đã qua.");
        await page.click("//button[@id='add-note']");
        // Note 3
        await page.locator("//input[@id='note-title']").fill("Quốc gia đầu tiên phải di cư vì biến đổi khí hậu");  
        await page.locator ("//textarea[@id='note-content']").fill ("Những gì đang xảy ra với Tuvalu có thể sẽ lặp lại với nhiều quốc gia khác. NASA phát hiện mực nước biển toàn cầu tăng cao hơn dự kiến trong năm qua. Kết quả đo từ vệ tinh của họ tiết lộ tỷ lệ mức tăng hàng năm đã gấp đôi từ năm 1993.");
        await page.click("//button[@id='add-note']");
        // Note 4
        await page.locator("//input[@id='note-title']").fill("Những cánh đồng 'không người lái' tại Trung Quốc");  
        await page.locator ("//textarea[@id='note-content']").fill ("Dưới ánh nắng chói chang tại làng Trương Trang Lý, tỉnh Hà Nam (Trung Quốc), một máy bay không người lái vút lên để tuần tra, tạo đường cong uyển chuyển trên nền trời trong vắt.");
        await page.click("//button[@id='add-note']");

        // Note 5
        await page.locator("//input[@id='note-title']").fill("Ứng dụng chuyển đổi số trong quản lý cán bộ");  
        await page.locator ("//textarea[@id='note-content']").fill ("Đây là một trong các yêu cầu về chính sách được nêu trong Hội nghị tập huấn công tác tổ chức cán bộ năm 2025 của Bộ Khoa học và Công nghệ, sáng 1/8. Hội nghị diễn ra trong bối cảnh Luật Cán bộ, công chức mới và các nghị định hướng dẫn vừa ban hành, đặt ra yêu cầu đổi mới toàn diện trong quản lý, xây dựng đội ngũ.");
        await page.click("//button[@id='add-note']");

        await page.locator("//input[@id='search']").fill("Ứng dụng chuyển đổi số trong quản lý cán bộ");
        await page.locator("//input[@id='search']").press("Enter");

    });
});