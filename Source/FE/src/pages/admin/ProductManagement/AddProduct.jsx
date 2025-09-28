import {
  Button,
  Chip,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { addProduct, updateProduct } from "../../../services/productService";
import { useNavigate, useSearchParams } from "react-router-dom";
import useGetDetailProduct from "../../../hooks/useGetDetailProduct";
import { toast } from "react-toastify";
import useGetListCategory from "../../../hooks/useGetListCategory";
import useGetListProducts from "../../../hooks/useGetListProducts";
import BackupIcon from '@mui/icons-material/Backup';
import axios from "axios";
import { API_UPLOAD } from "../../../contants/apis";
import axiosClient from "../../../services/axiosClient";
import { getImageUrl } from "../../../libs/img";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
const SERVER = "http://localhost:3100";
const AddProduct = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const idProduct = searchParams.get("id");
  const { data, handleGetListCate } = useGetListCategory({
    page: 1,
    limit: 10,
  });
  console.log(data, "nnnnnnnnnnnnnnnnnn");

  console.log(idProduct, "idProduct");
  const { detailProduct } = useGetDetailProduct(idProduct);
  const { handleGetList } = useGetListProducts({
    page: 1,
    limit: 10,
  });
  console.log(detailProduct, "lalalalala");
  const [newAtt, setNewAtt] = useState("");
  const [initialForm, setInitialForm] = useState(null);
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    salePercent: "",
    images: [],
    categoryId: "",
    amount: "",
    attributes: {},
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const uploadImageFile = async (files) => {
    const formData = new FormData();
    Array.from(files).forEach((file) => {
      formData.append("files", file);
    })
    const res = await axiosClient.post(API_UPLOAD, formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    return res.data;
  };
  const handleChangeImage = async (files) => {
    if (!files) return;
    const uploaded = await uploadImageFile(files);
    setForm((prev) => ({
      ...prev,
      images: [...prev.images, ...uploaded.map(f => f.url)],
    }));
  };
  const handleRemoveImage = (index) => {
    const newImage = [...form.images];
    newImage.splice(index, 1);
    setForm((prev) => ({
      ...prev,
      images: newImage,
    }));
  };
  // bước sửa lý thuộc tính
  const handleAddAttr = () => {
    console.log(newAtt.toLowerCase());
    if (newAtt && !form.attributes[newAtt]) {
      setForm((prev) => ({
        ...prev,
        attributes: { ...prev.attributes, [newAtt.toLowerCase()]: newAtt.toLowerCase() === "color" ? [{ name: "", price: 0, sizes: [] }] : [] },
      }));
    }
    setNewAtt("");
  };
  const handleAttrValueAdd = (key) => {
    if (key.toLowerCase() === "color") {
      setForm((prev) => ({
        ...prev,
        attributes: { ...prev.attributes, [key]: [...prev.attributes[key], { name: "", price: 0, sizes: [] }] },
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        attributes: {
          ...prev.attributes,
          [key]: [...prev.attributes[key], ""],
        },
      }));
    }
  };
  console.log(form, ">>>> form")
  const handleAttrValueDelete = (key, index, value) => {
    console.log(key)
    console.log(index)
    console.log(value)
    console.log(form.attributes[key])
    console.log(form.attributes[key][index])
    const newAttte = [...form.attributes[key]]
    newAttte[index].sizes = newAttte[index].sizes.filter((chip) => chip !== value);
    setForm((prev) => ({
      ...prev,
      attributes: { ...prev.attributes, [key]: newAttte },
    }));
  };
  const getChangedFields = (original, updated) => {
    const changed = {};
    Object.keys(updated).forEach((key) => {
      const originalValue = original[key];
      const updatedValue = updated[key];
      const isObject =
        typeof updatedValue === "object" && updatedValue !== null;
      const isDifferent = isObject
        ? JSON.stringify(originalValue) !== JSON.stringify(updatedValue)
        : originalValue !== updatedValue;
      if (isDifferent) {
        changed[key] = updatedValue;
      }
    });
    return changed;
  };
  // gửi product
  const hanldeCreateProduct = async () => {
    const parsedAttributes = {};

    Object.entries(form.attributes).forEach(([key, values]) => {
      if (key.toLowerCase() === "color") {
        parsedAttributes[key] = values.map((val) => ({
          ...val,
          price: Number(val.price) || 0,
          sizes: val.sizes || [],
        }));
      } else {
        parsedAttributes[key] = values;
      }
    });
    const parsedForm = {
      ...form,
      amount: +form.amount,
      price: +form.price,
      salePercent: +form.salePercent,
      attributes: parsedAttributes,
    };
    console.log(parsedForm);
    try {
      if (idProduct) {
        const changedFields = getChangedFields(initialForm, parsedForm);
        if (Object.keys(changedFields).length === 0) {
          toast.warning("Không có sự thay đổi nào", {
            autoClose: 500,
          })
          return;
        }
        const res = await updateProduct(idProduct, changedFields);
        toast.success("Sửa thành công", {
          autoClose: 500,
        });
        console.log(res, "qpqpqpqpqpqpqpq");
      } else {
        const res = await addProduct(parsedForm);
        toast.success("Thêm thành công", {
          autoClose: 500,
        });
        console.log(res, "ressssssProduct");
      }
      navigate("/admin/product");
      handleGetList();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (detailProduct) {
      const normalizedAttr = {};
      Object.entries(detailProduct.attributes).forEach(([key, values]) => {
        if (key.toLowerCase() === "color") {
          normalizedAttr[key] = values.map((k) => ({
            name: k.name,
            price: k?.variants[0]?.price ?? 0,
            sizes: k?.variants.map((item) => item.size).filter((u) => u !== "") || [],
          }))
        }
      })
      setForm({
        ...detailProduct,
        categoryId: typeof detailProduct.categoryId === "object"
          ? detailProduct.categoryId._id
          : detailProduct.categoryId,
        attributes: normalizedAttr,
      });
      setInitialForm({
        ...detailProduct,
        categoryId: typeof detailProduct.categoryId === "object"
          ? detailProduct.categoryId._id
          : detailProduct.categoryId,
        attributes: normalizedAttr,
      });
    }
  }, [detailProduct]);
  console.log(form, "pqqqqqsswswswdwdw")
  return (
    <div className="space-y-4">
      <TextField
        fullWidth
        label="Tên sản phẩm"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Mô tả"
        name="description"
        value={form.description}
        onChange={handleChange}
        multiline
        rows={3}
      />
      <TextField
        fullWidth
        type="number"
        label="Giá"
        name="price"
        value={form.price}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        type="number"
        label="Phần trăm giảm"
        name="salePercent"
        value={form.salePercent}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        type="number"
        label="Số lượng"
        name="amount"
        value={form.amount}
        onChange={handleChange}
      />

      <TextField
        fullWidth
        select
        label="Danh mục"
        name="categoryId"
        value={form.categoryId}
        onChange={handleChange}
      >
        {data?.data.map((cat) => (
          <MenuItem key={cat._id} value={cat._id}>
            {cat.slug}
          </MenuItem>
        ))}
      </TextField>
      <div className="space-y-2">
        <Typography variant="subtitle1">Ảnh sản phẩm</Typography>
        <input
          type="file"
          accept="image/*"
          multiple
          id="upload-images"
          style={{ display: "none" }}
          onChange={async (e) => {
            if (e.target.files) {
              await handleChangeImage(e.target.files);
              e.target.value = "";
            }
          }}
        />
        <label htmlFor="upload-images">
          <IconButton color="primary" component="span">
            <BackupIcon style={{ fontSize: 40 }} />
          </IconButton>
        </label>
        {form.images.map((img, idx) => (
          <div key={idx} className="flex items-center">
            <img
              src={getImageUrl(img)}
              alt=""
              className="max-w-[100px] w-full object-cover mt-2"
            />
            <IconButton onClick={() => handleRemoveImage(idx)}>
              <DeleteIcon />
            </IconButton>
          </div>
        ))}
      </div>
      <div className="space-y-2">
        <Typography variant="subtitle1">Thuộc tính</Typography>
        <div className="flex gap-2">
          <TextField
            label="Tên thuộc tính (VD: color, size...)"
            value={newAtt}
            onChange={(e) => setNewAtt(e.target.value)}
          />
          <Button
            onClick={handleAddAttr}
            variant="outlined"
          // startIcon={<Add />}
          >
            Thêm
          </Button>
        </div>
        {Object.entries(form.attributes).map(([key, values]) => (
          <div key={key} className="space-y-1">
            <div className="flex gap-4 items-center">
              <Typography variant="subtitle2">{key}</Typography>
              <AddCircleOutlineIcon onClick={() => handleAttrValueAdd(key)} />
              <IconButton
                size="small"
                color="error"
                onClick={() => {
                  const updatedAttributes = { ...form.attributes };
                  delete updatedAttributes[key];
                  setForm((prev) => ({
                    ...prev,
                    attributes: updatedAttributes,
                  }));
                }}
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </div>
            <div className="flex gap-2">
              {/* <TextField
                size="small"
                label={`Thêm ${key}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleAttrValueAdd(
                      key,
                      e.target.value
                    );
                    e.target.value = "";
                  }
                }}
              /> */}
            </div>
            {values.map((val, index) => (
              <div>
                {key.toLowerCase() === "color" ? (
                  <div className="flex gap-2">
                    <TextField
                      key={index}
                      value={val.name}
                      size="small"
                      onChange={(e) => {
                        const newAttri = [...values]
                        newAttri[index].name = e.target.value;
                        setForm((prev) => ({
                          ...prev,
                          attributes: { ...prev.attributes, [key]: newAttri }
                        }))
                      }}
                    />
                    <TextField
                      key={index}
                      value={val.price}
                      size="small"
                      onChange={(e) => {
                        const newValues = [...values]
                        newValues[index].price = Number(e.target.value);
                        setForm((prev) => ({
                          ...prev,
                          attributes: { ...prev.attributes, [key]: newValues }
                        }))
                      }}
                    />
                    <div>
                      <TextField
                        size="small"
                        label="Sizes (VD : M,L,S)"
                        // value={val.size.join(",")}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            const newValues = [...values];
                            newValues[index].sizes = [...newValues[index].sizes, e.target.value];
                            setForm((prev) => ({
                              ...prev,
                              attributes: { ...prev.attributes, [key]: newValues },
                            }));
                            e.target.value = ""
                          }
                        }}
                      />
                      <Stack direction="row" spacing={1} className="flex-wrap">
                        {val.sizes?.map((vall) => (
                          <Chip
                            key={vall}
                            label={vall}
                            onDelete={() => handleAttrValueDelete(key, index, vall)}
                          />
                        ))}
                      </Stack>
                    </div>
                  </div>
                ) : (<TextField
                  size="small"
                  value={val}
                  onChange={(e) => {
                    const newValues = [...values];
                    newValues[index] = e.target.value;
                    setForm((prev) => ({
                      ...prev,
                      attributes: { ...prev.attributes, [key]: newValues },
                    }));
                  }}
                />)}
              </div>
            ))}
          </div>
        ))}
      </div>
      <Button
        onClick={hanldeCreateProduct}
        fullWidth
        variant="contained"
        className="!mt-4"
        color="primary"
      >
        {detailProduct ? "Sửa sản phẩm" : "Thêm sản phẩm"}
      </Button>
    </div>
  );
};
export default AddProduct;