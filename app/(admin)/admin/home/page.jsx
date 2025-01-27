// "use client";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import axiosInstance from "@/utils/axios";
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend
// } from 'chart.js';
// import { Bar } from 'react-chartjs-2';

// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend
// );

// const MONTHS = [
//     'January', 'February', 'March', 'April', 'May', 'June',
//     'July', 'August', 'September', 'October', 'November', 'December'
// ];

// const INDIAN_STATES = [
//     'Andhra Pradesh',
//     'Arunachal Pradesh',
//     'Assam',
//     'Bihar',
//     'Chhattisgarh',
//     'Goa',
//     'Gujarat',
//     'Haryana',
//     'Himachal Pradesh',
//     'Jharkhand',
//     'Karnataka',
//     'Kerala',
//     'Madhya Pradesh',
//     'Maharashtra',
//     'Manipur',
//     'Meghalaya',
//     'Mizoram',
//     'Nagaland',
//     'Odisha',
//     'Punjab',
//     'Rajasthan',
//     'Sikkim',
//     'Tamil Nadu',
//     'Telangana',
//     'Tripura',
//     'Uttar Pradesh',
//     'Uttarakhand',
//     'West Bengal',
//     'Andaman and Nicobar Islands',
//     'Chandigarh',
//     'Dadra and Nagar Haveli and Daman and Diu',
//     'Delhi',
//     'Jammu and Kashmir',
//     'Ladakh',
//     'Lakshadweep',
//     'Puducherry'
// ];

// export default function AdminHome() {
//     const [stats, setStats] = useState({
//         totalLoans: 0,
//         totalGst: 0,
//         totalRegistrations: 0
//     });
//     const [monthlyData, setMonthlyData] = useState({
//         loans: Array(12).fill(0),
//         gst: Array(12).fill(0),
//         registration: Array(12).fill(0)
//     });
//     const [stateData, setStateData] = useState({});
//     const [isLoading, setIsLoading] = useState(true);
//     const router = useRouter();

//     useEffect(() => {
//         const token = localStorage.getItem("jwtToken");
//         if (!token) {
//             router.push("/admin/login");
//         } else {
//             fetchAllData();
//         }
//     }, []);

//     const processMonthlyData = (data) => {
//         const monthlyCounts = Array(12).fill(0);
//         data.forEach(item => {
//             const date = new Date(item.createdAt);
//             const month = date.getMonth();
//             monthlyCounts[month]++;
//         });
//         return monthlyCounts;
//     };

//     const fetchAllData = async () => {
//         try {
//             setIsLoading(true);

//             // Fetch loan requests
//             const loanResponse = await axiosInstance.get("/get-users", {
//                 headers: { authorization: `Bearer ${localStorage.getItem("jwtToken")}` },
//             });
//             const loanData = loanResponse.data || [];

//             // Fetch GST requests
//             const gstResponse = await axiosInstance.get("/gst-requests/all", {
//                 headers: { authorization: `Bearer ${localStorage.getItem("jwtToken")}` },
//             });
//             const gstData = gstResponse.data.data || [];

//             // Fetch registration requests
//             const registrationResponse = await axiosInstance.get("/registeration-requests/all", {
//                 headers: { authorization: `Bearer ${localStorage.getItem("jwtToken")}` },
//             });
//             const registrationData = registrationResponse.data.data || [];

//             // Process total counts
//             const totalStats = {
//                 totalLoans: loanData.length,
//                 totalGst: gstData.length,
//                 totalRegistrations: registrationData.length
//             };
//             setStats(totalStats);

//             // Process monthly data
//             setMonthlyData({
//                 loans: processMonthlyData(loanData),
//                 gst: processMonthlyData(gstData),
//                 registration: processMonthlyData(registrationData)
//             });

//             // Process state-wise data from users only
//             const stateCount = {};
//             const totalUsers = {};

//             // Initialize all states with 0 count
//             INDIAN_STATES.forEach(state => {
//                 stateCount[state] = 0;
//             });

