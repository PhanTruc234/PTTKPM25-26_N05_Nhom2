import img_banner from "../../../assets/img_banner.webp";
export const SectionBanner = () => {
  return (
    <section className="relative overflow-hidden">
      <img className="animate-zoomIn" src={img_banner} alt="" />
      <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <h2 className="text-xl lg:text-4xl font-bold text-white lg:leading-10 animate-slideInLeft">
          Thời trang dẫn lỗi:
          <br />
          “Mặc để khác biệt - Sống để tỏa sáng”
        </h2>

        <a
          style={{ animationDelay: "0.3s" }}
          href="#none"
          className="animate-slideInLeft mt-4 lg:mt-8 h-9 border border-white px-7 inline-flex items-center font-semibold text-white rounded-full text-[15px] hover:bg-white hover:text-black transition-all duration-300"
        >
          Mua ngay
        </a>
      </div>
    </section>
  );
};
