import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { deleteUser, listUser } from '../../../services/authenService'
import { toast } from 'react-toastify';
import useGetListUser from '../../../hooks/useGetListUser';

export const User = () => {
    const {listUser , handleListUser} = useGetListUser(); 
    const handleDeleteUser = async (id) => {
        try {
            const res = await deleteUser(id)
            if(res.status === 200){
                toast.success("Xóa thành công", {
                    autoClose : 500
                })
                handleListUser();
            }
        } catch (error) {
            console.log(error);
            
        }
    }
    console.log(listUser, "listUserlistUser");
  return (
    <div>
        <Table>
            <TableHead>
                <TableRow>
                    {[
                        "Id",
                        "Tên",
                        "Email",
                        "Phone",
                        "Address",
                        "Ward",
                        "City",
                        "Active",
                        "Action",
                    ].map((item) => (
                        <TableCell key={item} className="whitespace-nowrap p-3 text-base font-semibold text-blue-800">
                            {item}
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {listUser?.map((item) => (
                    <TableRow key={item._id}>
                        <TableCell>
                            {item._id}
                        </TableCell>
                        <TableCell>
                            {item.name}
                        </TableCell>
                        <TableCell>
                            {item.email}
                        </TableCell>
                        <TableCell>
                            {item.phone ? item.phone : "null"}
                        </TableCell>
                        <TableCell>
                            {item.address ? item.address : "null"}
                        </TableCell>
                        <TableCell>
                            {item.ward ? item.ward : "null"}
                        </TableCell>
                        <TableCell>
                            {item.city ? item.city : "null"}
                        </TableCell>
                        <TableCell>
                            <span
                                className={`px-3 py-1 rounded-full font-semibold ${
                                item.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                            }`}
                             >
                                {item.isActive ? 'Hoạt động' : 'Không hoạt động'}
                            </span>
                        </TableCell>
                        <TableCell>
                            <Button 
                            variant="outlined"
                            color="error"
                            size="small" onClick={() => handleDeleteUser(item._id)}>
                                Xóa
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </div>
  )
}
