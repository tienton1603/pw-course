const str = "Playwright";
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];
// 2.1 In lần lượt từng ký tự của str
console.log("In lần lượt từng ký tự của chuỗi str:");
for (const char of str) {
    console.log(char);
}

// 2.2 Tạo mảng đảo ngược từ str
const reversedStr = []; 
for (const char of str) {
  reversedStr.unshift(char); 
}
console.log("Tạo mảng đảo ngược từ str",reversedStr);
// 2.3 Tìm và in vị trí đầu tiên và cuối cùng của giá trị 3 trong arr
//Chưa làm được
// 2.4 Lọc các phần tử xuất hiện 1 lần trong dupArr
const onlyonce = dupArr.filter(number => {
  return dupArr.indexOf(number) === dupArr.lastIndexOf(number);
});

console.log("Phần tử chỉ xuất hiện một lần trong dupArr là:",onlyonce); 