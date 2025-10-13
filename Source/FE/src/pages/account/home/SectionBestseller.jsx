import { useEffect, useState } from "react";
import { BoxProduct } from "../../../components/BoxProduct";
import useGetListProducts from "../../../hooks/useGetListProducts";
import useReducerUpdateFilterProducts, {
  UPDATE_FILTER_ACTION_PRODUCT,
} from "../../../hooks/useReducerUpdateFilterProduct";
import { Pagination } from "@mui/material";
import { useLocation } from "react-router-dom";
import LoadingSkeleton from "../../loading/LoadingSkeleton";

export const SectionBestseller = () => {
  const location = useLocation();
  const name = location.pathname;
  const { state, dispatch } = useReducerUpdateFilterProducts();
  const { data, isLoading, error, handleGetList } = useGetListProducts({
    ...state,
    limit: 3,
    sale: true,
  });
  const handleChangePage = (value) => {
    dispatch({
      type: UPDATE_FILTER_ACTION_PRODUCT.CHANGE_PAGE,
      payload: { page: value },
    });
  };
  console.log(data, "jjjjjjjjj");
  useEffect(() => {
    handleGetList();
  }, [data]);
  return (
    <section className="mt-9 lg:mt-24 pt-16 pb-8 bg-gray">
      <div className="container">
        <div className="lg:flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-bold">Bán chạy nhất</h2>
            <p className="mt-2 text-lightGray">
              Trải nghiệm những sản phẩm tốt nhất tại cửa hàng của chúng tôi!
            </p>
          </div>
          <a
            href="#none"
            className="mt-6 lg:mt-0 h-9 border border-black px-7 inline-flex items-center font-semibold text-black rounded-full text-[15px] hover:bg-black hover:text-white transition-all duration-300"
          >
            Xem tất cả
          </a>
        </div>
        <ul className="mt-8 grid lg:grid-cols-3 gap-7 sm:grid-cols-1 md:grid-cols-2">
          {isLoading ? (
            Array.from({ length: 3 }).map((_, index) => (
              <LoadingSkeleton key={index} loading={true} />
            ))
          ) : error ? (
            <li className="col-span-3 text-center py-5 text-red-500">
              Lỗi tải dữ liệu: {error.message}
            </li>
          ) : data?.products?.length > 0 ? (
            data.products.map((item) => (
              <BoxProduct key={item._id} item={item} />
            ))
          ) : (
            <li className="col-span-3 text-center py-5">
              Không có sản phẩm nào.
            </li>
          )}
        </ul>
        <Pagination
          className="flex items-center justify-center mt-3"
          page={state.page}
          onChange={(event, value) => handleChangePage(value)}
          count={Math.ceil(data?.total / 3)}
          shape="rounded"
        />
      </div>
    </section>
  );
};
