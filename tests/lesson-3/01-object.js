//1.Tạo một object car với thuộc tính make=”Toyota”, model=”Corolla”, và year=2021. Sau đó in ra năm sản xuất của xe.
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
};
console.log(`Năm sản xuất của xe: ${car.year}`);

//2. Tạo một object person có thuộc tính name, address (là một object lồng với các thuộc tính street, city, country). In ra tên đường của người này.
let person = {
    name: "Tien",
    address: {
        street: "Pasteur",
        city: "Nha Trang",
        country: "Viet Nam"
    }
};
console.log(`Tên đường của Tien là: ${person["address"]["street"]}`);
//console.log(`Tên đường của Tiên là: ${person.address.street}`);

//3. Tạo một object student và truy cập đến điểm môn toán (math) sử dụng ngoặc vuông. 
//Biết object student bao gồm 2 thuộc tính: name và grades. 
// Trong đó grades là một object với 2 thuộc tính kiểu number: math và english
let student = {
    name: "Tien",
    grades: {
        math: 10,
        english: 9
    }
};
console.log(`Điểm môn toán của Tiên là: ${student["grades"]["math"]}`);

//4. Tạo một object settings để quản lý cài đặt của ứng dụng với các thuộc tính như volume, brightness. Thay đổi volume và in ra object mới.
let settings = {
    volume: 50,
    brightness: 35
};
settings.volume = 60;
console.log(`Thông tin cài đặt sau khi thay đổi như sau: ${settings.volume}`);

//5. Tạo một object bike và sau đó thêm thuộc tính color vào object đó
let bike = {
};
bike.color = "Red";
console.log(`Màu của chiếc xe đạp là: ${bike.color}`);

//6. Tạo một object employee với các thuộc tính: name, age và xóa thuộc tính age khỏi object này
let employee = {
    name: "Tien",
    age: 30,
};
delete employee.age;
console.log("Thông tin của employee là:", employee);

//7. Một trường học có các lớp học và học sinh như sau: classA: An, Bình, Châu classB: Đào, Hương, Giang
//Hãy viết code để đáp ứng yêu cầu sau:
//- Khai báo tên biến: school
//- Tên class là tên thuộc tính, giá trị của các thuộc tính này là một mảng chứa tên các học sinh
//Vd: const school = { classA: ["Giang"]...}

const school = {
    classA: ["An", "Binh", "Duong"],
    classB: ["Thu", "Son", "Anh"]
};
console.log(`Thông tin lớp A là: ${school.classA}`);