
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import {
  LayoutDashboard,
  Download,
  History,
  TicketCheck,
  Settings,
  LogOut,
  Menu,
  X,
  ShoppingCart
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const DashboardNav = () => {
  const { logout, user } = useAuth();
  const { itemCount } = useCart();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { 
      name: "Overview", 
      path: "/dashboard", 
      icon: <LayoutDashboard className="w-5 h-5 mr-2" /> 
    },
    { 
      name: "Downloads", 
      path: "/dashboard/downloads", 
      icon: <Download className="w-5 h-5 mr-2" /> 
    },
    { 
      name: "Purchase History", 
      path: "/dashboard/purchase-history", 
      icon: <History className="w-5 h-5 mr-2" /> 
    },
    { 
      name: "Support Tickets", 
      path: "/dashboard/support-tickets", 
      icon: <TicketCheck className="w-5 h-5 mr-2" /> 
    },
    { 
      name: "Account Settings", 
      path: "/dashboard/settings", 
      icon: <Settings className="w-5 h-5 mr-2" /> 
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-[#FAFAF8]/80 backdrop-blur-lg border-b border-[#E6E4DD]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-[#141413] mr-8">Vertex Bots</Link>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link to={item.path} key={item.path}>
                <Button
                  variant={location.pathname === item.path ? "default" : "ghost"}
                  className={location.pathname === item.path 
                    ? "bg-[#F2FF44] text-[#141413] hover:bg-[#C7FB76]" 
                    : "text-[#605F5B] hover:text-[#141413] hover:bg-[#F0EFEA]"}
                  size="sm"
                >
                  {item.icon}
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>
        
        <div className="flex items-center">
          <p className="mr-4 hidden md:block text-[#605F5B]">
            Welcome, <span className="font-medium text-[#141413]">{user?.name}</span>
          </p>
          
          <Link to="/dashboard/cart" className="mr-4 relative">
            <Button 
              variant="ghost" 
              size="icon"
              className="text-[#605F5B] hover:text-[#141413] hover:bg-[#F0EFEA]"
            >
              <ShoppingCart className="w-5 h-5" />
              {itemCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-[#F2FF44] text-[#141413] hover:bg-[#F2FF44] px-1.5 min-w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </Badge>
              )}
            </Button>
          </Link>
          
          <Button 
            variant="outline" 
            className="hidden md:flex text-[#141413] border-[#E6E4DD] hover:bg-[#F0EFEA]"
            onClick={logout}
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-[#141413] focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#FAFAF8]/95 backdrop-blur-lg">
          <div className="flex flex-col p-4 border-t border-[#E6E4DD]">
            {navItems.map((item) => (
              <Link to={item.path} key={item.path} onClick={() => setIsMenuOpen(false)}>
                <Button
                  variant={location.pathname === item.path ? "default" : "ghost"}
                  className={`w-full justify-start mb-2 ${
                    location.pathname === item.path 
                      ? "bg-[#F2FF44] text-[#141413] hover:bg-[#C7FB76]" 
                      : "text-[#605F5B] hover:text-[#141413] hover:bg-[#F0EFEA]"
                  }`}
                >
                  {item.icon}
                  {item.name}
                </Button>
              </Link>
            ))}
            <Link to="/dashboard/cart" onClick={() => setIsMenuOpen(false)}>
              <Button
                variant={location.pathname === "/dashboard/cart" ? "default" : "ghost"}
                className={`w-full justify-start mb-2 ${
                  location.pathname === "/dashboard/cart"
                    ? "bg-[#F2FF44] text-[#141413] hover:bg-[#C7FB76]" 
                    : "text-[#605F5B] hover:text-[#141413] hover:bg-[#F0EFEA]"
                }`}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Cart {itemCount > 0 && `(${itemCount})`}
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="w-full justify-start text-[#141413] border-[#E6E4DD] hover:bg-[#F0EFEA] mt-2"
              onClick={logout}
            >
              <LogOut className="w-5 h-5 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default DashboardNav;
