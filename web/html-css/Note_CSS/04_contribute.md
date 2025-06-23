# Một số thuộc tính

## 1. display

### Có 4 thuộc tính

- inline: (mặc định)
  - không hoạc động đối với một số thuộc tính: padding top, padding-bottom, margin top, margin-bottom, width, min width, height, min height
- block: chiếm hết chiều ngang
- inline-block: khắc phụ những thuộc tính của inline
- none: biến mất hẳng

> inline không được phép làm cha block
> Trong HTML nhều khoảng cách/một/nhiều enter == 1 dấu cách => nên đôi khi thấy hai inline bị tách ra hoạc dính lại

### Đặc biệt với thẻ a: là inline nhưng được làm cha block

```html
<a href="#">xem tai day</a>
```

```html
<a href="#">
    <img src="" alt="demo">
    <p>mieu ta hinh anh</p>
</a>
```

## 2. opacity: làm mờ + nhìn xuyên qua + vẫn tương tác được

- 0.0 -> 1
- 0% -> 100%

## 3. visibility

- visible: hiện (mặc định)
- hidden: ẩn (không thể tương tác nhưng vẫn chiếm chỗ)

## Phân biệt

| #                    | `display: none` | `opacity: 0` | `visibility: hidden` |
|----------------------|-----------------|--------------|----------------------|
| Ẩn khỏi giao diện    | ✔               | ✔            | ✔                    |
| Chiếm không gian     | ❌               | ✔            | ✔                    |
| Có thể tương tác     | ❌               | ✔            | ❌                    |
| Ẩn phần tử con       | ✔               | ✔            | ✔                    |
| Tính thừa kế         | ❌               | ❌            | ✔                    |
| Hiển thị phần tử con | ❌               | ✔            | ✔                    |
| Hỗ trợ Animations    | ❌               | ✔            | ✔                    |
| Ẩn khỏi giao diện    | ✔               | ✔            | ✔                    |
| Chiếm không gian     | ❌               | ✔            | ✔                    |
| Có thể tương tác     | ❌               | ❌            | ❌                    |
| Ẩn phần tử con       | ✔               | ✔            | ✔                    |
| Tính thừa kế         | ❌               | ❌            | ✔                    |
| Hiển thị phần tử con | ❌               | ❌            | ✔                    |
| Hỗ trợ Animations    | ❌               | ✔            | ✔                    |

- điều này cho thấy visibility có thể được ghi đè còn hai cái kia thì không
- vì display không hỗ trợ animation nên khi dùng làm hiệu ứng mờ dần thì kêt hợp opacity và visibility
