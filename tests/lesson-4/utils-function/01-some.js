const scores = [75, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];
//5.1 Kiểm tra scores có giá trị nào > 80 không.
const scoreAbove80 = scores.some(score => score > 80);
console.log(scoreAbove80); 
//5.2 Kiểm tra ages có giá trị nào < 18 không.
const ageUnder18 = ages.some(age => age > 18);
console.log(ageUnder18);
//5.3 Kiểm tra words có từ nào dài > 5 không
const wordLongerThan5 = words.some(word => word.length > 5);
console.log(wordLongerThan5);