//             // Process user data for state distribution
//             loanData.forEach(user => {
//                 if (user.details && user.details.state) {
//                     // Normalize state name to match our predefined list
//                     const userState = INDIAN_STATES.find(
//                         state => state.toLowerCase() === user.details.state.trim().toLowerCase()
//                     );
//                     if (userState && !totalUsers[user.mobile]) {
//                         stateCount[userState]++;
//                         totalUsers[user.mobile] = true;
//                     }
//                 }
//             });

//             // Debug log to check the counts
//             console.log('State counts:', stateCount);
//             console.log('Total users processed:', Object.keys(totalUsers).length);

//             setStateData(stateCount);

//         } catch (error) {
//             console.error("Error fetching data:", error);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     const servicesChartOptions = {
//         responsive: true,
//         maintainAspectRatio: false,
//         plugins: {
//             legend: {
//                 position: 'top',
//                 labels: {
//                     font: {
//                         size: 12,
//                         weight: 'bold'
//                     },
//                     padding: 20
//                 }
//             },
//             title: {
//                 display: true,
//                 text: 'Monthly Services Overview',
//                 font: {
//                     size: 16,
//                     weight: 'bold'
//                 },
//                 padding: 20
//             },
//             tooltip: {
//                 backgroundColor: 'rgba(255, 255, 255, 0.9)',
//                 titleColor: '#000',
//                 titleFont: {
//                     size: 14,
//                     weight: 'bold'
//                 },
//                 bodyColor: '#666',
//                 bodyFont: {
//                     size: 12
//                 },
//                 borderColor: '#ddd',
//                 borderWidth: 1,
//                 padding: 12,
//                 displayColors: true,
//                 callbacks: {
//                     label: function(context) {
//                         return `${context.dataset.label}: ${context.parsed.y} requests`;
//                     }
//                 }
//             }
//         },
//         scales: {
//             x: {
//                 grid: {
//                     display: false
//                 },
//                 ticks: {
//                     font: {
//                         size: 12
//                     }
//                 }
//             },
//             y: {
//                 beginAtZero: true,
//                 grid: {
//                     color: 'rgba(0, 0, 0, 0.1)'
//                 },
//                 ticks: {
//                     stepSize: 1,
//                     font: {
//                         size: 12
//                     }
//                 }
//             }
//         }
//     };

//     const servicesChartData = {
//         labels: MONTHS,
//         datasets: [
//             {
//                 label: 'Business Loans',
//                 data: monthlyData.loans,
//                 backgroundColor: 'rgba(53, 162, 235, 0.7)',
//                 borderColor: 'rgb(53, 162, 235)',
//                 borderWidth: 2,
//                 borderRadius: 8,
//                 borderSkipped: false,
//                 hoverBackgroundColor: 'rgba(53, 162, 235, 0.9)',
//                 barThickness: 15
//             },
//             {
//                 label: 'GST Services',
//                 data: monthlyData.gst,
//                 backgroundColor: 'rgba(255, 99, 132, 0.7)',
//                 borderColor: 'rgb(255, 99, 132)',
//                 borderWidth: 2,
//                 borderRadius: 8,
//                 borderSkipped: false,
//                 hoverBackgroundColor: 'rgba(255, 99, 132, 0.9)',
//                 barThickness: 15
//             },
//             {
//                 label: 'Registration Services',
//                 data: monthlyData.registration,
//                 backgroundColor: 'rgba(75, 192, 192, 0.7)',
//                 borderColor: 'rgb(75, 192, 192)',
//                 borderWidth: 2,
//                 borderRadius: 8,
//                 borderSkipped: false,
//                 hoverBackgroundColor: 'rgba(75, 192, 192, 0.9)',
//                 barThickness: 15
//             }
//         ]
//     };

//     if (isLoading) {
//         return (
//             <div className="flex justify-center items-center min-h-[60vh]">
//                 <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//             </div>
//         );
//     }

//     return (
//         <div>
//             <h1 className="text-2xl font-bold mb-8">Dashboard Overview</h1>
            
