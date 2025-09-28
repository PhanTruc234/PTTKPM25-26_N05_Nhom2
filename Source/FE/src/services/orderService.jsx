import {
  API_CHECK_ORDER,
  API_DELETE_ORDER,
  API_GET_LIST_ORDER,
  API_GET_ORDER_BY_ID,
  API_ORDER_BY_USER,
  API_STATUS_PAYMENT,
} from "../contants/apis";
import axiosClient from "./axiosClient";

export const checkOrder = async (data) => {
  return await axiosClient.post(API_CHECK_ORDER, data);
};
export const fetchOrder = async (params) => {
  const cleanParams = { ...params };
  if (!cleanParams.status) {
    delete cleanParams.status;
  }
  if (!cleanParams.userId) {
    delete cleanParams.userId;
  }
  const res = await axiosClient.get(API_GET_LIST_ORDER, { params: cleanParams });
  console.log(res, ">>> resOrrder")
  return res.data;
};
export const updatePaymentStatus = async (id, value, paymentStatus) => {
  const url = API_STATUS_PAYMENT.replace(":id", id);
  return await axiosClient.put(url, {
    status: value,
    paymentStatus
  });
};
export const deleteOrder = async (id) => {
  const url = API_DELETE_ORDER.replace(":id", id);
  return await axiosClient.delete(url);
};
export const getOrder = async (id) => {
  const url = API_GET_ORDER_BY_ID.replace(":id", id);
  return await axiosClient.get(url);
};
export const getOrderByUser = async (id) => {
  const url = API_ORDER_BY_USER.replace(":userId", id);
  return await axiosClient.get(url);
}
