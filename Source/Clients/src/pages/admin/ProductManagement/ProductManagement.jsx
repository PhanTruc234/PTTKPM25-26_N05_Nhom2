import {
  Button,
  Divider,
  MenuItem,
  Pagination,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import useGetListProducts from "../../../hooks/useGetListProducts";
import dayjs from "dayjs";
import useReducerUpdateFilterProducts, {
  UPDATE_FILTER_ACTION_PRODUCT,
} from "../../../hooks/useReducerUpdateFilterProduct";
import { formatBigNumber } from "../../../libs/format-big-number";
import { useEffect, useState } from "react";
import DialogRemoveProduct from "./DialogRemoveProduct";
import SearchIcon from '@mui/icons-material/Search';
import { getImageUrl } from "../../../libs/img";
const LIMIT_RECORD_PER_PAGE = 10;
const SERVER = "http://localhost:3100";
export const ProductManagement = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { state, dispatch } = useReducerUpdateFilterProducts();
  const { data, handleGetList } = useGetListProducts(state);
  console.log(data, "aggaysytrsqrstf");
  const [productId, setProductId] = useState("");
  const [search, setSearch] = useState("")
  const handleChangePage = (value) => {
    dispatch({
      type: UPDATE_FILTER_ACTION_PRODUCT.CHANGE_PAGE,
      payload: { page: value },
    });
  };
  const handleSearch = () => {
    dispatch({
      type: UPDATE_FILTER_ACTION_PRODUCT.SEARCH,
      payload: { name: search.trim() },
    });
  }
  const handleReset = () => {
    setSearch("");
    dispatch({
      type: UPDATE_FILTER_ACTION_PRODUCT.REMOVE_QUERY,
      payload: {},
    });
  }
  console.log(search, "searchsearchsearch");
  useEffect(() => {
    let tmpDataFilter = {
      page: 1,
      limit: LIMIT_RECORD_PER_PAGE,
    };
    if (searchParams.size > 0) {
      const dataFromSearchParams = Object.fromEntries(searchParams.entries());
      tmpDataFilter = {
        page: parseInt(dataFromSearchParams["page"]) || 1,
        limit: parseInt(dataFromSearchParams["limit"]) || LIMIT_RECORD_PER_PAGE,
        sortBy: dataFromSearchParams["sortBy"],
        order: dataFromSearchParams["order"],
        name: dataFromSearchParams["name"],
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
      const stringJson = {
        ...state,
        limit: LIMIT_RECORD_PER_PAGE,
      };
      const dataFilterJson = structuredClone(stringJson);
      setSearchParams(new URLSearchParams(dataFilterJson));
    }
  }, [state]);
  return (
  <div className="p-5 bg-gray-50 min-h-screen">
    <TableContainer className="bg-white shadow rounded-lg">
      <div className="flex flex-col sm:flex-row justify-between gap-3 p-4">
        {/* Search */}
        <div className="relative w-full sm:w-auto">
          <TextField
            label="Tên sản phẩm"
            name="name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            size="small"
            className="w-full sm:w-64"
          />
          <SearchIcon
            className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-blue-500 transition"
            onClick={handleSearch}
          />
        </div>

        {/* Sort */}
        <Select
          size="small"
          value={state.sortBy ? `${state.sortBy}_${state.order}` : ""}
          onChange={(e) => {
            const [sortBy, order] = e.target.value.split("_");
            dispatch({
              type: UPDATE_FILTER_ACTION_PRODUCT.CHANGE_SORT,
              payload: { sortBy, order },
            });
          }}
          className="w-40"
        >
          <MenuItem value="">Tất cả</MenuItem>
          <MenuItem value="createdAt_asc">Ngày tăng</MenuItem>
          <MenuItem value="createdAt_desc">Ngày giảm</MenuItem>
          <MenuItem value="price_asc">Giá tăng</MenuItem>
          <MenuItem value="price_desc">Giá giảm</MenuItem>
        </Select>

        {/* Buttons */}
        <div className="flex gap-2">
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleReset}
          >
            Xóa lọc
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("add")}
          >
            Thêm sản phẩm
          </Button>
        </div>
      </div>

      <Divider />

      {/* Table */}
      <Table>
        <TableHead className="bg-blue-50">
          <TableRow>
            {[
              "Tên sản phẩm",
              "Hình ảnh",
              "Thuộc tính",
              "Giá",
              "Số lượng",
              "Mô tả",
              "Thời gian tạo",
              "",
            ].map((title) => (
              <TableCell
                key={title}
                className="whitespace-nowrap p-3 text-base font-semibold text-blue-800"
              >
                {title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {data?.products.map((item) => (
            <TableRow
              key={item._id}
              className="hover:bg-blue-50 transition"
            >
              <TableCell>{item.name}</TableCell>
              <TableCell>
                <img
                  src={item.images[0] ? getImageUrl(item.images[0]) : ""}
                  alt=""
                  width={100}
                  className="rounded-md border"
                />
              </TableCell>
              <TableCell>
                {Object.entries(item.attributes).map(([key, val]) => (
                  <div key={key} className="text-sm">
                    <span className="font-medium">{key}:</span>{" "}
                    <span>{val}</span>
                  </div>
                ))}
              </TableCell>
              <TableCell className="text-green-600 font-medium">
                {formatBigNumber(item.price, true)}
              </TableCell>
              <TableCell>{item.amount}</TableCell>
              <TableCell>
                <div className="whitespace-nowrap line-clamp-1 truncate w-36">
                  {item.description || "-"}
                </div>
              </TableCell>
              <TableCell>{dayjs(item.createdAt).format("YYYY-MM-DD HH:mm")}</TableCell>
              <TableCell className="flex gap-2">
                <Button
                  variant="outlined"
                  color="error"
                  size="small"
                  onClick={() => setProductId(item._id)}
                >
                  Xóa
                </Button>
                <Button
                  variant="contained"
                  color="warning"
                  size="small"
                  onClick={() => navigate(`add?id=${item._id}`)}
                >
                  Sửa
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    {/* Pagination */}
    {data?.products.length ? (
      <div className="flex justify-between items-center px-3 py-5">
        <div className="text-sm text-gray-600">
          Hiển thị sản phẩm thứ{" "}
          {((data?.page || 1) - 1) * LIMIT_RECORD_PER_PAGE + 1} đến{" "}
          {(data?.page || 1) < Math.ceil(data.total / LIMIT_RECORD_PER_PAGE)
            ? (data?.page || 1) * LIMIT_RECORD_PER_PAGE
            : data.total}{" "}
          trong tổng số {data.total}
        </div>
        <Pagination
          page={state.page || 1}
          onChange={(event, value) => handleChangePage(value)}
          count={Math.ceil(data.total / LIMIT_RECORD_PER_PAGE)}
          shape="rounded"
          color="primary"
        />
      </div>
    ) : null}

    <DialogRemoveProduct
      productId={productId}
      onClose={() => setProductId("")}
      onSuccess={() => handleGetList()}
    />
  </div>
);
};
