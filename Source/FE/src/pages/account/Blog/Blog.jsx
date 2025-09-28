import PersonIcon from "@mui/icons-material/Person";
import FlightIcon from "@mui/icons-material/Flight";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";

const Blog = () => {
    return (
        <section>
            <div>
                <img
                    src="https://lh3.googleusercontent.com/82jIzoTB5r-yQL69inuE6pA0QO7FmNpZJed8aB646itxxhDg38wu1C4yINUDeDS8TM_5_h99ucvEDfvQzNQ4wxyEtsIxPAg=w1920"
                    className="w-full h-[300px] md:h-[400px] object-cover rounded-b-2xl shadow-md"
                    alt="About us cover"
                />
            </div>
            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 mb-20">
                {[
                    {
                        icon: <PersonIcon className="text-blue-600" fontSize="large" />,
                        title: "OUR VISION",
                        desc: "Chúng tôi hướng tới việc trở thành đơn vị dẫn đầu trong lĩnh vực đổi mới sáng tạo, mang đến các giải pháp tối ưu và bền vững cho cộng đồng.",
                    },
                    {
                        icon: <FlightIcon className="text-green-600" fontSize="large" />,
                        title: "WHAT WE DO",
                        desc: "Chúng tôi cung cấp các dịch vụ và sản phẩm công nghệ chất lượng cao, kết hợp giữa sáng tạo và hiệu quả nhằm phục vụ khách hàng tốt nhất.",
                    },
                    {
                        icon: <ChangeHistoryIcon className="text-orange-600" fontSize="large" />,
                        title: "HISTORY",
                        desc: "Được thành lập từ năm 2010, chúng tôi đã không ngừng phát triển và mở rộng quy mô, trở thành đối tác tin cậy của hàng nghìn khách hàng trên toàn quốc.",
                    },
                ].map((item, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300"
                    >
                        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mb-4">
                            {item.icon}
                        </div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-3">
                            {item.title}
                        </h2>
                        <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
            <div className="mt-10">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14897.803196511604!2d105.80985141333713!3d21.014641020698537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab82178be9eb%3A0x429104feae49bd75!2zxJDhu5FuZyDEkGEsIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1749801221289!5m2!1svi!2s"
                    width="100%"
                    height="450"
                    className="rounded-xl shadow-md"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    );
};
export default Blog;