//             {/* Stats Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//                 <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow duration-300">
//                     <h2 className="text-lg font-semibold text-gray-700">Business Loans</h2>
//                     <p className="text-3xl font-bold text-blue-600 mt-2">{stats.totalLoans}</p>
//                     <p className="text-sm text-gray-500 mt-1">Total Applications</p>
//                 </div>

//                 <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow duration-300">
//                     <h2 className="text-lg font-semibold text-gray-700">GST Services</h2>
//                     <p className="text-3xl font-bold text-green-600 mt-2">{stats.totalGst}</p>
//                     <p className="text-sm text-gray-500 mt-1">Total Requests</p>
//                 </div>

//                 <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow duration-300">
//                     <h2 className="text-lg font-semibold text-gray-700">Registration Services</h2>
//                     <p className="text-3xl font-bold text-purple-600 mt-2">{stats.totalRegistrations}</p>
//                     <p className="text-sm text-gray-500 mt-1">Total Applications</p>
//                 </div>
//             </div>

//             {/* Services Chart */}
//             <div className="bg-white rounded-lg shadow p-6 mb-8 hover:shadow-lg transition-shadow duration-300">
//                 <div className="h-[400px]">
//                     <Bar options={servicesChartOptions} data={servicesChartData} />
//                 </div>
//             </div>

//             {/* State-wise Distribution */}
//             <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow duration-300">
//                 <h2 className="text-lg font-semibold text-gray-700 mb-4">
//                     State-wise User Distribution 
//                     <span className="text-sm font-normal text-gray-500 ml-2">
//                         (Total Users: {Object.values(stateData).reduce((a, b) => a + b, 0)})
//                     </span>
//                 </h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                     {INDIAN_STATES.map(state => {
//                         const count = stateData[state] || 0;
//                         return (
//                             <div key={state} 
//                                 className={`flex justify-between items-center p-4 rounded-lg transition-colors duration-200 shadow-sm ${
//                                     count > 0 ? 'bg-blue-50 hover:bg-blue-100' : 'bg-gray-50 hover:bg-gray-100'
//                                 }`}
//                             >
//                                 <div className="flex flex-col">
//                                     <span className="font-semibold text-gray-800">{state}</span>
//                                     <span className="text-sm text-gray-500">Registered Users</span>
//                                 </div>
//                                 <div className={`flex items-center px-3 py-1 rounded-full ${
//                                     count > 0 ? 'bg-blue-100 text-blue-600' : 'bg-gray-200 text-gray-600'
//                                 }`}>
//                                     <span className="font-bold">{count}</span>
//                                 </div>
//                             </div>
//                         );
//                     })}
//                 </div>
//             </div>
//         </div>
//     );
// }

"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axiosInstance from "@/utils/axios";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

const MONTHS = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
];

const INDIAN_STATES = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
    "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan",
    "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh",
    "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands",
    "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi",
    "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry",
];

