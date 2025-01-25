// object literal: cách khai báo object đơn giản đã từng học
// thêm cap nhat một key value mới
const cars = {
    nameee: "mec",
    ver: "2000"
};
// 2 cach (tuong tu cho viec cap nhat)
cars.color = "red"; // dùng chấm

let prop = 2024; // dùng biến
cars[prop] = 2024;

cars["year"] = 2024; // gán trực tiếp


// kiem tra có tồn tại trong oj không: dùng tên key + in + tên object
if(nameee in cars){
    //code;
}


// xoa: từ khóa delete 
delete cars.name;
delete cars["ver"];


// tại sao khai báo const rồi mà vẫn thêm sửa xóa được?
// vì mình làm trên thuộc tính của nó nên được, chỉ không được khi thay đổi luôn object đó:
// cars = {pro: 1222} //lỗi, nguyên tắc: các thuộc tính được lưu trong bộ nhớ heap, object chỉ lưu địa chỉ 


// ---------------------------------------------------------------------------------------------------------------------
// object distructuring: phân rã các thành phần trong object thành các biến riêng biệt
// dùng cái này khi cần truy cập nhiều thành phần trong object, chứ ít thì truy cập trực tiếp chứ làm vầy chi cho rườm rà 
const books = {
    namee: "dong ban to",
    author: "ai biet",
    date: 13.6,
    infor: {
        url: "aaaaaaaaaa",
        key: 1234
    }
};
const {name, author} = books; // dùng dấu {}
console.log(namee);

// truy cap vao object con va doi ten (hai cham va them ten phia sau)
const {name: cusname} = books

// phan ra tu dau luon:
const {
    date: ten,
    infor: {
        key: khoa
    }
} = books;

// ---------------------------------------------------------------------------------------------------------------------
// Thuộc tính và Phương thức
const dogs = {
    // Thuoc tinh: bat ki kieu du lieu gi
    name: "milu",
    age: 1,
    chuong: [],

    // kieu du lieu la ham thi la phuong thuc
    speak: function(){
        console.log("gau gau");
    }
}
// goi phuong thuc
dogs.speak();
dogs[speak]();

// Tu khoa this: tham chieu den doi tuong ma no thuoc ve, dung de don gian hon
const persons = {
    name: "hee",
    age: 11,
    isMale: function(){
        console.log(this.name + this.age)
        return `${this.name}` `${this.age}`
        // thay vi phai ghi, den khi sua ten object phai di sua cho nay:
        // return persons.name person.age
    }
}


// Enhanced object literals: cach viec ngan gon va manh hon cho object literals
// Property shorthand (viet tat thuoc tinh)
const a = "hehe";
const b = 10;
const infor = { a, b};

// Method shorhand
const dogss = {
    tenCuaCho: "miimii",
    speak(messss){
        console.log(messss)
    }
};
dogss.speak("go go");

// Computed property names (ten thuoc tinh dong)
// bieu thuc trong ngoac [] dac ten cho thuoc tinh cua object
const varAdd = 'lastName'
const proper = {
    firstName: 'moi',
    [varAdd]: 'rung',
    [varAdd + 3]: 'ne'
}
// thay vi phai viec o day la: proper[varAdd] = 'rung'


// ---------- Mot vai phuong thuc co sang cua object ----------

// Object.keys(obj): tra ve mang chua cac key
// dung de duyet qua tat ca doi tuong, kiem tra doi tuong co nhung thuoc tinh nao
const obj = { a: 1, b: 2, c: 4};
console.log(Object.keys(obj));
console.log(Object.keys(obj).length);

// Object.values(obj): tra ve mang chua cac value
// dung de truy cap cac gia tri ma khong can quan tam den key cua chung
console.log(Onject.values(obj));

// Object.entries(obj): tra ve mang chua cap [key, value], 
// moi mot [key, value] la mot mang hai phan tu
// dung de xu ly tung cap [key, value], chuyen doi doi tuong thanh doi tuong dac biet (sau nay hoc)

// Object.assign(target, source1, source2, ...), co tinh ghi de: src -> target, chi co src bi sua
const target = { a: 1};
const source1 = { b: 2, c: 3};
const res = Object.assign(target, source1, { d: 4}, { e: 5, a: 1100, c: 999});
console.log(res); // console.log(target);
// cach tong hop tat ca nguon va khong muon object nao bi sua: dung obj rong
const rs = Object.assign({}, target, source1, { a: 2});

// Object.freeze(obj); bi dong bang = khong chinh sua duoc
Object.freeze(obj);
// object con khong bi dong bang

// Object.seal(obj): niem phong, khong cho phep: them hoac xoa, cho phep: thay doi gia tri
// co dinh cau truc nhung khong bij han che kha nang cap nhat
// cung chi nem phong obj cha
const obj2 = Object.seal({ a: 1});
obj2.a = '55';


// --------- Cach viet switch bang object: giup ngan gon
function Calculate(oper, a, b){
    // ok, nhung tinh toan khong can thiet va khong them logic phuc tap duoc
    const cal = {
        add: a + b,
        subt: a - b,
        mul: a * b,
        divide: b === 0 ? 'divide by 0' : a / b
    };
    return cal[oper] ?? "error oper";
}
console.log(Calculate(add, 4, 9));
// toi uu hon: phuong thuc
function Calculate2(oper, a, b){
    const cal = {
        add: () => a + b,
        subt: () => a - b,
        mul: () => a * b,
        div: () => b === 0 ? 'div by 0' : a/b
    };
    //  cal[oper] === 'function'
    return cal[oper] ? cal[oper]() : 'error oper';
}
console.log(Calculate2('addddd', 5, 7));