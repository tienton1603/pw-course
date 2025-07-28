//1.Tính tổng từ 1 đến 100.
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum = sum + i;
};
console.log("Tổng từ 1 --> 100 là:", sum);

//2. In bảng cửu chương từ 2 đến 9.
function bangcuuchuong() {
    for (let n = 2; n <= 9; n++) {
        if (n == 2) {
            console.log("Bảng cửu chương 2");
            for (i = 1; i <= 10; i++) {
                console.log(i + "* 2= ", +2 * i);
            }
        }

        if (n == 3) {
            console.log("Bảng cửu chương 3");
            for (i = 1; i <= 10; i++) {
                console.log(i + "* 3= ", +3 * i);
            }
        }
        if (n == 4) {
            console.log("Bảng cửu chương 4");
            for (i = 1; i <= 10; i++) {
                console.log(i + "* 4= ", +4 * i);
            }

        }
        if (n == 5) {
            console.log("Bảng cửu chương 5");
            for (i = 1; i <= 10; i++) {
                console.log(i + "* 5= ", +5 * i);
            }
        }
        if (n == 6) {
            console.log("Bảng cửu chương 6");
            for (i = 1; i <= 10; i++) {
                console.log(i + "* 6= ", +6 * i);
            }
        }
        if (n == 7) {
            console.log("Bảng cửu chương 7");
            for (i = 1; i <= 10; i++) {
                console.log(i + "* 7 = ", +7 * i);
            }
        }
        if (n == 8) {
            console.log("Bảng cửu chương 8");
            for (i = 1; i <= 10; i++) {
                console.log(i + "* 8  = ", +8 * i);
            }
        }
        if (n == 9) {
            console.log("Bảng cửu chương 9");
            for (i = 1; i <= 10; i++) {
                console.log(i + "* 9  = ", +9 * i);
            }
        }
    }
}

bangcuuchuong();

//3. Tạo một mảng chứa các số lẻ từ 1 đến 99.
const arr_odd_num = [];
for (let i = 1; i <= 99; i++) {
    {
        if (i % 2 === 1)
            arr_odd_num.push(i);
    }
}

console.log(arr_odd_num);

//4. In ra 10 email dựa trên tên người dùng và số thứ tự (ví dụ: user1@example.com, user2@example.com, ..., user10@example.com).
for (let i = 1; i <= 10; i++) {
    {
        console.log("user" + i + "@example.com");
    }
}

//5.Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và in ra tổng doanh thu. 
// //Biết cấu trúc object của mảng doanh thu như sau: {“month”: 2, “total”: 100}
let doanhthu = [
    { "month": 1, "total": 100 }, { "month": 2, "total": 50 }, { "month": 3, "total": 145 }, { "month": 4, "total": 200 }, { "month": 5, "total": 210 }, { "month": 6, "total": 245 }, { "month": 7, "total": 250 }, { "month": 8, "total": 145 }, { "month": 9, "total": 109 }, { "month": 10, "total": 167 }, { "month": 11, "total": 156 }, { "month": 12, "total": 199 }
];
let tong_doanh_thu = 0;
for (let i = 0; i < doanhthu.length; i++) {
    tong_doanh_thu = tong_doanh_thu + doanhthu[i].total;
}
console.log("Tổng doanh thu của 12 tháng trong năm là:", tong_doanh_thu);
