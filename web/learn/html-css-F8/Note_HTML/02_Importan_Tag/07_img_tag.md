# img tag

- Thuộc tính bắt buộc: src và alt
- Nguồn ảnh chất lượng: https://unsplash.com/

## src (source)

- lưu ý: img không thực sự chèn ảnh vào web, mà chỉ tạo chỗ để hiển thị anh lấy từ src
- copy ảnh bằng "sao chép ĐỊA CHỈ hình ảnh", Không khuyến thích dùng cách này (gốc bị xóa, lỗi mạng)

## Thuộc tính alt

- văn bản thay thế ảnh khi ảnh bị lỗi
- công cụ tìm kiếm sẽ dựa vào alt để hiểu hình ảnh
- trình đọc màn hình cũng sẽ dùng
- Một số alt thường viết:
    - logo: tên tổ chức, thương hiệu
    - biểu tượng chức năng: tên chức năng, vai trò
    - ảnh minh họa nội dung: tóm tắt nội dung
    - ảnh trang trí: alt=" ", không được bỏ vì trình phân tích sẽ xem là bạn đã quên

## width, height

- viết số mặc định thì đơn vị là px
- nên chỉ định w, h cho ảnh
- nếu không chỉ định, thì sau khi tải về nội dung sẽ bị nhảy do khi này web mới biết được w,h
- tránh đặc w, h sai tỉ lệ (lấy h/w rồi canh)
- tránh tăng kích thước gốc vì sẽ bị rỗ, mờ

## Định Dạng GIF (graphic interchange format)

- ảnh động
- màu hạn chế, khó chỉnh sửa sau khi đã chuyển sang GIF, mạng yếu khó tải ảnh
- https://giphy.com/

## Định dạng WebP do google tạo ra

- dung lượng nhỏ hơn png, jpeg, ảnh động
- chưa được hỗ trợ nhều trình duyệt, giảm một ít chất lượng khi (png, jpeg -> webp)

## Mã hóa Base64

- không phải định dạng ảnh, mã hóa chuỗi kí tự
- ảnh đi theo code (không qua url) -> giảm lưu lượng cần dùng
- dài dòng code, nếu ảnh mã hóa dài thì nặng file html css
- hình ảnh không được công cụ tìm kiếm đánh chỉ mục (không đề xuất)

## Tối ưu dung lượng ảnh

- dùng app ảnh mặc định trên win
- quy tắc: gốc: 500, hiển thị lên web 100 thì resize về 200 (gấp 2 lần hiển thị đẹp trên màn hình retina)
- dùng https://tinypng.com/ để tối ưu ảnh PNG
- tránh dùng url vì có thể sau này ảnh bị xóa

## Thẻ figure: bổ xung ngữ nghĩa cho media có nội dung xung quanh

- lúc trước dùng div để ôm riêng, html5 xuất hiện thẻ này để rõ nghĩa
- Dùng bổ xung ngữ nghĩa cho đính kèm tài liệu hình ảnh, âm thanh, biểu đồ
- Lưu ý: nếu hình ảnh, âm thanh... chỉ là quảng cáo, bìa, avt.. không có ngữ nghĩa nội dùng thì chỉ cần dùng một thẻ img thôi

## thẻ figcaption: chú thích cho ảnh đã có figure

- phải nằm trong figure

## Các định dạng ảnh phố biến

### JPG/JPEG (là một)

- bitmap (điểm ảnh)
- không hỗ trợ ảnh trong suốt
- bị đổi chất lượng khi nén

### PNG: phổ biến nhất

- bitmap (phổ biến nhất)
- phổ biến nhất
- hỗ trợ ảnh trong suốt
- không đổi khi nén

### Định dạng SVG
- dạng vector
- có thể dùng css để sửa

