import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export default function PaymentReturn() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // lấy toàn bộ query string của VNPay
    const search = location.search.replace("?", "");
    if (!search) return;
    const params = new URLSearchParams(search);
    const responseCode = params.get("vnp_ResponseCode");
    console.log(responseCode);
    // Gọi về BE để verify chữ ký & update order
    axios
      .get(`http://localhost:3100/payment/check-payment-vnpay?${search}`)
      .then((res) => {
        if (responseCode === "00" && res.data?.success) {
          console.log(res, "édssvdvdv");
          navigate("/shopping-cart");
          toast.success("Thanh toán thành công");
        }
      })
      .catch(() => {
        toast.error("Không xác nhận được thanh toán");
        navigate("/payment-failed");
      });
  }, [location.search, navigate]);

  return null;
}
