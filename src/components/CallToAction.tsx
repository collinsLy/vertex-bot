
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Start Trading Smarter Today
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Join hundreds of successful traders who have automated their trading strategy with our premium forex bots
          </p>
          <Button asChild className="px-8 py-6 text-lg bg-[#F2FF44] text-black hover:bg-[#E2EF34] flex items-center gap-2 mx-auto">
            <Link to="/bots">
              Browse Trading Bots
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
