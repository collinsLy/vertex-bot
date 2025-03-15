
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, Trash2, ArrowRight } from "lucide-react";
import { formatCurrency } from "@/lib/mock-data";
import { toast } from "@/components/ui/use-toast";

const DashboardCart = () => {
  const { items, removeFromCart, clearCart, getTotal } = useCart();

  const handleRemoveItem = (id: string, name: string) => {
    removeFromCart(id);
    toast({
      title: "Item removed",
      description: `${name} has been removed from your cart.`,
      variant: "default",
    });
  };

  if (items.length === 0) {
    return (
      <div className="py-12 px-4">
        <h1 className="text-3xl font-bold text-white mb-6">Shopping Cart</h1>
        <Card className="glass-effect border-0">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <ShoppingCart className="w-16 h-16 text-white/30 mb-4" />
            <h2 className="text-xl font-medium text-white mb-2">Your cart is empty</h2>
            <p className="text-white/60 mb-6 text-center max-w-md">
              You haven't added any bots to your cart yet. Browse our marketplace to find the perfect trading bot for you.
            </p>
            <Button asChild className="bg-[#F2FF44] text-black hover:bg-[#E2EF34]">
              <Link to="/bots">Browse Bots</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="py-12 px-4">
      <h1 className="text-3xl font-bold text-white mb-6">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <Card className="glass-effect border-0 mb-4">
            <CardContent className="p-6">
              {items.map((item, index) => (
                <div key={item.id}>
                  <div className="flex gap-4">
                    <div className="w-24 h-24 flex-shrink-0 rounded-md overflow-hidden">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                      <p className="text-white/60 text-sm line-clamp-2 mb-2">{item.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-white font-bold">{formatCurrency(item.price)}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-white/70 hover:text-white hover:bg-white/10"
                          onClick={() => handleRemoveItem(item.id, item.name)}
                        >
                          <Trash2 className="w-4 h-4 mr-2" />
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                  {index < items.length - 1 && <Separator className="my-4 bg-white/10" />}
                </div>
              ))}
            </CardContent>
          </Card>
          <Button
            variant="outline"
            className="text-white/70 border-white/20 hover:bg-white/10"
            onClick={clearCart}
          >
            <Trash2 className="w-4 h-4 mr-2" />
            Clear Cart
          </Button>
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
              
              <Button 
                asChild
                className="w-full bg-[#F2FF44] text-black hover:bg-[#E2EF34] mb-3"
              >
                <Link to="/dashboard/checkout">
                  Proceed to Checkout
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              
              <Button 
                asChild
                variant="outline" 
                className="w-full text-white border-white/20 hover:bg-white/10"
              >
                <Link to="/bots">Continue Shopping</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardCart;
