const numbers = [1, 2, 3];
const names = ["Alice", "Bob", "Charlie"];
// 1. push: Thêm 4 vào cuối numbers; thêm "David" vào cuối names.
numbers.push(4);
names.push("David");
console.log ("Mảng numbers sau khi thêm số 4 là:", numbers);
console.log ("Mảng names sau khi thêm David là:", names);
// 2. pop: Loại bỏ phần tử cuối của numbers = [1, 2, 3, 4].
numbers.pop();
console.log ("Mảng numbers sau khi loại bỏ phần tử cuối là:", numbers);
// 3. unshift: Thêm 0 vào đầu numbers; thêm "David" vào đầu names.
numbers.unshift (0);
console.log ("Mảng numbers sau khi thêm số 0 vào đầu mảng numbers là:", numbers);
names.unshift("David");
console.log ("Mảng names sau khi thêm David vào đầu mảng names là:", names);
// 4. shift: Loại bỏ phần tử đầu của numbers = [1, 2, 3, 4].
numbers.shift ();
console.log ("Mảng numbers sau khi loại bỏ phần tử đầu mảng numbers là:", numbers);