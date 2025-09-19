import {
  API_DETAIL_PRODUCT,
  API_GET_LIST_PRODUCT,
  API_PRODUCT,
  API_PRODUCT_BY_CATEGORY,
  API_REMOVE_PRODUCT,
  API_UPDATE_PRODUCT,
} from "../contants/apis";
import axiosClient from "./axiosClient";

export const addProduct = async (dataProduct) => {
  return await axiosClient.post(API_PRODUCT, dataProduct);
};
export const fetchDataProduct = async (dataFilter) => {
  const res = await axiosClient.get(API_GET_LIST_PRODUCT, {
    params: dataFilter,
  });
  return res.data;
};
// export const removeProduct = async (id: any) => {
//   const url = API_REMOVE_PRODUCT.replace(":id", id);
//   return await axiosClient.delete(url);
// };
export const removeProduct = async (id) => {
  return await axiosClient.delete(API_REMOVE_PRODUCT, {
    pathParams: { id: id },
  });
};
export const getDetilProduct = async (id) => {
  const url = API_DETAIL_PRODUCT.replace(":id", id);
  return await axiosClient.get(url);
};
export const updateProduct = async (id, newData) => {
  const url = API_UPDATE_PRODUCT.replace(":id", id);
  return await axiosClient.patch(url, newData);
};
export const fetchProductByCategory = async (id) => {
  const url = API_PRODUCT_BY_CATEGORY.replace(":categoryId", id);
  return await axiosClient.get(url);
};
export const updateProductAmount = async (id, newData) => {
  const url = API_UPDATE_PRODUCT.replace(":id", id);
  return await axiosClient.put(url,{
    amount : newData
  });
};
