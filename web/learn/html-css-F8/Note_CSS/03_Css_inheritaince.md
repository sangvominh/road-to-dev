# CSS Inheritance

- ví dụ: thẻ h1 bao bọc thẻ strong, strong thừa kế h1, dùng impect để xem
- không phải bất kì thuộc tính nào cũng có khả năng thừa kế: css color property
- tận dụng thuộc tính có tính chất này để viếc css gọn hơn, có thể dùng tab computed để xem kết quả cuối cùng sau hàng loạt ghi đè

## reset css

- bản chất: những thẻ như head, link thực chất vẫn hiện nhưng do css mặc định của trình duyệt ẩn đi (display: none)
- vấn đề: trình duyệt khác nhau sẽ có những thuộc tính mặc định (user agent stylesheet), có thể dẫn đến hỏng css của bạn
- giải quyết: ghi đè lại tất cả thuộc tính này
- cách làm: lên gg tìm: reset css
  - <https://github.com/necolas/normalize.css/blob/master/normalize.css>
  - <https://meyerweb.com/eric/tools/css/reset/>
- lưu ý: để cái reset trên cùng để giảm độ ưu tiên và tăng ưu tiên css chính của mình
