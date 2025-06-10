# ul (unordered list) và ol (ordered list)
- ul: tạo danh sách không sắp xếp
- ol: tạo danh sách có sắp xếp
- li (list item): tạo một mục trong danh sách 
## Style hay Semantic
- Semantic, vì có thể dùng CSS để thay đổi style

## Cách dùng danh sách lồng nhau (menu đa cấp, dàn ý, mục lục...)
- ví dụ: 
```html
<ul>
    <li>Home</li>
    <li>
        About
        <ul>
            <li>History</li>
            <li>Team</li>
        </ul>
    </li>
    <li>Tutorial</li>
</ul>
```
### Lưu ý:
- Chỉ nên có từ 1-3 cấp
- Danh sách con nằm trong li

## Styles mặc định
- thục lề trái
- tạo sự phân cấp
- ul sẽ có khoảng trống với ul/ol khác

## Market (đầu muc, dấu phía trươc)
- ul không thể thay đổi market
- ol có thể thay đổi market:
  - reverse: đảo ngược thứ tự
  - start: bắt đầu từ số nào
  - type: kiểu market
    - 1: số
    - A: chữ cái hoa
    - a: chữ cái thường
    - I: số la mã
    - i: số la mã thường

## dùng Emmet để tạo nhanh danh sách
- ul>li*4
- ul>li*4{item $}