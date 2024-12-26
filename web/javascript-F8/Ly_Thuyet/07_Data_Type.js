/*
// check data type
if(typeof greeting == "string"){
    //code, ham...
}

// đặc biệt với số: NaN biểu thị result không hợp lệ nhưng cũng trả về number
// nên khi chỉ kiểm tra value === "number" là chưa đủ
if(typeof value === "number" && !isNaN(value)){
    //code, ham...
}

Kiểm tra giá trị có phải null: console.log(a === null)
kiểm tra object: 
    let person = {name: "jonh", 334, true};
    console.log(typeof person === "object" && person !== null && !Array.isArray(person));
    cách khác kiểm tra phải array không: console.log(colors instanceof Array)


let userName = 'hello';
console.log(typeof userName); //string
//2^53 = 900_000_000_000_000
let so = 19387;
console.log(typeof so); //number

// BigInt: nên thêm large/big trước tên biến cho dễ hiểu
let largeNumber = BigInt("99842759645934578437534657845");
let BigNumber = 9134657234987567834653485n;

// boolean: nên thêm is/can/has/should
let isHuman = true;

//underfined: chưa có gì (khai báo bằng let thì tự khởi tạo, const thì không)
//
let a;

//Null: không có gì, không phải là object, 
// Nhưng typeof trả về object (đây là lỗi của ngôn ngữ -> trở thành tiêu chuẩn)
// dùng Null Khi

- biến chưa tồn tại
    let currUser = null
    if(isLoggin){
        currUser = {name: "Nguyen A", age: 43};
    }
- không tìm thấy trong đâu đó, không có gì cả thì return null
- reset giá trị của biến
- tham số không bắt buộc
    function new(name, age, address = null){
    }
- 


//symbol: giá trị duy nhất
let uniqueId = Symbol('id');
let uniqueId2 = Symbol('id'); //không giống nhau đâu nha

//Object: lữu trữ kiểu cấu trúc key-value
//quy ước đặc tên: tên object dùng danh từ số ít (không users)
let user = {
    name: "Nguyen Van A",
    age: 20,
    address: "Binh Duong"
};

//Array: dùng danh từ số nhiều đặc tên
let product = ["ip",
    "ss",
    "gg",
    24,
    10292933
];
console.log(typeof product); // object

function sum(a, b) {
    return a + b;
}
console.log(typeof sum); //function

*/

//cau 1
function checkDataType(dataType) {
    console.log(typeof dataType);
}

//cau 2
function compareDataTypes(tp1, tp2) {
    return typeof tp1 === typeof tp2;
}

//cau 3
function createUser(Name, Age) {
    // let crrUser = { name: Name, age: Age };
    // return crrUser;
    return {
        name: Name,
        Age: Age
    };
}

//cau 4
export function createArrayFfromArgs(a, b, c) {
    return [a, b, c];
}

//----------------check data type-----------------------

export function isString(a) {
    return typeof a === "string";
}

export function isNumber(a) {
    return typeof a === "number" && !isNaN(a);
}

export function isBigInt(a) {
    return typeof a === "bigint";
}

export function isBoolean(a) {
    return typeof a === "boolean";
}

export function isNull(a) {
    //check value
    return typeof a === "null";
}

export function isUndefined(a) {
    return typeof a === "undefined";
}

export function isSymbol(a) {
    return typeof a === "symbol";
}

export function isObject(a) {
    return typeof a === "object" && a !== null && !(a instanceof Array);
}

export function isArray(a) {
    return !Array.isArray(a);
}

export function isFunction(a) {
    return typeof a === "function";
}


/* Ép kiểu
Ép kiểu rõ ràng: dùng hàm
    Number(), String(), ... Array(), Function(), không có hàm null và undefined

ép sang chuỗi: String(), (123).toString(), 123..toString(), `${123}`, 123 + ""
ép sang số: number() , +"456" , 
    trả về 0 nếu: "" , "0" , -0 , null , false , new Date(0)
    trả về NaN nếu: Number("abc") , undefined , NaN
    Chuyển số nguyên và thực
        pareInt(): bỏ luôn thập phân
        pareFloat(): có thập phân thì in ra y vậy, thập phân là 0 thì bỏ luôn
        Đặc biệt: đầu vào có lẫn kí tự thì xét đến kí tự đầu tiên rồi dùng lại
                Nếu đầu vào không phải chuỗi thì chuyển thành chuỗi và làm như bước trên
éo kiểu boolean: boolean() , !!
    duy nhất 6 giá trị ép sẽ trả về false: false , 0 , "" , null , underfined , NaN

Tại sao không chuyển sang object: tăng độ phức tạp của dữ liệu và thường không mạng lại ý nghĩa

x == y diễn ra như sau:
    cùng kiểu dữ liệu
        undefined == undefined hoạc null == null  trả về true
        Nếu là số
            một trong hai NaN  trả về false
            Nếu cả hai giống hệt nha thì trả về true
        boolean: true nếu cả hai cùng true hoạc cả hai cùng false (khác C++)
    Nếu x là null và y là undifined hoạc ngược lại trả về true (đây không có sự chuyển đổi gì, quy tắc ngôn ngữ)
    Nếu một trong hai là số cái kia là chuỗi chuyển chuỗi thành số rồi so sánh
    Nếu một trong hai bool thì bool chuyển thành số 

ép kiểu toán tử
"5" + 2 = "52"
5 + 2 = 7

"10" - 4 = 6
"10" - "7" = 3

NÊN CÓ TƯ DUY NGHIÊM NGẶC, DÙNG === ĐI KỆ THẰNG ==
*/

function converDataType(value, type){
    if(type === "number"){
        return +(value);
    }
    else if (type === "string"){
        return `${value}`;
    }
    else if(type === "boolean"){
        return !!(value);
    }
    else {
        return "Invalid type";
    }
}

function calculate(a, b, operator){
    let A = Number(a);
    let B = Number(b);    
    if(isNaN(A) || isNaN(B)) return "Invalid";
    else{
        if(operator == "divide" && B === 0){
            return "Cannot divide by zero";
        }
          else if (operator === "add") {
            return A + B;
        }
        else if (operator === "subtract "){
            return A - B;
        }
        else if (operator === "multiply"){
            return A * B;
        }
    }
}

console.log(calculate("3","three", "divide"));