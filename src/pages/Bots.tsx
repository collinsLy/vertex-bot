
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { Search, SlidersHorizontal } from "lucide-react";
import Footer from "@/components/Footer";

const Bots = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([0, 20000]);
  const [showFilters, setShowFilters] = useState(false);
  
  const allBots = [
    {
      id: 1,
      name: "Forex Fury",
      description: "Popular automated trading bot with 63% success rate, specializing in short-term trades.",
      price: 2000,
      successRate: 63,
      type: "Short-term",
      platform: "MT4/MT5",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1740&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "1000pip Climber System",
      description: "Easy-to-use, fully automated forex trading bot with independently verified results.",
      price: 3539,
      successRate: 58,
      type: "Medium-term",
      platform: "MT4",
      image: "https://images.unsplash.com/photo-1613843439331-2a0893e9336c?q=80&w=1528&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Forex Steam 10",
      description: "Well-established trading bot with over a decade of use and a strong user base.",
      price: 5246,
      successRate: 60,
      type: "Multi-strategy",
      platform: "MT4/MT5",
      image: "https://images.unsplash.com/photo-1642543348745-03d1a51812e5?q=80&w=1528&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "AI Trading Trends",
      description: "AI-powered forex trading bot that identifies and capitalizes on market trends automatically.",
      price: 16803,
      successRate: 71,
      type: "AI-powered",
      platform: "MT5",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1740&auto=format&fit=crop"
    },
    {
      id: 5,
      name: "ADVANCED Marvel Premium A.I",
      description: "Fully automated forex trading bot with an advanced digit analysis system using AI algorithms.",
      price: 9048,
      successRate: 67,
      type: "AI-powered",
      platform: "MT4/MT5",
      image: "https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=1740&auto=format&fit=crop"
    }
  ];

  // Filter bots based on search term and price range
  const filteredBots = allBots.filter(bot => 
    bot.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    bot.price >= priceRange[0] && 
    bot.price <= priceRange[1]
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-16 px-4 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Trading Bot Marketplace</h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Browse our selection of high-performance forex trading bots
            </p>
          </div>
          
          {/* Search and Filter */}
          <div className="bg-background/40 backdrop-blur-lg p-6 rounded-lg mb-12">
            <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" />
                <Input
                  type="text"
                  placeholder="Search bots..."
                  className="pl-10 bg-white/5 border-white/10 text-white"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button 
                variant="outline" 
                className="w-full md:w-auto text-white border-white/20 hover:bg-white/10"
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>
            
            {showFilters && (
              <div className="space-y-6 border-t border-white/10 pt-6">
                <div>
                  <Label className="text-white mb-2 block">Price Range (KES)</Label>
                  <div className="flex justify-between mb-2">
                    <span className="text-white/60">KES {priceRange[0].toLocaleString()}</span>
                    <span className="text-white/60">KES {priceRange[1].toLocaleString()}</span>
                  </div>
                  <Slider
                    defaultValue={priceRange}
                    max={20000}
                    step={500}
                    onValueChange={setPriceRange}
                    className="my-4"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-white mb-4 block">Bot Type</Label>
                    <div className="space-y-2">
                      {['Short-term', 'Medium-term', 'Multi-strategy', 'AI-powered'].map((type) => (
                        <div key={type} className="flex items-center space-x-2">
                          <Checkbox id={`type-${type}`} />
                          <Label htmlFor={`type-${type}`} className="text-white/80">{type}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <Label className="text-white mb-4 block">Platform</Label>
                    <div className="space-y-2">
                      {['MT4', 'MT5', 'cTrader', 'NinjaTrader'].map((platform) => (
                        <div key={platform} className="flex items-center space-x-2">
                          <Checkbox id={`platform-${platform}`} />
                          <Label htmlFor={`platform-${platform}`} className="text-white/80">{platform}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Bots Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBots.map((bot) => (
              <Card key={bot.id} className="bg-transparent hover-lift glass-effect border-0 overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={bot.image} 
                    alt={bot.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-white">{bot.name}</h3>
                    <div className="bg-accent/20 text-white px-2 py-1 rounded text-xs">
                      {bot.successRate}% Success
                    </div>
                  </div>
                  <p className="text-white/70 mb-4">{bot.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-white/10 text-white/80 px-2 py-1 rounded-full text-xs">
                      {bot.type}
                    </span>
                    <span className="bg-white/10 text-white/80 px-2 py-1 rounded-full text-xs">
                      {bot.platform}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-white">KES {bot.price.toLocaleString()}</span>
                    <Button asChild variant="outline" className="text-white border-white/20 hover:bg-white/10">
                      <Link to={`/bots/${bot.id}`}>View Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredBots.length === 0 && (
            <div className="text-center py-12">
              <p className="text-white/60 text-lg">No bots found matching your criteria.</p>
              <Button 
                variant="outline" 
                className="mt-4 text-white border-white/20 hover:bg-white/10"
                onClick={() => {
                  setSearchTerm("");
                  setPriceRange([0, 20000]);
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Bots;
