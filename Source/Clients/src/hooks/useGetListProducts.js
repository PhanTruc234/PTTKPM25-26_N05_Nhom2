// import { useEffect, useState } from "react"
// import useSWR from "swr";
// import { API_GET_LIST_PRODUCT } from "../contants/apis";
// import { fetchDataProduct } from "../services/productService";
// const convertToJsonObject = (data : any) => {
//   const a = JSON.stringify(data);
//   return JSON.parse(a);
// };
// const useGetListProducts = (dataFilter : any) => {
//     const [dataFilterParams, setDataFilterParams] = useState("");
//     const {data, mutate, isLoading} = useSWR(
//         dataFilterParams ? [API_GET_LIST_PRODUCT , dataFilterParams] : null, () => fetchDataProduct(dataFilter),
//     { dedupingInterval: 60, revalidateOnFocus: false, revalidateIfStale: false }
//     );
//     useEffect(() => {
//     if (dataFilter) {
//       const urlParam = new URLSearchParams(
//         convertToJsonObject(dataFilter)
//       ).toString();
//       setDataFilterParams(urlParam);
//     }
//   }, [dataFilter]);
//   return { data, handleGetList: mutate, isLoading };
// } 
// export default useGetListProducts;
import useSWR from "swr";
import { API_GET_LIST_PRODUCT } from "../contants/apis";
import { fetchDataProduct } from "../services/productService";

const useGetListProducts = (dataFilter) => {
  const { data, mutate, isLoading, error } = useSWR(
    dataFilter ? [API_GET_LIST_PRODUCT, dataFilter] : null,
    ([url, params]) => fetchDataProduct(params),
    { dedupingInterval: 2000, revalidateOnFocus: false, revalidateIfStale: false, revalidateOnReconnect: false }
  );
  return { data, handleGetList: mutate, isLoading, error };
};

export default useGetListProducts;
