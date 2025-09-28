import {
  Button,
  Divider,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { DialogCategory } from "./DialogCategory";
import useGetListCategory from "../../../hooks/useGetListCategory";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import useReducerCate, {
  UPDATE_FILTER_ACTION_PRODUCT,
} from "../../../hooks/useReducerCate";
import { useSearchParams } from "react-router-dom";
import {
  getDetailCate,
  removeCategory,
} from "../../../services/categoryService";
import { toast } from "react-toastify";

const LIMIT_RECORD_PER_PAGE = 10;
const CategoryManagement = () => {
  const [detailCategory, setDetailCategory] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const { state, dispatch } = useReducerCate();
  const { data, handleGetList } = useGetListCategory(state);
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const handleOpenCategory = () => {
    setIsOpenCategory(true);
  };
  const handleRemoveCategory = async (id) => {
    try {
      const res = await removeCategory(id);
      console.log(res);
      if (res.status === 204) {
        toast.success("Xóa thành công", {
          autoClose: 500,
        });
        handleGetList();
      }
    } catch (error) { }
  };
  const handleDetailEdit = async (id) => {
    const res = await getDetailCate(id);
    if (res.status === 200) {
      setDetailCategory(res.data);
      setIsOpenCategory(true);
    }
    try {
    } catch (error) {
      console.log(error);
    }
  };
  const handleChangePage = (
    page
  ) => {
    dispatch({
      type: UPDATE_FILTER_ACTION_PRODUCT.CHANGE_PAGE,
      payload: { page },
    });
  };
  useEffect(() => {
    let tmpDataFilter = {
      page: 1,
      limit: LIMIT_RECORD_PER_PAGE,
    };
    if (searchParams.size > 0) {
      const dataFromSearchParams = JSON.parse(
        '{"' +
        decodeURI(
          searchParams.toString().replace(/&/g, '","').replace(/=/g, '":"')
        ) +
        '"}'
      );
      tmpDataFilter = {
        page: parseInt(dataFromSearchParams["page"]) || 1,
        limit: parseInt(dataFromSearchParams["limit"]) || LIMIT_RECORD_PER_PAGE,
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
      const stringJson = JSON.stringify({
        ...state,
        limit: LIMIT_RECORD_PER_PAGE,
      });
      const dataFilterJson = JSON.parse(stringJson);
      setSearchParams(new URLSearchParams(dataFilterJson));
    }
  }, [state]);
  return (
    <div className="p-5 bg-gray-50 min-h-screen">
      <TableContainer className="bg-white shadow rounded-lg">
        {/* Thêm danh mục */}
        <div className="flex justify-end gap-3 pb-4 p-4">
          <Button
            variant="contained"
            color="primary"
            onClick={handleOpenCategory}
          >
            Thêm
          </Button>
        </div>

        <Divider />

        {/* Table */}
        <Table>
          <TableHead className="bg-blue-50">
            <TableRow>
              {[
                "Tên danh mục",
                "Hình ảnh",
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
            {data?.data.map((item) => (
              <TableRow
                key={item._id}
                className="hover:bg-blue-50 transition"
              >
                {/* Tên danh mục */}
                <TableCell className="font-medium">{item.name} {item.id}</TableCell>

                {/* Hình ảnh */}
                <TableCell>
                  {item.image ? (
                    <img
                      src={item.image}
                      width={80}
                      className="rounded-md border"
                      alt="Ảnh danh mục"
                    />
                  ) : (
                    <span className="text-gray-400 italic">-</span>
                  )}
                </TableCell>

                {/* Mô tả */}
                <TableCell>{item.description || "-"}</TableCell>

                {/* Thời gian tạo */}
                <TableCell>{dayjs(item.createdAt).format("YYYY-MM-DD HH:mm")}</TableCell>

                {/* Hành động */}
                <TableCell className="flex gap-2">
                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    onClick={() => handleRemoveCategory(item._id)}
                  >
                    Xóa
                  </Button>
                  <Button
                    variant="contained"
                    color="warning"
                    size="small"
                    onClick={() => handleDetailEdit(item._id)}
                  >
                    Sửa
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination */}
        {data?.data.length ? (
          <div className="flex justify-between items-center px-3 py-5">
            <div className="text-sm text-gray-600">
              Hiển thị danh mục thứ{" "}
              {((data?.page || 1) - 1) * LIMIT_RECORD_PER_PAGE + 1} đến{" "}
              {(data?.page || 1) < Math.ceil(data.total / LIMIT_RECORD_PER_PAGE)
                ? (data?.page || 1) * LIMIT_RECORD_PER_PAGE
                : data.total}{" "}
              trong tổng số {data.total}
            </div>
            <Pagination
              page={state.page}
              onChange={(event, value) => handleChangePage(value)}
              count={Math.ceil(data.total / LIMIT_RECORD_PER_PAGE)}
              shape="rounded"
              color="primary"
            />
          </div>
        ) : null}
      </TableContainer>

      {/* Dialog Thêm/Sửa */}
      <DialogCategory
        open={isOpenCategory}
        onClose={() => {
          setIsOpenCategory(false);
          setDetailCategory(null);
        }}
        onSuccess={() => handleGetList()}
        detailCategory={detailCategory}
      />
    </div>
  );
};
export default CategoryManagement;