# Version Control System
- Local: lưu ở máy cá nhân
- Centralize: lưu ở một máy chủ tập trung.
- Distributed: lưu ở nhiều
máy khác nhau
# Git
## Three states
- Working Directory
- Staging Area
- Respository
## Câu lệnh
1. *Git init* : khoi tao thu muc duoc quan ly boi git
2. **Cau hinh git cho 1 repo**
- *git config user.name "Ngoc Tien"*
- *git config user.email “tienton1603@gmail.com”*
3. **Cau hinh cho toàn bộ máy tính**
- *git config --global user.name “Ngoc Tien”*
- *git config --global user.emai “tienton1603@gmail.com”*
4. **Them file vao 1 vung Staging**
- *git add <file_name>*: Thêm 1 file
- *git add .* : thêm toàn bộ
5. *git status* : xem trạng thái file: 
- File màu xanh: vùng staging
- File màu đỏ: vùng working directory
6. 
- *git commit -m "message”* : commit 
- *git log* : kiểm tra lịch sử commit
7. **Git commit convention**
- Commit message rõ ràng, chuyên nghiệp
- Dùng convention sau: *type: short_description*
Trong đó:
<type>: loại commit
    + *chore:* sửa nhỏ lẻ, chính tả, xóa file không dùng tới
    + *feat:* thêm tính năng mới, test case mới
    + *fix:* sửa lỗi một test trước đó
<short_description>: mô tả ngắn gọn (50 kí tự), tiếng anh hoặc tiếng Việt không dấu
# Javascrip Basic
- Tạo file: 01-hello.js
- Ghi vào dòng: *console.log(“Hello World!”);*
- Chạy lệnh: *node lesson-2/javascript/01-hello.js*
1. **Khai báo biến:**
- var <ten_bien> = gia tri;
- let <ten_bien> = gia tri;
- Trong đó: 
    + <ten_bien>: bắt đầu bằng ký tự chữ, hoặc gạch dưới, hoặc $. 
    + KHÔNG chứa dấu cách. 
    + KHÔNG là các "từ khóa", tức là các từ đã có trong Javascript (ví dụ: var, let, for, if,...)
- **Ví dụ**
- **Khai báo**
    + var firstName = "Playwright";
    + let lastName = "Automation class";
- **Sử dụng**
    + console.log("firstname = " + firstName);
    + console.log("lastName = " + lastName);
- **Gán lại:** lastName = “Lesson 2”;
2. **Phạm vi của biến**
- **var:** phạm vi toàn cục (global)
- **let:** phạm vi trong cặp ngoặc {}
- Nên dùng: let, vì dễ kiểm soát phạm vi của biến
3. **Constant** = hằng số. Dùng để khai báo các giá trị không thể thay đổi.
- **Khai báo**
    + const name = value
- **Ví dụ**
    + const framework = “Playwright”;
- **Sử dụng**
    + console.log(framework);
- **Gán lại**: framework = “Cypress”
4. **Data Type**
- Có 8 loại kiểu dữ liệu: String, Number, Bigint, Boolean, Undefined, Null, Symbol, Object.
- **Ví dụ**
    + *String*: "Playwright class", "Playwright Việt Nam"
    + *Boolean*: true, false
    + *Number*: 100, 0, 100.5, -100.005
5. **Toán tử so sánh**
- Dùng để so sánh giá trị giữa 2 biến với nhau. Kết quả sẽ trả về Boolean (true hoặc false).
Các toán tử so sánh:
    + *So sánh hơn kém:* >, <
    + *So sánh bằng:* ==, ===,!=, !==,>=, <=
6. **Toán tử 1 ngôi**
- Dùng để tăng hoặc giảm giá trị
    + i++ bằng với i=i+1
    + i-- bằng với i=i-1
7. **Toán tử số học**
- Dùng tính toán giá trị biểu thức
- Các phép toán: +, -, *, /
8. **Conditional = điều kiện**
- Dùng để kiểm tra có nên thực hiện một đoạn logic không.
- Cú pháp: if (<điều kiện>) { // code }. Nếu điều kiện đúng, sẽ chạy đoạn code
- **Ví dụ**
    + if (5 > 3)     
    {console.log("5 lớn hơn 3")}
9. **Loops - Vòng lặp**
- Dùng để thực hiện một đoạn logic mộtsố lần nhất định
- Cú pháp: 
    for(<khởi tạo>; <điều kiện dừng>; <điều kiện tăng>) 
        {// code }
- **Ví dụ**
    for (let i = 1; i <= 10; i++) 
    {console.log("Giá trị của i là: ", i);}