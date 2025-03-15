
import { Card } from "@/components/ui/card";
import { MessageSquare, TrendingUp } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "I've tried several trading bots, but Vertex's Forex Fury has consistently outperformed them all. 65% success rate over 6 months!",
      author: "Sarah Johnson",
      role: "Full-time Trader",
      metrics: "+28% in 3 months"
    },
    {
      quote: "The 1000pip Climber System completely changed my trading strategy. It's user-friendly and the results speak for themselves.",
      author: "Michael Chen",
      role: "Part-time Investor",
      metrics: "+15% in 2 months"
    },
    {
      quote: "As a beginner, I was skeptical about automated trading, but Forex Steam made it incredibly easy and profitable.",
      author: "Emma Davis",
      role: "New Trader",
      metrics: "+21% in 4 months"
    }
  ];

  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          Success Stories
        </h2>
        <p className="text-xl text-white/60 text-center mb-12 max-w-2xl mx-auto">
          See what our traders are saying about their experience with our bots
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover-lift glass-effect">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <p className="text-white/80 mb-6 italic">{testimonial.quote}</p>
              <div className="text-white font-semibold">{testimonial.author}</div>
              <div className="text-white/60 text-sm mb-4">{testimonial.role}</div>
              <div className="flex items-center text-accent">
                <TrendingUp className="w-4 h-4 mr-2" />
                <span className="font-medium">{testimonial.metrics}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
