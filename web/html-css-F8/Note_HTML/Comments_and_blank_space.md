# pre tag (preformatted định dạng sẵn)

- Dùng để giữ nguyên khoảng cách, ngắt dòng, tab, ký tự định dạng ... mà trình duyệt bỏ qua
- Mặc định: hiển thị font độ rộng cố định (có thể đổi bằng CSS)
- Dùng khi nào: kết hợp với thẻ code để hiển thị code trên web

```html
<pre>
   hello
       cac
   \n nn  
               nhe
</pre>
```

## HTML entities

- Bắt đầu & kết thúc ;
- Để hiển thị 2 loại ký tự:
  - ký tự trùng với ký tự trong html (&lt;<i>&gt;) (bắt buộc phải dùng)
  - dùng để tránh nhầm lẫn khi trong nội dung của một thẻ có kí tự trùng nằm ngay kí tự gốc

    ```html
    <p>bạn nên cho dấu cuối cùng này vào entities &lt;</p>
    ```

  - ký tự khó nhập hoạc không có trên bàn phím (Nên copy và dùng trực tiếp luôn kí tự đó)
- Tra cứu:
  - <https://www.w3.org/wiki/Common_HTML_entities_used_for_typography>
  - <https://www.w3schools.com/charsets/ref_html_entities_a.asp>

### Non-breaking entities

- Thông thường kích cỡ màn hình nhỏ sẽ làm cho nội dung sau dấu cách thông thường bị "breaking" (nhỏ xuống dưới). Nên nếu cần từ hơn hai từ đi liền với nhau thì dùng "&nbsp;" để đảm bảo hình thức ý nghĩa như mong muốn. Còn trường hợp thông thường thì đừng dùng (gây rườm ra khó hiểu)

```html
<p>Một Đoạn thằng dài 10&nbsp;Km</p>
```

## code block

- <https://codebeautify.org/html-escape-unescape>
- dùng pre + code với khối code, dùng code với code đơn lẻ

### Dùng thư viện PrimJS để làm màu cho code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-okaidia.min.css">
</head>
<body>
    <!-- Bước 3: Thêm class="language-html" cho thẻ <code> -->
    <pre><code class="language-html">
&lt;img
    src=&quot;https://htmlcss.fullstack.edu.vn/assets/f8_icon.png&quot;
    width=&quot;100&quot;
    height=&quot;100&quot;
    alt=&quot;F8&quot;
/&gt;
    </code></pre>

    <!-- Bước 2: Nhúng code JavaScript của PrismJS -->
    <script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/components/prism-core.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/plugins/autoloader/prism-autoloader.min.js"></script>
</body>
</html>

</html>
```
