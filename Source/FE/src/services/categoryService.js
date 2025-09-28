import { API_CATEGORY, API_GET_LIST_CATEGORY, API_REMOVE_CATEGORY, API_UPDATE_CATEGORY } from "../contants/apis";
import axiosClient from "./axiosClient";

export const addCate = async (data) => {
    return await axiosClient.post(API_CATEGORY, data);
}
export const fetchCategories = async (dataFilter) => {
    const res = await axiosClient.get(API_GET_LIST_CATEGORY , {
        params : dataFilter
    })
    return res.data;
}
export const removeCategory = async (id) => {
    const url = API_REMOVE_CATEGORY.replace(":id", id);
    return await axiosClient.delete(url);
}
export const getDetailCate = async (id) => {
    const url = API_REMOVE_CATEGORY.replace(":id", id);
    return await axiosClient.get(url);
}
export const updateCategory = async (id, dataEdit) => {
    const url = API_UPDATE_CATEGORY.replace(":id", id);
    return await axiosClient.put(url, dataEdit);
} 