# font

- ghi nhiều font để dự trù kh tải được cái trước thì tải cái sau
- serif: dễ đọc cho nhiều chữ
- san-serif: gọn (trang ngoài)
- monospace: code

- font-family: là học phông theo tên (có nhiều phong cách như độ dày tăng dần...)
- phông theo tính (serif, san-serif...)

- chọn system font là tối ưu nhất

font của gg được phân phối bằng CDN, tăng tốc bằng CDN PoP

- việc nhúng font là để đảm bảo nếu máy người dùng kh có font thì có nguồn để load
- nếu dùng nhiều font trên cùng trang thì add một lần nhiều cái trên gg font chứ kh copy từng cái vì sẽ tạo nhiều yêu cầu lên máy chủ

## Typography

### line-height

- tránh để cứng px
- tiếng anh: 1.4, tiếng việt 1.5
- căn giữa thẻ
  - height: 100px
  - line-height:100px

### font-style

- in thường in nghiêng

### font-variant

- chữ hoa nhỏ

### font-weight

- độ đậm của chữ (b)
- phụ thuộc vào font bạn nhúng vào những giá trị nào

### shorthand

- size và family là bắt buộc

### khác

- chú ý loại thẻ là inline hay block mới căn chỉnh, dùng cho thẻ cha thì thẻ con là inline hoạc inline-block sẽ dính còn block thì thua

- letter-spacing
- text-align
- text-decoration
  - thêm cùng lúc nhiều vị trí gạch: gạch chân, gạch ngang (giá mới), ẩn/hiện (link)
  - chỉnh các thuộc tính màu sắc, kiểu gạch, độ dày
- text-indent: thụt lề (âm cũng đc)
- text-transform: tất cả chữ là hoa hay thường, 1 chữ đầu hoa hay thường
- white-space
1 Nhiều khoảng trắng => 1 khoảng trắng
2 Nhiều dấu xuống hàng => 1 khoảng trắng
3 Nội dung chạm giới hạn => xuống hàng
normal: 1, 2, 3
nowrap: 1, 2
pre:
pre-line: 1, 3
pre-wrap: 3

- word-break: thông thường chữ dài quá mà kh có cách hay gạch ngang thì nó sẽ tràn ra luôn
  - cách tránh: word-break: break-all
- work-spacing: dùng <https://cssgenerator.org/text-shadow-css-generator.html>
  - cái này giúp khi chữ và màu nên trùng nhau thì vẫn thấy được

text-overflow:
> hiển thị dấu ba chấm khi nội dung vượt giới hạn
display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;

## tối ưu

- text-rendering
  - auto (mặc định)
  - optimizespeed - cho trang kh quan trọng văn bản (ảnh video chủ yếu)
  - optimizeLegibility (ngược lại)

- -webkit-font-smoothing
- moz-osx-font-smoothing

## font awesome
https://cdnjs.com/libraries/font-awesome