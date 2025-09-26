import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom'
import { doLogout } from '../../../store/features/auth/authenSlice';
export const Profile = () => {
  const user = useSelector((state) => state.authenSlice);
  const dispatch = useDispatch()
  console.log(user, "useruseruser");
  const handleLogout = () => {
    dispatch(doLogout());
  };
  return (
    <div className="container mx-auto py-16 max-w-[1200px]">
      <h2 className="mb-8 text-2xl font-semibold text-gray-800 text-center lg:text-left">
        Trang cá nhân
      </h2>
      <div className="flex flex-col lg:flex-row gap-6 lg:items-start">
        <div className="w-full lg:w-[280px] rounded-xl border border-gray-200 bg-white shadow-md p-6 flex-shrink-0">
          <div className="text-center mb-6">
            <img
              src={user?.user?.avatar || "https://tackexinh.com/wp-content/uploads/2021/04/hinh-anh-lang-que-viet-nam-06.jpg"}
              alt="avatar"
              className="mx-auto h-24 w-24 rounded-full object-cover border"
            />
            <p className="mt-3 text-lg font-medium text-gray-700">{user?.user?.name || "User"}</p>
          </div>
          <ul className="space-y-3">
            <li>
              <Link to={`${user?.user?._id}`} className="block rounded-lg px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition">
                Thông tin tài khoản
              </Link>
            </li>
            <li>
              <Link to="my-order" className="block rounded-lg px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition">
                Quản lý đơn hàng
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="w-full text-left block rounded-lg px-4 py-2 text-red-600 hover:bg-red-50 transition"
              >
                Đăng xuất
              </button>
            </li>
          </ul>
        </div>
        <div className="w-full lg:flex-1 rounded-xl border border-gray-200 bg-white shadow-md p-6 overflow-x-auto">
          <div className="w-full overflow-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
