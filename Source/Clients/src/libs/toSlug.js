export const toSlug = (str) => {
  return str
    .toLowerCase()
    .normalize('NFD')                // chuyển thành dạng "á" => "a" + "́"
    .replace(/[\u0300-\u036f]/g, '') // xóa dấu
    .replace(/đ/g, 'd')              // chuyển đ → d
    .replace(/[^a-z0-9\s-]/g, '')    // xóa ký tự đặc biệt
    .trim()
    .replace(/\s+/g, '-')            // thay khoảng trắng bằng -
    .replace(/-+/g, '-')             // loại bỏ nhiều dấu - liên tiếp
}
