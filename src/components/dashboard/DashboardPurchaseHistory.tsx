
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { mockPurchasedBots, formatDate, formatCurrency } from "@/lib/mock-data";
import { Download, FileText, Receipt, ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const DashboardPurchaseHistory = () => {
  const handleDownloadReceipt = (botName: string) => {
    toast.success(`Downloading receipt for ${botName}`, {
      description: "Your receipt will be downloaded as a PDF file.",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Purchase History</h1>
      
      <Card className="bg-white/5 backdrop-blur-lg border-white/10 mb-8">
        <CardHeader>
          <CardTitle>Your Transactions</CardTitle>
          <CardDescription>A record of all your purchases on Vertex Bots</CardDescription>
        </CardHeader>
        <CardContent>
          {mockPurchasedBots.length > 0 ? (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Bot</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockPurchasedBots.map(bot => (
                    <TableRow key={bot.id}>
                      <TableCell className="font-medium">{bot.name}</TableCell>
                      <TableCell>{formatDate(bot.purchasedAt)}</TableCell>
                      <TableCell>{formatCurrency(bot.price)}</TableCell>
                      <TableCell>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/20 text-green-400">
                          Completed
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleDownloadReceipt(bot.name)}
                          className="h-8 text-[#F2FF44] hover:text-[#F2FF44] hover:bg-white/10"
                        >
                          <Receipt className="w-4 h-4 mr-1" />
                          Receipt
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className="text-center py-8">
              <ShoppingBag className="w-16 h-16 text-white/30 mx-auto mb-4" />
              <p className="text-white/70 text-lg mb-6">You haven't made any purchases yet.</p>
              <Link to="/bots">
                <Button className="bg-[#F2FF44] text-black hover:bg-[#E2EF34]">
                  Explore Our Bots
                </Button>
              </Link>
            </div>
          )}
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-white/5 backdrop-blur-lg border-white/10">
          <CardHeader>
            <CardTitle>Subscription Details</CardTitle>
            <CardDescription>Your current subscription information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="text-white/70">Subscription Type</span>
                <span className="font-medium">Standard Access</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="text-white/70">Billing Cycle</span>
                <span className="font-medium">Annual</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="text-white/70">Next Billing Date</span>
                <span className="font-medium">January 15, 2025</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/70">Payment Method</span>
                <span className="font-medium">M-Pesa (******1234)</span>
              </div>
            </div>
            
            <Button 
              className="w-full mt-6 bg-[#F2FF44] text-black hover:bg-[#E2EF34]"
            >
              Manage Subscription
            </Button>
          </CardContent>
        </Card>
        
        <Card className="bg-white/5 backdrop-blur-lg border-white/10">
          <CardHeader>
            <CardTitle>Payment Methods</CardTitle>
            <CardDescription>Manage your payment options</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 rounded bg-white/5 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded bg-green-500/20 text-green-400 flex items-center justify-center mr-3">
                    <span className="font-bold">M</span>
                  </div>
                  <div>
                    <p className="font-medium">M-Pesa</p>
                    <p className="text-xs text-white/70">******1234</p>
                  </div>
                </div>
                <span className="text-xs px-2 py-1 rounded bg-green-500/20 text-green-400">
                  Default
                </span>
              </div>
              
              <div className="p-3 rounded bg-white/5 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center mr-3">
                    <span className="font-bold">V</span>
                  </div>
                  <div>
                    <p className="font-medium">Visa Card</p>
                    <p className="text-xs text-white/70">****-****-****-5678</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4 mt-6">
              <Button 
                variant="outline" 
                className="flex-1 border-white/20 hover:bg-white/10"
              >
                Add Method
              </Button>
              <Button 
                variant="outline" 
                className="flex-1 border-white/20 hover:bg-white/10"
              >
                Edit Methods
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPurchaseHistory;
