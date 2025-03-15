
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedBots = () => {
  const featuredBots = [
    {
      id: 1,
      name: "Forex Fury",
      description: "Popular automated trading bot with 63% success rate, specializing in short-term trades.",
      price: 2000,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1740&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "1000pip Climber System",
      description: "Easy-to-use, fully automated forex trading bot with independently verified results.",
      price: 3539,
      image: "https://images.unsplash.com/photo-1613843439331-2a0893e9336c?q=80&w=1528&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Forex Steam 10",
      description: "Well-established trading bot with over a decade of use and a strong user base.",
      price: 5246,
      image: "https://images.unsplash.com/photo-1642543348745-03d1a51812e5?q=80&w=1528&auto=format&fit=crop"
    }
  ];

  return (
    <div className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">Featured Bots</h2>
            <p className="text-xl text-white/60">Our most popular trading solutions</p>
          </div>
          <Button asChild variant="ghost" className="text-white hover:bg-white/10">
            <Link to="/bots" className="flex items-center gap-2">
              View all bots
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBots.map((bot) => (
            <Card key={bot.id} className="bg-transparent hover-lift glass-effect border-0 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={bot.image} 
                  alt={bot.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{bot.name}</h3>
                <p className="text-white/70 mb-4">{bot.description}</p>
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
      </div>
    </div>
  );
};

export default FeaturedBots;
