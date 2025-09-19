import { useState } from "react";
import useSWR from "swr";
import { API_PRODUCT_BY_CATEGORY } from "../contants/apis";
import { fetchProductByCategory } from "../services/productService";

const useGetProductByCategory = (dataId) => {
  const { data, mutate, isLoading } = useSWR(
    dataId ? [API_PRODUCT_BY_CATEGORY, dataId] : null,
    () => fetchProductByCategory(dataId),
    { dedupingInterval: 1000 }
  );
  return {
    productsByCategory: data,
    handleProductByCate: mutate,
    isLoading,
  };
};
export default useGetProductByCategory;
