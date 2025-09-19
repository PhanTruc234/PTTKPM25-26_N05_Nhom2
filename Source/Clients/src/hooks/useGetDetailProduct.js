import useSWR from "swr"
import { API_GET_DETAIL_CATEGORY } from "../contants/apis"
import { getDetilProduct } from "../services/productService"

const useGetDetailProduct = (id) => {
    const {data, mutate, isLoading} = useSWR(
        id ? [API_GET_DETAIL_CATEGORY, id] : null, () => getDetilProduct(id),{ dedupingInterval: 1000 }
    );
    return { detailProduct: data?.data, handleDtail : mutate, isLoading };
}
export default useGetDetailProduct;