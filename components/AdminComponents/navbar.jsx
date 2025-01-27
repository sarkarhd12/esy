"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
    const pathname = usePathname();
    const router = useRouter();
    const [servicesOpen, setServicesOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("jwtToken");
        router.push("/admin/login");
    };

    return (
        <nav className="fixed left-0 top-0 h-screen w-64 bg-white shadow-lg flex flex-col">
            {/* Logo Section */}
            <div className="p-4 border-b">
                <h1 className="text-xl font-bold text-blue-600">Easy Capital</h1>
                <p className="text-sm text-gray-500">Admin Panel</p>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 py-4">
                <Link href="/admin/home" 
                    className={`px-6 py-3 flex items-center text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors ${
                        pathname === "/admin/home" ? "bg-blue-50 text-blue-600" : ""
                    }`}>
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Dashboard
                </Link>

                {/* Services Dropdown */}
                <div className="relative">
                    <button 
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className={`w-full px-6 py-3 flex items-center justify-between text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors ${
                            pathname.includes("/admin/services") ? "bg-blue-50 text-blue-600" : ""
                        }`}
                    >
                        <div className="flex items-center">
                            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            Services
                        </div>
                        <svg 
                            className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'transform rotate-180' : ''}`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {/* Dropdown Menu */}
                    {servicesOpen && (
                        <div className="pl-11 bg-gray-50">
                            <Link href="/admin/business-loans" 
                                className={`block py-2 px-4 text-sm text-gray-700 hover:text-blue-600 transition-colors ${
                                    pathname === "/admin/business-loans" ? "text-blue-600" : ""
                                }`}>
                                Business Loans
                            </Link>
                            <Link href="/admin/gst-services" 
                                className={`block py-2 px-4 text-sm text-gray-700 hover:text-blue-600 transition-colors ${
                                    pathname === "/admin/gst-services" ? "text-blue-600" : ""
                                }`}>
                                GST Services
                            </Link>
                            <Link href="/admin/registration-services" 
                                className={`block py-2 px-4 text-sm text-gray-700 hover:text-blue-600 transition-colors ${
                                    pathname === "/admin/registration-services" ? "text-blue-600" : ""
                                }`}>
                                Registration Services
                            </Link>
                        </div>
                    )}
                </div>

                <Link href="/admin/sub-admins" 
                    className={`px-6 py-3 flex items-center text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors ${
                        pathname === "/admin/sub-admins" ? "bg-blue-50 text-blue-600" : ""
                    }`}>
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    Sub Admins
                </Link>
            </div>

            {/* Logout Button */}
            <button
                onClick={handleLogout}
                className="m-4 px-6 py-2 flex items-center text-red-600 hover:bg-red-50 rounded transition-colors"
            >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Logout
            </button>
        </nav>
    );
}
