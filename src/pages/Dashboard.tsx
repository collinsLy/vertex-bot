
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import DashboardNav from "@/components/DashboardNav";
import DashboardOverview from "@/components/dashboard/DashboardOverview";
import DashboardDownloads from "@/components/dashboard/DashboardDownloads";
import DashboardPurchaseHistory from "@/components/dashboard/DashboardPurchaseHistory";
import DashboardSupportTickets from "@/components/dashboard/DashboardSupportTickets";
import DashboardSettings from "@/components/dashboard/DashboardSettings";
import DashboardCart from "@/components/dashboard/DashboardCart";
import DashboardCheckout from "@/components/dashboard/DashboardCheckout";
import Footer from "@/components/Footer";

const Dashboard = () => {
  const { isAuthenticated, isLoading } = useAuth();

  // If authentication is still loading, show loading indicator
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAFAF8]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#F2FF44] mx-auto"></div>
          <p className="mt-4 text-[#605F5B]">Loading...</p>
        </div>
      </div>
    );
  }

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <DashboardNav />
      
      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto relative px-4">
          <div className="absolute inset-0 bg-[#8989DE]/5 backdrop-blur-3xl -z-10"></div>
          <Routes>
            <Route path="/" element={<DashboardOverview />} />
            <Route path="/downloads" element={<DashboardDownloads />} />
            <Route path="/purchase-history" element={<DashboardPurchaseHistory />} />
            <Route path="/support-tickets" element={<DashboardSupportTickets />} />
            <Route path="/settings" element={<DashboardSettings />} />
            <Route path="/cart" element={<DashboardCart />} />
            <Route path="/checkout" element={<DashboardCheckout />} />
          </Routes>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
