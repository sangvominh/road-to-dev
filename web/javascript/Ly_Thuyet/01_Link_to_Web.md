Có hai cách: dùng thẻ script hoặc dùng thẻ link.
1. liên kết file trong thẻ script
```html
//lưu ý không viết code vào >< vì có viết nó cũng không chay được
<script src="main.js"></script>
```
2. Viết luôn code vào thẻ scipt: chỉ dùng khi code ngắn, không cần tái sử dụng, không cần quản lý.

```html
<script>
    windows.alert("Hello World"); // chương trình sẽ dùng lại cho đến khi được "ok" thì chạy tiếp câu lệnh tiếp theo.
    console.log("Hello World"); // in ra trong console
    document.getElementById('myElement').innerHTML = "Hello World"; // Thay đổi nội dung của phần tử HTML có id là myElement.
    document.write("Hello World"); // hiện trên trình duyệt, nếu câu lệnh này được tải cuối cùng (window.onload) thì khi thực thi sẽ xóa hết nội dung trên web
</script>
```
3. Chạy trong console hoạc trên đường link của trình duyệt

## Lưu Ý:
- Nên đặc thẻ script ở cuối (trước đóng body) trang để tránh việc chậm trang web.
- Và tránh lỗi chưa load xong trang web mà đã chạy code (vd chưa lấy được id heading).