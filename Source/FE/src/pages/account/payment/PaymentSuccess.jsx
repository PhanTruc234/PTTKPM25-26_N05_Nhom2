import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

export default function PaymentSuccess() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const code = params.get("code");
        const orderCode = params.get("orderCode");

        if (!orderCode) {
            toast.error("Không tìm thấy mã đơn hàng!");
            navigate("/payment-failed");
            return;
        }
        axios
            .get(`http://localhost:3100/payment/return${location.search}`)
            .then((res) => {
                console.log("Kết quả BE:", res.data);
                if (code === "00" || res.data.paymentStatus === "paid") {
                    toast.success("Thanh toán thành công!");
                    navigate("/shopping-cart", { replace: true });
                } else {
                    toast.error("Thanh toán thất bại hoặc bị hủy!");
                    navigate("/payment-failed", { replace: true });
                }
            })
            .catch((err) => {
                console.error(err);
                toast.error("Không thể xác nhận thanh toán!");
                navigate("/payment-failed", { replace: true });
            });
    }, [location.search, navigate]);

    return (
        <div style={{ textAlign: "center", marginTop: "100px" }}>
            <h3>Đang xác nhận thanh toán...</h3>
        </div>
    );
}
