import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addUser } from "../../services/authenService";
import { useDispatch, useSelector } from "react-redux";
import { doLogin } from "../../store/features/auth/authenSlice";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
export const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [hidden, setHidden] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { accessToken, user } = useSelector((state) => state.authenSlice);
  console.log(user, "user");
  console.log(accessToken, "accessToken");
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });
  const isLogin = useMemo(() => {
    const parts = formLogin.email.split("@");
    return parts.length === 2 && parts[1] === "gmail.com";
  }, [formLogin.email]);

  const handelChange = (e) => {
    const { name, value } = e.target;
    setFormLogin((prev) => ({ ...prev, [name]: value }));
  };
  console.log(formLogin, "formLogin");
  const handleSubmit = async () => {
    try {
      const res = await addUser(formLogin);
      console.log(res, "fkjbkfjkgfk");
      if (res.status === 200) {
        dispatch(doLogin(res.data));
        navigate("/");
      }
    } catch (error) {
      setErrorMessage("Tài khoản sai email hoặc mật khẩu");
    }
  };
  return (
    <>
      <section className="">
        <div className="pt-20">
          <h2 className="text-3xl font-semibold text-center">Account</h2>
          <div className="container">
            <div className="max-w-xl mx-auto">
              <h2 className="font-semibold text-2xl">Sign in</h2>
              <div className="mt-5">
                <div>
                  <input
                    id="email"
                    type="email"
                    className="mt-2 w-full h-[50px] border border-gray p-5 rounded-lg text-[14px]"
                    placeholder="Email*"
                    name="email"
                    onChange={handelChange}
                  />
                  {formLogin.email && (
                    <span
                      className={`mt-2 inline-block text-xs ${
                        isLogin ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {isLogin
                        ? "Email đúng định dạng"
                        : "Email chưa đúng định dạng"}
                    </span>
                  )}
                </div>

                <div className="mt-3 relative">
                  <input
                    id="password"
                    type={hidden ? "text" : "password"}
                    name="password"
                    className="mt-2 w-full h-[50px] border border-gray p-5 rounded-lg text-[14px]"
                    placeholder="Password*"
                    onChange={handelChange}
                  />
                  <div
                    className="absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer"
                    onClick={() => setHidden(!hidden)}
                  >
                    {hidden ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
                  </div>
                </div>
                {errorMessage && (
                  <span className="mt-2 inline-block text-xs text-red-600">
                    {errorMessage}
                  </span>
                )}
                {/* <Link
                  href="#none"
                  className="text-xs mt-5 mb-5 block hover:underline"
                >
                  Forgot password ?
                </Link> */}
                <Link
                  to={"/register"}
                  className="text-xs mt-5 mb-5 block hover:underline"
                >
                  Đăng ký
                </Link>
                <button
                  className="w-full uppercase h-[50px] bg-black text-white font-semibold text-sm px-4 flex-1 rounded-lg hover:bg hover:bg-white border hover:border-black hover:text-black transition-all"
                  onClick={handleSubmit}
                >
                  Đăng nhập
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="pt-12 pb-12"></section> */}
    </>
  );
};
