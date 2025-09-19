import { Button, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setOrder } from "../../../store/features/order/orderSlice";
import { setCart } from "../../../store/features/cart/cartSlice";
import { clearCart } from "../../../services/cartSevice";
import useGetListOrder from "../../../hooks/useGetListOrder";
import { checkOrder } from "../../../services/orderService";
import { formatBigNumber } from "../../../libs/format-big-number";
import axios from "axios";
// import { useLocation, useNavigate } from "react-router-dom";
import { getUser, updateUser } from "../../../services/authenService";
export const InfoPayment = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const { detailOrder, handleGetListOrder } = useGetListOrder();
  const cartItem = useSelector((state) => state.cartSlice.itemsNew);
  const user = useSelector((state) => state.authenSlice);
  const [ form , setForm] = useState({
    name : user?.user?.name,
    email : user?.user?.email,
    phone : "",
    city : "",
    ward :"",
    address: "",
  });
  // const location = useLocation();
  const userOrders =
    detailOrder?.data?.filter(
      (order) => order?.userId?._id === user.user._id
    ) || [];
    // const filAddress = userOrders[0]?.address?.split(",") || [];
  const [country, setCountry] = useState([]);
  const [city, setCity] = useState("");
  // const [cityName, setCityName] = useState("")
  const [homeTown, setHomeTown] = useState([]);
  const [nameHome, setNameHome] = useState("")
  // const [homeName, setHomeName] = useState("")
  const dispatch = useDispatch();
  // const [address, setAddress] = useState(filAddress?.[0] || "");
  // const [phone, setPhone] = useState(userOrders[0]?.phone || "");
  const orderItem = useSelector((state) => state.orderSlice.itemsNew);
  const infoproduct = orderItem.length > 0 ? orderItem : cartItem;
  const handleChange  = (e) => {
        const {name , value} = e.target;
        setForm((prev) => ({
            ...prev,
            [name] : value,
        }))
    }
    const handleEditUser = async () => {
      try {
        const res = await updateUser(user.user._id, form)
      } catch (error) {
          console.log(error);
      }
    }
  const handleCheckout = async () => {
    if (!form.address || !form.name) {
      toast.error("Vui lòng nhập thông tin");
      return;
    }
    const dataOrder = {
      userId: user?.user._id,
      items: infoproduct.map((item) => ({
        productId: item.productId._id,
        amount: orderItem.length > 0 ? item.amount : item.quantity,
        price: item.productId.price,
      })),
      address : `${form.address},${form.ward},${form.city}`,
      phone: form.phone,
      paymentMethod,
    };
    try {
      const res = await checkOrder(dataOrder);
      console.log(res, "resmmmmmmmmm");
      if (res.status === 201) {
        dispatch(setOrder(res.data));
        dispatch(setCart([]));
        await clearCart();
        handleGetListOrder();
        if (paymentMethod === "online") {
        const vnPayRes = await axios.post(
          "http://localhost:3100/payment/createqr",
          { orderId: res.data._id }
        );
        // 3. Chuyển hướng sang VNPay
        window.location.href = vnPayRes.data.paymentUrl;
      }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const totalPrice = infoproduct.reduce(
    (total, ele) =>
      total +
      ele.productId.price * (orderItem.length > 0 ? ele.amount : ele.quantity),
    0
  );
  const handleCountry = async () => {
    try {
      if(city){
        const res = await axios.get(`/address-kit/2025-07-01/provinces/${+city < 10 ? "0" + +city: +city}/communes`);
        console.log(res, "reshometown");
        setHomeTown(res.data.communes.flat());
      } else{
        const res = await axios.get("/address-kit/2025-07-01/provinces");
        setCountry(res.data.provinces);
        console.log(res, "rescountry");
      }
    } catch (error) {
      console.log(error);
    }
  }
  const handleNameCity = (e) => {
    const value = e.target.value;
    setCity(value);
    const selected = country.find((c) => c.code === value);
    if (selected) {
      setForm((prev) => ({
        ...prev,
        city : selected.name,
      }))
    }
  };
  const handleNameTown = (e) => {
    const value = e.target.value;
    setNameHome(value);
    const selected = homeTown.find((c) => c.code === value);
    if (selected) {
       setForm((prev) => ({
        ...prev,
        ward : selected.name,
      }))
    }
  };
  const handleGetUser = async () => {
          try {
              const res = await getUser(user.user._id)
              setForm((prev) => ({
                ...prev,
                name : res.data.name,
                email : res.data.email,
                phone : res.data.phone,
                city : res.data.city,
                ward : res.data.ward,
                address: res.data.address,
              }))
              const selectedCity = country.find((c) => c.name === res.data.city);
              if (selectedCity) {
                setCity(selectedCity.code);
              }
          } catch (error) {
              console.log(error);
          }
    }
  useEffect(() => {
    handleGetListOrder();
  }, [city]);
  useEffect(() => {
      handleCountry();
    }, []);
    useEffect(() => {
      if (city) {
        handleCountry();
      }
    }, [city]);
    useEffect(() => {
      handleGetUser();
    }, [country]);
    useEffect(() => {
    if (homeTown.length > 0 && form.ward) {
      const selectedWard = homeTown.find((c) => c.name === form.ward);
      if (selectedWard) {
        setNameHome(selectedWard.code);
      }
    }
  }, [homeTown, form.ward]);
  return (
  <div className="w-[1100px] py-20 grid grid-cols-2 gap-10 mx-auto">
    <div className="w-[500px]">
      <h3 className="mb-5 uppercase font-bold text-2xl text-gray-800">
        Thông tin thanh toán
      </h3>
      <div className="space-y-5">
        <div>
          <label className="font-semibold">Họ và tên *</label>
          <input
            type="text"
            name="name"
            className="block w-full mt-2 border border-gray-400 rounded-md p-3 focus:ring-2 focus:ring-green-400 outline-none"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="font-semibold">Email *</label>
          <input
            type="text"
            name="email"
            className="block w-full mt-2 border border-gray-400 rounded-md p-3 focus:ring-2 focus:ring-green-400 outline-none"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="font-semibold">Số điện thoại *</label>
          <input
            type="text"
            name="phone"
            className="block w-full mt-2 border border-gray-400 rounded-md p-3 focus:ring-2 focus:ring-green-400 outline-none"
            value={form.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="font-semibold">Thành phố *</label>
          <Select
            value={city}
            onChange={handleNameCity}
            displayEmpty
            fullWidth
            className="mt-2"
          >
            <MenuItem value="">
              <em>Chọn thành phố</em>
            </MenuItem>
            {country.map((cou) => (
              <MenuItem key={cou.code} value={cou.code}>
                {cou.name}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div>
          <label className="font-semibold">Phường xã</label>
          <Select
            value={nameHome}
            onChange={handleNameTown}
            displayEmpty
            fullWidth
            className="mt-2"
          >
            <MenuItem value="">
              <em>Chọn phường xã</em>
            </MenuItem>
            {homeTown.map((cou) => (
              <MenuItem key={cou.code} value={cou.code}>
                {cou.name}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div>
          <label className="font-semibold">Địa chỉ *</label>
          <input
            type="text"
            name="address"
            className="block w-full mt-2 border border-gray-400 rounded-md p-3 focus:ring-2 focus:ring-green-400 outline-none"
            value={form.address}
            onChange={handleChange}
          />
        </div>
        <Button variant="outlined" onClick={handleEditUser}>
          Sửa thông tin
        </Button>
      </div>
    </div>

    <div className="w-[500px] border border-gray-300 rounded-lg p-6 shadow-md bg-white">
      <h3 className="mb-5 uppercase font-bold text-xl text-gray-800">
        Đơn hàng của bạn
      </h3>

      <div className="flex justify-between border-b border-gray-300 pb-3 font-semibold uppercase">
        <p>Sản phẩm</p>
        <p>Tạm tính</p>
      </div>

      {infoproduct &&
        infoproduct.map((item, idx) => (
          <div
            key={idx}
            className="flex justify-between border-b border-gray-300 py-3"
          >
            <p>
              {item?.productId?.name} x{" "}
              {orderItem.length > 0 ? item.amount : item.quantity}
            </p>
            <p className="font-bold">
              {formatBigNumber(
                item?.productId.price *
                  (orderItem.length > 0 ? item.amount : item.quantity),
                true
              )}
            </p>
          </div>
        ))}

      <div className="flex justify-between border-b border-gray-300 py-3">
        <p>Tạm tính</p>
        <p className="font-bold">
          {infoproduct && formatBigNumber(totalPrice, true)}
        </p>
      </div>
      <div className="flex justify-between border-b border-gray-300 py-3">
        <p>Tổng</p>
        <p className="uppercase font-semibold text-lg">
          {cartItem && formatBigNumber(totalPrice, true)}
        </p>
      </div>

      <div className="mt-4 space-y-2">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="paymentMethod"
            value="cod"
            checked={paymentMethod === "cod"}
            onChange={() => setPaymentMethod("cod")}
          />
          Thanh toán khi nhận hàng (COD)
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="paymentMethod"
            value="online"
            checked={paymentMethod === "online"}
            onChange={() => setPaymentMethod("online")}
          />
          Thanh toán online (VNPay, Momo, chuyển khoản...)
        </label>
      </div>

      <p className="py-3 text-sm text-gray-600">
        Thông tin cá nhân của bạn sẽ được sử dụng để xử lý đơn hàng, nâng cao
        trải nghiệm website và cho các mục đích khác theo chính sách quyền riêng
        tư.
      </p>

      <Button
        variant="contained"
        sx={{
          backgroundColor: "#FFFF99",
          "&:hover": { backgroundColor: "#FFFF66" },
          color: "black",
          fontWeight: "bold",
        }}
        fullWidth
        onClick={handleCheckout}
      >
        Đặt hàng
      </Button>
    </div>
  </div>
);
};
