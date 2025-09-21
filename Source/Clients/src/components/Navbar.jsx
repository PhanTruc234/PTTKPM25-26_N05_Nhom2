import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import ico_search from "../assets/ico_search.png";
import ico_heart from "../assets/ico_heart.png";
import ico_bag from "../assets/ico_bag.png";
import ico_user from "../assets/ico_user.png";
import { useDispatch, useSelector } from "react-redux";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import PaymentIcon from "@mui/icons-material/Payment";
import { doLogout } from "../store/features/auth/authenSlice";
import useGetListOrder from "../hooks/useGetListOrder";
import { useEffect, useMemo, useState } from "react";
import ReorderIcon from '@mui/icons-material/Reorder';
import axiosClient from "../services/axiosClient";
import { logoutUser } from "../services/authenService";
export const Navbar = () => {
  const { detailOrder } = useGetListOrder();
  const { accessToken, user } = useSelector((state) => state.authenSlice);
  const [dataOrder, setDataOrder] = useState([]);
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (detailOrder) {
      setDataOrder(detailOrder?.data);
    }
  }, [detailOrder]);
  const userOrders = useMemo(() => {
    return dataOrder
      .filter((order) => order?.userId?._id === user?.user?._id)
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }, [dataOrder, user?.user?._id]);
  const cartItem = useSelector((state) => state.cartSlice.items);
  const newName = user?.name.split("");
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      const res = await logoutUser();
      if (res.status === 201) {
        dispatch(doLogout());
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container flex items-center">
      <h1 className="flex-shrink-0 mr-5">
        <Link to={"/"} className="block max-w-[130px]">
          <img src={logo} alt="" className="max-w-full" />
        </Link>
      </h1>
      <div className="relative max-w-[500px] w-full lg:mr-20 xl:block ml-auto">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent lg:block hidden"
        />
        <div className="absolute top-1/2 left-[10px] -translate-y-1/2 lg:block hidden">
          <span>
            <img src={ico_search} alt="search icon" className="w-5 h-5" />
          </span>
        </div>
      </div>
      <nav className="mr-28">
        <ul className="flex items-center gap-10">
          <li className="relative after:absolute after:h-[1.5px] after:bg-black after:content-[''] after:w-full after:left-0 after:bottom-[-2px] after:transition-all after:scale-x-0 hover:after:-scale-x-100 after:duration-300">
            <Link to={"/"} className="text-[15px] lg:text-[20px]">Home</Link>
          </li>
          <li className="relative after:absolute after:h-[1.5px] after:bg-black after:content-[''] after:w-full after:left-0 after:bottom-[-2px] after:transition-all after:scale-x-0 hover:after:-scale-x-100 after:duration-300">
            <Link to={"/"}>Shop</Link>
          </li>
          <li className="relative after:absolute after:h-[1.5px] after:bg-black after:content-[''] after:w-full after:left-0 after:bottom-[-2px] after:transition-all after:scale-x-0 hover:after:-scale-x-100 after:duration-300">
            <Link to={"/products"}>Product</Link>
          </li>
          <li className="relative after:absolute after:h-[1.5px] after:bg-black after:content-[''] after:w-full after:left-0 after:bottom-[-2px] after:transition-all after:scale-x-0 hover:after:-scale-x-100 after:duration-300">
            <Link to={"/blog"}>Blog</Link>
          </li>
        </ul>
      </nav>
      <div className="block lg:hidden cursor-pointer" onClick={() => setActive(!active)}>
        <ReorderIcon />
      </div>
      <div className={`
    gap-6 items-center shrink-0
    sm:absolute sm:top-[45px] sm:right-[-10px] sm:p-5 sm:rounded-sm sm:bg-gray-100 sm:justify-center
    lg:relative lg:top-0 lg:right-0 lg:p-0 lg:rounded-none lg:bg-transparent lg:ml-auto
    ${active ? "flex sm:flex-col lg:flex-row" : "hidden lg:flex"}
  `}>
        <Link to={"/"}>
          <img className="size-5" src={ico_search} alt="" />
        </Link>
        {accessToken ? (
          <div className="group relative z-50">
            <div className="group z-50 relative before:absolute lg:before:w-[190px] lg:before:h-[20px] before:bg-transparent lg:before:top-[30px] lg:-before:left-[120px] flex items-center justify-center w-9 h-9 bg-green-200 rounded-full cursor-pointer text-gray-800 font-semibold hover:ring-2 hover:ring-green-400 transition sm:before:w-[10px] sm:before:h-[100px] sm:before:top-0 sm:before:left-[-10px]">
              {newName[0].toUpperCase()}
            </div>
            <ul className="hidden absolute lg:top-[45px] lg:-right-20 w-[200px] bg-white rounded-lg shadow-lg p-4 space-y-3 group-hover:block z-50 sm:right-10 sm:top-0">
              <div className="border-b pb-3">
                <p className="text-sm text-gray-500">Xin chào</p>
                <p className="text-lg font-semibold text-gray-800 mt-1">{user?.name}</p>
              </div>
              <Link to={`/profile/${user?._id}`} className="flex items-center gap-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 px-2 py-2 rounded-md transition">
                <PersonIcon fontSize="small" />
                <span className="text-sm">Profile</span>
              </Link>
              {user.role === "ADMIN" && (
                <li className="flex items-center gap-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-2 py-2 rounded-md transition">
                  <Link to={"/admin"}>
                    <AdminPanelSettingsIcon fontSize="small" />
                    <span className="text-sm">My Admin</span>
                  </Link>
                </li>
              )}
              <Link to={"/"} onClick={handleLogout} className="flex items-center gap-2 text-gray-700 hover:text-red-600 hover:bg-red-50 px-2 py-2 rounded-md transition">
                <LogoutIcon fontSize="small" />
                <span className="text-sm">Logout</span>
              </Link>
            </ul>

          </div>
        ) : (
          <Link to={"/login"}>
            <img className="w-6 h-6" src={ico_user} alt="user icon" />
          </Link>
        )}

        <Link to="shopping-cart" className="relative">
          <span
            className={`absolute -top-[8px] -right-[10px] size-[18px] ${cartItem.length > 0 ? "bg-black" : ""
              } text-white rounded-full text-xs grid place-items-center`}
          >
            {cartItem.length > 0 ? cartItem.length : ""}
          </span>
          <img className="size-5" src={ico_bag} alt="" />
        </Link>
        <Link to="order-detail" className="relative">
          <span
            className={`absolute -top-[8px] -right-[10px] size-[18px] ${userOrders[0] ? "bg-black" : ""
              } text-white rounded-full text-xs grid place-items-center`}
          >
            {userOrders[0] ? "1" : ""}
          </span>
          <PaymentIcon />
        </Link>
      </div>
    </div>
  );
};
