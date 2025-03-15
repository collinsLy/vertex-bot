
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Automate Your Forex Trading with Professional Bots
          </h1>
          <p className="text-lg text-white/80 max-w-xl">
            Access high-performance trading bots with verified results. Start trading smarter and more efficiently today.
          </p>
          <Button asChild className="px-8 py-6 text-lg bg-white text-black hover:bg-white/90 flex items-center gap-2">
            <Link to="/bots">
              Browse Trading Bots
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
          <div className="grid grid-cols-3 gap-8 pt-8">
            <div>
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-white/60">Active traders</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">20+</div>
              <div className="text-white/60">Trading bots</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">65%</div>
              <div className="text-white/60">Avg. success rate</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1740&auto=format&fit=crop"
              alt="Forex Trading Dashboard"
              className="w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
