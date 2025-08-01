# Phạm vi của biến, var và let
## Hoisting
- **Var**: có thể truy cập được vào biến trước khi được khai báo: Giá trị undefined
- **let**: KHÔNG thể truy cập trước khi khai báo
# Điều kiện nâng cao: if...else, if...else if, switch...case
## if...else
- Cấu trúc:
    - if (condition) {
        run code when condition = true
    } else {
        run code when condition = false
    }
## if...else if
- Cấu trúc:
    - if (condition1){
        run code when condition = true
    } else if (condition2){
        run code when condition2 = true
    } else {
        run code when all conditions = false
    }
- Ví dụ:
    -    let diem=9;
if (diem>=8){
console.log ("Học sinh giỏi");
} else if (diem>=5){
console.log ("Học sinh khá");
} else {
console.log ("Học sinh yếu");
}
## Switch...case
- Cấu trúc:
    - switch (bieu_thuc) {
	case value_1:
		// run code
		break;
	case value_2:
		// run code
		break;
	case value_3:
		// run code
		break;
	default:
		// run code default
}
# So sánh tuyệt đối và so sánh lỏng lẻo
## Ví dụ
- const result = "5" == 5; // kiểm tra: value
const result1 ="5" === 5; // kiểm tra: value + data type
console.log (result); // true
console.log (result1); // false
const result2 = "5" !=5 // false
# Vòng lặp nâng cao
## For..in
- Ví dụ:
let product = {
Banana : 20,
Apple : 30,
Orange : 15
}
for (let property in product) {
console.log (property);
console.log (product[property]);
}
## For Each
- Ví dụ:
const arr = ["a", "b", "c"];
arr.forEach ((value,index) =>
{
	console.log (`${index}: ${value}`);
})
## For of
- Ví dụ:
const arr = ["a", "b", "c"];
for (let value of arr)
{
	console.log (value);
}
# Break and continue
## Continue
- Bỏ qua vòng lặp, chạy vòng lặp tiếp theo
- Nếu gặp continue thì bỏ qua đoạn code chạy phía dưới, và chạy tiếp vòng lặp tiếp theo
- Ví dụ:
    - for (let i=1; i<=5; i++)
{
if (i % 2 === 0)
{
	continue;
}
	console.log (i);
}
// kết quả là 1,3,5
## Break
- Gặp break, thoát khỏi vòng lặp luôn
- Ví dụ:
    - for (let i=1; i<=5; i++)
{
if (i % 2 === 0)
{
	break;
}
	console.log (i);
}
// kết quả là 1
# String Utils
## trim()
- Ví dụ:
    - let str = "      K16 Playwright    ";
console.log (str);
str = str.trim();
console.log (str);
// kết quả:       K16 Playwright     và K16 Playwright
## toLowerCase() và toUpperCase()
- Ví dụ:
    - let str = "      K16 Playwright    ";
console.log(str.toLowerCase()); //        k16 playwright
console.log(str.toUpperCase()); //        K16 PLAYWRIGHT
## includes
- Ví dụ:
    - console.log (str.includes("K16")); //true
console.log (str.includes("k16")); //false
## replaces
- Ví dụ:
    - let str = "      K16 Playwright    ";
str = str.trim();
str = str.replace("Playwright", "Cypress");
console.log(str);
// K16 Cypress

## split
- Ví dụ:
    - const sentence = "Toi ten la Tien.";
const split_space = sentence.split(" ");
console.log(split_space ); 
// ["Toi", "ten", "la", "Tien."]

## Substring
- Ví dụ:
    - let str = "Hello World!";
console.log(str.substring(0,5)); // Hello
console.log(str.substring(6)); // World!

## indexOf
- Ví dụ:
    - let str = "Hello World!";
console.log(str.indexOf("World!")); // 6

# Array utils
## map
- Ví dụ:
    - let numbers = [1,2,3,4,5];
let newNumbers = numbers.map (num => num *2);
console.log (newNumbers);
// [2,4,6,8,10]
## filter
- Ví dụ:
    - let numbers = [1,2,3,4,5];
let newNumbers = numbers.filter (num => num %2 ===0);
console.log (newNumbers);
// [2,4]
## find
- Ví dụ:
    - let numbers = [1,2,3,4,5];
let firstEven = numbers.find (num => num %2 ===0);
console.log (firstEven);
// 2
## reduce
- Ví dụ:
    - let numbers = [1,2,3,4,5];
let sum = numbers.reduce ((total,num) => total + num,));
console.log (sum);
//15
## some
- Ví dụ:
    - let numbers = [1,3,3,3,5];
let hasEven = numbers.some (num => num % 2 ===0);
console.log (hasEven);
// false
## push
- Ví dụ:
    - let numbers = [2,2,2,4,6];
numbers.push (7,8);
console.log (numbers);
// [2,2,2,4,6,7,8]
## shift
- Ví dụ:
    - let numbers = [2,2,2,4,6];
let firstNumber = numbers.shift ();
console.log (firstNumber);// 2
console.log (numbers); // [2,2,4,6]
## sort
- Ví dụ:
    - let numbers = [1,2,3,4,5];
numbers.sort();
console.log (numbers);
numbers.sort ((a,b)=> b-a);
console.log(numbers);
//[1,2,3,4,5]
//[5,4,3,2,1]