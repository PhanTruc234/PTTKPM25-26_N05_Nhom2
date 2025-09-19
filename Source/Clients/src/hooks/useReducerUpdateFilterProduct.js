import { useReducer } from "react";

export const UPDATE_FILTER_ACTION_PRODUCT = {
  INITIAL: "INITIAL",
  REMOVE_QUERY: "REMOVE_QUERY",
  UPDATE_QUERY: "UPDATE_QUERY",
  CHANGE_PAGE: "CHANGE_PAGE",
  UPDATE_QUERY_ID: "UPDATE_QUERY_ID",
  CHANGE_SORT : "CHANGE_SORT",
  SEARCH : "SEARCH",
  CHANGE_PRICE : "CHANGE_PRICE",
  CHANGE_CATE : "CHANGE_CATE",
  CHANGE_SALE : "CHANGE_SALE",
};
const initialState = {
  page: 1,
  limit: 10,
};

const reducerUpdateDataFilter = (state, action) => {
  switch (action.type) {
    case UPDATE_FILTER_ACTION_PRODUCT.INITIAL:
      return { ...state, ...action.payload };
    case UPDATE_FILTER_ACTION_PRODUCT.CHANGE_PAGE:
      return { ...state, page: action.payload.page };
    case UPDATE_FILTER_ACTION_PRODUCT.CHANGE_SORT:
      if(action.payload?.name === ""){
        delete state?.name
      }else if(action.payload.sortBy === "" || action.payload.order === ""){
        delete state?.sortBy
        delete state?.order
      }else{
        return {...state , sortBy : action.payload?.sortBy, order : action.payload?.order}
      }
    case UPDATE_FILTER_ACTION_PRODUCT.SEARCH: 
      return {...state , name : action.payload?.name}
    case UPDATE_FILTER_ACTION_PRODUCT.CHANGE_CATE:
      return {...state , category : action.payload?.category}
    case UPDATE_FILTER_ACTION_PRODUCT.CHANGE_SALE:
      return {...state, sale : action.payload?.sale}
    case UPDATE_FILTER_ACTION_PRODUCT.REMOVE_QUERY: 
      delete state?.name
      delete state?.sortBy
      delete state?.order
      delete state?.category
      delete state?.name
      delete state?.minPrice
      delete state?.maxPrice
      delete state?.sale
      return {...state }  
    case UPDATE_FILTER_ACTION_PRODUCT.CHANGE_PRICE:
      return { ...state, minPrice: action.payload.minPrice, maxPrice : action.payload.maxPrice };
    default:
      return state;
  }
};
const useReducerUpdateFilterProducts = () => {
  const [state, dispatch] = useReducer(reducerUpdateDataFilter, initialState);
  return { state, dispatch };
};
export default useReducerUpdateFilterProducts;
