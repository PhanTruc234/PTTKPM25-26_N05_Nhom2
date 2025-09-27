import ico_freeship from "../../../assets/ico_freeship.svg";
import ico_quality from "../../../assets/ico_quality.svg";
import ico_return from "../../../assets/ico_return.svg";
import ico_support from "../../../assets/ico_support.svg";
export const SectionServices = () => {
  return (
    <section className="bg-gray">
      <div className="container">
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-5 items-center py-14">
          <li className="flex items-center lg:justify-center lg:flex-1 gap-[15px]">
            <img src={ico_freeship} alt="" />
            <span className="text-sm lg:text-base font-semibold">
              Miễn phí vận chuyển từ 500.000 đ
            </span>
          </li>

          <li className="flex items-center lg:justify-center lg:flex-1 gap-[15px]">
            <img src={ico_quality} alt="" />
            <span className="text-sm lg:text-base font-semibold">
              Chất lượng đảm bảo
            </span>
          </li>

          <li className="flex items-center lg:justify-center lg:flex-1 gap-[15px]">
            <img src={ico_return} alt="" />
            <span className="text-sm lg:text-base font-semibold">
              Hoàn trả hàng trong vòng 3 ngày
            </span>
          </li>

          <li className="flex items-center lg:justify-center lg:flex-1 gap-[15px]">
            <img src={ico_support} />
            <span className="text-sm lg:text-base font-semibold">
              Hỗ trợ 24/7
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};
