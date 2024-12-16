// so sánh không nghiêm ngặt (chỉ so giá tri, tự chuyển về cùng kiểu, ưu tiên số): ==, !=, >, <, >=, <=
// so sánh nghiêm ngặt (so cả giá trị và kiểu dữ liệu ): ===, !==
// Nên dùng nghiêm ngặt, dự án thực tế cũng sẽ dùng nghiêm ngặt

// let temp = 10;
// if(temp > 10) {
//     console.log('Nóng');
// }
// else if (temp > 5) {
//     console.log('Lạnh');
// }
// else {
//     console.log('Rất lạnh');
// }

// ba ngôi
// temp > 10 ? console.log('nóng') : console.log('lạnh');

//cau 1
function converNumberToMonth(month) {
    if (month === 1)
        console.log('Tháng 1');
    else if (month === 2)
        console.log('thang 2');
    else if (month === 3)
        console.log('thang 3');
    else if (month === 4)
        console.log('thang 4');
    else if (month === 5)
        console.log('thang 5');
    else if (month === 6)
        console.log('thang 6');
    else if (month === 7)
        console.log('thang 7');
    else if (month === 8)
        console.log('thang 8');
    else if (month === 9)
        console.log('thang 9');
    else if (month === 10)
        console.log('thang 10');
    else if (month === 11)
        console.log('thang 11');
    else if (month === 12)
        console.log('thang 12');
    else
        console.log('Khong hop le');
}
converNumberToMonth(1);

//cau 2
function checkEvenOdd(num) {
    return num % 2 === 0 ? "chẵn" : "lẻ";
}
console.log(checkEvenOdd(3));

//cau 3
function checkInteger(num) {
    return num % 1 === 0 ? "Số Nguyên" : "Không phải số nguyên";
}
console.log(checkInteger(23.4));

//cau 4
function compareNumbers(num1, num2) {
    if (num1 > num2)
        return "Số thứ 1 lớn hơn số thứ 2";
    else if (num1 < num2)
        return "Số thứ 2 lớn hơn số thứ 1";
    else
        return "Hai số bằng nhau";
}
console.log(compareNumbers(3, 4));

//cau 5
function checkAge(age) {
    return age >= 18 ? "Nguoi Lon" : "Vi thanh nien";
}
console.log(checkAge(34));

//cau 6
function calculateShipping(distance) {
    if (distance <= 5)
        return 5000;
    else
        return 5000 + (distance - 5) * 1000;
}
console.log(calculateShipping(7));

//cau 8
function classifyStudent(score) {
    if (score > 8)
        return "Gioi";
    else if (score > 6)
        return "Kha";
    else
        return "Trung binh";
}
console.log(classifyStudent(3));

//cau 9
function gradeExam(score) {
    if (score >= 90)
        return "xuat sac";
    else if (score >= 80)
        return "gioi";
    else if (score >= 70)
        return "kha";
    else if (score >= 60)
        return "trung binh";
    else
        return "Yeu";
}
console.log(gradeExam(85));

//cau 10
function calculateDiscount(mn) {
    if (mn > 1000)
        return mn - (mn * 15) / 100;
    else if (mn >= 500)
        return mn - (mn * 10) / 100;
    else
        return mn;
}
console.log(calculateDiscount(1200));

//cau 11
function converNumberToMonth2(mth) {
    switch (mth) {
        case 1:
            console.log("Thang 1");
            break;
        case 2:
            console.log("thang 2");
            break;
        case 3:
            console.log("thang 3");
            break;
        case 4:
            console.log("thang 4")
            break;
        case 5:
            console.log("Thang 5");
            break;
        case 6:
            console.log("thang 6");
            break;
        case 7:
            console.log("thang 7");
            break;
        case 8:
            console.log("thang 8")
            break;
        case 9:
            console.log("Thang 9");
            break;
        case 10:
            console.log("thang 10");
            break;
        case 11:
            console.log("thang 11");
            break;
        case 12:
            console.log("thang 12")
            break;
        default:
            console.log("thang khong hop le");
    }
}
converNumberToMonth2(3);

//cau 12
function simpleCalculator(oper, a, b) {
    switch (oper) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0)
                console.log('Phep Tinh Khong hop le');
            else
                return a / b;
    }
}
console.log(simpleCalculator('/', 4, 5));

//cau 13
function identifyFruit(color) {
    switch (color) {
        case "do":
        case "hong":
            console.log('Tao');
            break;
        case "vang":
            console.log('chuoi');
            break;
        case "tim":
            console.log('nho');
            break;
        case "cam":
        case "xanh":
            console.log('Cam');
            break;
    }
}

identifyFruit("do");

// cau 14
function gradeStudent(score) {
    switch (true) {
        case score >= 90:
            return 'xuat sac';
        case score >= 80:
            return 'gioi';
        case score >= 70:
            return 'kha';
        case score >= 60:
            return 'trung binh';
        case score < 60:
            return 'yeu';
    }
}
console.log(gradeStudent(54));