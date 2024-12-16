# Hướng Dẫn Tạo File HTML

## 1. Định dạng File HTML

- **Tên file:** `index.html`
  - **Mô tả:** Đây là tên file chính để máy chủ web có thể đọc và hiển thị trang web của bạn.

## 2. Doctype

- **Khai báo Doctype:**
  - **Mục đích:** Khai báo kiểu file HTML để các trình duyệt, dù là phiên bản mới hay cũ, đều có thể hiểu và hiển thị nội dung đúng cách.
  - **Cú pháp:** `<!DOCTYPE html>`

## 3. Thẻ `<html>`

- **Thẻ `<html>`:**
  - **Mục đích:** Định nghĩa tài liệu HTML.
  - **Cú pháp:**

    ```html
    <html lang="en">
    </html>
    ```

- **Thuộc tính `lang`:**
  - **Mục đích:** Khai báo mã ngôn ngữ của tài liệu giúp phân tích nội dung web, hỗ trợ dịch ngôn ngữ và cải thiện khả năng tiếp cận (như cho người khiếm thị).
  - **Ví dụ:** `lang="en"` cho tiếng Anh, `lang="vi"` cho tiếng Việt.

## 4. Thẻ `<head>` và `<body>`

- **Thẻ `<head>`:**
  - **Mục đích:** Chứa các thông tin meta, tiêu đề của trang, liên kết đến các tệp CSS, và các thông tin khác không hiển thị trực tiếp trên trang web.
  - **Ví dụ:**

    ```html
    <head>
      <meta charset="UTF-8">
      <title>Tiêu đề Trang</title>
    </head>
    ```

- **Thẻ `<body>`:**
  - **Mục đích:** Chứa nội dung chính của trang web, bao gồm văn bản, hình ảnh, và các phần tử khác mà người dùng sẽ thấy.
  - **Ví dụ:**

    ```html
    <body>
      <h1>Chào Mừng Đến Với Trang Web</h1>
      <p>Đây là nội dung chính của trang web.</p>
    </body>
    ```

## 5. Tóm tắt

- Đảm bảo rằng mỗi tài liệu HTML đều có Doctype và thẻ `<html>`, `<head>`, và `<body>`.
- Sử dụng thuộc tính `lang` trong thẻ `<html>` để nâng cao khả năng tiếp cận và hỗ trợ dịch ngôn ngữ.
