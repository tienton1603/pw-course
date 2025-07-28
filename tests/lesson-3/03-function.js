//1.Viết hàm multiply nhận 2 tham số a và b, in ra kết quả nhân của chúng. Gọi hàm với 2 cặp giá trị khác nhau.
function multyply(a, b) {
    const multyply_number = a * b;
    return multyply_number;
}
const phep_nhan_2so = multyply(9, 7)
console.log("Phép nhân của 2 số là:", phep_nhan_2so);

//2.Viết hàm findMin nhận 3 tham số a, b, c, trả về giá trị nhỏ nhất. Gọi hàm và in kết quả với 2 bộ số khác nhau.
function findMin(a, b, c) {
    if (a <= b && a <= c) {
        return a;
    }
    else if (b <= a && b <= c) {
        return b;
    }
    else {
        return c;
    }
}

let a1 = 12, b1 = 17, c1 = -9;
let a2 = 15, b2 = 45, c2 = 90;

let number_min = findMin(a1, b1, c1);
console.log(`Giá trị nhỏ nhất trong 3 số ${a1}, ${b1}, ${c1} là: ${number_min}`);

number_min = findMin(a2, b2, c2);
console.log(`Giá trị nhỏ nhất trong 3 số ${a2}, ${b2}, ${c2} là: ${number_min}`);

//3. Viết hàm getTopStudents nhận 2 tham số:students: mảng các object, mỗi object chứa name (tên) và score (điểm).threshold: ngưỡng điểm để được coi là "top" (số).
//Hàm trả về mảng mới chứa tên của những học sinh có điểm >= threshold.
//Gọi hàm với danh sách thực tế và in kết quả.
function getTopStudents(students, threshold) {
    const topStudents = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= threshold) {
            topStudents.push(students[i].name);
        }
    }
    return topStudents;
}

const studentList = [
    { name: "Trang", score: 5 },
    { name: "Uyên", score: 6.5 },
    { name: "Sơn", score: 8 },
    { name: "Chính", score: 7 },
    { name: "Đạt", score: 4 },
    { name: "Tâm", score: 8 }
];

const top_ScoreThreshold = 8;
const top_Students = getTopStudents(studentList, top_ScoreThreshold);
console.log("Sinh viên trong danh sách đứng đầu lớp là:", top_Students);

//4. Viết hàm calculateInterest nhận 3 tham số: principal: số tiền gửi ban đầu (số).rate: lãi suất hàng năm (phần trăm, ví dụ 5 nghĩa là 5%).years: số năm gửi.
//Hàm tính và trả về tổng số tiền (gốc + lãi) sau years năm, sử dụng công thức lãiđơn: total = principal + principal * rate * years / 100. 
// Gọi hàm với ví dụ thực tế và in kết quả.

function calculateInterest(principal, rate, years) {
    const total = principal + principal * rate * years / 100;
    return total;
}

const initialPrincipal = 15000000;
const annualRate = 5;
const numberOfYears = 2;

const finalAmount = calculateInterest(initialPrincipal, annualRate, numberOfYears);
const formatFinalAmount = new Intl.NumberFormat('en-US').format(finalAmount);

console.log(`Số tiền gốc ban đầu: ${initialPrincipal} VND`);
console.log(`Lãi suất hàng năm: ${annualRate}%`);
console.log(`Số năm gửi: ${numberOfYears} năm`);
console.log(`Tổng số tiền nhận được sau ${numberOfYears} năm là: ${formatFinalAmount} VND`);