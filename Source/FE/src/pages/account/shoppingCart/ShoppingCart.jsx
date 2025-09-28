import { formatBigNumber } from "../../../libs/format-big-number";
import ico_trash from "../../../assets/ico_trash.png";
// import { useAddToCart } from "../../../hooks/useAddCart";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteCart, getCarts, updateCart } from "../../../services/cartSevice";
import { setCart, setCartNew } from "../../../store/features/cart/cartSlice";
import { toast } from "react-toastify";
import { setOrderNew } from "../../../store/features/order/orderSlice";
// import { useEffect } from "react";
import { getDetilProduct, updateProductAmount } from "../../../services/productService";
import { getImageUrl } from "../../../libs/img";
import { cap } from "../../../libs/cap";
export const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartSlice.items);
  console.log(cartItems, ">>> cartItems")
  const handleDecrementCart = async (productId, quantity) => {
    try {
      const res = await updateCart(productId, quantity);
      if (res.status === 200) {
        dispatch(setCart(res.data.items));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleIncrementCart = async (productId, quantity) => {
    try {
      const res = await updateCart(productId, quantity);
      if (res.status === 200) {
        dispatch(setCart(res.data.items));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleRemoveCartItem = async (id, amount, quantity) => {
    try {
      const res = await deleteCart(id);
      const ress = await getDetilProduct(id);
      if (res.status === 200) {
        await updateProductAmount(id, ress.data.amount + quantity)
        toast.success("Xóa thành công");
        dispatch(setCart(res.data.items));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleSetCartNew = async () => {
    try {
      const res = await getCarts();
      if (res.status === 200) {
        dispatch(setOrderNew([]));
        dispatch(setCartNew(res.data.items));
      }
    } catch (error) { }
  };
  return (
    <>
      {cartItems.length > 0 ? (
        <section className="pt-20">
          <h2 className="text-3xl font-semibold text-center">Shopping Cart</h2>
          <div className="container mt-10 grid grid-cols-6 gap-8">
            <div className="col-span-4">
              <div className="border border-gray rounded-lg">
                <div className="flex">
                  <div className="p-5 border border-gray w-2/4 flex items-center justify-center">
                    Product
                  </div>
                  <div className="p-5 border border-gray w-1/4 flex items-center justify-center">
                    Quantity
                  </div>
                  <div className="p-5 border border-gray w-1/4 flex items-center justify-center">
                    Total
                  </div>
                  <div className="p-5 border border-gray w-1/4 flex items-center justify-center"></div>
                </div>

                {cartItems.map((product, index) => (
                  <div className="flex" key={index}>
                    <div className="p-5 border border-gray w-2/4">
                      <div className="flex items-center gap-3">
                        <div className="w-32 overflow-hidden">
                          <img className="image" src={getImageUrl(product.productId.images[0])} alt="" />
                        </div>
                        <div>
                          <p className="text-xs uppercase">{product.productId.name}</p>
                          <span className="text-xs">{formatBigNumber(product.price, true)}</span>
                          <div className="mt-2 flex gap-4 text-xs">
                            <div className="flex items-center gap-1">
                              <span className="font-medium">Color:</span>
                              <span className="text-gray-700">{cap(product.color)}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <span className="font-medium">Size:</span>
                              <span className="text-gray-700">{product.size}</span>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>

                    <div className="p-5 border border-gray w-1/4 flex justify-center">
                      <div className="flex items-center w-max relative">
                        <button
                          onClick={() =>
                            handleDecrementCart(product.productId._id, product.quantity - 1)
                          }
                          disabled={product.quantity === 1}
                          className="absolute left-4 text-2xl"
                        >
                          -
                        </button>
                        <input
                          type="text"
                          className="w-[120px] h-[40px] border px-10 border-black rounded-full text-center"
                          value={product.quantity}
                          readOnly
                        />
                        <button
                          onClick={() =>
                            handleIncrementCart(product.productId._id, product.quantity + 1)
                          }
                          className="absolute right-4 text-2xl"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="p-5 border border-gray w-1/4 flex items-center justify-center">
                      {formatBigNumber(product.price * product.quantity, true)}
                    </div>

                    <div className="p-5 border border-gray w-1/4 flex items-center justify-center">
                      <button
                        onClick={() =>
                          handleRemoveCartItem(
                            product.productId._id,
                            product.productId.amount,
                            product.quantity
                          )
                        }
                      >
                        <img className="block size-5" src={ico_trash} alt="Remove" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-9">
                <p className="text-md">Special instructions for seller</p>
                <textarea
                  placeholder="How can we help you?"
                  className="mt-3 border border-gray p-5 w-full text-md rounded-md"
                ></textarea>
              </div>
            </div>

            <div className="col-span-2">
              <div className="p-7 bg-[#f7f4ef] rounded-lg">
                <h3 className="uppercase font-medium text-sm">FREE SHIPPING ON ORDERS $100.00</h3>
                <p className="text-sm mt-2">Congratulations, you've got free shipping!</p>
                <div className="bg-[#14c100] w-full h-1 mt-5"></div>
              </div>

              <div className="p-6 mt-4 bg-[#f6f6f6] rounded-lg">
                <span>Coupon</span>
                <p className="mt-2 mb-6 text-md text-lightGray">
                  * Discount will be calculated and applied at checkout
                </p>
                <input
                  type="text"
                  className="h-10 px-6 text-sm border border-gray rounded-md w-full"
                  placeholder="Coupon code"
                />
                <p className="mt-6 font-semibold">
                  Total:{" "}
                  {formatBigNumber(
                    cartItems.reduce(
                      (total, item) => total + item.price * item.quantity,
                      0
                    ), true
                  )}
                </p>

                <Link
                  to="/order"
                  className="flex items-center justify-center h-[50px] mt-6 bg-black w-full text-white font-semibold text-sm rounded-full hover:bg-white hover:text-black hover:border-black border transition-all"
                  onClick={handleSetCartNew}
                >
                  Check out
                </Link>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <img
          src="https://assets.streamlinehq.com/image/private/w_800,h_800,ar_1/f_auto/v1/icons/shopping/empty-cart-2-e405751d7clznn3jg3mjx.png/empty-cart-2-tkssb1nltonvyup6zet80a.png?_a=DATAdtAAZAA0"
          className="max-w-[300px] w-full object-cover m-auto py-4"
          alt="Empty cart"
        />
      )}
    </>
  );
};
