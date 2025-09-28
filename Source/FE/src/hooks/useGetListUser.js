import useSWR from "swr"
import { API_GET_DETAIL_CATEGORY, API_GET_USER } from "../contants/apis"
import { getDetilProduct } from "../services/productService"
import { listUser } from "../services/authenService";

const useGetListUser = () => {
    const {data, mutate, isLoading} = useSWR(
        [API_GET_USER], () => listUser(),{ dedupingInterval: 1000 }
    );
    return { listUser: data?.data, handleListUser : mutate, isLoading };
}
export default useGetListUser;