import React, { useEffect, useMemo, useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Area
} from "recharts";
import axiosClient from "../../../services/axiosClient";
import { API_REVENUE } from "../../../contants/apis";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import useGetListUser from "../../../hooks/useGetListUser";
import { formatBigNumber } from "../../../libs/format-big-number";
export const Dashboard = () => {
    const { listUser, handleListUser } = useGetListUser();
    console.log(listUser, "uerrrr");
    const [revenue, setRevenue] = useState([]);
    const handleRevenue = async () => {
        try {
            const res = await axiosClient.get(`${API_REVENUE}/${2025}`);
            console.log(res, "ressssssssssVeneue");
            setRevenue(res.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        handleRevenue();
        handleListUser();
    }, [])
    const totalOrder = useMemo(
        () => revenue.reduce((acc, item) => acc + (item.orders || 0), 0),
        [revenue]
    );
    const totalRevenue = useMemo(
        () => revenue.reduce((acc, item) => acc + (item.revenue || 0), 0),
        [revenue]
    );
    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Tổng quan</h2>
            <div>
                <ul className="grid grid-cols-3 gap-6">
                    <li className="bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-xl p-6 shadow-lg flex flex-col justify-between">
                        <p className="text-lg font-medium">Tổng người dùng</p>
                        <div className="flex items-center gap-2 mt-4">
                            <AccountCircleIcon fontSize="large" />
                            <span className="text-2xl font-bold">{listUser?.length || 0}</span>
                        </div>
                    </li>
                    <li className="bg-gradient-to-r from-green-500 to-green-700 text-white rounded-xl p-6 shadow-lg flex flex-col justify-between">
                        <p className="text-lg font-medium">Doanh thu</p>
                        <div className="flex items-center gap-2 mt-4">
                            <AttachMoneyIcon fontSize="large" />
                            <span className="text-2xl font-bold">{formatBigNumber(totalRevenue)}</span>
                        </div>
                    </li>
                    <li className="bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-xl p-6 shadow-lg flex flex-col justify-between">
                        <p className="text-lg font-medium">Tổng đơn hàng đã bán</p>
                        <div className="flex items-center gap-2 mt-4">
                            <ShoppingCartIcon fontSize="large" />
                            <span className="text-2xl font-bold">{totalOrder}</span>
                        </div>
                    </li>
                </ul>
            </div>
            <ResponsiveContainer width="100%" height={500} className="mt-6">
                <LineChart data={revenue}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="month" tick={{ fill: '#475569', fontSize: 12 }} />
                    <YAxis tick={{ fill: '#475569', fontSize: 12 }} />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: '#ffffff',
                            borderRadius: '8px',
                            border: '1px solid #e2e8f0',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                        }}
                    />
                    <Legend wrapperStyle={{ paddingTop: '10px' }} />
                    <defs>
                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <Line
                        type="monotone"
                        dataKey="revenue"
                        stroke="#6366f1"
                        strokeWidth={3}
                        dot={{ r: 5, fill: '#6366f1', stroke: '#fff', strokeWidth: 2 }}
                        activeDot={{ r: 8 }}
                    />
                    <Area
                        type="monotone"
                        dataKey="revenue"
                        stroke={false}
                        fill="url(#colorRevenue)"
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
