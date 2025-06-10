// toán tử &&: trả về falsy đầu tiên
false && false;
0 & 1;
5 && NaN && 7; //NaN
// nếu đã đi hết tất cả mà không có false trả về giá trị cuối cùng 
6 & 8 //8
// ý nghĩa: tối ưu vì && chỉ cần một cái sai thì trả về cái sai đó luôn
// tại sao là cái đầu tiên mà không đơn giản là false? để tăng tính linh hoạt, minh họa
let greeting = "xin chao";
greeting && alert(greeting);

// toán tử or: trả về truthy đầu tiên
1 || 0;
// nếu kh có truthy: trả giá trị cuối cùng
"" || 0;

//tối ưu hàm kiểm tra
function isObj(check){
    return check != null && typeof check === "object";
}

function showMessage(message){
    console.log(message) || "";
}
showMessage("");

// Toán tử Nullish Coalescing(??): chỉ xét bên phải khi bên trái null hoạc undefined
// khác với ||: xét bên phải khi bên trái falsy (rộng hơn)
//dùng:
let bien; //xuống dưới sẽ nhận mặc định
// let bien = "nguyen van a" //xuong duoi khong bi thay doi
let giaTriMacDinh = "khach";
let ketQua = bien ?? giaTriMacDinh;

function getElement(arr, idx, dfValue){
    return arr[idx] ?? dfValue;
}

function validateAge(age){
    if(age === null || age === undefined)
        return "error";
    else 
        return (!isNaN(age) && typeof age === "number" && age >= 0) ? true : false;
}

function formatName(fn, ln){
    return (fn && ln) ? fn+" "+ln : "";
}
console.log(formatName());