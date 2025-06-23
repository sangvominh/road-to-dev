# Web Accessibility: Sử Dụng Thẻ `<p>`

## Tại Sao Cần Thẻ `<p>` Khi Có Thể Viết Thẳng Nội Dung?

- **Đảm bảo tính ngữ nghĩa**: Thể hiện một đoạn văn (cách nhau bởi dòng khoảng cách).
- **Có thể tùy chỉnh CSS**: Dễ dàng định dạng đoạn văn.
- **Đảm bảo tính tiếp cận cho người khiếm thị**: Chuyển qua đoạn khác chỉ cần tab, nếu viết chỉ có 1 thẻ `<p>` thì dẫn đến bỏ lỡ nội dung.

## Tính Chất Của Thẻ `<p>`

- **Luôn bắt đầu dòng mới**.
- **Các trình duyệt luôn thêm một khoảng trắng giữa các thẻ `<p>`**: Liên quan đến margin (lề).

## Quy Tắc Sử Dụng Thẻ `<p>`

- Có thể dùng thẻ `<p>` cho đoạn văn dù ngắn hay dài miễn là cần.
- Sau này sẽ có cách dùng trình soạn thảo tự tạo thẻ `<p>`.

## Sai Lầm Thường Gặp

- **Không thẻ `<p>` lồng thẻ `<p>`**: Đoạn văn này trong đoạn văn khác.
- **Không dùng thẻ `<p>`**: Không thể chỉnh CSS được, không tối ưu cho khả năng truy cập.
- **Không chịu dùng `<br>` để tạo khoảng cách cho hai đoạn văn**: Làm cho trình đọc không tối ưu.
- **Quá nhiều nội dung trong một thẻ `<p>`**.

## Thẻ `<br />`: Line Break Element

- **Dùng ngắt dòng trên cùng một đoạn văn**: Nếu không có thì trong đoạn văn dù có enter cũng không có ý nghĩa.
- **Nên xét đến ngữ nghĩa mà chọn khoảng cách `<br>` hay đoạn văn**.

### Cách Đúng:
```html
<p>
  Mọc giữa dòng sông xanh <br />
  Một bông hoa tím biếc <br />
  Ơi con chim chiền chiện <br />
</p>
```

### Cách sai:
```html
<p>
  Mọc giữa dòng sông xanh 
  Một bông hoa tím biếc 
  Ơi con chim chiền chiện 
</p>
```