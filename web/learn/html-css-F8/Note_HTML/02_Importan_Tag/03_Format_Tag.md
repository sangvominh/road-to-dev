# Hướng dẫn sử dụng thẻ HTML: `strong`, `b`, `em`, `i`

## 1. `strong` và `b` (bold)

### Giống nhau:
- Cả `strong` và `b` đều hiển thị văn bản dưới dạng đậm (bold).

### Khác nhau:
- **`b`** chỉ dùng để in đậm nhằm thu hút chú ý thông thường.
- **`strong`** dùng để chỉ sự nghiêm trọng, quan trọng, khẩn cấp.

## 2. `em` và `i` (italic)

### Giống nhau:
- Cả `em` và `i` đều hiển thị văn bản dưới dạng nghiêng (italic).

### Khác nhau:
- **`i`** được sử dụng để in nghiêng thông thường, ví dụ như tên tác giả, tác phẩm, từ chuyên ngành.
- **`em`** chỉ nên dùng để nhấn mạnh một phần nội dung trong đoạn văn, tương ứng với trọng âm trong tiếng Anh và để tăng khả năng truy cập web (web accessibility).

### Lưu ý:
- Không in nghiêng luôn dấu cuối câu (dấu chấm, ngoặc kép). Ví dụ dùng đúng:

    ```html
    <p>Tôi có hai khóa học <i>HTML CSS</i>. Bạn Văn A cho rằng "<i>đây là khóa học xịn</i>"</p>
    ```

- Không nên lạm dụng thẻ `em`; nếu chỉ cần in nghiêng mà không cần nhấn mạnh, bạn có thể sử dụng thẻ `i` hoặc CSS.

## 3. Thắc mắc thường gặp

### Thẻ `b` và `i` không còn được dùng nữa?
- Thẻ `b` và `i` không bị loại bỏ mà chỉ được thay đổi cách sử dụng thôi!

### Phân vân không biết dùng thẻ nào?
- Lúc đầu chưa quen thì dần sẽ quen thôi, nếu vẫn phân vân thì dùng `strong` và `em`.

### Thẻ `i` dùng cho tên tác phẩm, thuật ngữ?
- Tuy có nhiều thẻ cho mục đích này (như `mark`, `cite`, `dfn`) nhưng ít dùng. Dùng `i` vẫn được cho đơn giản.

## 4. Quy tắc chọn thẻ

1. Đúng ngữ nghĩa (HTML Semantic), mục đích dùng của thẻ.
2. Độ phù hợp về style mặc định của thẻ so với thiết kế.

### Ví dụ sự kết hợp Heading và `strong`

```html
<h1>Cách học <strong>HTML CSS</strong> cho người mới</h1>
```