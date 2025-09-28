import { useEffect, useMemo, useState } from "react";
import useGetListOrder from "../../../hooks/useGetListOrder";
import { useDispatch, useSelector } from "react-redux";
import { formatBigNumber } from "../../../libs/format-big-number";
import { Link, useSearchParams } from "react-router-dom";
import { Button, Pagination } from "@mui/material";
import { getOrder, getOrderByUser, updatePaymentStatus } from "../../../services/orderService";
import { toast } from "react-toastify";
import { setOrderNew } from "../../../store/features/order/orderSlice";
import useGetFilterOrder, { UPDATE_FILTER_ACTION_ORDER } from "../../../hooks/useGetFilterOrder";
import { getImageUrl } from "../../../libs/img";
import axiosClient from "../../../services/axiosClient";
import { getDetilProduct } from "../../../services/productService";

export const InfoOrder = ({ value }) => {
  const user = useSelector((state) => state.authenSlice);
  const dispatch1 = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { state, dispatch } = useGetFilterOrder();
  const { detailOrder, handleGetListOrder } = useGetListOrder({
    ...state,
    limit: 3,
    userId: user.user._id,
    status: value || "",
  });
  console.log(detailOrder, "detailOrderdetailOrder");
  const handleChangePage = (value) => {
    dispatch({
      type: UPDATE_FILTER_ACTION_ORDER.CHANGE_PAGE,
      payload: { page: value },
    });
  };
  const handleSetOrderNew = async (id) => {
    try {
      const res = await getOrder(id);
      if (res.status === 200) {
        dispatch1(setOrderNew(res.data.items));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleCancleOrder = async (id, value) => {
    try {
      const res = await updatePaymentStatus(id, value);
      if (res.status === 200) {
        toast.success("Hủy thành công");
      }
    } catch (error) {
      console.log(error);
    }
    handleGetListOrder();
  };
  useEffect(() => {
    let tmpDataFilter = {
      page: 1,
      limit: 3,
      userId: user.user._id,
      status: value || "",
    };
    if (searchParams.size > 0) {
      const dataFromSearchParams = Object.fromEntries(searchParams.entries());
      tmpDataFilter = {
        page: parseInt(dataFromSearchParams["page"]) || 1,
        limit: parseInt(dataFromSearchParams["limit"]) || 3,
        userId: dataFromSearchParams["userId"],
        status: dataFromSearchParams["status"] || "",
      };
      if (dataFromSearchParams["id"]) {
        tmpDataFilter.userId = dataFromSearchParams["id"];
      }
      dispatch({
        type: UPDATE_FILTER_ACTION_ORDER.INITIAL,
        payload: { ...tmpDataFilter },
      });
    } else {
      dispatch({
        type: UPDATE_FILTER_ACTION_ORDER.INITIAL,
        payload: { ...tmpDataFilter },
      });
    }
  }, []);
  useEffect(() => {
    if (!state?.status) {
      delete state.status
    }
    if (state) {
      const stringJson = JSON.stringify({
        ...state,
        limit: 3,
      });
      const dataFilterJson = JSON.parse(stringJson);
      setSearchParams(new URLSearchParams(dataFilterJson));
    }
  }, [state])
  const [data, setData] = useState([])
  useEffect(() => {
    if (user?.user?.email.split("@")[1] === "example.com") {
      const handleOrderByUser = async () => {
        const res = await getOrderByUser(user?.user?._id);
        console.log(res, "UserBYOrdersjfsnfjdfb");
        setData(res.data)
      }
      handleOrderByUser()
    }
  }, [user])
  const userOrders = data.length > 0 ? data : useMemo(() => {
    return detailOrder?.data?.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }, [detailOrder?.data?.data]);
  console.log(userOrders, ">>> userOrders")
  return (
    <div className="">
      <div className="container flex gap-7 mb-10">
        <Link to="/profile/my-order" >Tất cả</Link>
        <Link to="/profile/my-order/processing">Đã đặt</Link>
        <Link to="/profile/my-order/shipping">Đang vận chuyển</Link>
        <Link to="/profile/my-order/completed">Đã giao</Link>
        <Link to="/profile/my-order/cancelled">Đã hủy</Link>
      </div>
      <h2 className="lg:text-3xl font-semibold text-center mb-5 sm:text-xl">
        Tất cả đơn hàng của bạn
      </h2>
      <div className="overflow-x-auto hidden lg:block">
        <table className="min-w-full bg-white rounded-xl shadow-md overflow-hidden">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase">Product</th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700 uppercase">Quantity</th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700 uppercase">Total</th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700 uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {userOrders?.map(info =>
              info.items.map(ele => (
                ele.productId &&
                <tr key={ele._id} className="hover:bg-gray-50 transition duration-150">
                  <td className="px-6 py-3 flex items-center gap-4">
                    <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden shadow-sm">
                      <img className="w-full h-full object-cover" src={getImageUrl(ele.productId?.images[0])} />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm font-medium text-gray-800">{ele?.productId?.name}</p>
                      <span className="text-xs text-gray-500">{formatBigNumber(ele.price, true)}</span>
                      <div>
                        <div className="text-xs text-gray-500">Color: {ele.color}</div>
                        <div className="text-xs text-gray-500">Size: {ele.size}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-3 text-center text-sm text-gray-700">{ele.amount}</td>

                  <td className="px-6 py-3 text-center text-sm text-gray-700">{formatBigNumber(ele.amount * ele.price, true)}</td>
                  <td className="px-6 py-3 text-center">
                    <div className="mb-1">
                      <span className={`text-xs px-2 py-1 rounded-full font-semibold
                  ${info.status === "PENDING" ? "bg-yellow-100 text-yellow-800" :
                          info.status === "PROCESSING" ? "bg-blue-100 text-blue-800" :
                            info.status === "SHIPPING" ? "bg-indigo-100 text-indigo-800" :
                              info.status === "COMPLETED" ? "bg-green-100 text-green-800" :
                                info.status === "CANCELLED" ? "bg-red-100 text-red-800" : ""
                        }`}>
                        {info.status === "PENDING" ? "Đã đặt" :
                          info.status === "PROCESSING" ? "Chờ vận chuyển" :
                            info.status === "SHIPPING" ? "Đang vận chuyển" :
                              info.status === "COMPLETED" ? "Đã giao" :
                                info.status === "CANCELLED" ? "Đã hủy" : ""}
                      </span>
                    </div>
                    {(info.status === "PENDING" || info.status === "COMPLETED") && (
                      <Button
                        variant="contained"
                        size="small"
                        color={info.status === "PENDING" ? "error" : "primary"}
                        onClick={info.status === "PENDING"
                          ? () => handleCancleOrder(ele._id, "CANCELLED")
                          : () => handleSetOrderNew(ele._id)}
                      >
                        {info.status === "COMPLETED" ? "Mua lại" : "Hủy đơn"}
                      </Button>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col gap-4 lg:hidden px-2">
        {userOrders?.map(info =>
          info.items.map(ele => (
            <div key={ele._id} className="bg-white rounded-xl shadow-md p-4 flex flex-col gap-3 border border-gray-100">
              <div className="flex items-start gap-4">
                <img src={getImageUrl(ele.productId?.images[0])} alt={ele?.productId?.name} className="w-24 h-24 object-cover rounded-lg" />
                <div className="flex flex-col flex-1 gap-1">
                  <p className="text-sm font-bold text-gray-800">{ele?.productId?.name}</p>
                  <span className="text-xs text-gray-500">{ele?.productId?.description}</span>
                  <div className="mt-1">
                    <span className="text-sm font-semibold text-red-600">Giá: {formatBigNumber(ele.price, true)}</span>
                  </div>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full font-semibold
            ${info.status === "PENDING" ? "bg-yellow-100 text-yellow-800" :
                    info.status === "PROCESSING" ? "bg-blue-100 text-blue-800" :
                      info.status === "SHIPPING" ? "bg-indigo-100 text-indigo-800" :
                        info.status === "COMPLETED" ? "bg-green-100 text-green-800" :
                          info.status === "CANCELLED" ? "bg-red-100 text-red-800" : ""
                  }`}
                >
                  {info.status === "PENDING" ? "Đã đặt" :
                    info.status === "PROCESSING" ? "Chờ vận chuyển" :
                      info.status === "SHIPPING" ? "Đang vận chuyển" :
                        info.status === "COMPLETED" ? "Đã giao" :
                          info.status === "CANCELLED" ? "Đã hủy" : ""}
                </span>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-700">
                <span>Số lượng: {ele.amount}</span>
                <span>Tổng: {formatBigNumber(ele.amount * ele.price, true)}</span>
              </div>
              {(info.status === "PENDING" || info.status === "COMPLETED") && (
                <Button
                  variant="contained"
                  color={info.status === "PENDING" ? "error" : "primary"}
                  fullWidth
                  onClick={info.status === "PENDING"
                    ? () => handleCancleOrder(ele._id, "CANCELLED")
                    : () => handleSetOrderNew(ele._id)
                  }
                >
                  {info.status === "COMPLETED" ? "Mua lại" : "Hủy đơn"}
                </Button>
              )}
            </div>
          ))
        )}
      </div>
      <Pagination
        className="flex items-center justify-center mt-3"
        page={state.page}
        onChange={(event, value) => handleChangePage(value)}
        count={Math.ceil(detailOrder?.data?.total / 3)}
        shape="rounded"
      />
    </div>
  );
};
