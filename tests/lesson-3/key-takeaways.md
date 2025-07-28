# GIT
- Thay đổi commit message
    - git commit --amend
        - Gõ i -> vào chế độ insert
        - Gõ esc để thoát insert
        - Gõ “:wq” -> write and quit
    - git commit --amend -m”message”
- Đưa từ vùng staging về working directory
    - git restore --staged <file>
- Đưa từ vùng repository về working directory (uncommit)
    - git reset HEAD~1 (undo 1 commit)
- Tạo branch
    - git branch <ten_branch>
    - git checkout <ten_branch>
    - git checkout -b <ten_branch>
- .gitignore file: Dùng để bỏ qua các file/folder không cần git theo dõi.
    - Ignore file <file_name>
    - Ignore folder <folder-name>/
# JAVASCRIPT
1. **Convention**
    - snake_case: chưa dùng
    - kebab-case: tên file
    - RcamelCase: tên biến
    - PascalCase: tên class
2. **Formatted console.log.**
- console.log with ‘ and “.
    - console.log(‘Toi la Nga’);
    - console.log(“Toi la Phong”);
- console.log(`${variable_name}`)
    - let name = “Nga”;
        - console.log(`Toi la ${name}`);
        - console.log(“Toi ten la” + name + “”)
3. **Object**
- Object = đối tượng, dùng để lưu trữ tập hợp các giá trị vào cùng một biến hoặc hằng số.
- Khai báo:
let/const <ten_object> = {<thuoc_tinh>: <gia_tri>,
...
}
    - Trong đó:
        - <thuoc_tinh>: giống quy tắc đặt tên biến
        - <gia_tri>: có kiểu giống biến, hoặc là 1 object khác.
- Ví dụ:
    - let user = {“name”: “Alex”, “age”: 10, “email”: “alex@gmail.com”}
    - const product = { “name”: “Laptop”, “price”: 500, “isWindow: true, “manufacturer”: { “name”: “Acer”,“year”: 2024 }
- Sử dụng:
    - console.log("name = " + user.name);
    - console.log("manufacturer name = " + product.manufacturer.name);
    - console.log(“price = “, product[“price”]);
- Gán lại:
    - user.age = 28
    - product[“manufacturer”][“year”] = 2025
4. **Logical operator**
- **&&** : cả 2 vế của mệnh đề đều
đúng
- **||** : một trong 2 vế đúng
- **!** : đảo ngược lại giá trị của mệnh đề
5. **Array**
- **Tạo mảng:**
    - **Ví dụ:**
        - let studentAr = ["Hân","Yến","Linh","Trang","Binh", false,5,{student: {age:18}}];
- **Sử dụng và truy xuất:**
    - **Ví dụ:**
        - const count = studentArr.length;
        - console.log (count);
        - console.log (studentArr.indexOf("Linh"));
5. **Function**
- Function = hàm, là đoạn code được đặt tên và có thể tái sử dụng, thực hiện 1 nhiệm vụ hoặc 1 tính toán cụ thể.
- Khai báo
    - function <nameFunction>() {// code}
- Parameter
- Return value
- Ví dụ:
    - function calculate(a,b)
{
	const sum = a+b;
	return sum;
}
    - const total = calculate (5,6)
    - console.log (total);