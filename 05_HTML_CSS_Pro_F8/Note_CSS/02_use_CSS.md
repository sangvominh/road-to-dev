# CSS (Cascading Style Sheets)

- web thực hành nhanh chóng đơn giản: <https://stackblitz.com/>
- web xem các công nghệ web có còn hỗ trợ trên trình duyệt (tra cuu nhieu thu khac): <https://caniuse.com/>
- tra cuu css: <https://cssreference.io/>

## Các kiểu liên kết với CSS

### external

- nên dùng cách external vì sẽ lưu cache để lần sau vào đỡ tải (làm mới theo chu kì)
- phân biệt http 1.1 và 2: 1.1 mở đóng kết nối nhiều lần, 2 ngược lại

### internal

- dùng khi css chỉ dùng cho phần đó và trang đó

### inline

- độ ưu tiên cao hơn external

## CSS prefix: tiền tố để chắc chắn hỗ trợ trên web

- <https://autoprefixer.github.io/>
Android: -webkit-
Chrome: -webkit-
Firefox: -moz-
Internet Explorer: -ms-
iOS: -webkit-
Opera: -o-
Safari: -webkit-

```css
h1 {
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;   
}
```
