/*
falsy:
false
0, -0, 0n
""
null
undefined
NaN

truthy: còn lại

hai cái này dùng để rút gọn câu điều kiện

document.all: cách truy cập vào thẻ qua idx, đã lỗi thời, đừng dùng (tuy còn hỗ trợ)
tiêu chuẩn hiện tại: document.getElementByIf(), ...
*/

function isTruthy(check){
    //return !!check;
    //return check ? true : false;
    return Boolean(check);
}