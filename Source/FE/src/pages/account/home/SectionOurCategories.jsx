import { Pagination } from "@mui/material";
import useGetListCategory from "../../../hooks/useGetListCategory";
import { cap } from "../../../libs/cap";
import { UPDATE_FILTER_ACTION_PRODUCT } from "../../../hooks/useReducerUpdateFilterProduct";
import useReducerCate from "../../../hooks/useReducerCate";
import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export const SectionOurCategories = () => {
  const { state, dispatch } = useReducerCate();
  const location = useLocation();
  const name = location.pathname;
  const { data } = useGetListCategory({ ...state, limit: name === "/" ? 3 : 10 });
  String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
  };
  const handleChangePage = (value) => {
    dispatch({
      type: UPDATE_FILTER_ACTION_PRODUCT.CHANGE_PAGE,
      payload: { page: value },
    });
  };
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <section className="mt-8 lg:mt-24">
      <div className="container">
        <div className="lg:flex justify-between items-center">
          <h2 className="text-3xl font-bold">Our Categories</h2>
          <a
            href="#none"
            className="mt-6 lg:mt-0 h-9 border border-black px-7 inline-flex items-center font-semibold text-black rounded-full text-[15px] hover:bg-black hover:text-white transition-all duration-300"
          >
            View All
          </a>
        </div>

        <ul ref={ref} className="mt-10 grid lg:grid-cols-3 gap-10 cursor-pointer sm:grid-cols-1 md:grid-cols-2">
          {data &&
            data?.data.map((item) => (
              <li key={item._id} className="">
                <div className={`rounded-[20px] overflow-hidden relative group ${isVisible ? "animate-slideInLeft opacity-100" : "opacity-0"}`}>
                  <img className="image" src={item.image} alt="" />
                  <a
                    href="#none"
                    className="absolute group-hover:bottom-10 left-1/2 -translate-x-1/2 -bottom-10 mt-8 h-9 bg-white px-7 inline-flex items-center font-semibold text-black rounded-full text-[15px] hover:bg-black hover:text-white transition-all duration-300"
                  >
                    {cap(item.name)}
                  </a>
                </div>
              </li>
            ))}
        </ul>
      </div>
      <Pagination
        className="flex items-center justify-center mt-3"
        page={state.page}
        onChange={(event, value) => handleChangePage(value)}
        count={Math.ceil(data?.total / (name === "/" ? 3 : 10))}
        shape="rounded"
      />
    </section>
  );
};
