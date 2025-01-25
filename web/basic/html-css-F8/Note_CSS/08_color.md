# color

- 16,7 triệu màu?
rgba: a (anpha) là độ mờ (0 -> 1)
hex thập lục phân: #rrggbb, có thể viết tắt, #rrggbbaa có hỗ trợ anpha (anpha thường dùng rgba)
currentColor: màu hiện tại, dùng để tránh viết lại cùng một màu nhiều lần, ưu tiên color gần nó nhất

## quy đổi rgb sang hex

b1 đưa giá trị rgb về thập phân: 0,5 * 255, làm tròn lên
b2 đưa giá trị thập phân về hex: thập phần / 16, lấy phần dư làm số phía sau của kết quả cuối cùng, 
còn phần nguyên đem chia cho 16 sẽ được số phía trươc của kết quả cuối cùng

## một số cách viết khác

rgb(red grreen blue)
rgb(red grreen blue / alpha)
rgba(red, grreen, blue,alpha)
backround-color: transparent tuong ứng với màu trong suốt

## tóm lại

- dùng hex khi không có độ mờ
- dùng rgba khi có độ mờ
