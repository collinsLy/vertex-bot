
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LogIn, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-white">Vertex Bots</div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link>
          <Link to="/bots" className="text-white/80 hover:text-white transition-colors">Bots</Link>
          <Link to="/how-it-works" className="text-white/80 hover:text-white transition-colors">How It Works</Link>
          <Link to="/faq" className="text-white/80 hover:text-white transition-colors">FAQ</Link>
          <Link to="/support" className="text-white/80 hover:text-white transition-colors">Support</Link>
          <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
            Register
          </Button>
          <Button className="bg-[#F2FF44] text-black hover:bg-[#E2EF34]">
            Login
            <LogIn className="w-4 h-4 ml-2" />
          </Button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg md:hidden">
            <div className="flex flex-col p-4 space-y-4">
              <Link to="/" className="text-white/80 hover:text-white transition-colors py-2">Home</Link>
              <Link to="/bots" className="text-white/80 hover:text-white transition-colors py-2">Bots</Link>
              <Link to="/how-it-works" className="text-white/80 hover:text-white transition-colors py-2">How It Works</Link>
              <Link to="/faq" className="text-white/80 hover:text-white transition-colors py-2">FAQ</Link>
              <Link to="/support" className="text-white/80 hover:text-white transition-colors py-2">Support</Link>
              <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 w-full">
                Register
              </Button>
              <Button className="bg-[#F2FF44] text-black hover:bg-[#E2EF34] w-full">
                Login
                <LogIn className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
