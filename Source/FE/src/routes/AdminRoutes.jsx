import { Route } from "react-router-dom";
import { AdminRouter } from "./AdminRouter";
import LayoutAdmin from "../layouts/LayoutAdmin/LayoutAdmin";
import { ProductManagement } from "../pages/admin/ProductManagement/ProductManagement";
import { AddProduct } from "../pages/admin/ProductManagement/AddProduct";
import { CategoryManagement } from "../pages/admin/CategoryManagement/CategoryManagement";
import { OrderManagement } from "../pages/admin/OrderManagement/OrderManagement";
import { ProcessingOrder } from "../pages/admin/OrderManagement/ProcessingOrder";
import { ShippingOrder } from "../pages/admin/OrderManagement/ShippingOrder";
import { CompletedOrder } from "../pages/admin/OrderManagement/CompletedOrder";
import { CancelledOrder } from "../pages/admin/OrderManagement/CancelledOrder";
import { StatusNormal } from "../pages/admin/OrderManagement/StatusNormal";
import { User } from "../pages/admin/User/User";
import { Dashboard } from "../pages/admin/Dashboard/Dashboard";

export const AdminRoutes = (
  <Route path="" element={<AdminRouter />}>
    <Route path="/admin" element={<LayoutAdmin />}>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="categories" element={<CategoryManagement />} />
      <Route path="product" element={<ProductManagement />} />
      <Route path="user" element={<User />} />
      <Route path="dasboard" element={<Dashboard />} />
      <Route path="product/add" element={<AddProduct />} />
      <Route path="order" element={<StatusNormal />} />
      <Route path="order/pending" element={<OrderManagement />} />
      <Route path="order/processing" element={<ProcessingOrder />} />
      <Route path="order/shipping" element={<ShippingOrder />} />
      <Route path="order/completed" element={<CompletedOrder />} />
      <Route path="order/cancelled" element={<CancelledOrder />} />
    </Route>
  </Route>
);
