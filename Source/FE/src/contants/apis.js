export const API_LOGIN = "/auth/login";
export const API_LOGOT = "/auth/logout";
export const API_REGISTER = "/auth/register";

export const API_PRODUCT = "/products"
export const API_GET_LIST_PRODUCT = "/products"
export const API_REMOVE_PRODUCT = "/products/:id"
export const API_DETAIL_PRODUCT = "/products/:id"
export const API_UPDATE_PRODUCT = "/products/:id"
export const API_PRODUCT_BY_CATEGORY = "/products/category/:categoryId"
export const API_SEARCH_PRODUCT = "/products"

export const API_CATEGORY = "/categories"
export const API_GET_LIST_CATEGORY = "/categories"
export const API_REMOVE_CATEGORY = "/categories/:id"
export const API_GET_DETAIL_CATEGORY = "/categories/:id"
export const API_UPDATE_CATEGORY = "/categories/:id"

export const API_ADD_CART = "/cart/add"
export const API_GET_CARTS = "/cart"
export const API_UPDATE_CART = "/cart/update"
export const API_REMOVE_CART_ITEM = "/cart/remove/:productId"
export const API_CLEAR_CART = "/cart/clear"

export const API_CHECK_ORDER = "/orders"
export const API_GET_LIST_ORDER = "/orders"
export const API_STATUS_PAYMENT = "/orders/:id/status"
export const API_DELETE_ORDER = "/orders/:id"
export const API_GET_ORDER_BY_ID = "/orders/:id"
export const API_ORDER_BY_USER = "/orders/user/:userId"

export const API_COUNTRY = "/address-kit/2025-07-01/provinces";
export const API_ADDREESS = "/address-kit/2025-07-01/provinces"

export const API_UPDATE_USER = "/user/:id";
export const API_DELETE_USER = "/user/:id";
export const API_GET_USER = "/user";

const SERVER = "http://localhost:3100";
export const API_UPLOAD = SERVER + "/products/upload";

export const API_REVENUE = "/orders/revenue"
export const API_REFRESH = "/auth/refresh"