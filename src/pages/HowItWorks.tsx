
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Monitor, Download, Settings, TrendingUp } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Monitor className="w-12 h-12 text-accent" />,
      title: "Browse and Select",
      description: "Browse our marketplace of verified trading bots. Each bot includes detailed performance metrics, features, and user reviews to help you make an informed decision.",
      details: [
        "Compare performance metrics across different bots",
        "Read user reviews and success stories",
        "Check compatibility with your preferred trading platform",
        "Evaluate pricing and features"
      ]
    },
    {
      icon: <Download className="w-12 h-12 text-accent" />,
      title: "Purchase and Download",
      description: "Once you've found the perfect bot, complete the secure checkout process and receive instant access to download your bot files.",
      details: [
        "Select your preferred payment method",
        "Complete the secure checkout process",
        "Receive immediate confirmation email",
        "Access download link in your account dashboard"
      ]
    },
    {
      icon: <Settings className="w-12 h-12 text-accent" />,
      title: "Installation and Setup",
      description: "Follow our step-by-step installation guide to set up your trading bot on your preferred platform. Our detailed instructions make the process simple, even for beginners.",
      details: [
        "Import the bot files to your trading platform",
        "Configure your risk parameters and preferences",
        "Connect to your trading account",
        "Test the bot in a demo environment (recommended)"
      ]
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-accent" />,
      title: "Start Trading and Monitor",
      description: "Activate your trading bot and let it start working for you. Monitor performance, adjust settings as needed, and watch your trades execute automatically.",
      details: [
        "Activate the bot on your trading platform",
        "Monitor performance through the platform interface",
        "Make adjustments to optimize results",
        "Access our support team if you need assistance"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-16 px-4 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">How It Works</h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Your journey to automated forex trading is just a few simple steps away
            </p>
          </div>
          
          <div className="space-y-24 mb-16">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
                <div className="md:w-1/2">
                  <div className="bg-white/5 glass-effect p-8 rounded-2xl hover-lift">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                      {step.icon}
                    </div>
                    <div className="text-4xl font-bold text-white mb-2">Step {index + 1}</div>
                    <h3 className="text-2xl font-semibold text-white mb-4">{step.title}</h3>
                    <p className="text-white/80 mb-6">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <span className="text-accent mr-2">•</span>
                          <span className="text-white/70">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="md:w-1/2 relative">
                  <div className="aspect-video bg-white/10 rounded-xl overflow-hidden relative">
                    <img 
                      src={`https://images.unsplash.com/photo-164${1000 + index * 100}-8215?q=80&w=1740&auto=format&fit=crop`} 
                      alt={`Step ${index + 1}: ${step.title}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-30"></div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-accent/20 rounded-full blur-3xl -z-10"></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-white/5 glass-effect rounded-xl p-8 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-white/80 mb-6">
              Browse our selection of high-performance trading bots and start automating your forex trading today.
            </p>
            <Button asChild className="bg-[#F2FF44] text-black hover:bg-[#E2EF34]">
              <Link to="/bots" className="flex items-center gap-2">
                Browse Trading Bots
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default HowItWorks;
