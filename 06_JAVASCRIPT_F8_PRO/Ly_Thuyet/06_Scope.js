// bien global: truy cập được ở cả file khác


// dùng let hoạc const vì nó chỉ có phạm vi khối code -> dễ quản lý, 
// không dùng var vì lỗi thời và nó sẽ có phạm vi toàn cục dù khai báo ở đâu -> khó quản lý


// khối code có thể là if, for.... ngoài ra còn có {}
{
    let var1 = 'hello';
    console.log(var1);
}
// console.log(var1); // error


// pham vi module (module scope):
// thêm type = 'module' vào script để tạo file này là module
// thêm import "đường dẫn đến file module" để lấy các hiển thị... Không lấy được biến
// cách lấy biến/hàm: file module: export let myVar = '123'; trong file khác: import {myVar, myFunction} from "./url"
// nó dùng biến của ngta được nhưng ngta không dùng nó được trừ khi export ra (thêm export vào trước tên biến)


// scope chain: để dùng thì sẽ tìm từ trong ra ngoài, dưới lên trên, nhưng không càn quét vào khối code của người ta