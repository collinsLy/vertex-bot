
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Info } from "lucide-react";
import { mockPurchasedBots, formatDate } from "@/lib/mock-data";
import { PurchasedBot } from "@/types/auth";
import { toast } from "@/components/ui/use-toast";

const DashboardDownloads = () => {
  const location = useLocation();
  const [bots, setBots] = useState<PurchasedBot[]>(mockPurchasedBots);
  
  useEffect(() => {
    // Check if we have newly purchased bots from checkout
    if (location.state?.checkoutComplete && location.state?.purchasedItems) {
      const newPurchases = location.state.purchasedItems.map((item: any) => ({
        id: item.id,
        name: item.name,
        description: item.description,
        price: item.price,
        purchasedAt: new Date().toISOString(),
        downloadUrl: "#",
        imageUrl: item.imageUrl,
      }));
      
      // Add new purchases to the top of the list
      const newBots = [...newPurchases, ...bots];
      
      // Filter out duplicates (in case user buys the same bot again)
      const uniqueBots = newBots.filter((bot, index, self) => 
        index === self.findIndex((b) => b.id === bot.id)
      );
      
      setBots(uniqueBots);
      
      // Show success toast
      toast({
        title: "Purchase Successful!",
        description: "Your bots are now available for download.",
        variant: "default",
      });
    }
  }, [location.state]);
  
  const handleDownload = (botName: string) => {
    toast({
      title: "Download Started",
      description: `${botName} is now downloading. Check your downloads folder.`,
      variant: "default",
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Your Downloads</h1>
        <p className="text-white/60">Download and install your purchased trading bots</p>
      </header>
      
      {bots.length === 0 ? (
        <Card className="glass-effect border-0">
          <CardContent className="p-8 text-center">
            <Info className="w-12 h-12 text-white/30 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-white mb-2">No downloads available</h2>
            <p className="text-white/60 mb-6">
              You haven't purchased any trading bots yet. Visit our marketplace to browse available bots.
            </p>
            <Button asChild className="bg-[#F2FF44] text-black hover:bg-[#E2EF34]">
              <a href="/bots">Browse Marketplace</a>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          {bots.map((bot) => (
            <Card key={bot.id} className="glass-effect border-0">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/4 h-48 md:h-auto">
                    <img
                      src={bot.imageUrl}
                      alt={bot.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex-1">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                      <h2 className="text-xl font-semibold text-white mb-2 md:mb-0">{bot.name}</h2>
                      <span className="text-white/60 text-sm">
                        Purchased on {formatDate(bot.purchasedAt)}
                      </span>
                    </div>
                    <p className="text-white/70 mb-4">{bot.description}</p>
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                      <div className="mb-4 md:mb-0">
                        <span className="text-white/60 text-sm block mb-1">License Key:</span>
                        <code className="bg-white/10 px-2 py-1 rounded text-white/90 text-xs">
                          VBOT-{bot.id}-{Math.random().toString(36).substring(2, 10).toUpperCase()}
                        </code>
                      </div>
                      <Button
                        className="bg-[#F2FF44] text-black hover:bg-[#E2EF34]"
                        onClick={() => handleDownload(bot.name)}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
      
      <div className="mt-8 p-6 bg-white/5 rounded-xl backdrop-blur-sm">
        <h3 className="text-white text-lg font-medium mb-4">Setup Instructions</h3>
        <ol className="list-decimal pl-5 space-y-3 text-white/70">
          <li>Download your purchased bot using the download button.</li>
          <li>Extract the ZIP file to a location of your choice.</li>
          <li>Open your MetaTrader platform (MT4 or MT5 as required by the bot).</li>
          <li>Import the .ex4 or .ex5 file to your platform's experts folder.</li>
          <li>During setup, enter your license key when prompted.</li>
          <li>Configure the bot settings according to your trading preferences.</li>
          <li>For detailed setup instructions, refer to the PDF manual included in the download.</li>
        </ol>
      </div>
    </div>
  );
};

export default DashboardDownloads;
