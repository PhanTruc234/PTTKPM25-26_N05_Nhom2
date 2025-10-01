import ico_heart from "../assets/ico_heart.png";
import ico_reload from "../assets/ico_reload.png";
import ico_search from "../assets/ico_search.png";
import ico_star_active from "../assets/ico_star_active.png";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { formatBigNumber } from "../libs/format-big-number";
import { toSlug } from "../libs/toSlug";
import { useAddToCart } from "../hooks/useAddCart";
import { getImageUrl } from "../libs/img";
import { useEffect, useRef, useState } from "react";
export const BoxProduct = ({ item }) => {
  const { handleAddToCart } = useAddToCart();
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <li ref={ref}
      className={`mt-6 md:mt-0 text-center group relative transition-all duration-500 ${isVisible ? "animate-slideInLeft opacity-100" : "opacity-0"
        }`}>
      {item.salePercent ? (
        <span className="absolute py-1 text-xs px-2 top-3 left-3 bg-red-600 text-white rounded-xl">
          -{item.salePercent}%{" "}
        </span>
      ) : (
        ""
      )}

      <div className="bg-red">
        {item.amount ? (
          ""
        ) : (
          <span className="absolute py-1 text-xs px-2 top-3 left-3 bg-black text-white rounded-xl">
            Out of stock
          </span>
        )}

        <ul className="absolute bottom-28 left-4 z-10 flex flex-col gap-3">
          <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
            <button
              type="button"
              className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
            >
              <img
                src={ico_heart}
                className="image size-4 rouded-full"
                alt=""
              />
            </button>
          </li>
          <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-100">
            <button
              type="button"
              className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
            >
              <img
                src={ico_reload}
                className="image size-4 rouded-full"
                alt=""
              />
            </button>
          </li>
          <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-200">
            <button
              type="button"
              className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
            >
              <img
                src={ico_search}
                className="image size-4 rouded-full"
                alt=""
              />
            </button>
          </li>
        </ul>

        <Link
          to={`/${toSlug(item.name)}?id=${item._id}`}
          className="rounded-xl overflow-hidden bg-white lg:h-[385px]"
        >
          <img
            className="block  object-cover h-[350px] w-full rounded-xl"
            src={getImageUrl(item.images[0])}
            alt=""
          />
        </Link>
        <div className="flex justify-center items-center gap-1 mt-5">
          <img className="size-13 inline-block" src={ico_star_active} alt="" />
          <img className="size-13 inline-block" src={ico_star_active} alt="" />
          <img className="size-13 inline-block" src={ico_star_active} alt="" />
          <img className="size-13 inline-block" src={ico_star_active} alt="" />
          <img className="size-13 inline-block" src={ico_star_active} alt="" />
        </div>
        <h3 className="text-15 mt-2">{item.name}</h3>
      </div>
      <div className="mt-2 relative h-5 overflow-hidden">
        <div className="absolute left-1/2 -translate-x-1/2 group-hover:bottom-0 -bottom-6 transition-all duration-300">
          <a href="product-detail.html" className="bg-red">
            <div className="flex items-center justify-center font-bold text-15 text-center">
              <span className="">{formatBigNumber(item.price, true)}</span>
            </div>
          </a>
          <Button
            onClick={() => handleAddToCart(item._id, 1, item.name)}
            className="uppercase text-xs font-medium tracking-widest relative before:absolute before:bottom-0 !p-0 before:w-0 before:h-[1px] before:bg-black before:left-0 hover:before:w-full before:transition-all before:duration-500"
          >
            Thêm vào giỏ hàng
          </Button>
        </div>
      </div>
    </li>
  );
};
