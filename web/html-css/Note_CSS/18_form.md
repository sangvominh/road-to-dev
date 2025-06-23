## label & input
- for của label nhập id của input để user dễ focus vào ô input
- thêm autocomple để gợi ý/không 
- phải đặc name cho input thì dữ liệu mới được gửi đi
- thêm enctype="multipart/form-data" để gửi file đi được

- checkbox thì label đặc sau input option, for là id của input option đó
- radio thì thêm name cho các option để máy nó hiểu là cùng một loại thì mới giới hạn lượng được chọn

- input:submit giống với button nhưng button ghi đc nhiều cái hơn 
- input:button thì không submit được

- input:img có gủi đi dữ liệu trên trang (không phải gửi ảnh đi)

- bắt buộc nhập vào: required

- pattent="" thêm mẫu vào để check thông tin emal, tel... tel tìm theo quốc gia

## textarea: mở rộng ô nhập so với ô input (chỉ một hàng nếu hết chỗ thì đẩy nội dung)
- thêm css là resize: none (không cho phép kéo mở rộng ô)
- thêm atribute là rows="" (số hàng hiển thị ban đầu)
## select: thêm các option để chọn
- ít lựa chọn thì nên dùng radio để tiện
- để value của option đầu tiên là rỗng và required thì gửi đi mới cảnh báo