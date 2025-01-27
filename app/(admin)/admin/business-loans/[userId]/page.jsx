// "use client";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import axiosInstance from "@/utils/axios";

// export default function UserProfile({ params }) {
//     const { userId } = params; // Retrieve dynamic userId
//     const [user, setUser] = useState(null);
//     const router = useRouter();

//     useEffect(() => {
//         fetchUsers();
//     }, []);

//     const fetchUsers = async () => {
//         try {
//             const { data } = await axiosInstance.get("/get-users", {
//                 headers: { authorization: `Bearer ${localStorage.getItem("jwtToken")}` },
//             });

//             // Find user matching userId
//             const matchedUser = data.find((u) => u.userId === userId);
//             if (matchedUser) {
//                 setUser(matchedUser);
//             } else {
//                 router.push("/admin/admin/business-loans"); // Redirect if user not found
//             }
//         } catch (error) {
//             console.error("Error fetching user details", error);
//         }
//     };

//     if (!user) {
//         return <div>Loading user details...</div>;
//     }

//     return (
//         <section className="container px-4 mx-auto">
//             <h2 className="text-lg font-medium text-gray-800">User Profile</h2>
//             <div className="mt-4">
//                 <p><strong>User ID:</strong> {user.userId}</p>
//                 <p><strong>Name:</strong> {user.name}</p>
//                 <p><strong>Email:</strong> {user.email}</p>
//                 <p><strong>Mobile:</strong> {user.mobile}</p>
//                 <p><strong>Business Name:</strong> {user.details?.shopName || "N/A"}</p>
//                 <p><strong>Business Type:</strong> {user.details?.businessType || "N/A"}</p>
//                 <p><strong>City:</strong> {user.details?.city || "N/A"}</p>
//                 <p><strong>State:</strong> {user.details?.state || "N/A"}</p>
//                 <p><strong>Pincode:</strong> {user.details?.pincode || "N/A"}</p>
//                 <p><strong>PAN:</strong> {user.details?.pan || "N/A"}</p>
//                 <p><strong>GST:</strong> {user.details?.gst || "N/A"}</p>
//                 <p><strong>GST Number:</strong> {user.details?.gstNumber || "N/A"}</p>
//                 <p><strong>Account Type:</strong> {user.details?.accountType || "N/A"}</p>
//                 <p><strong>Business Age:</strong> {user.details?.businessAge || "N/A"}</p>
//                 <p><strong>Created At:</strong> {user.createdAt}</p>
//                 <p><strong>Updated At:</strong> {user.updatedAt}</p>
//             </div>
//         </section>
//     );
// }


// "use client";
// import React, { useState, useEffect } from "react";  // Explicitly import React
// import { useRouter } from "next/navigation";
// import axiosInstance from "@/utils/axios";

// export default function UserProfile({ params }) {
//     // Unwrap params using React.use() instead of direct access
//     const { userId } = React.use(params);

//     const [user, setUser] = useState(null);
//     const router = useRouter();

//     useEffect(() => {
//         fetchUsers();
//     }, []);

//     const fetchUsers = async () => {
//         try {
//             const { data } = await axiosInstance.get("/get-users", {
//                 headers: { authorization: `Bearer ${localStorage.getItem("jwtToken")}` },
//             });

//             // Find user matching userId
//             const matchedUser = data.find((u) => u.userId === userId);
//             if (matchedUser) {
//                 setUser(matchedUser);
//             } else {
//                 router.push("/admin/admin/business-loans"); // Redirect if user not found
//             }
//         } catch (error) {
//             console.error("Error fetching user details", error);
//         }
//     };

//     if (!user) {
//         return <div>Loading user details...</div>;
//     }

