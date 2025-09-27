import { useMemo, useState } from "react";
import axiosClient from "../../services/axiosClient";
import { API_REGISTER } from "../../contants/apis";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
export const Register = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [hidden, setHidden] = useState(false);
  const [formRegister, setFormRegister] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    city: "",
    ward: "",
  });
  const isRegister = useMemo(() => {
    const parts = formRegister.email.split("@");
    return parts.length === 2 && parts[1] === "gmail.com";
  }, [formRegister.email]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormRegister({
      ...formRegister,
      [name]: value,
    });
  };
  const handleSubmit = async () => {
    try {
      const res = await axiosClient.post(API_REGISTER, formRegister);
      console.log(res, "resRegister");
    } catch (error) {
      setErrorMessage(error);
    }
  };
  return (
    <div className="pt-20 pb-20 flex justify-center">
      <div className="w-full max-w-xl">
        <h2 className="text-3xl font-semibold text-center">Đăng ký</h2>
        <div className="container">
          <input
            name="name"
            type="text"
            placeholder="Họ và tên"
            className="mt-2 w-full h-[50px] border border-gray p-5 rounded-lg text-[14px]"
            onChange={handleChange}
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="mt-2 w-full h-[50px] border border-gray p-5 rounded-lg text-[14px]"
            onChange={handleChange}
          />
          {formRegister.email && (
            <span
              className={`mt-2 inline-block text-xs ${
                isRegister ? "text-green-600" : "text-red-600"
              }`}
            >
              {isRegister
                ? "Email đúng định dạng"
                : "Email chưa đúng định dạng"}
            </span>
          )}
          <div className="relative">
            <input
              name="password"
              type={hidden ? "text" : "password"}
              placeholder="Mật khẩu"
              className="mt-2 w-full h-[50px] border border-gray p-5 rounded-lg text-[14px]"
              onChange={handleChange}
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer"
              onClick={() => setHidden(!hidden)}
            >
              {hidden ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="w-full uppercase h-[50px] bg-black text-white font-semibold text-sm px-4 flex-1 rounded-lg hover:bg hover:bg-white border hover:border-black hover:text-black transition-all mt-2"
          >
            Đăng ký
          </button>
        </div>
      </div>
    </div>
  );
};
