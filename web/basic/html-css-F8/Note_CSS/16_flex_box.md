# flexbox (flexible)
- https://codepen.io/enxaneta/full/adLPwv/
- thẻ cha flex container chứa bên trong các con trực tiếp flex item, giúp căn chỉnh các flex item này linh hoạc hơn, bằng cách thêm vào cha: display: flex
- float có nhiều vấn đề, posision gây phức tạp

## flex container
- justify-content: flex-start (mặc định), flex-end, center, space-between, space-around
- align-items: flex-start, flex-end, center, baseline, stretch (mặc định)
- flex-wrap: nowrap (mặc định), wrap, wrap-reverse
- align-content (chỉ hoạc động khi có từ 2 hàng trở lên):  stretch (mặc định), flex-start, flex-end, center, space-between, space-around, space-evenly.
- flex-direction: row (mặc định), row-reverse, column, column-reverse
- flex-flow: flex-direction flex-wrap

## flex-item
- align-self: giống align-items, dùng cho một item cụ thể 
- flex-grow: 0 là bằng nội dung nó chứa, điền 1... thì chia đều, điền cụ thể thì nó chiếm theo tỉ lệ
- flex-shrink: kiểm soát sự co lại, số càng lớn càng co lại, 0 là không co lại
- flex-basis đặc kích thước flex item theo chiều main size
- flex(viết tắ cho ba cái trên): grow shrink basis
- order(thay đổi vị trí của item): ứng dụng: sắp xếp thứ tự trên các thiết bị khác nhau

>tip:
justify-content: center;
align-items: center; 
thay bằng: margin: auto