import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../services/cartSevice";
import { setCart } from "../store/features/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useAddToCart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.authenSlice);
  
  const handleAddToCart = async (
    productId,
    quantity,
    name
  ) => {
    if (!user) {
      navigate("/login");
      return;
    }
    try {
      const res = await addCart(productId, quantity);
      console.log(res, "ressssssssssCart");
      if (res.status === 201) {
        dispatch(setCart(res.data.items));
        toast.success(`Thêm sản phẩm ${name} thành công`, {
          position: "top-center",
          autoClose: 500,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return { handleAddToCart };
};
