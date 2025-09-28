import React from "react";
import useGetListCategory from "../../../hooks/useGetListCategory";
import { cap } from "../../../libs/cap";
import useReducerCate from "../../../hooks/useReducerCate";
import { UPDATE_FILTER_ACTION_PRODUCT } from "../../../hooks/useReducerUpdateFilterProduct";
export const SectionFeaturedCategories = () => {
  const { state, dispatch } = useReducerCate();
  const { data } = useGetListCategory(state);
  console.log(data, "datadata");
  const handleChangePage = (value) => {
    dispatch({
      type: UPDATE_FILTER_ACTION_PRODUCT.CHANGE_PAGE,
      payload: { page: value },
    });
  };
  return (
    <section className="py-6  bg-gray-100">
      {data &&
        data.data
          .slice(0, 4)
          .map(({ image, name, description, _id }, index) => (
            <div key={_id} className="container mb-6">
              <div className="lg:flex lg:items-center lg:justify-between gap-5 md:grid md:grid-cols-2 sm:grid-cols-1">
                {index % 2 === 0 ? (
                  <>
                    <div className="lg:w-1/2">
                      <p className="text-[14px] uppercase">{cap(name)}</p>
                      <h2 className="text-3xl font-semibold py-4 lg:py-6 leading-[1.4] whitespace-pre-line">
                        {cap(description)}
                      </h2>
                      <a
                        href="#none"
                        className="h-9 border border-black px-7 inline-flex items-center font-semibold text-black rounded-full text-[15px] hover:bg-black hover:text-white transition-all duration-300"
                      >
                        Khám phá
                      </a>
                    </div>
                    <div className="lg:w-1/2 rounded-2xl overflow-hidden mt-6 lg:mt-0 flex justify-center">
                      <img className="image" src={image} alt="" />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="lg:w-1/2 rounded-2xl overflow-hidden mt-6 lg:mt-0 flex justify-center">
                      <img className="image" src={image} alt="" />
                    </div>
                    <div className="lg:w-1/2 pt-4">
                      <p className="text-[14px] uppercase">{cap(name)}</p>
                      <h2 className="text-3xl font-semibold py-5 lg:py-5 leading-[1.4] whitespace-pre-line">
                        {cap(description)}
                      </h2>
                      <a
                        href="#none"
                        className="h-9 border border-black px-7 inline-flex items-center font-semibold text-black rounded-full text-[15px] hover:bg-black hover:text-white transition-all duration-300"
                      >
                        Khám phá
                      </a>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
    </section>
  );
};
