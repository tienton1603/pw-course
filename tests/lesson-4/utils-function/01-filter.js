const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];
//2.1 Lọc các giá trị trong scores > 80.
const scoresAbove80 = scores.filter(score => score > 80);
console.log("Kết quả lọc các giá trị trong scores > 80",scoresAbove80);
//2.2 Lọc các giá trị trong ages ≥ 18.
const agesAbove18 = ages.filter(age => age >= 18);
console.log("Kết quả lọc các giá trị trong ages ≥ 18",agesAbove18);
//2.3 Lọc các từ trong words có độ dài > 5
const wordLongerThan5 = words.filter(word => word.length>5);
console.log("Kết quả lọc các từ trong words có độ dài ≥ 5",wordLongerThan5);