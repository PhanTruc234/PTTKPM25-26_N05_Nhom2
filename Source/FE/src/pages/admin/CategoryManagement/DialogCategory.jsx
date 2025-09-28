import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  styled,
  TextField,
} from "@mui/material";
import React, { useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { toSlug } from "../../../libs/toSlug";
import { addCate, updateCategory } from "../../../services/categoryService";
// import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
export const DialogCategory = ({
  open,
  onClose,
  onSuccess,
  detailCategory,
}) => {
  // const navigate = useNavigate();
  const [isLoading] = React.useState(false);
  const [formCategory, setFormCategory] = React.useState({
    name: "",
    description: "",
    image: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormCategory((oldData) => ({
      ...oldData,
      [name]: value,
    }));
  };
  const handleClose = () => {
    onClose();
    onSuccess();
    setFormCategory({
      name: "",
      description: "",
      image: "",
    });
  };
  useEffect(() => {
    if (detailCategory && open) {
      setFormCategory(detailCategory);
    } else {
      setFormCategory({
        name: "",
        description: "",
        image: "",
      });
    }
  }, [detailCategory, open]);
  const handleAddCategory = async () => {
    // setIsLoading(true);
    try {
      const dataSend = {
        ...formCategory,
        slug: toSlug(formCategory.name),
      };
      if (detailCategory) {
        const res = await updateCategory(detailCategory._id, dataSend);
        if (res.status === 200) {
          toast.success("Sửa thành công", {
            autoClose: 500,
          });
          onSuccess();
          onClose();
        }
      } else {
        const res = await addCate(dataSend);
        console.log(res, "ressssssssssCate");
        if (res.status === 201) {
          toast.success("Thêm thành công", {
            autoClose: 500,
          });
          onSuccess();
          onClose();
        }
      }
    } catch (error) { }
  };
  return (
    <React.Fragment>
      <BootstrapDialog
        // onClick={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {detailCategory ? "Sửa sản phẩm" : "Thêm sản phẩm"}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <div className="flex flex-col gap-3 w-96">
            <TextField
              fullWidth
              label="Tên danh mục"
              name="name"
              value={formCategory.name}
              onChange={handleChange}
              required
            />
            <TextField
              disabled
              fullWidth
              label="Slug"
              name="slug"
              value={toSlug(formCategory.name)}
              required
            />
            <TextField
              fullWidth
              label="Mô tả"
              name="description"
              value={formCategory.description}
              onChange={handleChange}
              multiline
              rows={3}
            />
            <TextField
              fullWidth
              label="Link ảnh"
              name="image"
              value={formCategory.image}
              onChange={handleChange}
              required
            />
            {formCategory.image && (
              <div className="mt-2">
                <img
                  src={formCategory.image}
                  alt="preview"
                  className="h-32 object-cover rounded border"
                />
              </div>
            )}
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{
              color: "gray",
            }}
            autoFocus
            onClick={handleClose}
            variant="text"
            className={`${isLoading ? "bg-gray-50" : ""}`}
          >
            Quay lại
          </Button>
          <Button
            disabled={isLoading}
            autoFocus
            onClick={handleAddCategory}
            variant="contained"
          >
            {isLoading ? <CircularProgress size={20} /> : ""}{" "}
            {detailCategory ? "Sửa" : "Thêm"}
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
};
