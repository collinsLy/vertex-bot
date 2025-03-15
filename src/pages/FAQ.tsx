
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const categories = [
    {
      title: "Bot Functionality",
      questions: [
        {
          question: "How do trading bots work?",
          answer: "Trading bots operate using algorithms that analyze market data and execute trades based on predefined rules. They can monitor markets 24/7, identify trading opportunities, and execute trades automatically without emotional bias."
        },
        {
          question: "Do I need trading experience to use these bots?",
          answer: "While prior trading knowledge is helpful, our bots are designed to be user-friendly for traders of all experience levels. We provide detailed documentation and support to help beginners get started."
        },
        {
          question: "Can I customize the bot settings?",
          answer: "Yes, all our bots come with customizable parameters that allow you to adjust risk levels, trading pairs, time frames, and other settings to match your trading strategy."
        },
        {
          question: "Do the bots work on weekends?",
          answer: "Since forex markets are closed on weekends, most bots will not trade during this time. However, they can be set to analyze weekend market data to prepare for Monday opening."
        }
      ]
    },
    {
      title: "Payment and Pricing",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept various payment methods including M-Pesa, credit/debit cards, and selected cryptocurrencies to provide flexible options for our customers."
        },
        {
          question: "Is there a subscription fee or is it a one-time payment?",
          answer: "Most of our bots are available for a one-time payment with lifetime access. Some premium bots may offer subscription options with additional benefits. The pricing structure is clearly indicated on each bot's page."
        },
        {
          question: "Do you offer refunds?",
          answer: "Yes, we offer a 30-day money-back guarantee if the bot doesn't perform as described. Please refer to our refund policy for detailed terms and conditions."
        }
      ]
    },
    {
      title: "Setup and Installation",
      questions: [
        {
          question: "How do I install the bot after purchase?",
          answer: "After completing your purchase, you'll receive detailed installation instructions via email. Most bots require you to download files and import them to your trading platform (e.g., MetaTrader 4/5). Our support team is available to assist with any installation challenges."
        },
        {
          question: "What platforms are your bots compatible with?",
          answer: "Most of our bots are compatible with MetaTrader 4 (MT4) and MetaTrader 5 (MT5). Some specialized bots may support other platforms like cTrader or NinjaTrader. The supported platforms are listed on each bot's product page."
        },
        {
          question: "Can I use the bot on multiple accounts?",
          answer: "This depends on the specific bot. Some bots allow installation on multiple accounts, while others are limited to a single account. The license details are specified on each bot's product page."
        }
      ]
    },
    {
      title: "Troubleshooting",
      questions: [
        {
          question: "What if the bot isn't working as expected?",
          answer: "First, check our troubleshooting guide that comes with each bot. If the issue persists, contact our support team with details about the problem, and we'll assist you promptly."
        },
        {
          question: "How can I update my bot?",
          answer: "Most bots include lifetime updates. When updates are available, you'll receive an email notification with instructions, or you can download the latest version from your account dashboard."
        },
        {
          question: "Is technical support included with my purchase?",
          answer: "Yes, all bot purchases include technical support. You can reach our support team via email, live chat, or through your account dashboard."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-16 px-4 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Find answers to common questions about our trading bots
            </p>
          </div>
          
          <div className="space-y-16">
            {categories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
                  <HelpCircle className="w-6 h-6 mr-2 text-accent" />
                  {category.title}
                </h2>
                
                <div className="space-y-6">
                  {category.questions.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-white/5 rounded-xl p-6 hover-lift">
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {item.question}
                      </h3>
                      <p className="text-white/80">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">Still have questions?</h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              If you couldn't find the answer to your question, please feel free to contact our support team. We're here to help!
            </p>
            <Link to="/support" className="text-accent hover:text-accent/80 font-semibold">
              Contact Support →
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FAQ;
