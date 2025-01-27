import { Inter } from "next/font/google";
import "../globals.css"; // Ensure this is included for Tailwind
import Navbar from "@/components/AdminComponents/navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Easy Capital",
    description: "Easy Capital Admin Panel",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function AdminLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                <main className="pl-64 min-h-screen bg-gray-50">
                    <div className="p-8">
                        {children}
                    </div>
                </main>
            </body>
        </html>
    );
}
