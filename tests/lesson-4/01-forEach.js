const numbers = [1, 2, 3];
const str = "Playwright";
const student = { "name": "Alex", "age": 10, "salary": 20 };
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];
// ForEach
// 1.1 In lần lượt từng phần tử của numbers.
numbers.forEach((value, index) => {
    console.log(`${value}`)
}
);
// 1.2 
// Tính tổng của numbers
let sum = 0;
numbers.forEach(function (number) {
    sum = sum + number
});

console.log("Tổng của numbers là:", sum);

// Tìm giá trị lớn nhất của numbers

let max = numbers[0];

numbers.forEach(function (number) {
    if (number > max) {
        max = number;
    }
});
console.log("Giá trị lớn nhất của numbers là:", max);

// Tìm giá trị nhỏ nhất của numbers

let min = numbers[0];

numbers.forEach(function (number) {
    if (number < min) {
        min = number;
    }
});
console.log("Giá trị lớn nhất của numbers là:", min);

// 1.3 Tạo mảng mới từ numbers, mỗi phần tử nhân đôi
const newNumbers = [];
numbers.forEach(function (number) {
    newNumbers.push(number * 2);
});

console.log("Mảng mới có giá trị nhân đôi so với mảng cũ là:", newNumbers);

