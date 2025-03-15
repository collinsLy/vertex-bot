
import { Card } from "@/components/ui/card";
import { Clock, BarChart, Code, Zap } from "lucide-react";

const ValueProposition = () => {
  const benefits = [
    {
      icon: <Clock className="w-6 h-6 text-white" />,
      title: "24/7 Automated Trading",
      description: "Our bots work around the clock so you don't have to"
    },
    {
      icon: <BarChart className="w-6 h-6 text-white" />,
      title: "Verified Performance",
      description: "All bots have independently verified performance metrics"
    },
    {
      icon: <Code className="w-6 h-6 text-white" />,
      title: "No Coding Required",
      description: "Simple plug-and-play setup with no technical knowledge needed"
    },
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: "Immediate Access",
      description: "Start trading within minutes of purchase"
    }
  ];

  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          Why Choose Vertex Bots?
        </h2>
        <p className="text-xl text-white/60 text-center mb-12 max-w-2xl mx-auto">
          Our platform offers premium trading bots with proven track records and easy setup
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 hover-lift glass-effect">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-white/80">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ValueProposition;
