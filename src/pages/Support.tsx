
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  Clock, 
  Send,
  AlertCircle
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Support = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real application, you would submit the form data to your backend
      console.log("Form submitted:", formData);
      
      // Show success toast
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
        variant: "default"
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-16 px-4 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Support</h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Need help? Our support team is ready to assist you with any questions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">Get in Touch</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-white">Your Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white/5 border-white/10 text-white mt-1"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <div className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.name}
                    </div>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-white">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white/5 border-white/10 text-white mt-1"
                    placeholder="john.doe@example.com"
                  />
                  {errors.email && (
                    <div className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.email}
                    </div>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="subject" className="text-white">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-white/5 border-white/10 text-white mt-1"
                    placeholder="How can we help you?"
                  />
                  {errors.subject && (
                    <div className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.subject}
                    </div>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-white">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-white/5 border-white/10 text-white mt-1 h-32"
                    placeholder="Describe your issue or question in detail..."
                  />
                  {errors.message && (
                    <div className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.message}
                    </div>
                  )}
                </div>
                
                <Button type="submit" className="w-full bg-[#F2FF44] text-black hover:bg-[#E2EF34]">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">Support Information</h2>
              
              <div className="space-y-8">
                <div className="bg-white/5 glass-effect p-6 rounded-xl">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mr-4">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">Email Us</h3>
                      <p className="text-white/80 mb-2">For general inquiries and support</p>
                      <a href="mailto:support@vertexbots.com" className="text-accent hover:text-accent/80">
                        support@vertexbots.com
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/5 glass-effect p-6 rounded-xl">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mr-4">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">Call Us</h3>
                      <p className="text-white/80 mb-2">For urgent matters</p>
                      <a href="tel:+254712345678" className="text-accent hover:text-accent/80">
                        +254 712 345 678
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/5 glass-effect p-6 rounded-xl">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mr-4">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">Live Chat</h3>
                      <p className="text-white/80 mb-2">Chat with our support team</p>
                      <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
                        Start Chat
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/5 glass-effect p-6 rounded-xl">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mr-4">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">Support Hours</h3>
                      <p className="text-white/80 mb-1">Monday - Friday: 9AM - 6PM EAT</p>
                      <p className="text-white/80">Weekend: 10AM - 2PM EAT</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 glass-effect rounded-xl p-8 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">Frequently Asked Questions</h3>
            <p className="text-white/80 mb-6">
              Check our comprehensive FAQ section for quick answers to common questions.
            </p>
            <Button asChild variant="outline" className="text-white border-white/20 hover:bg-white/10">
              <a href="/faq">View FAQ</a>
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Support;
