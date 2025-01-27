"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axiosInstance from "@/utils/axios";

export default function Dashboard() {
    const [subAdmins, setSubAdmins] = useState([]);
    const [userRole, setUserRole] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("jwtToken");
        if (!token) {
            router.push("/admin/login");
        } else {
            const role = localStorage.getItem("userRole");
            setUserRole(role);
            fetchSubAdmins();
        }
    }, []);

    const fetchSubAdmins = async () => {
        try {
            setIsLoading(true);
            const { data } = await axiosInstance.get("/admin/subadmins", {
                headers: { authorization: `Bearer ${localStorage.getItem("jwtToken")}` },
            });
            setSubAdmins(data.subAdmins || []);
        } catch (error) {
            console.error("Error fetching sub-admins", error);
            setSubAdmins([]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleApprove = async (id) => {
        try {
            await axiosInstance.put(`/admin/approve/${id}`, {}, {
                headers: { authorization: `Bearer ${localStorage.getItem("jwtToken")}` },
            });
            alert("Sub-admin approved");
            fetchSubAdmins();
        } catch (error) {
            console.error("Error approving sub-admin", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axiosInstance.delete(`/admin/subadmin/${id}`, {
                headers: { authorization: `Bearer ${localStorage.getItem("jwtToken")}` },
            });
            alert("Sub-admin deleted");
            fetchSubAdmins();
        } catch (error) {
            console.error("Error deleting sub-admin", error);
        }
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    return (
        <section className="container px-4 mx-auto">
            <div className="sm:flex sm:items-center sm:justify-between">
                <div>
                    <div className="flex items-center gap-x-3">
                        <h2 className="text-lg font-medium text-gray-800">Sub-admins</h2>
                        <span className="px-3 py-1 text-xs text-blue-500 bg-blue-100 rounded-full">{subAdmins.length} Sub-admins</span>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">Manage all sub-admins.</p>
                </div>
            </div>

            <div className="flex flex-col mt-6">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left text-gray-500">Name</th>
                                        <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left text-gray-500">Mobile</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">Role</th>
                                        {userRole === "1" && (
                                            <th scope="col" className="relative py-3.5 px-4 text-sm font-normal text-left text-gray-500">Actions</th>
                                        )}
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {subAdmins.map(({ userId, name, mobile, role }) => (
                                        <tr key={userId}>
                                            <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                <h2 className="font-medium text-gray-800">{name}</h2>
                                            </td>
                                            <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                                                <div className="text-gray-600">{mobile}</div>
                                            </td>
                                            <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                <div className={`inline px-3 py-1 text-sm font-normal rounded-full ${role === -2 ? "bg-yellow-100 text-yellow-600" : "bg-blue-100 text-blue-500"}`}>
                                                    {role === -2 ? "Pending" : "Sub-admin"}
                                                </div>
                                            </td>
                                            {userRole === "1" && (
                                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                    <div className="flex items-center gap-x-6">
                                                        {role === -2 && (
                                                            <button
                                                                onClick={() => handleApprove(userId)}
                                                                className="text-green-500 transition-colors duration-200 hover:text-green-700 focus:outline-none"
                                                            >
                                                                Approve
                                                            </button>
                                                        )}
                                                        <button
                                                            onClick={() => handleDelete(userId)}
                                                            className="text-red-500 transition-colors duration-200 hover:text-red-700 focus:outline-none"
                                                        >
                                                            Delete
                                                        </button>
                                                    </div>
                                                </td>
                                            )}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
