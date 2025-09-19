import { useLocation, useSearchParams } from "react-router-dom";
import useGetListProducts from "../../../hooks/useGetListProducts";
import useReducerUpdateFilterProducts, {
  UPDATE_FILTER_ACTION_PRODUCT,
} from "../../../hooks/useReducerUpdateFilterProduct";
import { BoxProduct } from "../../../components/BoxProduct";
import { Button, Checkbox, FormControlLabel, IconButton, MenuItem, Pagination, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import useGetListCategory from "../../../hooks/useGetListCategory";
import { fetchProductByCategory } from "../../../services/productService";
import img_banner_product from "../../../assets/img_product_list_banner.webp";
export const Product = () => {
  const priceRanges = [
    { id: 1, label: "Dưới 100K", query: { minPrice: 0, maxPrice: 100000 } },
    { id: 2, label: "100K - 500K", query: { minPrice: 100000, maxPrice: 500000 } },
    { id: 3, label: "500K - 1 Triệu", query: { minPrice: 500000, maxPrice: 1000000 } },
    { id: 4, label: "1 - 5 Triệu", query: { minPrice: 1000000, maxPrice: 5000000 } },
    { id: 5, label: "Trên 5 Triệu", query: { minPrice: 5000000 } },
  ];
  const location = useLocation();
  const nameUrl = location.pathname;
  const [page, setPage] = useState(1);
  const [price, setPrice] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const { state, dispatch } = useReducerUpdateFilterProducts();
  const [dataFilter, setDataFilter] = useState([]);
  const [filterProductByCate, setFilterProductByCate] = useState("");
  const { data } = useGetListProducts(state);
  const [check, setCheck] = useState(false)
  console.log(data, "dâttatatata");

  const { data: cateData } = useGetListCategory({
    page: 1,
    limit: 10,
  });
  const [search, setSearch] = useState("");
  const handleChangeSelect = () => {
    dispatch({
      type: UPDATE_FILTER_ACTION_PRODUCT.CHANGE_CATE,
      payload: { category: filterProductByCate }
    })
  };
  const handleChangePage = (value) => {
    dispatch({
      type: UPDATE_FILTER_ACTION_PRODUCT.CHANGE_PAGE,
      payload: { page: value },
    });
  };
  const handleReset = () => {
    setSearch("");
    setFilterProductByCate("")
    dispatch({
      type: UPDATE_FILTER_ACTION_PRODUCT.REMOVE_QUERY,
      payload: {},
    });
  }
  const handlePrice = () => {
    const l = priceRanges.find((item) => item.id === price);
    if (l) {
      dispatch({
        type: UPDATE_FILTER_ACTION_PRODUCT.CHANGE_PRICE,
        payload: {
          ...(l.query.minPrice !== undefined && { minPrice: l.query.minPrice }),
          ...(l.query.maxPrice !== undefined && { maxPrice: l.query.maxPrice }),
        },
      });
    }
  }
  const handleSearch = () => {
    dispatch({
      type: UPDATE_FILTER_ACTION_PRODUCT.SEARCH,
      payload: { name: search.trim() },
    });
  }
  useEffect(() => {
    let tmpDataFilter = {
      page: 1,
      limit: 6,
    };
    if (searchParams.size > 0) {
      const dataFromSearchParams = Object.fromEntries(searchParams.entries());
      tmpDataFilter = {
        page: parseInt(dataFromSearchParams["page"]) || 1,
        limit: parseInt(dataFromSearchParams["limit"]) || 6,
        name: dataFromSearchParams["name"],
        category: dataFromSearchParams["category"],
        minPrice: dataFromSearchParams["minPrice"],
        maxPrice: dataFromSearchParams["maxPrice"],
      };
      if (dataFromSearchParams["id"]) {
        tmpDataFilter.id = dataFromSearchParams["id"];
      }
      dispatch({
        type: UPDATE_FILTER_ACTION_PRODUCT.INITIAL,
        payload: { ...tmpDataFilter },
      });
    } else {
      dispatch({
        type: UPDATE_FILTER_ACTION_PRODUCT.INITIAL,
        payload: { ...tmpDataFilter },
      });
    }
  }, []);
  useEffect(() => {
    if (state) {
      if (!state.name) {
        delete state.name;
      }
      const stringJson = {
        ...state,
        limit: 6,
      };
      const dataFilterJson = JSON.parse(JSON.stringify(stringJson));
      setSearchParams(new URLSearchParams(dataFilterJson));
    }
  }, [state]);
  const handleCheckBox = () => {
    dispatch({
      type: UPDATE_FILTER_ACTION_PRODUCT.CHANGE_SALE,
      payload: {
        sale: check
      }
    })
  }
  const handleFillter = () => {
    handleChangeSelect();
    handleSearch();
    handlePrice();
    handleCheckBox();
  }
  return (
    <div>
      <div>
        <img src={img_banner_product} alt="banner" className="w-full object-cover rounded-xl shadow-md" />
      </div>

      <div className="container mx-auto my-10 px-4">
        <div className="lg:flex gap-8">
          <div className="lg:w-[300px] bg-white shadow-md rounded-xl p-5 space-y-6">
            <h3 className="text-lg font-semibold text-gray-800">Bộ lọc</h3>
            <TextField
              id="search"
              label="Tìm kiếm sản phẩm"
              variant="outlined"
              value={search}
              fullWidth
              onChange={(e) => setSearch(e.target.value)}
              size="small"
            />
            <TextField
              id="category"
              label="Danh mục"
              variant="outlined"
              fullWidth
              select
              value={filterProductByCate}
              size="small"
              onChange={(e) => setFilterProductByCate(e.target.value)}
            >
              <MenuItem value="">Tất cả</MenuItem>
              {cateData?.data.map((item) => (
                <MenuItem key={item._id} value={item._id}>
                  {item.name}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="price"
              label="Giá"
              variant="outlined"
              fullWidth
              select
              size="small"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            >
              {priceRanges.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.label}
                </MenuItem>
              ))}
            </TextField>
            <FormControlLabel
              control={
                <Checkbox
                  checked={check}
                  onChange={(e) => setCheck(e.target.checked)}
                />
              }
              label="Sản phẩm giảm giá"
            />
            <div className="flex items-center justify-between">
              <IconButton
                color="primary"
                onClick={handleFillter}
                className="!p-2"
              >
                <SearchIcon />
              </IconButton>
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleReset}
                size="small"
              >
                Xóa lọc
              </Button>
            </div>
          </div>

          <div className="flex-1">
            <ul className="grid grid-cols-3 gap-6">
              {data?.products.map((item, index) => (
                <BoxProduct item={item} key={index} />
              ))}
            </ul>

            <div className="flex justify-center mt-8">
              <Pagination
                page={state.page}
                onChange={(event, value) => handleChangePage(value)}
                count={Math.ceil(data?.total / 6)}
                shape="rounded"
                color="primary"
                size="large"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