//     return (
//         <section className="container px-4 mx-auto">
//             <h2 className="text-lg font-medium text-gray-800">User Profile</h2>
//             <div className="mt-4">
//                 <p><strong>User ID:</strong> {user.userId}</p>
//                 <p><strong>Name:</strong> {user.name}</p>
//                 <p><strong>Email:</strong> {user.email}</p>
//                 <p><strong>Mobile:</strong> {user.mobile}</p>
//                 <p><strong>Business Name:</strong> {user.details?.shopName || "N/A"}</p>
//                 <p><strong>Business Type:</strong> {user.details?.businessType || "N/A"}</p>
//                 <p><strong>City:</strong> {user.details?.city || "N/A"}</p>
//                 <p><strong>State:</strong> {user.details?.state || "N/A"}</p>
//                 <p><strong>Pincode:</strong> {user.details?.pincode || "N/A"}</p>
//                 <p><strong>PAN:</strong> {user.details?.pan || "N/A"}</p>
//                 <p><strong>GST:</strong> {user.details?.gst || "N/A"}</p>
//                 <p><strong>GST Number:</strong> {user.details?.gstNumber || "N/A"}</p>
//                 <p><strong>Account Type:</strong> {user.details?.accountType || "N/A"}</p>
//                 <p><strong>Business Age:</strong> {user.details?.businessAge || "N/A"}</p>
//                 <p><strong>Created At:</strong> {user.createdAt}</p>
//                 <p><strong>Updated At:</strong> {user.updatedAt}</p>
//             </div>
//         </section>
//     );
// }


"use client";
import React, { useState, useEffect } from "react";  // Explicitly import React
import { useRouter } from "next/navigation";
import axiosInstance from "@/utils/axios";

export default function UserProfile({ params }) {
    // Unwrap params using React.use() instead of direct access
    const { userId } = React.use(params);

    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const { data } = await axiosInstance.get("/get-users", {
                headers: { authorization: `Bearer ${localStorage.getItem("jwtToken")}` },
            });

            // Find user matching userId
            const matchedUser = data.find((u) => u.userId === userId);
            if (matchedUser) {
                setUser(matchedUser);
            } else {
                router.push("/admin/admin/business-loans"); // Redirect if user not found
            }
        } catch (error) {
            console.error("Error fetching user details", error);
        }
    };

    if (!user) {
        return <div className="flex justify-center items-center min-h-screen">Loading user details...</div>;
    }

    return (
        <section className="container px-6 mx-auto py-8 bg-gray-50">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-semibold text-gray-800">User Profile</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-blue-100 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-gray-700">Personal Details</h3>
                        <div className="mt-4">
                            <p><strong className="font-medium text-gray-600">User ID:</strong> {user.userId}</p>
                            <p><strong className="font-medium text-gray-600">Name:</strong> {user.name}</p>
                            <p><strong className="font-medium text-gray-600">Email:</strong> {user.email}</p>
                            <p><strong className="font-medium text-gray-600">Mobile:</strong> {user.mobile}</p>
                        </div>
                    </div>

                    <div className="bg-green-100 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-gray-700">Business Details</h3>
                        <div className="mt-4">
                            <p><strong className="font-medium text-gray-600">Business Name:</strong> {user.details?.shopName || "N/A"}</p>
                            <p><strong className="font-medium text-gray-600">Business Type:</strong> {user.details?.businessType || "N/A"}</p>
                            <p><strong className="font-medium text-gray-600">City:</strong> {user.details?.city || "N/A"}</p>
                            <p><strong className="font-medium text-gray-600">State:</strong> {user.details?.state || "N/A"}</p>
                            <p><strong className="font-medium text-gray-600">Pincode:</strong> {user.details?.pincode || "N/A"}</p>
                        </div>
                    </div>
                </div>

                <div className="mt-6">
                    <h3 className="text-xl font-semibold text-gray-700">Additional Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <p><strong className="font-medium text-gray-600">PAN:</strong> {user.details?.pan || "N/A"}</p>
                            <p><strong className="font-medium text-gray-600">GST:</strong> {user.details?.gst || "N/A"}</p>
                            <p><strong className="font-medium text-gray-600">GST Number:</strong> {user.details?.gstNumber || "N/A"}</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <p><strong className="font-medium text-gray-600">Account Type:</strong> {user.details?.accountType || "N/A"}</p>
                            <p><strong className="font-medium text-gray-600">Business Age:</strong> {user.details?.businessAge || "N/A"}</p>
                        </div>
                    </div>
                </div>

                <div className="mt-6">
                    <p><strong className="font-medium text-gray-600">Created At:</strong> {user.createdAt}</p>
                    <p><strong className="font-medium text-gray-600">Updated At:</strong> {user.updatedAt}</p>
                </div>
            </div>
        </section>
    );
}
