// import { Route } from "react-router-dom";
// import { LayoutAccount } from "../layouts/LayoutAccount/LayoutAccount";
// import { Home } from "../pages/account/home/Home";
// import { Login } from "../pages/login/Login";
// import { Register } from "../pages/register/Register";
// import { DetailProduct } from "../pages/account/detail/DetailProduct";
// import { ShoppingCart } from "../pages/account/shoppingCart/ShoppingCart";
// import { Product } from "../pages/account/product/Product";
// import { DetailPayment } from "../pages/account/payment/DetailPayment";
// import { InfoPayment } from "../pages/account/payment/InfoPayment";
// import { InfoOrder } from "../pages/account/order/InfoOrder";
// import { Ordered } from "../pages/account/order/Ordered";
// import { Shippng } from "../pages/account/order/Shipping";
// import { Completed } from "../pages/account/order/Completed";
// import { Cancelled } from "../pages/account/order/Cancelled";
// import PaymentReturn from "../pages/account/payment/PaymentReturn";
// import { PaymentFailed } from "../pages/account/payment/PaymentFailed";
// import { Profile } from "../pages/account/home/Profile";
// import { ProfileInfomation } from "../pages/account/home/ProfileInfomation";
// import { Blog } from "../pages/account/Blog/Blog";

// export const AccountRoutes = (
//   <Route path="/" element={<LayoutAccount />}>
//     <Route index element={<Home />} />
//     <Route path="/login" element={<Login />} />
//     <Route path="/register" element={<Register />} />
//     <Route path="/:slug" element={<DetailProduct />} />
//     <Route path="/shopping-cart" element={<ShoppingCart />} />
//     <Route path="/products" element={<Product />} />
//     <Route path="/blog" element={<Blog />} />
//     <Route path="/order" element={<InfoPayment />} />
//     <Route path="/order-detail" element={<DetailPayment />} />
//     <Route path="/payment/return" element={<PaymentReturn />} />
//     <Route path="/payment-failed" element={<PaymentFailed />} />
//     <Route path="profile" element={<Profile />}>
//       <Route path="my-order" element={<InfoOrder />} />
//       <Route path="my-order/processing" element={<Ordered />} />
//       <Route path="my-order/shipping" element={<Shippng />} />
//       <Route path="my-order/completed" element={<Completed />} />
//       <Route path="my-order/cancelled" element={<Cancelled />} />
//       <Route path=":id" element={<ProfileInfomation />} />
//     </Route>
//   </Route>
// );
import { Route } from "react-router-dom";
import { LayoutAccount } from "../layouts/LayoutAccount/LayoutAccount";
import { Home } from "../pages/account/home/Home";
import { Login } from "../pages/login/Login";
import { Register } from "../pages/register/Register";
import { lazy } from "react";
import PaymentSuccess from "../pages/account/payment/PaymentSuccess";
const DetailProduct = lazy(() => import("../pages/account/detail/DetailProduct"));
const ShoppingCart = lazy(() => import("../pages/account/shoppingCart/ShoppingCart"));
const Product = lazy(() => import("../pages/account/product/Product"));
const DetailPayment = lazy(() => import("../pages/account/payment/DetailPayment"));
const InfoPayment = lazy(() => import("../pages/account/payment/InfoPayment"));
const InfoOrder = lazy(() => import("../pages/account/order/InfoOrder"));
const Ordered = lazy(() => import("../pages/account/order/Ordered"));
const Shippng = lazy(() => import("../pages/account/order/Shipping"));
const Completed = lazy(() => import("../pages/account/order/Completed"));
const Cancelled = lazy(() => import("../pages/account/order/Cancelled"));
const PaymentReturn = lazy(() => import("../pages/account/payment/PaymentReturn"));
const PaymentFailed = lazy(() => import("../pages/account/payment/PaymentFailed"));
const Profile = lazy(() => import("../pages/account/home/Profile"));
const ProfileInfomation = lazy(() => import("../pages/account/home/ProfileInfomation"));
const Blog = lazy(() => import("../pages/account/Blog/Blog"));

export const AccountRoutes = (
  <Route path="/" element={<LayoutAccount />}>
    <Route index element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/:slug" element={<DetailProduct />} />
    <Route path="/shopping-cart" element={<ShoppingCart />} />
    <Route path="/products" element={<Product />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/order" element={<InfoPayment />} />
    <Route path="/order-detail" element={<DetailPayment />} />
    <Route path="/payment/return" element={<PaymentReturn />} />
    <Route path="/payment/success" element={<PaymentSuccess />} />
    <Route path="/payment-failed" element={<PaymentFailed />} />
    <Route path="profile" element={<Profile />}>
      <Route path="my-order" element={<InfoOrder />} />
      <Route path="my-order/processing" element={<Ordered />} />
      <Route path="my-order/shipping" element={<Shippng />} />
      <Route path="my-order/completed" element={<Completed />} />
      <Route path="my-order/cancelled" element={<Cancelled />} />
      <Route path=":id" element={<ProfileInfomation />} />
    </Route>
  </Route>
);
