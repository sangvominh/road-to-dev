## Mục đích sử dụng của 3 kiểu khai báo biến

1. **var**:
    - Sử dụng khi cần khai báo biến có phạm vi toàn cục hoặc phạm vi hàm (nếu khai báo trong hàm thì bên ngoài hàm không truy cập được).
    - Thích hợp cho các dự án cũ hoặc khi cần hỗ trợ các trình duyệt cũ.

2. **let** (ES6 - ECMAScript 2015):
    - Sử dụng khi cần khai báo biến có phạm vi block (trong cặp ngoặc nhọn {}).
    - Thích hợp cho các biến chỉ cần tồn tại trong một khối mã cụ thể, giúp tránh lỗi do phạm vi biến.

3. **const**(ES6 - ECMAScript 2015):
    - Sử dụng khi cần khai báo hằng số, giá trị không thay đổi sau khi được gán.
    - Thích hợp cho các giá trị cố định, giúp mã nguồn rõ ràng và dễ hiểu hơn.
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
