# Thẻ a (anchor, liên kết hyperlink)

- Nên trình bày bề ngoài của liên kết (link) khác với văn bản thông thường để người dùng dễ nhận biết
- Nên để để tên của liên kết là một từ hoặc cụm từ mà người dùng có thể hiểu được, tránh để "tại đây"

## Cách liên kết với google

điền vào ô tìm kiếm: (dùng %20 để thay thế khoảng trắng ghi khoảng trắng cũng đc, nó tự mã hóa lại hoạc dùng +)

```html
<a href="https://www.google.com.vn/?q=hoc%20html"></a>
```

tìm kếm luôn:

```html
<a href="https://www.google.com.vn/search?q=hoc%20html"></a>
```

## Lưu ý dùng thẻ a:

- chú ý href: nếu không có href thì thẻ a sẽ không hoạt động
- Nếu href="" thì tải lại trang
- href="#": trở về đầu trang
- href="#!": không làm gì cả (giữ nguyên)
    - (thật ra ! không bao giờ dùng làm id, mà hash đến một id không tồn tại == không làm gì cả, nên là đổi dấu khác cũng được)

## Phương thức tel, mailto

- Ngoài việc liên kết với trang web, thẻ a còn có thể liên kết với số điện thoại, email

```html
<a href="tel:0123456789">sdt: 0123456789</a>
<a href="tel: +84123456789">sdt: +84123456789</a>
<a href="mailto:demo.gmail.com">email: demo.gmail.com</a>
```

bản chất chỉ đơn giản là đều hướng đến trình duyệt mở ứng dụng điện thoại hoặc email mặc định

### phân biệt to, cc, bcc

- cc: carbon copy, gửi cho người khác biết danh sách người nhận giống với mình
- bcc: blind carbon copy, gửi cho người khác nhưng không biết gồm những ai được nhận như mình

### Cách nhập sẵn các nội dung cho mail

- ? phân tách mailto và tham số, & phân tách các tham số

```html
    <a href="mailto:demo.gmail.com?cc=examble.gmail.com&bcc=examble.gmail.com&subject=subject&body=body">email:
    demo.gmail.com</a>
```

## Kết hợp menu, mục lục

- dùng #! để tránh tải lại trang (để trống) hoạc đưa về đầu trang (#) khi chỉ mới thiết kế FrontEnd chưa có nội dung

```html

<ul>
    <li>
        <a href="#!">about</a>
    </li>
    <li>
        <a href="#!">infor</a>
    </li>
    <li></li>
</ul>
```

## Thuộc tính href với hash và id

- hash: trỏ đến một id cụ thể trong trang
- vì sao bên trong id lại có thêm thẻ a trỏ đến id đó một lần nữa?

```html
<h3 id="your_pc">
    <a href="#your_pc">linux</a>
</h3>
```

- để focus vào đúng chỗ đó, dễ share cho người khác đến đúng chỗ mình cần
- Sau này học js sẽ tự động tạo, bây giờ học bản chất thôi
- khi nào trình duyệt hiển thị thanh cuộn?
    - mặc định: khi nội dung trang đủ dài thì tự động xuất hiện thanh cuộn
    - Có thể dùng lorem1000 để tạo nội dung dài 1000 từ
- quy tăc đặt id: được phép giống ở hai trang khác nhau, tuần theo quy chuẩn W3C
    - nếu trùng trong một trang thỉ chỉ lấy cái đầu tiên

```html
<a href="#dac_id">link</a>
<h3 id="dac_id">nội dung</h3>
```

### lưu ý

- không dùng nhều # trong một hash vì sẽ chỉ có tác dụng của cái đầu tiên các cái sau không mang nghĩa
    - #abs#dchb thì nó tìm nguyên cụm "abs#dchb"

## thuộc tính download

```html
<a href="img.jpg" download>download</a>
```

## thuộc tính target

- quyết định thẻ a mở ở trang hiện tại hay tab mới (mặc định là _self)
- Khi nào dùng _blank
    - người dùng đang nhập liệu
    - đến trang khác khác tên miền của trang hiện tại
    - không nên giữ tỉ lệ thoát trang thấp bằng việc cứ mở ở trang hiện tại
- khi dùng _blank thì nên thêm rel="noopener noreferrer" để tránh bị tấn công và đảm bảo hiệu xuất