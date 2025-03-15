
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { formatCurrency } from "@/lib/mock-data";
import { CheckCircle, CreditCard, Smartphone, Bitcoin } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const DashboardCheckout = () => {
  const { items, getTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("mpesa");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate payment processing
    setTimeout(() => {
      // Success scenario
      toast({
        title: "Payment successful!",
        description: "Your order has been processed successfully.",
        variant: "default",
      });

      // Clear cart and redirect to downloads
      clearCart();
      navigate("/dashboard/downloads", { 
        state: { 
          checkoutComplete: true,
          purchasedItems: items
        } 
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  if (items.length === 0) {
    navigate("/dashboard/cart");
    return null;
  }

  return (
    <div className="py-12 px-4">
      <h1 className="text-3xl font-bold text-white mb-6">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <form onSubmit={handleCheckout}>
            {/* Payment Methods */}
            <Card className="glass-effect border-0 mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Payment Method</h3>
                
                <RadioGroup 
                  value={paymentMethod} 
                  onValueChange={setPaymentMethod}
                  className="space-y-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="mpesa" id="mpesa" className="border-[#F2FF44]" />
                    <Label htmlFor="mpesa" className="flex items-center cursor-pointer">
                      <Smartphone className="w-5 h-5 mr-2 text-white/70" />
                      <span className="text-white">M-Pesa</span>
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="card" id="card" className="border-[#F2FF44]" />
                    <Label htmlFor="card" className="flex items-center cursor-pointer">
                      <CreditCard className="w-5 h-5 mr-2 text-white/70" />
                      <span className="text-white">Credit/Debit Card</span>
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="crypto" id="crypto" className="border-[#F2FF44]" />
                    <Label htmlFor="crypto" className="flex items-center cursor-pointer">
                      <Bitcoin className="w-5 h-5 mr-2 text-white/70" />
                      <span className="text-white">Cryptocurrency</span>
                    </Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>
            
            {/* Payment Details */}
            <Card className="glass-effect border-0 mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {paymentMethod === "mpesa" && "M-Pesa Details"}
                  {paymentMethod === "card" && "Card Details"}
                  {paymentMethod === "crypto" && "Cryptocurrency Details"}
                </h3>
                
                {paymentMethod === "mpesa" && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <Label htmlFor="phone" className="text-white mb-2 block">Phone Number</Label>
                        <Input 
                          id="phone" 
                          placeholder="e.g., 254712345678" 
                          required
                          className="bg-white/5 border-white/10 text-white" 
                        />
                      </div>
                    </div>
                  </div>
                )}
                
                {paymentMethod === "card" && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="cardNumber" className="text-white mb-2 block">Card Number</Label>
                      <Input 
                        id="cardNumber" 
                        placeholder="1234 5678 9012 3456" 
                        required
                        className="bg-white/5 border-white/10 text-white" 
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry" className="text-white mb-2 block">Expiry Date</Label>
                        <Input 
                          id="expiry" 
                          placeholder="MM/YY" 
                          required
                          className="bg-white/5 border-white/10 text-white" 
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv" className="text-white mb-2 block">CVV</Label>
                        <Input 
                          id="cvv" 
                          placeholder="123" 
                          required
                          className="bg-white/5 border-white/10 text-white" 
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="nameOnCard" className="text-white mb-2 block">Name on Card</Label>
                      <Input 
                        id="nameOnCard" 
                        placeholder="John Doe" 
                        required
                        className="bg-white/5 border-white/10 text-white" 
                      />
                    </div>
                  </div>
                )}
                
                {paymentMethod === "crypto" && (
                  <div className="space-y-4">
                    <p className="text-white/70">
                      Send the equivalent of {formatCurrency(getTotal())} to the following Bitcoin address:
                    </p>
                    <div className="bg-white/5 p-3 rounded-md text-white break-all font-mono text-sm">
                      bc1q8c6fshw9x4acnlx4cxsr9q37evvcgh8s9j4wp3
                    </div>
                    <p className="text-white/70 text-sm">
                      Once you've sent the payment, please enter the transaction ID below:
                    </p>
                    <div>
                      <Label htmlFor="txid" className="text-white mb-2 block">Transaction ID</Label>
                      <Input 
                        id="txid" 
                        placeholder="Transaction ID" 
                        required
                        className="bg-white/5 border-white/10 text-white" 
                      />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
            
            <Button 
              type="submit"
              className="w-full bg-[#F2FF44] text-black hover:bg-[#E2EF34]"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black mr-2"></div>
                  Processing...
                </>
              ) : (
                <>Confirm Payment</>
              )}
            </Button>
          </form>
        </div>
        
        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="glass-effect border-0 sticky top-24">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Order Summary</h3>
              
              <div className="space-y-3 mb-6">
                {items.map(item => (
                  <div key={item.id} className="flex justify-between">
                    <span className="text-white/70">{item.name}</span>
                    <span className="text-white">{formatCurrency(item.price)}</span>
                  </div>
                ))}
                
                <Separator className="my-2 bg-white/10" />
                
                <div className="flex justify-between font-bold">
                  <span className="text-white">Total</span>
                  <span className="text-white">{formatCurrency(getTotal())}</span>
                </div>
              </div>
              
              <div className="bg-white/5 rounded-lg p-4">
                <div className="flex items-start text-sm">
                  <CheckCircle className="w-4 h-4 text-[#F2FF44] mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-white/70">
                    After payment, your purchased bots will be available for immediate download from your dashboard.
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

export default DashboardCheckout;
