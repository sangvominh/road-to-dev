## position
- quyết định ele định vị dựa trên cái nào
  - stactic (mặc định) định vị theo luồng tài liệu (thứ tự dòng code html)
  - relative vẫn flow layout nhưng điều chỉnh được top, bottom, left, right tính từ vị trí ban đầu, vẫn chiếm dụng không gian và không cho ele khác nhảy vào đó
  - absolute: thoát khỏi flow layout, tự định nghĩa lại 4 thuộc tính trên, dựa vào cha có position gần nhất
  - fixed: rời khỏi bố flow layout
    - hoàn toàn vào viewport (giống với absolute khi và chỉ khi không có thẻ cha nào)
    - không bị cuộn theo nội dung (ngược lại absolute)
    - nếu định vị w, h thì right, bottom không có tác dụng 
    - dùng inset đại diện cho 4 hướng (tương tự padding, margin)
    - áp dụng: làm lớp phủ mờ, cố định nav
    - phải cố định 4 hướng vì dễ bị ảnh hưởng bởi những thẻ khác
    sticky: có tác dụng khi scrollbar xuất hiện, dựa vào thanh cuộn gần nhất
    - lúc thường giống như relative, khi cuộn tới điểm định vị thì giống như fixed
### làm notification badge
- bọc thẻ cha chứa chuông và số và đặc relative
- thẻ số sẽ là absolute để chỉnh vị trí
### cách làm menu phân cấp ẩn hiện
- video 3 chương 23 (commited)
### menu mega
- video 5 chuong 23 (commited)
## modal (bật lên và có lớp phủ)
- để căn giữa phần tử con trong một cha, cha: display: flex, con: margin: auto
- thêm cursor: pointer để hiện hình ngón tay khi di chuột đến
## z-index
- một thuộc tính nữa của 4 hướng là định vị chiều sâu
- số càng lớn thì càng nổi lên, bằng nhau thì viết sau ở trên