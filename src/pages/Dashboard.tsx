
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import DashboardNav from "@/components/DashboardNav";
import DashboardOverview from "@/components/dashboard/DashboardOverview";
import DashboardDownloads from "@/components/dashboard/DashboardDownloads";
import DashboardPurchaseHistory from "@/components/dashboard/DashboardPurchaseHistory";
import DashboardSupportTickets from "@/components/dashboard/DashboardSupportTickets";
import DashboardSettings from "@/components/dashboard/DashboardSettings";
import DashboardCart from "@/components/dashboard/DashboardCart";
import DashboardCheckout from "@/components/dashboard/DashboardCheckout";
import Footer from "@/components/Footer";
import { toast } from "@/components/ui/use-toast";

const Dashboard = () => {
  const { isAuthenticated, isLoading } = useAuth();
  const { clearCart } = useCart();
  const location = useLocation();

  // Check for payment completion when returning from payment gateway
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const paymentStatus = searchParams.get('payment_status');
    const pendingOrderStr = sessionStorage.getItem('pendingOrder');
    
    if (paymentStatus && pendingOrderStr) {
      try {
        const pendingOrder = JSON.parse(pendingOrderStr);
        
        if (paymentStatus === 'success') {
          // Success scenario
          toast({
            title: "Payment successful!",
            description: "Your order has been processed successfully.",
            variant: "default",
          });
          
          // We'll handle the redirect to downloads with purchased items in state
          window.history.replaceState({}, '', '/dashboard/downloads');
          window.location.href = '/dashboard/downloads?checkout_complete=true';
          
          // Clear the cart and remove pending order
          clearCart();
        } else if (paymentStatus === 'failed') {
          toast({
            title: "Payment failed",
            description: "There was an issue processing your payment. Please try again.",
            variant: "destructive",
          });
        }
        
        // Clean up the session storage
        sessionStorage.removeItem('pendingOrder');
      } catch (error) {
        console.error("Error processing payment return:", error);
      }
    }
  }, [location, clearCart]);

  // If authentication is still loading, show loading indicator
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#141413]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#F2FF44] mx-auto"></div>
          <p className="mt-4 text-white">Loading...</p>
        </div>
      </div>
    );
  }

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-[#141413]">
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
