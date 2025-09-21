import {
  API_ADD_CART,
  API_CLEAR_CART,
  API_GET_CARTS,
  API_REMOVE_CART_ITEM,
  API_UPDATE_CART,
} from "../contants/apis";
import axiosClient from "./axiosClient";

export const addCart = async (productId, quantity = 1, color, size) => {
  return await axiosClient.post(API_ADD_CART, {
    productId,
    quantity,
    color,
    size
  });
};
export const updateCart = async (productId, quantity) => {
  return await axiosClient.patch(API_UPDATE_CART, {
    productId,
    quantity,
  });
};
// export const deleteCart = async (id: any) => {
//   const url = API_REMOVE_CART_ITEM.replace(":productId", id);
//   return await axiosClient.delete(url);
// };
export const deleteCart = async (id) => {
  return await axiosClient.delete(API_REMOVE_CART_ITEM, {
    pathParams: { productId: id },
  });
};
export const getCarts = async () => {
  return await axiosClient.get(API_GET_CARTS);
};
export const clearCart = async () => {
  return await axiosClient.delete(API_CLEAR_CART);
};
