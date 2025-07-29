const student = { "name": "Alex", "age": 10, "salary": 20 };
//3.1 In tên và giá trị mỗi thuộc tính của student
for (let property in student) {
console.log (property);
console.log (student[property]);
}
//3.2 Tính tổng các giá trị số trong student
let sum=0;
for (let property in student) {
    const value = student[property];
    if (typeof value === 'number')
        {sum = sum + value;}
}
console.log ("Tổng các giá trị số trong student là:", sum);
//3.3 Tạo mảng chứa tên các thuộc tính của student
const propertyArr = []; 
for (let property in student) {
    propertyArr.push(property);
}
console.log ("Mảng chứa tên các thuộc tính của student",propertyArr);