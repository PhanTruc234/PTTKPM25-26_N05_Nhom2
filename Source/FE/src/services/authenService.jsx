import { API_DELETE_USER, API_GET_USER, API_LOGIN, API_LOGOT, API_UPDATE_USER } from "../contants/apis";
import axiosClient from "./axiosClient";

export const addUser = async (dataUser) => {
  return await axiosClient.post(API_LOGIN, dataUser);
};
export const logoutUser = async () => {
  return await axiosClient.post(API_LOGOT);
};
export const updateUser = async (id, data) => {
  const url = API_UPDATE_USER.replace(":id", id);
  return await axiosClient.put(url, data);
};
export const getUser = async (id) => {
  const url = API_UPDATE_USER.replace(":id", id);
  return await axiosClient.get(url);
};
export const listUser = async () => {
  return await axiosClient.get(API_GET_USER)
}
export const deleteUser = async (id) => {
  const url = API_DELETE_USER.replace(":id", id);
  return await axiosClient.delete(url);
}