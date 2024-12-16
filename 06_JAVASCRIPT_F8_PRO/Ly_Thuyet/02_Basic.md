## variable
var: dùng js cũ, phạm vi toàn cục, có thể thay đổi giá trị.
let: dùng js mới, phạm vi block, có thể thay đổi giá trị.
const: dùng js mới, phạm vi block, không thể thay đổi giá trị. (typrError: assignment to constant variable)
Hai tên biến là kí tự đặc biệt duy nhất: $ và _

- mang tính chất hoisting (khai báo trước khi sử dụng) nhưng không khởi tạo giá trị (undefined)
```javascript
// tương đương với var a;
console.log(a); // undefined
var a = 5; // bị ghi ở dưới
```
với let và const vẫn có hoisting nhưng không thể truy cập trước khi khai báo (được đưa vào Temporal Dead Zone)

## function
- mang tính chất hoisting (khai báo trước khi sử dụng)
1. Hàm khai báo Function Declaration
tham số truyền vào có thể đặc luôn mặc định, lúc gọi hàm có thể truyền thiếu hoạc kh truyền nếu đã đặc giá trị mặc định.
```javascript
function myFunction(thamSo = "default", thamSo2) {
    // code here
}
```

2. Hàm biểu thức (Function Expression): chỉ gọi sau khi định nghĩa
```javascript
var myFunction = function() {
    // code here
}
```
chú ý hositing không áp dụng cho hàm biểu thức
```javascript
// var sum;
sum();
var sum = function() {
    // code here
}
```
3. Hàm arrow (Arrow Function): là một cú pháp ngắn trong ES6, chỉ gọi sau khi định nghĩa
```javascript
var myFunction = (thamSo) => {
    // code here
}
```
rút gọn: nếu chỉ có MỘT tham số thì khỏi ngoạc, nếu chỉ có một câu lệnh thì khỏi ngoạc và return
