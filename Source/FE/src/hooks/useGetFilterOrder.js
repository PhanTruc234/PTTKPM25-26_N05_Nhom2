import { useReducer } from "react";

export const UPDATE_FILTER_ACTION_ORDER = {
  INITIAL: "INITIAL",
  REMOVE_QUERY: "REMOVE_QUERY",
  UPDATE_QUERY: "UPDATE_QUERY",
  CHANGE_PAGE: "CHANGE_PAGE",
  UPDATE_QUERY_ID: "UPDATE_QUERY_ID",
};
const initialState = {
  page: 1,
  limit: 3,
};

const reducerUpdateDataFilter = (state, action) => {
  switch (action.type) {
    case UPDATE_FILTER_ACTION_ORDER.INITIAL:
        if(!action.payload.status){
          delete state?.status
        }
      return { ...state, ...action.payload };
    case UPDATE_FILTER_ACTION_ORDER.CHANGE_PAGE:
        if(!action.payload.status){
          delete state?.status
        }
      return { ...state, page: action.payload.page };
    default:
      return state;
  }
};
const useGetFilterOrder = () => {
  const [state, dispatch] = useReducer(reducerUpdateDataFilter, initialState);
  return { state, dispatch };
};
export default useGetFilterOrder;
