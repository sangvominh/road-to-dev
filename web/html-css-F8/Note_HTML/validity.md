# HTML

- Trình duyệt sẽ cố gắng sửa code sai của bạn, nhưng bạn đừng dựa vào nó vì không lúc nào cũng sửa được
- trình duyệt không tự thêm doctype đâu
- web check lỗi <https://validator.w3.org/#validate_by_input>
- Cách viết code rút gọn: phải có doctype và title, các meta phải nằm trên đầu
  - tại sao làm vậy ? Để Giảm dung lượng -> tối ưu, dự án thực tế

```html
<!DOCTYPE html>
<html lang="en">
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>

  <h1>Hello</h1>
  <p>Xin chao cac ban</p>
</html>
```

## Thẻ Tùy Chỉnh - Custom elements : thẻ tự mình tạo, hình thức mặc định, dùng được CSS

- Quy tắc đặc tên cho thẻ: hai từ trở lên cách nhau bằng gạch ngang <app-toast> </app-toast>
- Kết hợp với Js để tạo, đóng gói tính năng
