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
import useGetListCategory from "../../../hooks/useGetListCategory";
import { cap } from "../../../libs/cap";
const LIMIT_RECORD_PER_PAGE = 10;
const SERVER = "http://localhost:3100";
export const ProductManagement = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { state, dispatch } = useReducerUpdateFilterProducts();
  const { data, handleGetList } = useGetListProducts(state);
  console.log(data, ">>>>>>PPPPPPPPPPPP")
  const [filterProductByCate, setFilterProductByCate] = useState("");
  const [productId, setProductId] = useState("");
  const [search, setSearch] = useState("")
  const handleChangePage = (value) => {
    dispatch({
      type: UPDATE_FILTER_ACTION_PRODUCT.CHANGE_PAGE,
      payload: { page: value },
    });
  };
  const { data: cateData } = useGetListCategory({
    page: 1,
    limit: 10,
  });
  const handleChangeSelect = () => {
    dispatch({
      type: UPDATE_FILTER_ACTION_PRODUCT.CHANGE_CATE,
      payload: { category: filterProductByCate }
    })
  };
  const handleSearch = () => {
    dispatch({
      type: UPDATE_FILTER_ACTION_PRODUCT.SEARCH,
      payload: { name: search.trim() },
    });
  }
  const handleFilter = () => {
    handleSearch();
    handleChangeSelect();

  }
  const handleReset = () => {
    setSearch("");
    setFilterProductByCate("")
    dispatch({
      type: UPDATE_FILTER_ACTION_PRODUCT.REMOVE_QUERY,
      payload: {},
    });
  }
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
    if (!state.name) {
      delete state.name
    }
    if (!state.order) {
      delete state.order
    }
    if (!state.sortBy) {
      delete state.sortBy
    }
    if (state) {
      const stringJson = {
        ...state,
        limit: LIMIT_RECORD_PER_PAGE,
      };
      const dataFilterJson = JSON.parse(JSON.stringify(stringJson));
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
          </div>
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
          <TextField
            id="category"
            label="Danh mục"
            variant="outlined"
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
          <SearchIcon

            onClick={handleFilter}
          />
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
                  {item.attributes.color.map((colorObj, idx) => (
                    <div key={idx} className="text-sm flex flex-col gap-1">
                      <div>
                        <span className="font-medium">Màu:</span> {colorObj.name}
                      </div>
                      <div className="ml-4">
                        {colorObj.variants.map((variant, vIdx) => (
                          <div key={vIdx} className="flex gap-2 text-xs">
                            <span>Size: {variant.size}</span>
                            <span>Giá: {variant.price !== 0 ? formatBigNumber(variant.price, true) : formatBigNumber(item.price, true)}</span>
                            <span>Mã: {variant.code}</span>
                          </div>
                        ))}
                      </div>
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
