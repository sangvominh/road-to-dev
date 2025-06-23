# background

- mặc định là none
- mặc định là repeat: dùng để tiết kiệm dung lượng khi chỉ cần tải ảnh nhỏ nhưng repeat lại ảnh lớn

- background-imgage: url(), url()
- muốn người khác không lấy được ảnh trực tiếp (phải impect để lấy) / gắn liền ảnh với code thì chuyển ảnh sang base 64

## linear gradient

background-image: linear-gradient(180deg, blue 80%, yellow, red, green);
tham khao chỗ lấy gardient trực quan: <https://cssgradient.io/gradient-backgrounds/>

> Tại sao cần bgc ở đây? đây gọi là fallback, nếu gardient không hoạt đông ở một số trình duyệt cũ thì nó sẽ dùng bgc này thây vào chứ kh có thì nó mất luận
background-color: #4158D0;
background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);

## background-size

- cover: chiếm hết không gian
- contain: chỉ chiếm đủ không gian
- 1 value và 2 value

## background-position

- x tính từ trái vào, y tính từ trên xuống
- keyword: top, bottom, left, right, center
  - nếu viết một chữ thì là center (50%) (right (center))
- x% y%
- xpx ypx (thay px bằng cái khác cũng đc - cái này nó ăn cứng khác %)
- thực tế chúng ta dùng cái này để tối ưu vị trí ảnh, để nó có cơ hội hiển thị trông ổn nhất

> sprite icon
gôm hết icon lại một file hình, dùng bgp để focus đúng vào icon mình cần

## background-attachment

- mặc định: scroll
  - fixed
  - local
    - dùng overflow: auto; để chống tràn nội dung ra

## background-clip

- quyết định nền đổ từ đâu, phần nào không được đổ thì bị mất (cắt xén) đi luôn
- mặc định: border trở vào
  - padding-box
  - content-box
  - text
- làm sao cho ảnh vào khung (4 hướng cách ảnh 15px)

> cách tạo chữ màu: dùng text
dùng: @supports (background-clip: text) or (-webkit-background-clip: text) để phòng trường hợp trình duyệt nào chưa hỗ trợ

## background-origin

- đã dùng orgin thì kh dùng attachment

## tránh hiện tượng flash do ảnh chưa kịp tải

> background-color: màu tương ứng với ảnh

## backdrop-filter

- muốn áp dụng nhiều cái thì ghi một hàng thôi, đừng ghi nhiều hàng nó sẽ ghi đè
