import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const AdminRouter = () => {
  const { accessToken, user } = useSelector((state) => state.authenSlice);
  const isAdmin = user?.role === "ADMIN";
  return accessToken && isAdmin ? <Outlet /> : <Navigate to={"/"} />;
};
