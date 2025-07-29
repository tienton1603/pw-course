const scores = [75, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];
//6.1 Tính tổng các giá trị trong scores.
const sumOfScores = scores.reduce((total, currentValue) => {
  return total + currentValue;
}, 0); 
console.log("Tổng các giá trị trong scores",sumOfScores); 
//6.2 Tính tích các giá trị trong numbers.
const multiplyOfNumbers = numbers.reduce((total, currentValue) => {
  return total * currentValue;
}, 1); 
console.log("Tổng các giá trị trong scores",multiplyOfNumbers); 
//6.3 Tính tổng các giá trị trong expenses
const sumOfExpenses = expenses.reduce((total, currentValue) => {
  return total + currentValue;
}, 0); 
console.log("Tổng các giá trị trong scores",sumOfExpenses); 