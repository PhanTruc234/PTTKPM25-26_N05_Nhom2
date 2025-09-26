import { Button, MenuItem, Select, TextField } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { getUser, updateUser } from '../../../services/authenService';

export const ProfileInfomation = () => {
  const user = useSelector((state) => state.authenSlice);
  console.log(user);

  const [form, setForm] = useState({
    name: user?.user?.name,
    email: user?.user?.email,
    phone: "",
    city: "",
    ward: "",
    address: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  const [country, setCountry] = useState([]);
  const [city, setCity] = useState("");
  const [homeTown, setHomeTown] = useState([]);
  const [nameHome, setNameHome] = useState("")
  const handleCountry = async () => {
    try {
      if (city) {
        const res = await axios.get(`/address-kit/2025-07-01/provinces/${+city < 10 ? "0" + +city : +city}/communes`);
        console.log(res, "reshometown");
        setHomeTown(res.data.communes.flat());
      } else {
        const res = await axios.get("/address-kit/2025-07-01/provinces");
        setCountry(res.data.provinces);
        console.log(res, "rescountry");
      }
      console.log(country);

    } catch (error) {
      console.log(error);
    }
  }
  const handleNameCity = (e) => {
    const value = e.target.value;
    setCity(value);

    const selected = country.find((c) => c.code === value);
    console.log(selected, "selectedselected");

    if (selected) {
      setForm((prev) => ({
        ...prev,
        city: selected.name,
      }))
    }
  };
  const handleNameTown = (e) => {
    const value = e.target.value;
    setNameHome(value);

    const selected = homeTown.find((c) => c.code === value);
    if (selected) {
      setForm((prev) => ({
        ...prev,
        ward: selected.name,
      }))
    }
  };
  const handleEditUser = async () => {
    try {
      const res = await updateUser(user.user._id, form)
    } catch (error) {
      console.log(error);
    }
  }
  const handleGetUser = async () => {
    try {
      const res = await getUser(user.user._id)
      console.log(res, "llllllllllllllllll")
      setForm((prev) => ({
        ...prev,
        name: res.data.name,
        email: res.data.email,
        phone: res.data.phone,
        city: res.data.city,
        ward: res.data.ward,
        address: res.data.address,
      }))
      const selectedCity = country.find((c) => c.name === res.data.city);
      if (selectedCity) {
        setCity(selectedCity.code);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    handleCountry();
  }, []);
  useEffect(() => {
    if (city) {
      handleCountry();
    }
  }, [city]);
  useEffect(() => {
    handleGetUser();
  }, [country]);
  useEffect(() => {
    if (homeTown.length > 0 && form.ward) {
      const selectedWard = homeTown.find((c) => c.name === form.ward);
      if (selectedWard) {
        setNameHome(selectedWard.code);
      }
    }
  }, [homeTown, form.ward]);
  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-2xl p-8 space-y-6 sm:mt-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Cập nhật thông tin cá nhân
      </h2>

      <div className="space-y-4">
        <TextField
          fullWidth
          type="text"
          label="Tên"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          type="email"
          label="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          type="text"
          label="Số điện thoại"
          name="phone"
          value={form.phone}
          onChange={handleChange}
        />

        <div className="grid grid-cols-2 gap-4">
          <Select
            value={city}
            onChange={handleNameCity}
            displayEmpty
            fullWidth
          >
            <MenuItem value="">
              <em>Chọn thành phố</em>
            </MenuItem>
            {country.map((cou) => (
              <MenuItem key={cou.code} value={cou.code}>
                {cou.name}
              </MenuItem>
            ))}
          </Select>

          <Select
            value={nameHome}
            onChange={handleNameTown}
            displayEmpty
            fullWidth
          >
            <MenuItem value="">
              <em>Chọn phường xã</em>
            </MenuItem>
            {homeTown.map((cou) => (
              <MenuItem key={cou.code} value={cou.code}>
                {cou.name}
              </MenuItem>
            ))}
          </Select>
        </div>

        <TextField
          fullWidth
          type="text"
          label="Địa chỉ"
          name="address"
          value={form.address}
          onChange={handleChange}
        />
      </div>

      <div className="flex justify-end">
        <Button
          variant="contained"
          color="primary"
          onClick={handleEditUser}
          className="px-6 py-2 rounded-lg"
        >
          Sửa thông tin
        </Button>
      </div>
    </div>
  );
}
