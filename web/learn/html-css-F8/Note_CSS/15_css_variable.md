## syntax

-   global
    :root {
    --primary-color: #fff;
    }
    -   dùng: var(tênbien, tenbien dự phòng/giá trị dự phòng)
-   local: khai bao trong css element => con cua ele do co the duoc duoc
    -   thuc chat global là html nên tất cả chỗ khác (con) cũng dùng được

## một số trường hợp dùng

-   màu nội dung thường xuyên dùng thì vẫn dùng trong body, màu header có thể dùng var nếu có nhiều header
-   màu chủ đạo (dùng nhiều lần)
-   font
    > chỗ thay đổi dẫn đến cần thay đổi chỗ khác
