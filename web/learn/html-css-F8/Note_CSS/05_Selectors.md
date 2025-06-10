# selector

## simple

. class

- phần tử này dùng chung style với nhiều phần tử khác (hoạc không)
- viết cách ra là 2 class khác nhau
- đặc tên không bắt đầu bằng số, phân biệt hoa thường, dùng gạch ngang cho 2 từ trở lên (3 cái này giống id)

  "#" id

- thành phần dùng một lần duy nhất thì dùng id
- mỗi ele chỉ có 1 id duy nhất, không trùng id với ele khác

  "*" tất cả các thẻ

  p.intro hai điều kiện vừa phải là thẻ p vừa là class = "intro" (dùng cho id cũng được), không đảo lại được

  div, p áp dụng cho tất cả thẻ div, p (dùng để tránh lặp lại code giống nhau) - dấu , ở đây có nghĩa là kết hợp nhiều
  thứ
  lại
  .class1.class2 : ele phải có cả hai class, không care thứ tự (có thể dùng cho id nhưng thực tế id chỉ dùng một lần nên
  cái này kh sài cho id đâu)

## combinator

"dấu cách": bên phải nằm trong bên trái (tất cả con bên trong)
">" con trực tiếp
"+" đằng sau đầu tiên - một cái (không phải con đâu)
"~" tất cả thẻ phía sau

## Pseudo clases (lớp giả)

- <https://www.w3schools.com/cssref/css_ref_pseudo_classes.php>
- ":hover" di chuột vào
- "active" nhấn chuột xuống
- "link" link chua nhan vao, "visited" link da bam vao
- "empty" dieu gi xay ra khi ele trong
- "target" doi tuong cho target

- "p:first-chil" phai la p, p do phai la con dau tien (p nay khong nhat thiet la con cua p) - nguoc lai "last-child

```css
ul li:first-child a {
    color: red;
}
```

- "p:nth-child(n)" con thu n (odd le, even chan, 5n + 0/1/...) - "nth-last-child"
- "p:oly-child" p la con duy nhat cua the khac

- "p:first-of-type" the p dau tien
  ... các only khác tương tự

:not(selector) áp dụng cho thẻ khác trừ selector

## Độ ưu tiên (CSS specificity)

<https://www.w3schools.com/css/css_specificity.asp>

- thuộc tính mặc định là thấp nhất, thấp hơn cả "*"
- có tính cộng dồn
- inline mạnh nhất nhưng vẫn thua !importaint (hạn chế dùng nhất)

## advancer selector
- [property] = ...
- CSS Attribute Selectors https://www.w3schools.com/cssref/css_selectors.php