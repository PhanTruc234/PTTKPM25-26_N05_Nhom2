import {
  Button,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { formatBigNumber } from "../../../libs/format-big-number";
import dayjs from "dayjs";
import useGetListOrder from "../../../hooks/useGetListOrder";
import { updatePaymentStatus } from "../../../services/orderService";
import { toast } from "react-toastify";
import { Link, useSearchParams } from "react-router-dom";
import useGetFilterOrder, { UPDATE_FILTER_ACTION_ORDER } from "../../../hooks/useGetFilterOrder";
import { useEffect } from "react";
import { getImageUrl } from "../../../libs/img";

export const PendingOrder = ({ value }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const nextStatusMap = {
    PENDING: ["PROCESSING", "CANCELLED"],
    PROCESSING: ["SHIPPING", "CANCELLED"],
    SHIPPING: ["COMPLETED", "CANCELLED"],
    COMPLETED: [],
    CANCELLED: [],
  };
  const { state, dispatch } = useGetFilterOrder();
  const { detailOrder, handleGetListOrder } = useGetListOrder({
    ...state,
    limit: 6,
    userId: "",
    status: value || ""
  });
  const handleChangePage = (value) => {
    dispatch({
      type: UPDATE_FILTER_ACTION_ORDER.CHANGE_PAGE,
      payload: { page: value },
    });
  };
  console.log(detailOrder, "detailOrderdetailOrderdetailOrder");
  const handlePaymentStatus = async (id, statusValue, paymentStatus) => {
    try {
      const res = await updatePaymentStatus(id, statusValue, paymentStatus);
      console.log(res, "statusPayment");
      toast.success(`Sản phẩm đã sang trạng thái ${statusValue} thành công`);
    } catch (error) {
      console.log(error);
    }
    handleGetListOrder();
  };
  const status = value
    ? detailOrder?.data?.filter((ele) => ele.status === value)
    : detailOrder?.data;
  console.log(status, "statusstatus");
  useEffect(() => {
    let tmpDataFilter = {
      page: 1,
      limit: 3,
      userId: "",
      status: value || "",
    };
    if (searchParams.size > 0) {
      const dataFromSearchParams = Object.fromEntries(searchParams.entries());
      tmpDataFilter = {
        page: parseInt(dataFromSearchParams["page"]) || 1,
        limit: parseInt(dataFromSearchParams["limit"]) || 3,
        userId: dataFromSearchParams["userId"] || "",
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
    if (!state?.userId) {
      delete state.userId
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
  return (
    <div className="p-5 bg-gray-50 min-h-screen">
      {/* Filter Tabs */}
      <div className="flex gap-4 mb-5 flex-wrap">
        {["ALL", "PENDING", "PROCESSING", "SHIPPING", "COMPLETED", "CANCELLED"].map((statusTab) => (
          <Link
            key={statusTab}
            to={`/admin/order/${statusTab.toLowerCase() !== "all" ? statusTab.toLowerCase() : ""}`}
            className="px-4 py-2 rounded-md font-medium hover:bg-blue-100 transition 
                     bg-white shadow text-blue-700"
          >
            {statusTab}
          </Link>
        ))}
      </div>

      {/* Orders Table */}
      <TableContainer className="bg-white shadow rounded-lg">
        <Table>
          <TableHead className="bg-blue-50">
            <TableRow>
              {[
                "Khách hàng",
                "Tên danh mục",
                "Hình ảnh",
                "Số lượng",
                "Địa chỉ",
                "Số điện thoại",
                "Giá",
                "Thời gian mua",
                "Hành động"
              ].map((title) => (
                <TableCell
                  key={title}
                  className="whitespace-nowrap p-3 text-base font-semibold text-blue-800"
                >
                  {title}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {status?.map((order) =>
              order.items
                .filter((orderItem) => orderItem.productId)
                .map((orderItem) => (
                  <TableRow
                    key={orderItem._id}
                    className="hover:bg-blue-50 transition"
                  >
                    {/* Khách hàng */}
                    <TableCell>{order?.userId?.name || "Khách hàng ẩn danh"}</TableCell>

                    {/* Tên sản phẩm */}
                    <TableCell>{orderItem.productId.name}</TableCell>

                    {/* Ảnh */}
                    <TableCell>
                      {orderItem.productId.images?.length ? (
                        <img
                          src={getImageUrl(orderItem.productId.images[0])}
                          width={80}
                          className="rounded-md border"
                          alt="Ảnh sản phẩm"
                        />
                      ) : (
                        <span className="text-gray-400 italic">Không có ảnh</span>
                      )}
                    </TableCell>

                    {/* Số lượng */}
                    <TableCell>{orderItem.amount}</TableCell>

                    {/* Địa chỉ */}
                    <TableCell>{order?.address}</TableCell>

                    {/* SĐT */}
                    <TableCell>{order?.phone}</TableCell>

                    {/* Giá */}
                    <TableCell className="text-green-600 font-medium">
                      {formatBigNumber(orderItem.amount * orderItem.price, true)}
                    </TableCell>

                    {/* Thời gian mua */}
                    <TableCell>{dayjs(order?.createdAt).format("YYYY-MM-DD HH:mm")}</TableCell>

                    {/* Hành động */}
                    <TableCell className="flex gap-2 flex-wrap">
                      {nextStatusMap[order?.status]?.map((nextStatus) => (
                        <Button
                          key={nextStatus}
                          variant="contained"
                          size="small"
                          className={`capitalize ${nextStatus === "completed"
                            ? "bg-green-500 hover:bg-green-600 text-white"
                            : nextStatus === "cancelled"
                              ? "bg-red-500 hover:bg-red-600 text-white"
                              : "bg-blue-500 hover:bg-blue-600 text-white"
                            } transition`}
                          onClick={() => handlePaymentStatus(order._id, nextStatus, nextStatus === "COMPLETED" ? "paid" : "unpaid")}
                        >
                          {nextStatus}
                        </Button>
                      ))}
                    </TableCell>
                  </TableRow>
                ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <Pagination
        className="flex justify-end mt-4"
        page={state.page || 1}
        onChange={(event, value) => handleChangePage(value)}
        count={Math.ceil(detailOrder?.data?.total / 6)}
        shape="rounded"
        color="primary"
      />
    </div>
  );
};
