const scores = [75, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];
//4.1 Từ scores, tạo mảng mới: tăng 10% nếu < 90, giảm 5% nếu ≥ 90.
const newScores = scores.map(score => {
  if (score < 90) {
    return score * 1.10; 
  } else {
    return score * 0.95; 
  }
});
console.log(newScores); 

//4.2 Từ numbers = [1, 2, 3], chuyển thành mảng chuỗi.
const stringNumbers = numbers.map(num => num.toString());
console.log(stringNumbers);   
console.log(typeof stringNumbers[0]); 
//4.3 Từ numbers = [1, 2, 3], nhân đôi mỗi giá trị.
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); 