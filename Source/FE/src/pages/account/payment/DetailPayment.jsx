import { useEffect, useMemo, useState } from "react";
import { API_GET_LIST_ORDER } from "../../../contants/apis";
import useGetListOrder from "../../../hooks/useGetListOrder";
import { formatBigNumber } from "../../../libs/format-big-number";
import {
  updatePaymentStatus,
} from "../../../services/orderService";
import { useSelector } from "react-redux";
import { updateProductAmount } from "../../../services/productService";
import ReceiptIcon from "@mui/icons-material/Receipt";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CheckIcon from "@mui/icons-material/Check";
import { Button } from "@mui/material";
import { getImageUrl } from "../../../libs/img";
import { cap } from "../../../libs/cap";
const DetailPayment = () => {
  const { detailOrder, handleGetListOrder } = useGetListOrder({
    limit: 10000,
    page: 1,
  });
  const user = useSelector((state) => state.authenSlice);
  console.log(">> user", user)
  const [dataOrder, setDataOrder] = useState([]);
  useEffect(() => {
    if (detailOrder) {
      setDataOrder(detailOrder?.data);
    }
  }, [detailOrder]);
  console.log(">>> detailOrder", detailOrder)
  console.log(">>> dataOrder", dataOrder);
  const userOrders = useMemo(() => {
    return dataOrder
      .filter((order) => order?.userId?._id === user.user._id)
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }, [dataOrder, user?.user?._id]);
  const totalPrice = userOrders[0]?.totalPrice;
  const status = userOrders[0]?.status;
  const handleCancleOrder = async (id, value, productid, amount, quantity) => {
    try {
      await updatePaymentStatus(id, value);
      await updateProductAmount(productid, amount + quantity)
    } catch (error) {
      console.log(error);
    }
    handleGetListOrder();
  };
  console.log(userOrders, ">>> userOrders")
  return (
    <section className="py-16">
      <div className="pt-10 container mx-auto">
        {userOrders.length > 0 && userOrders[0]?.status !== "CANCELLED" && (
          <div className="flex items-center justify-between max-w-4xl mx-auto mb-10">
            <div className="flex items-center flex-1">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-green-500">
                <ReceiptIcon className="text-green-500" style={{ fontSize: 24 }} />
              </div>
              <div
                className={`flex-1 h-1 ${["PROCESSING", "SHIPPING", "COMPLETED"].includes(status) ? "bg-green-500" : "bg-gray-300"}`}
              ></div>
            </div>
            <div className="flex items-center flex-1">
              <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${["PROCESSING", "SHIPPING", "COMPLETED"].includes(status) ? "border-green-500" : "border-gray-400"}`}>
                <AttachMoneyIcon
                  style={{ fontSize: 24, color: ["PROCESSING", "SHIPPING", "COMPLETED"].includes(status) ? "#4CAF50" : "gray" }}
                />
              </div>
              <div
                className={`flex-1 h-1 ${["SHIPPING", "COMPLETED"].includes(status) ? "bg-green-500" : "bg-gray-300"}`}
              ></div>
            </div>
            <div className="flex items-center flex-1">
              <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${["SHIPPING", "COMPLETED"].includes(status) ? "border-green-500" : "border-gray-400"}`}>
                <LocalShippingIcon
                  style={{ fontSize: 24, color: ["SHIPPING", "COMPLETED"].includes(status) ? "#4CAF50" : "gray" }}
                />
              </div>
              <div
                className={`flex-1 h-1 ${status === "COMPLETED" ? "bg-green-500" : "bg-gray-300"}`}
              ></div>
            </div>

            {/* Step 4 */}
            <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${status === "COMPLETED" ? "border-green-500" : "border-gray-400"}`}>
              <CheckIcon style={{ fontSize: 24, color: status === "COMPLETED" ? "#4CAF50" : "gray" }} />
            </div>
          </div>
        )}

        <h2 className="text-2xl font-bold text-center mb-8">
          {userOrders[0]?.status === "PENDING"
            ? "Đã nhận đơn hàng"
            : userOrders[0]?.status === "PROCESSING"
              ? "Đơn hàng của bạn đang được đóng gói"
              : userOrders[0]?.status === "SHIPPING"
                ? "Đơn hàng đang được vận chuyển"
                : userOrders[0]?.status === "COMPLETED"
                  ? "Đơn hàng đã được giao"
                  : ""}
        </h2>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="grid grid-cols-4 bg-gray-100 font-semibold text-gray-700">
            <div className="p-4 col-span-2 text-center">Sản phẩm</div>
            <div className="p-4 text-center">Số lượng</div>
            <div className="p-4 text-center">Thành tiền</div>
          </div>

          {userOrders.length > 0 && userOrders[0]?.status !== "CANCELLED" ? (
            userOrders[0].items.map((ele, index) => (
              <div
                key={index}
                className="grid grid-cols-4 border-t border-gray-200 items-center"
              >
                <div className="p-4 col-span-2 flex items-center gap-3">
                  <img
                    src={getImageUrl(ele.productId.images[0])}
                    alt={ele.productId.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="p-3  rounded-2xl shadow-sm bg-white">
                    <p className="font-semibold text-lg text-gray-800">{ele.productId.name}</p>
                    <p className="text-base text-emerald-600 font-medium mt-1">
                      {formatBigNumber(ele.price, true)}
                    </p>
                    <div className="mt-2 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <span className="font-medium">Color:</span>
                        <span>{cap(ele.color) || "-"}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="font-medium">Size:</span>
                        <span>{cap(ele.size) || "-"}</span>
                      </div>
                      <div>Địa chỉ :{userOrders[0].address}</div>
                    </div>
                  </div>
                </div>
                <div className="p-4 text-center">{ele.amount}</div>
                <div className="p-4 text-center font-semibold">
                  {formatBigNumber(ele.amount * ele.price, true)}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center py-5 text-gray-500">Không có dữ liệu</p>
          )}
        </div>

        {totalPrice && userOrders[0]?.status !== "CANCELLED" && (
          <div className="mt-6 text-right font-semibold text-lg">
            {userOrders[0]?.paymentMethod !== "online"
              ? "Số tiền cần thanh toán: "
              : "Số tiền đã thanh toán: "}
            <span className="text-green-600">
              {formatBigNumber(totalPrice, true)}
            </span>
          </div>
        )}

        {userOrders[0]?.status === "PENDING" && (
          <div className="mt-6 text-center">
            <Button
              variant="outlined"
              color="error"
              onClick={() =>
                handleCancleOrder(
                  userOrders[0]?._id,
                  "CANCELLED",
                  userOrders[0]?.items[0]?.productId?._id,
                  userOrders[0]?.items[0]?.productId?.amount,
                  userOrders[0]?.items[0]?.amount
                )
              }
            >
              Hủy đơn hàng
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
export default DetailPayment;