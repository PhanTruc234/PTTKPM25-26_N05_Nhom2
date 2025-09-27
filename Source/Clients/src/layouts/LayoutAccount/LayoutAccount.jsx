import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/Navbar";

export const LayoutAccount = () => {
  return (
    <div className="wrap">
      <header className="py-5 lg:py-8 sticky top-0 z-10 bg-white shadow-lg">
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="bg-gray-100 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-24">
            <div>
              <h3 className="font-bold text-lg mb-4">Về chúng tôi</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Our Shops
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Liên hệ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Artists
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Local Giving
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Press
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:col-span-2 md:flex md:flex-col md:justify-center">
              <h3 className="font-semibold text-xl mb-4 lg:text-center">
                Sign Up For Our Newsletter To Receive Notifications And Other
                Promotions
              </h3>
              <div className="flex mt-4">
                <input
                  type="email"
                  placeholder="Email address..."
                  className="flex-grow px-4 py-4 rounded-l-full border border-r-0 border-gray-300 focus:outline-none focus:border-black"
                />
                <button className="bg-black text-white px-6 py-2 rounded-r-full hover:bg-gray-800 transition duration-300">
                  Đăng ký
                </button>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Dịch vụ khách hàng</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Store Locator
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Trả hàng & Đổi hàng
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Thông tin vận chuyển
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Wholesale
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-sm text-gray-600 mb-4 md:mb-0 text-center">
              Copyright © 2024. All Right Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
