# image
## ảnh lớn làm sao căn ảnh vừa với nội dung ở giữa
- dùng max-width; 100%, thay vì width sẽ làm giãn ảnh nếu ảnh kh đủ kích thước
## nếu ảnh nhỏ hơn nội dung luôn thì làm sao căn giữa
- chuyển sang block (nếu inline thì margin kh có tác dụng)sau đó dùng margin: auto
## lazy load
- loading="lazy"
- hình nằm tuốt dưới mà chưa chắc người ta sẽ kéo xuống để xem nên để tải sau (tăng tốc độ trang và giảm băng thông máy chủ)
## cách giữ tỉ lệ của hình 
- đặt một chiều width hoạc height
## nếu mạng chưa kịp tải ảnh (h = 0) thì nội dung bị chèn lên xong bị giựt tuột xuống sau khi tải xong, làm sao khắc phục
- object-fit: cover / contain
- object-position
## cách cho nội dung bao bọc hình ảnh
- float: right / left
## khi nào dùng image / background-image
- image: nội dung của web, hỗ trợ in, index gg, web accessibility
- background-image: tính trang trí, không đưa vào in, không muốn index ảnh không ý nghĩa nội dung,  muốn dùng css sprite, repeat
## cách in luôn phần background
- thêm thuộc tính này vào css body: -webkit-print-color-adjust: exact !important;
- css riêng cho việc in
```css
@mdedia print {
    body {
        -webkit-print-color-adjust: exact !important;
    }

    /* Thêm code khác để tối ưu định dạng in */
}
```