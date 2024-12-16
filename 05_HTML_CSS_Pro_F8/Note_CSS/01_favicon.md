# favicon

- dùng làm biểu tượng góc trái trang web, biểu tượng trên di động
- Favicon có thể giúp người dùng nhanh chóng xác định trang web của bạn giữa vô số tab đang mở. Ngoài ra, chúng còn giúp người dùng dễ dàng tìm thấy trang web của bạn trong lịch sử trình duyệt của họ. Càng nhiều người tiêu dùng nhìn thấy favicon của bạn, họ càng có nhiều khả năng nhận ra logo của bạn vào lần tiếp theo họ nhìn thấy nó.

## tạo liên kết trước, Tối ưu tải liên kết bên ngoài

- thuộc tính rel = preconnect vào thẻ link, lưu ý chỉ dùng cho các liên kết bên ngoài, không dùng lên chính trang của mình(vì hiển nhiên đã tải rồi)
- Đây là một body-ok (thẻ này có thể đặc trong body) nhưng thống nhất là đặc trong head để tránh không tải css kịp

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&display=swap"
  rel="stylesheet"
/>
```
