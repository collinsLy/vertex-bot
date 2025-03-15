import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { toast } from "@/components/ui/use-toast";
import { 
  BarChart, 
  ShieldCheck, 
  Server, 
  CheckCircle,
  ArrowRight, 
  HelpCircle, 
  TrendingUp,
  ShoppingCart 
} from "lucide-react";

const BotDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("features");
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const bots = [
    {
      id: 1,
      name: "Forex Fury",
      fullDescription: "Forex Fury is a popular automated trading bot with a claimed 63% success rate. It specializes in short-term trades and is compatible with MetaTrader 4 (MT4) and MetaTrader 5 (MT5) platforms. It allows traders to customize risk settings, timeframes, and currency pairs.",
      price: 2000,
      features: [
        "63% verified success rate",
        "Compatible with MT4 and MT5",
        "Customizable risk settings",
        "Short-term trading strategy",
        "Lifetime updates and support",
        "Multiple currency pair support"
      ],
      requirements: [
        "Windows or macOS operating system",
        "MetaTrader 4 or 5 platform",
        "Minimum of $100 trading capital recommended",
        "Stable internet connection"
      ],
      performance: {
        monthlyAvg: "+8.2%",
        winRate: "63%",
        drawdown: "12%",
        tradesPerMonth: "120-150"
      },
      setupSteps: [
        "Download the bot files after purchase",
        "Import the EA into your MetaTrader platform",
        "Set your risk parameters",
        "Activate and start trading"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1740&auto=format&fit=crop",
      relatedBots: [2, 3]
    },
    {
      id: 2,
      name: "1000pip Climber System",
      fullDescription: "This is an easy-to-use, fully automated forex trading bot designed to provide high-performance signals. The bot's results have been independently verified by MyFXBook, making it a reliable choice for both beginners and experienced traders.",
      price: 3539,
      features: [
        "58% verified success rate",
        "Compatible with MT4",
        "Medium-term trading strategy",
        "Independently verified by MyFXBook",
        "Email alerts for trades",
        "Multiple currency pair support"
      ],
      requirements: [
        "Windows operating system",
        "MetaTrader 4 platform",
        "Minimum of $200 trading capital recommended",
        "Stable internet connection"
      ],
      performance: {
        monthlyAvg: "+5.7%",
        winRate: "58%",
        drawdown: "15%",
        tradesPerMonth: "80-100"
      },
      setupSteps: [
        "Download the bot package after purchase",
        "Install on your MetaTrader 4 platform",
        "Configure settings using provided guide",
        "Start trading"
      ],
      image: "https://images.unsplash.com/photo-1613843439331-2a0893e9336c?q=80&w=1528&auto=format&fit=crop",
      relatedBots: [1, 3]
    },
    {
      id: 3,
      name: "Forex Steam 10",
      fullDescription: "A well-established trading bot with over a decade of use and a strong user base. It comes with customizable features that allow traders to adjust settings to fit their individual trading styles. It is known for its efficiency and regular updates.",
      price: 5246,
      features: [
        "60% verified success rate",
        "Compatible with MT4 and MT5",
        "Multi-strategy approach",
        "Regular updates and improvements",
        "10+ years of proven results",
        "24/7 customer support"
      ],
      requirements: [
        "Windows or macOS operating system",
        "MetaTrader 4 or 5 platform",
        "Minimum of $300 trading capital recommended",
        "Stable internet connection"
      ],
      performance: {
        monthlyAvg: "+6.8%",
        winRate: "60%",
        drawdown: "18%",
        tradesPerMonth: "100-130"
      },
      setupSteps: [
        "Download Forex Steam after purchase",
        "Follow installation wizard",
        "Configure trading parameters",
        "Activate and monitor performance"
      ],
      image: "https://images.unsplash.com/photo-1642543348745-03d1a51812e5?q=80&w=1528&auto=format&fit=crop",
      relatedBots: [1, 4]
    },
    {
      id: 4,
      name: "AI Trading Trends",
      fullDescription: "This is an AI-powered forex trading bot that identifies and capitalizes on market trends automatically. It is designed to make smart trading decisions based on real-time market analysis.",
      price: 16803,
      features: [
        "71% verified success rate",
        "Compatible with MT5",
        "AI-powered trend analysis",
        "Real-time market data processing",
        "Advanced risk management system",
        "Compatible with all major currency pairs"
      ],
      requirements: [
        "Windows 10 or newer operating system",
        "MetaTrader 5 platform",
        "Minimum of $500 trading capital recommended",
        "High-speed internet connection"
      ],
      performance: {
        monthlyAvg: "+12.3%",
        winRate: "71%",
        drawdown: "22%",
        tradesPerMonth: "200-250"
      },
      setupSteps: [
        "Download the AI Trading Trends software",
        "Install and authenticate with your license key",
        "Connect to your MT5 platform",
        "Set risk parameters and begin trading"
      ],
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1740&auto=format&fit=crop",
      relatedBots: [5, 3]
    },
    {
      id: 5,
      name: "ADVANCED Marvel Premium A.I",
      fullDescription: "A fully automated forex trading bot with an advanced digit analysis system. It uses AI-based algorithms to predict market movements, allowing traders to execute profitable trades without manual analysis.",
      price: 9048,
      features: [
        "67% verified success rate",
        "Compatible with MT4 and MT5",
        "AI-powered market prediction",
        "Advanced digit analysis system",
        "Custom alert system",
        "Works with major and exotic pairs"
      ],
      requirements: [
        "Windows 8 or newer operating system",
        "MetaTrader 4 or 5 platform",
        "Minimum of $400 trading capital recommended",
        "Stable internet connection"
      ],
      performance: {
        monthlyAvg: "+9.7%",
        winRate: "67%",
        drawdown: "20%",
        tradesPerMonth: "150-180"
      },
      setupSteps: [
        "Download ADVANCED Marvel Premium A.I",
        "Install on your MetaTrader platform",
        "Configure AI settings using wizard",
        "Start automated trading"
      ],
      image: "https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=1740&auto=format&fit=crop",
      relatedBots: [4, 1]
    }
  ];

  const bot = bots.find(b => b.id.toString() === id);

  if (!bot) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-16 px-4 flex justify-center items-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-4">Bot Not Found</h1>
            <p className="text-white/60 mb-8">The trading bot you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link to="/bots">Return to Marketplace</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedBotDetails = bot.relatedBots.map(relatedId => bots.find(b => b.id === relatedId)).filter(Boolean);

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      toast({
        title: "Login Required",
        description: "Please log in to add items to your cart.",
        variant: "destructive",
      });
      navigate("/login");
      return;
    }

    addToCart({
      id: bot.id.toString(),
      name: bot.name,
      description: bot.fullDescription.substring(0, 100) + "...",
      price: bot.price,
      imageUrl: bot.image,
    });

    toast({
      title: "Added to Cart",
      description: `${bot.name} has been added to your cart.`,
      variant: "default",
    });
  };

  const handleBuyNow = () => {
    if (!isAuthenticated) {
      toast({
        title: "Login Required",
        description: "Please log in to purchase.",
        variant: "destructive",
      });
      navigate("/login");
      return;
    }

    addToCart({
      id: bot.id.toString(),
      name: bot.name,
      description: bot.fullDescription.substring(0, 100) + "...",
      price: bot.price,
      imageUrl: bot.image,
    });

    navigate("/dashboard/checkout");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-16 px-4 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumbs */}
          <div className="mb-8">
            <div className="flex items-center text-white/60 text-sm">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/bots" className="hover:text-white">Bots</Link>
              <span className="mx-2">/</span>
              <span className="text-white">{bot.name}</span>
            </div>
          </div>
          
          {/* Bot Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="rounded-xl overflow-hidden">
              <img 
                src={bot.image} 
                alt={bot.name} 
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <h1 className="text-4xl font-bold text-white">{bot.name}</h1>
                <div className="bg-accent/20 text-white px-3 py-1 rounded-full text-sm flex items-center">
                  <ShieldCheck className="w-4 h-4 mr-2" />
                  Verified Performance
                </div>
              </div>
              
              <p className="text-white/80 text-lg">{bot.fullDescription}</p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-white/60 mb-1">Success Rate</div>
                  <div className="text-2xl font-bold text-white">{bot.performance.winRate}</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-white/60 mb-1">Monthly Return</div>
                  <div className="text-2xl font-bold text-white">{bot.performance.monthlyAvg}</div>
                </div>
              </div>
              
              <div className="border-t border-white/10 pt-6">
                <div className="text-3xl font-bold text-white mb-4">KES {bot.price.toLocaleString()}</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button 
                    className="w-full bg-[#F2FF44] text-black hover:bg-[#E2EF34]"
                    onClick={handleBuyNow}
                  >
                    Buy Now
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full text-white border-white/20 hover:bg-white/10"
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tabs Navigation */}
          <div className="border-b border-white/10 mb-8">
            <div className="flex overflow-x-auto space-x-8">
              <button
                onClick={() => setActiveTab("features")}
                className={`pb-4 text-lg font-medium whitespace-nowrap ${activeTab === "features" ? "text-white border-b-2 border-accent" : "text-white/60 hover:text-white"}`}
              >
                Features
              </button>
              <button
                onClick={() => setActiveTab("performance")}
                className={`pb-4 text-lg font-medium whitespace-nowrap ${activeTab === "performance" ? "text-white border-b-2 border-accent" : "text-white/60 hover:text-white"}`}
              >
                Performance Data
              </button>
              <button
                onClick={() => setActiveTab("setup")}
                className={`pb-4 text-lg font-medium whitespace-nowrap ${activeTab === "setup" ? "text-white border-b-2 border-accent" : "text-white/60 hover:text-white"}`}
              >
                Setup Instructions
              </button>
              <button
                onClick={() => setActiveTab("faq")}
                className={`pb-4 text-lg font-medium whitespace-nowrap ${activeTab === "faq" ? "text-white border-b-2 border-accent" : "text-white/60 hover:text-white"}`}
              >
                FAQ
              </button>
            </div>
          </div>
          
          {/* Tab Content */}
          <div className="mb-16">
            {activeTab === "features" && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-4">Key Features</h3>
                    <ul className="space-y-3">
                      {bot.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-white/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-4">System Requirements</h3>
                    <ul className="space-y-3">
                      {bot.requirements.map((req, index) => (
                        <li key={index} className="flex items-start">
                          <Server className="w-5 h-5 text-white/60 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-white/80">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === "performance" && (
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold text-white mb-4">Performance Metrics</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card className="glass-effect">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-white/80">Monthly Return</h4>
                        <TrendingUp className="w-5 h-5 text-accent" />
                      </div>
                      <div className="text-3xl font-bold text-white">{bot.performance.monthlyAvg}</div>
                    </CardContent>
                  </Card>
                  
                  <Card className="glass-effect">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-white/80">Win Rate</h4>
                        <BarChart className="w-5 h-5 text-accent" />
                      </div>
                      <div className="text-3xl font-bold text-white">{bot.performance.winRate}</div>
                    </CardContent>
                  </Card>
                  
                  <Card className="glass-effect">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-white/80">Max Drawdown</h4>
                        <TrendingUp className="w-5 h-5 text-accent rotate-180" />
                      </div>
                      <div className="text-3xl font-bold text-white">{bot.performance.drawdown}</div>
                    </CardContent>
                  </Card>
                  
                  <Card className="glass-effect">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-white/80">Monthly Trades</h4>
                        <BarChart className="w-5 h-5 text-accent" />
                      </div>
                      <div className="text-3xl font-bold text-white">{bot.performance.tradesPerMonth}</div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-white mb-4">Performance Chart</h4>
                  <div className="aspect-video bg-white/10 rounded-lg flex items-center justify-center">
                    <p className="text-white/60">Performance chart would be displayed here</p>
                  </div>
                  <p className="mt-4 text-white/60 text-sm">
                    * Past performance is not indicative of future results. Trading involves risk.
                  </p>
                </div>
              </div>
            )}
            
            {activeTab === "setup" && (
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold text-white mb-4">Setup Instructions</h3>
                
                <div className="space-y-6">
                  {bot.setupSteps.map((step, index) => (
                    <div key={index} className="flex">
                      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <p className="text-white/80 text-lg">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-white/5 rounded-xl p-6 mt-8">
                  <h4 className="text-xl font-semibold text-white mb-4">Need Help?</h4>
                  <p className="text-white/80 mb-4">
                    We provide detailed setup instructions with every purchase. If you need additional assistance, our support team is available to help.
                  </p>
                  <Button asChild variant="outline" className="text-white border-white/20 hover:bg-white/10">
                    <Link to="/support">Contact Support</Link>
                  </Button>
                </div>
              </div>
            )}
            
            {activeTab === "faq" && (
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold text-white mb-4">Frequently Asked Questions</h3>
                
                <div className="space-y-6">
                  <div className="bg-white/5 rounded-xl p-6">
                    <div className="flex items-start">
                      <HelpCircle className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">Is this bot suitable for beginners?</h4>
                        <p className="text-white/80">
                          Yes, {bot.name} is designed to be user-friendly for traders of all experience levels. We provide detailed setup instructions and our support team is available to assist.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-6">
                    <div className="flex items-start">
                      <HelpCircle className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">What is the minimum deposit required?</h4>
                        <p className="text-white/80">
                          We recommend a minimum of KES {(bot.price * 0.1).toLocaleString()} to start trading with {bot.name}, although this can vary based on your broker's requirements and your risk management strategy.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-6">
                    <div className="flex items-start">
                      <HelpCircle className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">Do you offer a refund policy?</h4>
                        <p className="text-white/80">
                          We offer a 30-day money-back guarantee if the bot doesn't perform as described. Please refer to our refund policy for detailed terms and conditions.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-6">
                    <div className="flex items-start">
                      <HelpCircle className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">How do I receive the bot after purchase?</h4>
                        <p className="text-white/80">
                          Upon completing your purchase, you'll receive an email with download instructions and your license key. You can also access your purchases from your account dashboard.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Related Bots */}
          {relatedBotDetails.length > 0 && (
            <div>
              <div className="flex justify-between items-end mb-8">
                <h3 className="text-2xl font-semibold text-white">Related Bots</h3>
                <Button asChild variant="ghost" className="text-white hover:bg-white/10">
                  <Link to="/bots" className="flex items-center gap-2">
                    View all bots
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedBotDetails.map((relatedBot) => (
                  <Card key={relatedBot.id} className="bg-transparent hover-lift glass-effect border-0 overflow-hidden">
                    <div className="flex h-full">
                      <div className="w-1/3 overflow-hidden">
                        <img 
                          src={relatedBot.image} 
                          alt={relatedBot.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="w-2/3 p-4">
                        <h4 className="text-lg font-semibold text-white mb-2">{relatedBot.name}</h4>
                        <p className="text-white/70 text-sm mb-3 line-clamp-2">{relatedBot.fullDescription}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-white font-bold">KES {relatedBot.price.toLocaleString()}</span>
                          <Button asChild variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                            <Link to={`/bots/${relatedBot.id}`}>View</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BotDetail;
