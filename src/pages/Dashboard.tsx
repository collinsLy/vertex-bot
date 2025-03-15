
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import DashboardNav from "@/components/DashboardNav";
import DashboardOverview from "@/components/dashboard/DashboardOverview";
import DashboardDownloads from "@/components/dashboard/DashboardDownloads";
import DashboardPurchaseHistory from "@/components/dashboard/DashboardPurchaseHistory";
import DashboardSupportTickets from "@/components/dashboard/DashboardSupportTickets";
import DashboardSettings from "@/components/dashboard/DashboardSettings";
import Footer from "@/components/Footer";

const Dashboard = () => {
  const { isAuthenticated, isLoading } = useAuth();

  // If authentication is still loading, show loading indicator
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#F2FF44] mx-auto"></div>
          <p className="mt-4 text-white/70">Loading...</p>
        </div>
      </div>
    );
  }

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <DashboardNav />
      
      <div className="pt-24 pb-20">
        <Routes>
          <Route path="/" element={<DashboardOverview />} />
          <Route path="/downloads" element={<DashboardDownloads />} />
          <Route path="/purchase-history" element={<DashboardPurchaseHistory />} />
          <Route path="/support-tickets" element={<DashboardSupportTickets />} />
          <Route path="/settings" element={<DashboardSettings />} />
        </Routes>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
