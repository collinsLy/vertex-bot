
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { mockSupportTickets, formatDate } from "@/lib/mock-data";
import { TicketCheck, Plus, MessageSquare } from "lucide-react";

const formSchema = z.object({
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type TicketFormValues = z.infer<typeof formSchema>;

const DashboardSupportTickets = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  
  const form = useForm<TicketFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: "",
      message: "",
    },
  });

  const onSubmit = (values: TicketFormValues) => {
    setIsSubmitting(true);
    console.log(values);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      form.reset();
      toast.success("Support ticket submitted successfully!");
    }, 1500);
  };

  const filterTickets = (status: string) => {
    if (status === "all") return mockSupportTickets;
    return mockSupportTickets.filter(ticket => ticket.status === status);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Support Tickets</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card className="bg-white/5 backdrop-blur-lg border-white/10">
            <CardHeader>
              <CardTitle>Your Tickets</CardTitle>
              <CardDescription>View and manage your support inquiries</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all" onValueChange={setActiveTab}>
                <TabsList className="mb-6 bg-white/5">
                  <TabsTrigger value="all">All Tickets</TabsTrigger>
                  <TabsTrigger value="open">Open</TabsTrigger>
                  <TabsTrigger value="pending">Pending</TabsTrigger>
                  <TabsTrigger value="closed">Closed</TabsTrigger>
                </TabsList>
                
                <TabsContent value={activeTab}>
                  {filterTickets(activeTab).length > 0 ? (
                    <div className="space-y-4">
                      {filterTickets(activeTab).map(ticket => (
                        <div key={ticket.id} className="p-4 bg-white/5 rounded-lg">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-medium">{ticket.subject}</h3>
                            <Badge 
                              className={`${
                                ticket.status === 'open' 
                                  ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30' 
                                  : ticket.status === 'pending' 
                                    ? 'bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30' 
                                    : 'bg-gray-500/20 text-gray-400 hover:bg-gray-500/30'
                              }`}
                            >
                              {ticket.status.charAt(0).toUpperCase() + ticket.status.slice(1)}
                            </Badge>
                          </div>
                          <div className="text-sm text-white/70 mb-3">
                            <p>Created: {formatDate(ticket.createdAt)}</p>
                            <p>Last updated: {formatDate(ticket.lastUpdated)}</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button 
                              size="sm" 
                              variant="outline"
                              className="text-xs border-white/20 hover:bg-white/10"
                            >
                              <MessageSquare className="w-3 h-3 mr-1" />
                              View Conversation
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <TicketCheck className="w-12 h-12 mx-auto text-white/30 mb-4" />
                      <p className="text-white/70">No {activeTab !== "all" ? activeTab : ""} tickets found.</p>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card className="bg-white/5 backdrop-blur-lg border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Plus className="w-5 h-5 mr-2" />
                New Ticket
              </CardTitle>
              <CardDescription>Create a new support request</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="Brief description of your issue" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Describe your issue in detail" 
                            className="min-h-[150px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-[#F2FF44] text-black hover:bg-[#E2EF34]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Ticket"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          
          <Card className="bg-white/5 backdrop-blur-lg border-white/10 mt-6">
            <CardHeader>
              <CardTitle>Support Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Monday-Friday:</span>
                  <span>8:00 AM - 8:00 PM EAT</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Saturday:</span>
                  <span>10:00 AM - 4:00 PM EAT</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Sunday:</span>
                  <span>Closed</span>
                </div>
                
                <div className="pt-3 mt-3 border-t border-white/10">
                  <p className="text-sm">
                    Average response time: <span className="font-medium">24 hours</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardSupportTickets;
