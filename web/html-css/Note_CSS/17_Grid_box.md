# Grid box
- dùng song song với flex, bọc bên ngoài grid, đỡ tốn thẻ html hơn
- thêm display: grid

## grid-template-column, grid-template-rows
- quy định kích thước của từng hàng cột (số hàng cột tương ứng với số lượng giá trị) 
- giá trị lặp lại: grid-template-column: repeat(số lần, giá trị)
- đơn vị fr: chia phần (tương tự flex-grow)
- dùng grid cho bảng từ hai hàng trở lên sẽ tiện hơn flex
## grid-auto-column, grid-auto-rows
- grid auto row / collum: khi chưa xác định được số hàng cột
## grid cho từng items
- grid row/collum start/end
- grid row/collum: x / y
- nếu chỉ định lớn hơn thì tự sinh ra row/collum => nhưng không nên làm vậy
- dùng số âm một số tình huống
