import useSWR from "swr";
import { API_GET_LIST_ORDER } from "../contants/apis";
import { fetchOrder } from "../services/orderService";

const useGetListOrder = (dataFilter) => {
  const { data, mutate, isLoading } = useSWR(
     dataFilter ? [API_GET_LIST_ORDER, dataFilter] : null,
        ([url, params]) => fetchOrder(params),
    {
      dedupingInterval: 2000,
      revalidateOnFocus: false,
      revalidateIfStale: false,
    }
  );

  return { detailOrder: data, handleGetListOrder: mutate, isLoading };
};

export default useGetListOrder;
