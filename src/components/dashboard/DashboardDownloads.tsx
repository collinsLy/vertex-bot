
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { mockPurchasedBots, formatDate, formatCurrency } from "@/lib/mock-data";
import { Download, ExternalLink, FileText } from "lucide-react";
import { toast } from "sonner";

const DashboardDownloads = () => {
  const handleDownload = (botName: string) => {
    toast.success(`Started downloading ${botName}`, {
      description: "Your download should begin shortly.",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Downloads</h1>
      
      <div className="mb-8">
        <p className="text-white/70">
          Access your purchased trading bots and download installation files. 
          Need help with setup? Check the documentation for each bot or 
          contact our support team.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {mockPurchasedBots.map(bot => (
          <Card key={bot.id} className="bg-white/5 backdrop-blur-lg border-white/10 overflow-hidden flex flex-col">
            <div className="aspect-[2/1] relative">
              <img src={bot.imageUrl} alt={bot.name} className="w-full h-full object-cover" />
            </div>
            <CardHeader>
              <CardTitle>{bot.name}</CardTitle>
              <CardDescription>Purchased: {formatDate(bot.purchasedAt)}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
              <p className="text-sm mb-2">{bot.description}</p>
              <p className="text-sm font-medium text-[#F2FF44] mb-4">{formatCurrency(bot.price)}</p>
              
              <div className="mt-auto space-y-2">
                <Button 
                  className="w-full bg-[#F2FF44] text-black hover:bg-[#E2EF34]"
                  onClick={() => handleDownload(bot.name)}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Bot
                </Button>
                
                <Button variant="outline" className="w-full border-white/20 hover:bg-white/10">
                  <FileText className="w-4 h-4 mr-2" />
                  View Documentation
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Card className="bg-white/5 backdrop-blur-lg border-white/10">
        <CardHeader>
          <CardTitle>Installation Instructions</CardTitle>
          <CardDescription>Follow these general steps to install your trading bots</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-white/5 rounded-lg">
              <h3 className="font-medium mb-2 flex items-center">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#F2FF44] text-black text-sm mr-2">1</span>
                Download the Bot Package
              </h3>
              <p className="text-sm text-white/70">
                Click the "Download Bot" button above to download the bot installation package. Save it to your computer in a location you can easily find.
              </p>
            </div>
            
            <div className="p-4 bg-white/5 rounded-lg">
              <h3 className="font-medium mb-2 flex items-center">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#F2FF44] text-black text-sm mr-2">2</span>
                Install MetaTrader Platform
              </h3>
              <p className="text-sm text-white/70">
                Most bots require MetaTrader 4 or 5. If you don't have it installed, download it from the official website.
              </p>
              <a 
                href="https://www.metatrader4.com/en/download" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-[#F2FF44] mt-2 hover:underline inline-flex items-center"
              >
                Download MetaTrader
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>
            
            <div className="p-4 bg-white/5 rounded-lg">
              <h3 className="font-medium mb-2 flex items-center">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#F2FF44] text-black text-sm mr-2">3</span>
                Follow Bot-Specific Instructions
              </h3>
              <p className="text-sm text-white/70">
                Each bot has specific installation steps. Refer to the documentation provided with your bot for detailed instructions.
              </p>
            </div>
            
            <div className="p-4 bg-white/5 rounded-lg">
              <h3 className="font-medium mb-2 flex items-center">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#F2FF44] text-black text-sm mr-2">4</span>
                Configure Settings
              </h3>
              <p className="text-sm text-white/70">
                Configure the bot's settings according to your trading preferences and risk tolerance. Most bots allow for customization of trade sizes, stop-loss levels, and trading strategies.
              </p>
            </div>
            
            <div className="p-4 bg-white/5 rounded-lg">
              <h3 className="font-medium mb-2 flex items-center">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#F2FF44] text-black text-sm mr-2">5</span>
                Get Support
              </h3>
              <p className="text-sm text-white/70">
                If you encounter any issues during installation or usage, contact our support team for assistance.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardDownloads;
