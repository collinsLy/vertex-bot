
import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, MessageSquare, CreditCard } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Vertex Bots</h3>
            <p className="text-white/60">
              Providing premium forex trading bots with verified performance for traders worldwide.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/60 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/bots" className="text-white/60 hover:text-white transition-colors">Browse Bots</Link></li>
              <li><Link to="/how-it-works" className="text-white/60 hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/faq" className="text-white/60 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Support</h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-white/60 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/support" className="text-white/60 hover:text-white transition-colors">Help Center</Link></li>
              <li><Link to="/refund-policy" className="text-white/60 hover:text-white transition-colors">Refund Policy</Link></li>
              <li><Link to="/terms" className="text-white/60 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <p className="text-white/60">support@vertexbots.com</p>
            <p className="text-white/60">+254 712 345 678</p>
            <div className="flex flex-col space-y-2 mt-4">
              <div className="flex items-center space-x-2 text-white/60">
                <MessageSquare className="w-4 h-4" />
                <span>Live chat available</span>
              </div>
              <div className="flex items-center space-x-2 text-white/60">
                <CreditCard className="w-4 h-4" />
                <span>Secure payments</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center text-white/60 mb-4 md:mb-0">
              © 2024 Vertex Bots. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link to="/privacy" className="text-white/60 hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-white/60 hover:text-white transition-colors">Terms</Link>
              <Link to="/cookies" className="text-white/60 hover:text-white transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
