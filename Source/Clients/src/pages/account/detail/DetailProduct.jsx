import { Link, useSearchParams } from "react-router-dom";
import useGetDetailProduct from "../../../hooks/useGetDetailProduct";
import { useEffect, useState } from "react";
import { formatBigNumber } from "../../../libs/format-big-number";
import ico_star_active from "../../../assets/ico_star_active.png";
import ico_star_gray from "../../../assets/ico_star_gray.png";
import ico_eye from "../../../assets/ico_eye.png";
import ico_checked from "../../../assets/ico_checked.png";
import ico_heart from "../../../assets/ico_heart.png";
import ico_reload from "../../../assets/ico_reload.png";
import ico_question from "../../../assets/ico_question.png";
import ico_shipping from "../../../assets/ico_shipping.png";
import ico_share from "../../../assets/ico_share.png";
import ico_shipping2 from "../../../assets/ico_shipping2.png";
import img_payment from "../../../assets/img_payment.avif";
import ico_check from "../../../assets/ico_check.png";
import { Backdrop, CircularProgress } from "@mui/material";
import { BoxProduct } from "../../../components/BoxProduct";
import { useAddToCart } from "../../../hooks/useAddCart";
import useGetProductByCategory from "../../../hooks/useGetProductByCategory";
// import { updateCart } from "../../../services/cartSevice";
import { useDispatch } from "react-redux";
// import { setCart } from "../../../store/features/cart/cartSlice";
import { updateProductAmount } from "../../../services/productService";
import { getImageUrl } from "../../../libs/img";
import { cap } from "../../../libs/cap";
import { blue } from "@mui/material/colors";
export const DetailProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [attribute, setAttribute] = useState({});
  const productId = searchParams.get("id");
  const { detailProduct } = useGetDetailProduct(productId);
  const { handleAddToCart } = useAddToCart();
  const { productsByCategory } = useGetProductByCategory(
    detailProduct?.categoryId._id
  );
  console.log(attribute, "attributeattributeattribute");
  console.log(detailProduct, "detailProductdetailProduct");
  const [selectedImg, setSelectedImg] = useState("");
  const handleChangeImg = (url) => {
    setSelectedImg(url);
  };
  const handleUpdateAmount = async () => {
    try {
      const res = await updateProductAmount(
        detailProduct._id,
        detailProduct.amount - quantity
      );
    } catch (error) {}
  };
  const handleAddToCartWithUpdate = async () => {
    try {
      await handleAddToCart(
        productId,
        quantity,
        detailProduct.name,
        attribute.Color,
        attribute.Size
      );
      await handleUpdateAmount();
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (detailProduct) {
      setSelectedImg(detailProduct.images[0] || "");
    }
  }, [detailProduct]);
  return detailProduct ? (
    <div className="container">
      <ul className="flex gap-2 items-center py-4">
        <li>
          <Link className="text-sm" to={"/"}>
            Trang chủ /{" "}
          </Link>
        </li>
        <li>
          <Link className="text-sm" to={""}>
            {detailProduct.categoryId.name} /{" "}
          </Link>
        </li>
        <li>
          <Link className="text-sm">{detailProduct.name}</Link>
        </li>
      </ul>
      <div className="lg:grid grid-cols-5 gap-7 mt-4">
        <div className="col-span-3 flex gap-3">
          <ul className="flex flex-col gap-4">
            {detailProduct.images.map((url) => (
              <li
                key={url}
                className={`${
                  (selectedImg ? selectedImg : detailProduct.images[0]) === url
                    ? "border-black border"
                    : ""
                } w-[82px] cursor-pointer p-2 rounded-md hover:border-black transition-all`}
                onClick={() => handleChangeImg(url)}
              >
                <img className="image" src={getImageUrl(url)} />
              </li>
            ))}
          </ul>

          <div className="overflow-hidden">
            <div className="rounded-xl overflow-hidden">
              <img
                className="image"
                src={getImageUrl(
                  selectedImg ? selectedImg : detailProduct.images[0]
                )}
              />
            </div>
          </div>
        </div>
        <div className="col-span-2 mt-6">
          <h2 className="text-xl lg:text-3xl font-semibold">
            {detailProduct.name}
          </h2>
          <ul className="flex items-center gap-1 mt-4">
            <li>
              <img className="size-[16px]" src={ico_star_active} alt="" />
            </li>
            <li>
              <img className="size-[16px]" src={ico_star_active} alt="" />
            </li>
            <li>
              <img className="size-[16px]" src={ico_star_active} alt="" />
            </li>
            <li>
              <img className="size-[16px]" src={ico_star_active} alt="" />
            </li>
            <li>
              <img className="size-[16px]" src={ico_star_gray} alt="" />
            </li>
          </ul>

          <p className="mt-3 text-xl font-semibold">
            {formatBigNumber(detailProduct.price, true)}
          </p>
          <div className="mt-2 pt-2 border-t border-gray">
            <p className="flex items-center gap-2 mt-4">
              <span className="font-medium text-sm">Danh mục:</span>
              <span className="text-red-600 font-medium text-sm">
                {detailProduct.categoryId.name}
              </span>
            </p>
            <p className="flex items-center gap-2 mt-2">
              <img className="w-5 block animate-flicker" src={ico_eye} alt="" />
              <span className="font-medium text-sm">35 Đang xem</span>
            </p>
            <p className="flex items-center gap-2 mt-6">
              <img className="w-5 block" src={ico_checked} alt="" />{" "}
              <span className="text-green font-medium text-sm">
                {detailProduct.amount > 0 ? "Còn hàng" : "Hết hàng"}
              </span>
            </p>
            <div>
              {Object.entries(detailProduct?.attributes).map(([key, val]) => (
                <div key={key}>
                  <span className="font-medium">{cap(key)}:</span>
                  <div className="flex items-center gap-3">
                    {val.map((ele) => (
                      <div
                        className={`border border-black w-[50px] h-[50px] rounded-sm cursor-pointer flex items-center justify-center ${
                          attribute[key] === ele ? "bg-blue-500" : ""
                        }`}
                        key={ele}
                        onClick={() =>
                          setAttribute((prev) => ({
                            ...prev,
                            [cap(key)]: ele,
                          }))
                        }
                      >
                        {cap(ele)}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex items-center w-max relative">
                <button
                  type="button"
                  className="text-lg block text-[0px] absolute left-4"
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  disabled={quantity === 1}
                >
                  <span className="text-2xl leading-[24px]">-</span>
                </button>
                <input
                  type="text"
                  className="w-[120px] h-[50px] border px-10 border-gray rounded-full text-center"
                  value={quantity}
                />
                <button
                  type="button"
                  className="text-lg block text-[0px] absolute right-4"
                  onClick={() =>
                    setQuantity((prev) =>
                      Math.min(detailProduct.amount, prev + 1)
                    )
                  }
                >
                  <span className="text-2xl leading-[24px]">+</span>
                </button>
              </div>

              <button
                onClick={handleAddToCartWithUpdate}
                className="h-[50px] bg-black text-white font-semibold text-sm px-4 flex-1 rounded-full hover:bg hover:bg-white border hover:border-black hover:text-black transition-all"
              >
                Thêm vào giỏ hàng
              </button>
              <button
                type="button"
                className="p-4 bg-white border border-[#e6e6e6] rounded-full"
              >
                <img className="w-4" src={ico_heart} alt="" />
              </button>
            </div>

            <ul className="flex items-center gap-4 mt-6">
              <li>
                <button
                  type="button"
                  className="flex items-center gap-4 text-sm font-medium"
                >
                  <img className="w-4" src={ico_reload} alt="" />
                  So sánh
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="flex items-center gap-4 text-sm font-medium"
                >
                  <img className="w-4" src={ico_question} alt="" />
                  Hỏi đáp
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="flex items-center gap-4 text-sm font-medium"
                >
                  <img className="w-4" src={ico_shipping} alt="" />
                  Thông tin vận chuyển
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="flex items-center gap-4 text-sm font-medium"
                >
                  <img className="w-4" src={ico_share} alt="" />
                  Chia sẻ
                </button>
              </li>
            </ul>

            <div className="flex items-center mt-6 mb-6 pt-6 pb-6 border-t border-b border-b-gray border-t-gray">
              <div>
                <img className="block w-9" src={ico_shipping2} alt="" />
              </div>
              <p className="flex-1 ml-4 pl-4 border-l border-l-[#d9d9d9] text-sm">
                Order in the next 22 hours 45 minutes to get it between <br />
                <span className="font-semibold underline">
                  Tuesday, Oct 22{" "}
                </span>{" "}
                <span className="mx-2">and</span>
                <span className="font-semibold underline">
                  {" "}
                  Saturday, Oct 26
                </span>
              </p>
            </div>

            <div className="p-[15px] rounded-xl border border-[#dedede] flex items-start gap-3">
              <div>
                <img src={ico_check} className="w-6 block" alt="" />
              </div>
              <div className="text-sm">
                <p className="text-lightGray">
                  Nhận hàng tại{" "}
                  <span className="font-semibold text-black"> Akaze store</span>
                </p>
                <p className="text-xs text-lightGray mt-1">
                  Sẵn sàng trong 24h
                </p>
                <button type="button" className="underline text-xs mt-4">
                  Xem thông tin cửa hàng
                </button>
              </div>
            </div>

            <div className="text-center mt-6 p-6 bg-[#f6f6f6] rounded-lg">
              <p className="text-sm tracking-widest">Thanh toán đảm bảo</p>
              <img className="block mt-3" src={img_payment} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-9 lg:mt-24">
        <ul className="flex items-center lg:justify-center gap-6">
          <li>
            <button
              type="button"
              className="text-lg font-semibold py-2 px-4 bg-black text-white rounded-full"
            >
              Mô tả
            </button>
          </li>
          <li>
            <button
              type="button"
              className="lg:block hidden text-lg font-semibold py-2 px-4 text-[#8a8a8a] hover:text-black transition-all"
            >
              Đánh giá
            </button>
          </li>
          <li>
            <button
              type="button"
              className="lg:block hidden text-lg font-semibold py-2 px-4 text-[#8a8a8a] hover:text-black transition-all"
            >
              Vận chuyển
            </button>
          </li>
          <li>
            <button
              type="button"
              className="lg:block hidden text-lg font-semibold py-2 px-4 text-[#8a8a8a] hover:text-black transition-all"
            >
              Hoàn trả hàng
            </button>
          </li>
        </ul>

        <div className="mt-5 lg:mt-9">
          <p className="text-[#8a8a8a] leading-7">
            {detailProduct.description}
          </p>
        </div>
      </div>

      <div className="mt-24 mb-24">
        <h2 className="text-center text-lg lg:text-3xl font-semibold">
          You may also like
        </h2>
        <ul className="mt-8 lg:grid grid-cols-4 gap-7">
          {productsByCategory &&
            productsByCategory?.data.map((item) => (
              <BoxProduct key={item._id} item={item} />
            ))}
        </ul>
      </div>
    </div>
  ) : (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
    >
      <div className="j-text-center">
        <CircularProgress color="inherit" />
      </div>
    </Backdrop>
  );
};
