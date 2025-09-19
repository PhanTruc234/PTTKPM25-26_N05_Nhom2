import { Routes } from "react-router-dom";
import "./App.css";
import { AccountRoutes } from "./routes/AccountRoutes";
import { AdminRoutes } from "./routes/AdminRoutes";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setCart } from "./store/features/cart/cartSlice";
import { getCarts } from "./services/cartSevice";

function App() {
  const { accessToken } = useSelector((state) => state.authenSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    if (accessToken) {
      const fetchDataListCarts = async () => {
        const res = await getCarts();
        if (res.status === 200) {
          dispatch(setCart(res.data.items));
        }
      }
      fetchDataListCarts();
    } else {
      dispatch(setCart([]));
    }
  }, [accessToken]);
  return (
    <>
      <ToastContainer />
      <Routes>
        {AccountRoutes}
        {AdminRoutes}
      </Routes>
    </>
  );
}
export default App;
