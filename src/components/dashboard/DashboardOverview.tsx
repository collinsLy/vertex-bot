
import { useAuth } from "@/context/AuthContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { mockPurchasedBots, mockSupportTickets, formatDate, formatCurrency } from "@/lib/mock-data";
import { Download, TicketCheck, History, Bot } from "lucide-react";
import { Link } from "react-router-dom";

const DashboardOverview = () => {
  const { user } = useAuth();
  const recentPurchases = mockPurchasedBots.slice(0, 2);
  const recentTickets = mockSupportTickets.slice(0, 2);
  
  const totalSpent = mockPurchasedBots.reduce((sum, bot) => sum + bot.price, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard Overview</h1>
      
      {/* Welcome card */}
      <Card className="mb-8 bg-white/5 backdrop-blur-lg border-white/10">
        <CardHeader>
          <CardTitle>Welcome, {user?.name}</CardTitle>
          <CardDescription>
            Here's an overview of your account and recent activity.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-white/5 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-white/70">Purchased Bots</p>
                  <p className="text-2xl font-bold">{mockPurchasedBots.length}</p>
                </div>
                <Bot className="w-10 h-10 text-[#F2FF44]" />
              </div>
            </div>
            
            <div className="p-4 bg-white/5 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-white/70">Active Support Tickets</p>
                  <p className="text-2xl font-bold">
                    {mockSupportTickets.filter(ticket => ticket.status !== 'closed').length}
                  </p>
                </div>
                <TicketCheck className="w-10 h-10 text-[#F2FF44]" />
              </div>
            </div>
            
            <div className="p-4 bg-white/5 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-white/70">Total Spent</p>
                  <p className="text-2xl font-bold">{formatCurrency(totalSpent)}</p>
                </div>
                <History className="w-10 h-10 text-[#F2FF44]" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Recent purchases */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <Card className="bg-white/5 backdrop-blur-lg border-white/10">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Purchases</CardTitle>
              <CardDescription>Your recently purchased trading bots</CardDescription>
            </div>
            <Download className="w-5 h-5 text-[#F2FF44]" />
          </CardHeader>
          <CardContent>
            {recentPurchases.length > 0 ? (
              <div className="space-y-4">
                {recentPurchases.map(bot => (
                  <div key={bot.id} className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded bg-black/20 flex-shrink-0 overflow-hidden">
                      <img src={bot.imageUrl} alt={bot.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-medium">{bot.name}</h4>
                      <p className="text-sm text-white/70">Purchased: {formatDate(bot.purchasedAt)}</p>
                      <p className="text-sm font-medium text-[#F2FF44]">{formatCurrency(bot.price)}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-white/70">No purchases yet.</p>
            )}
            
            <div className="mt-4">
              <Link 
                to="/dashboard/downloads" 
                className="text-sm text-[#F2FF44] hover:underline flex items-center"
              >
                View all downloads
                <Download className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </CardContent>
        </Card>
        
        {/* Recent support tickets */}
        <Card className="bg-white/5 backdrop-blur-lg border-white/10">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Support Tickets</CardTitle>
              <CardDescription>Your recent support inquiries</CardDescription>
            </div>
            <TicketCheck className="w-5 h-5 text-[#F2FF44]" />
          </CardHeader>
          <CardContent>
            {recentTickets.length > 0 ? (
              <div className="space-y-4">
                {recentTickets.map(ticket => (
                  <div key={ticket.id} className="p-3 rounded bg-white/5">
                    <div className="flex justify-between mb-1">
                      <h4 className="font-medium">{ticket.subject}</h4>
                      <span className={`text-xs px-2 py-1 rounded ${
                        ticket.status === 'open' 
                          ? 'bg-green-500/20 text-green-400' 
                          : ticket.status === 'pending' 
                            ? 'bg-yellow-500/20 text-yellow-400' 
                            : 'bg-gray-500/20 text-gray-400'
                      }`}>
                        {ticket.status.charAt(0).toUpperCase() + ticket.status.slice(1)}
                      </span>
                    </div>
                    <p className="text-sm text-white/70">Created: {formatDate(ticket.createdAt)}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-white/70">No support tickets yet.</p>
            )}
            
            <div className="mt-4">
              <Link 
                to="/dashboard/support-tickets" 
                className="text-sm text-[#F2FF44] hover:underline flex items-center"
              >
                View all tickets
                <TicketCheck className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Account information */}
      <Card className="bg-white/5 backdrop-blur-lg border-white/10">
        <CardHeader>
          <CardTitle>Account Information</CardTitle>
          <CardDescription>Your profile and account details</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-white/70">Name:</span>
              <span>{user?.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/70">Email:</span>
              <span>{user?.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/70">Account Created:</span>
              <span>{formatDate(user?.createdAt || '')}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/70">Subscription Status:</span>
              <span className="text-green-400">Active</span>
            </div>
          </div>
          
          <div className="mt-4">
            <Link 
              to="/dashboard/settings" 
              className="text-sm text-[#F2FF44] hover:underline"
            >
              Update account settings
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardOverview;
