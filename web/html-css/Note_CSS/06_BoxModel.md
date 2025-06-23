# CSS Box Model

## Chung

- chỉ có content, pading, border mới tính vào chiếm không gian còn margin thì không
- chỉ từ border đổ vào trong mới ăn thuộc tính background color

## Pading

- cú pháp:
  - padding: 50px (giãn bốn hướng 50px)
  - padding: 10px 20px (trên dưới 10px, trái phải 20px)
  - padding: 30px 40px 60px (trên 30px, trái phải 40px, dưới 60px)
  - padding: trên phải dưới trái (cùng chiều kim đồng hồ)
- dùng padding cho một số trường hợp như:
  - căn nội dung không dính lề giúp dễ nhìn hơn
  - làm nút (tránh dùng height width rườm rà)

## Border

- tại sao khi border-radius: 50% thì nội dung nó nhìn thấy vẫn bị lệch ra bên ngoài mà không chui vào trong?
- border viết tắt chỉ chung cho 4 hướng, còn muốn cụ thể từng hướng thì dùng 3 cái dưới

 css
    border: 15px solid red;

    border-width: 20px 30px 40px 50px;
    border-style: solid dashed dotted double;
    border-color: red blue gray green;

    border-top-width: ... (chi tiết hơn nữa)

- transparent: trong suốt
- thử làm hình tam giác với transparent

 css
    display: inline-block;
    border: 100px solid;
    border-color: red transparent transparent transparent;

> còn nhiều thuộc tính chi tiết một phần nào đó, tư duy chúng ta là viết ngắn nhất có thể, thuộc tính chi tiết dùng cho tình huống rất cụ thể nào đó

### Border-radius

border-radius: 10px (tren trai)
border-radius: 10px 20px (tren trai & duoi phai)

cach viet cu the hon: border-bottom-right-radius: 40px;

### Outline: cách dùng như border

- border: cứng và không bị dính vào thẻ khác
- outline: mềm, va chạm nhau
- không thể chỉ cho từng hưỡng, kiểu, màu cụ thể từng cạnh
- outline nằm bên ngoài border
- ouline-offset: .... (khoang cach padding -> outline)
- dung ouline de không đẩy các phần tử khác nếu cần

## Margin

- không tham gia vào tính kích thước phần tử
- cú pháp giống border
- dùng margin-left/right để căn giữa (khuyến thích hơn dùng cụ thể px, auto này chỉ chạy trên display: block/grid/flex, auto chỉ dùng cho chiều ngang)
- cũng có thể dùng cái auto để căn giữa nội dung dể dễ đọc hơn, hai bên dư ra có thể để cái khác

css
width: 700px;
margin: auto;

### cách dùng số âm cho margin

- dùng để chồng chất logo chẳng hạn

## margin collappse: margin đối nhau, thẻ cha con

- khi có 2 thẻ có margin top và bottom -> nó sẽ lấy giá trị lớn hơn
- cách khắc phục:
  - float: left; / posision: absolute; / display: inline-block; / display: flex;
  - width: 100%;
- để chung một chỗ luôn khỏi chia ra hai thẻ / hay padding cho cha, con

## Box-sizing
- quyết định tính kích thước ele như nào
### content-box: default

- box-sizing: content-box; (phần content == kích thước khai báo: width, height)

### border-box: tính cả border và padding

- box box-sizing: border-box; (content tự động tính, border và padding theo cái mình tự khai báo)
css
    width: 200px;
    height: 100px;
    box-sizing: border-box;

### Trường hợp dùng
- vì chúng ta thường chỉ được biết kích thước tổng thể
- nên dùng box-sizing: border-box;
- nếu có sửa padding hay border thì nó tự tính lại content cho mình
- thường người ta đưa luôn vào css tổng thể (*)
