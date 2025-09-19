// import { useEffect, useState } from "react";
// import useSWR from "swr";
// import { API_GET_LIST_CATEGORY } from "../contants/apis";
// import { fetchCategories } from "../services/categoryService";
// const convertToJsonObject = (data : any) => {
//     const a = JSON.stringify(data);
//     return JSON.parse(a);
// }
// const useGetListCategory = (dataFilter : object) => {
//     const [dataFilterUrlParams, setDataFilterUrlParams] = useState("");
//     const { data , mutate, isLoading} = useSWR(dataFilterUrlParams ? [API_GET_LIST_CATEGORY , dataFilterUrlParams] : null, () => fetchCategories(dataFilter), { dedupingInterval: 60, revalidateOnFocus: false, revalidateIfStale: false });
//     useEffect(() => {
//         if (dataFilter) {
//           const urlParam = new URLSearchParams(
//             convertToJsonObject(dataFilter)
//           ).toString();
//           setDataFilterUrlParams(urlParam);
//         }
//       }, [dataFilter]);
//     return { data, handleGetList: mutate, isLoading };
// }
// export default useGetListCategory;
import useSWR from "swr";
import { API_GET_LIST_CATEGORY } from "../contants/apis";
import { fetchCategories } from "../services/categoryService";

const useGetListCategory = (dataFilter) => {
  const { data, mutate, isLoading } = useSWR(
    dataFilter ? [API_GET_LIST_CATEGORY, dataFilter] : null,
    ([url, params]) => fetchCategories(params),
    { dedupingInterval: 2000, revalidateOnFocus: false, revalidateIfStale: false, revalidateOnReconnect: false }
  );
  return { data, handleGetListCate: mutate, isLoading };
};

export default useGetListCategory;