export default function AdminHome() {
    const [stats, setStats] = useState({
        totalLoans: 0,
        totalGst: 0,
        totalRegistrations: 0,
    });
    const [monthlyData, setMonthlyData] = useState({
        loans: Array(12).fill(0),
        gst: Array(12).fill(0),
        registration: Array(12).fill(0),
    });
    const [stateData, setStateData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [showStateDetails, setShowStateDetails] = useState(false);

    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("jwtToken");
        if (!token) {
            router.push("/admin/login");
        } else {
            fetchData();
        }
    }, []);

    const fetchData = async () => {
        try {
            setIsLoading(true);

            // Fetch loan data
            const loanResponse = await axiosInstance.get("/get-users", {
                headers: { authorization: `Bearer ${localStorage.getItem("jwtToken")}` },
            });
            const loanData = loanResponse.data || [];

            // Fetch GST data
            const gstResponse = await axiosInstance.get("/gst-requests/all", {
                headers: { authorization: `Bearer ${localStorage.getItem("jwtToken")}` },
            });
            const gstData = gstResponse.data.data || [];

            // Fetch registration data
            const registrationResponse = await axiosInstance.get("/registeration-requests/all", {
                headers: { authorization: `Bearer ${localStorage.getItem("jwtToken")}` },
            });
            const registrationData = registrationResponse.data.data || [];

            // Process total counts
            setStats({
                totalLoans: loanData.length,
                totalGst: gstData.length,
                totalRegistrations: registrationData.length,
            });

            // Process monthly data
            setMonthlyData({
                loans: processMonthlyData(loanData),
                gst: processMonthlyData(gstData),
                registration: processMonthlyData(registrationData),
            });

            // Process state-wise data
            const stateCount = {};
            INDIAN_STATES.forEach((state) => (stateCount[state] = 0));

            loanData.forEach((user) => {
                if (user.details && user.details.state) {
                    const userState = INDIAN_STATES.find(
                        (state) => state.toLowerCase() === user.details.state.trim().toLowerCase()
                    );
                    if (userState) {
                        stateCount[userState]++;
                    }
                }
            });

            setStateData(stateCount);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const processMonthlyData = (data) => {
        const monthlyCounts = Array(12).fill(0);
        data.forEach((item) => {
            const date = new Date(item.createdAt);
            const month = date.getMonth();
            monthlyCounts[month]++;
        });
        return monthlyCounts;
    };

    const barChartData = {
        labels: MONTHS,
        datasets: [
            {
                label: "Business Loans",
                data: monthlyData.loans,
                backgroundColor: "rgba(53, 162, 235, 0.7)",
            },
            {
                label: "GST Services",
                data: monthlyData.gst,
                backgroundColor: "rgba(255, 99, 132, 0.7)",
            },
            {
                label: "Registration Services",
                data: monthlyData.registration,
                backgroundColor: "rgba(75, 192, 192, 0.7)",
            },
        ],
    };

    const pieChartData = {
        labels: Object.keys(stateData),
        datasets: [
            {
                data: Object.values(stateData),
                backgroundColor: [
                    "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40",
                ],
                hoverOffset: 4,
            },
        ],
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-[60vh]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    return (
        <div>
            <h1 className="text-2xl font-bold mb-8">Dashboard Overview</h1>

            {/* Counts Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-lg font-semibold">Business Loans</h2>
                    <p className="text-3xl font-bold text-blue-600">{stats.totalLoans}</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-lg font-semibold">GST Services</h2>
                    <p className="text-3xl font-bold text-green-600">{stats.totalGst}</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-lg font-semibold">Registration Services</h2>
                    <p className="text-3xl font-bold text-purple-600">{stats.totalRegistrations}</p>
                </div>
            </div>

            {/* Bar Chart Section */}
            <div className="bg-white rounded-lg shadow p-6 mb-8">
                <h2 className="text-lg font-semibold mb-4">Monthly User Overview</h2>
                <Bar data={barChartData} />
            </div>

 {/* Pie Chart Section */}
<div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-lg font-semibold mb-4">State-wise User Distribution</h2>

    {/* Legend Section */}
    <div className="flex flex-wrap justify-center mb-4">
        {Object.keys(stateData).map((state, index) => (
            <div key={state} className="flex items-center space-x-2 mr-4 mb-2">
                <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: pieChartData.datasets[0].backgroundColor[index % pieChartData.datasets[0].backgroundColor.length] }}
                ></div>
                <span className="text-sm text-gray-600">{state}</span>
            </div>
        ))}
    </div>

    {/* Pie Chart */}
    <div className="flex justify-center">
        <div className="w-80 h-80"> {/* Slightly larger dimensions */}
            <Pie
                data={pieChartData}
                options={{
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false, // Disable the default legend
                        },
                        tooltip: {
                            callbacks: {
                                label: (context) => {
                                    const label = context.label || "";
                                    const value = context.raw || 0;
                                    return `${label}: ${value} users`;
                                },
                            },
                        },
                    },
                }}
                onClick={() => setShowStateDetails((prev) => !prev)}
            />
        </div>
    </div>

    {/* State Details */}
    {showStateDetails && (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(stateData).map(([state, count]) => (
                <div key={state} className="p-4 bg-gray-100 rounded-lg">
                    <span className="font-bold">{state}</span>: {count}
                </div>
            ))}
        </div>
    )}
</div>


            
        </div>
    );
}
