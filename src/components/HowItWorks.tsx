
import { Card } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Choose a Bot",
      description: "Browse our marketplace and select a trading bot that matches your goals and risk tolerance.",
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      number: "02",
      title: "Complete Payment",
      description: "Select your preferred payment method and complete the secure checkout process.",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      number: "03",
      title: "Receive Your Bot",
      description: "Get instant access to download your bot and detailed setup instructions.",
      color: "from-pink-500/20 to-orange-500/20"
    }
  ];

  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Getting started with our trading bots is simple and straightforward
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="p-8 hover-lift glass-effect relative overflow-hidden"
            >
              <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br ${step.color} blur-3xl opacity-50`}></div>
              <div className="relative z-10">
                <div className="text-5xl font-bold text-white/20 mb-6">{step.number}</div>
                <h3 className="text-2xl font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-white/70">{step.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
