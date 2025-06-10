// ba cách chứa chuỗi: nháy đơn, nháy kép,
// cách mới: template literal/string (backtick): nội suy, đa dòng, multiline strings (chuỗi nhiều dòng) một cách tự nhiên, không cần dùng ký tự \n.

// dùng ba cách này tùy trường hợp
let me = 'Nguyen "Van" A'; //hoạc ngược lại
console.log(me);

// escape character: dùng \ để vô hiệu hóa chức năng của ký tự phía sau
// hoạc dùng để thêm ký tự đặc biệt vào chuỗi như \n, \t, \\, \', \"

// nội suy chuỗi (template string): dùng backtick ``, ${} để nội suy biến hoặc biểu thức,
// dùng nháy đơn hoặc nháy kép bên trong cũng được
let name = 'Nguyen Van A ';
let infor = `My name is ${name}
I'm 20 years old`;
console.log(infor);

// nối chuỗi
let firstName = 'Nguyen';
let lastName = 'Van A';
let fullName = firstName + ' ' + lastName;
console.log(fullName);
// lưu ý: toán hạn + ưu tiên nối chuỗi hơn là cộng số
// nên '1' + 1 = '11'
// thứ tự: 3 + 4 + '5' = '75'
// '5' + 3 + 4 = '534'
// nên dùng () để xác định thứ tự thực hiện và nội suy
let a = 3;
let b = 4;
let total = a + b;
let message = `Tổng của ${a} và ${b} là ${total}`;
console.log(message);