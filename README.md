# 🛒 Project: Xây dựng ứng dụng bán hàng quần áo thời trang trên website

## 📚 Mục lục

- [👤 Thông Tin Cá Nhân](#-thông-tin-cá-nhân)
- [📈 Mục Đích Dự Án](#-mục-đích-dự-án)
- [🛠️ Công Nghệ Sử Dụng](#️-công-nghệ-sử-dụng)
- [⚙️ Hướng Dẫn Cài Đặt & Chạy Dự Án](#️-hướng-dẫn-cài-đặt--chạy-dự-án)
- [📊 Sơ Đồ Trình Tự](#-sơ-đồ-trình-tự)
- [📸 Một Số Hình Ảnh Giao Diện](#-một-số-hình-ảnh-giao-diện)
- [🔗 Liên Kết](#-liên-kết)

---

## 👤 Thông Tin Cá Nhân

| STT | Họ và tên          | MSSV      |
|-----|--------------------|-----------|
| 1   | Trần Văn Bun       | 23010370  |
| 2   | Nguyễn Võ Quốc Đạt | 23010306  |
| 3   | Phan Thị Gia Hân   | 23010840  |
| 4   | Phan Minh Trúc     | 23010818  |
| 5   | Đỗ Thanh Tùng      | 23010811  |

---

## 📈 Mục Đích Dự Án

Dự án **Website bán hàng quần áo thời trang online** được xây dựng nhằm tạo ra một **nền tảng thương mại điện tử hiện đại**, hỗ trợ người tiêu dùng mua sắm trực tuyến dễ dàng, đồng thời giúp doanh nghiệp mở rộng thị trường và quản lý hiệu quả hoạt động kinh doanh.

### 🎯 Các mục tiêu chính:

#### 1️⃣ Nền tảng mua sắm tiện lợi & an toàn  
- Giúp người dùng **tìm kiếm, lựa chọn và đặt mua sản phẩm** mọi lúc, mọi nơi.  
- Cung cấp **thông tin sản phẩm chi tiết**: giá, hình ảnh, mô tả, đánh giá.  
- Đảm bảo **bảo mật dữ liệu cá nhân và thanh toán**.  

#### 2️⃣ Hỗ trợ doanh nghiệp trong quản lý & vận hành  
- Quản lý **sản phẩm, đơn hàng, khách hàng, doanh thu**.  
- Giảm chi phí, tăng hiệu quả vận hành.  
- Cung cấp **báo cáo thống kê** để phân tích kinh doanh.  

#### 3️⃣ Trải nghiệm người dùng tối ưu  
- Giao diện thân thiện, trực quan, dễ thao tác.  
- Hỗ trợ **giỏ hàng, thanh toán, đánh giá sản phẩm, theo dõi đơn hàng**.  

#### 4️⃣ Phát triển lâu dài  
- Có khả năng **mở rộng, nâng cấp** với các tính năng mới như khuyến mãi, gợi ý sản phẩm, chatbot hỗ trợ.  

---

## 🛠️ Công Nghệ Sử Dụng

| Công Nghệ     | Vai Trò Chính                            |
|----------------|-------------------------------------------|
| **NestJS**     | Framework Backend – xử lý API và logic nghiệp vụ |
| **ReactJS**    | Xây dựng giao diện người dùng (Frontend) |
| **MongoDB**    | Cơ sở dữ liệu NoSQL lưu trữ thông tin sản phẩm, người dùng, đơn hàng |
| **TailwindCSS**| Thiết kế giao diện đẹp, responsive, dễ tùy chỉnh |
| **JWT**        | Xác thực & bảo mật người dùng khi đăng nhập |

---

## ⚙️ Hướng Dẫn Cài Đặt & Chạy Dự Án

### 🔧 1. Yêu Cầu Hệ Thống
- Node.js >= 18  
- npm hoặc yarn  
- MongoDB Community Server  
- Git (tùy chọn, nếu clone code từ GitHub)

### 📦 2. Cài Đặt Dự Án
```bash
# Clone repository
git clone https://github.com/PhanTruc234/PTTKPM25-26_N05_Nhom2

# Di chuyển vào thư mục dự án
cd Source

# Cài đặt Frontend
cd FE
npm install
npm run dev

# Cài đặt Backend
cd BE
npm install
npm run start:dev

````
---

##📊 Sơ Đồ Trình Tự
### 1.Sơ đồ quản lý sản phẩm
<img width="624" height="812" alt="qlsp" src="https://github.com/user-attachments/assets/e5232f6c-a696-425e-b007-b3046d681ff2" />
### 2.Sơ đồ quản lý danh mục
<img width="624" height="812" alt="qldm" src="https://github.com/user-attachments/assets/061b029b-cf91-4afc-a682-3dcb1b73aca1" />
### 3.Sơ đồ ưuarn lý thanh toán
<img width="624" height="812" alt="qltt" src="https://github.com/user-attachments/assets/a6b5a9af-503d-4950-904f-8e5ce917f711" />
### 4.Sơ đồ quản lý đơn hàng
<img width="624" height="812" alt="qldh" src="https://github.com/user-attachments/assets/faeac2cb-8919-49c6-8dd5-32ae1c6d6bce" />
### 5.Sơ đồ giao hàng
<img width="624" height="812" alt="gh" src="https://github.com/user-attachments/assets/584f44ab-8047-4985-8ace-48d8664deb83" />
### 6.Sơ đồ quản lý đăng nhập & khách hàng
<img width="624" height="812" alt="qldn kh" src="https://github.com/user-attachments/assets/528b57b1-226a-4b70-98fc-280010451418" />



---

##📸 Một Số Hình Ảnh Giao Diện


---


##🔗 Liên Kết


