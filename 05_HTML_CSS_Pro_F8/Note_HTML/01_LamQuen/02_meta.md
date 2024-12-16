# Thẻ Meta (các thẻ này sẽ được học kĩ sau)

Thẻ meta được sử dụng để cung cấp thêm thông tin và dữ liệu cho trang web. Các thẻ meta thường được sử dụng bởi trình duyệt, các công cụ tìm kiếm và trình thu thập dữ liệu của các mạng xã hội.

## Đặc điểm chung

- **Thẻ tự đóng:** Thẻ meta là một trong số thẻ tự đóng (self-closing tag), không cần thêm thẻ đóng khi sử dụng thẻ meta.

## Các loại thẻ meta

### Thẻ meta charset

- **Chức năng:** Chỉ định bảng mã ký tự cho trang web.
- **Ví dụ:** `<meta charset="UTF-8" />`
- **Lưu ý:** Luôn nhớ đặt thẻ meta charset tại vị trí đầu tiên trong thẻ `<head>`.
- **Tính năng:** UTF-8 hỗ trợ hiển thị các ký tự ngoài khoảng A-Z.

### Thẻ title

- **Chức năng:** Cung cấp tiêu đề trang web hiển thị trên tab trình duyệt, hiển thị trong kết quả tìm kiếm (ví dụ: Google Search).

### Thẻ meta viewport

- **Chức năng:** Hỗ trợ trang web hiển thị trên các thiết bị có kích thước màn hình khác nhau (PC, tablet, mobile).
- **Lưu ý:** Nếu thiếu thẻ meta viewport, khi truy cập trên thiết bị di động, nội dung có thể bị thu nhỏ cần phải phóng to để dễ dàng đọc được.

### Thẻ meta Open Graph

- **Chức năng:** Cung cấp thông tin cho trình thu thập dữ liệu của Facebook, hỗ trợ hiển thị thông tin trang web khi được chia sẻ trên mạng xã hội này.
