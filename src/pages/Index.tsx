import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shell } from "@/components/Shell";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <Shell>
        {/* Hero Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 animate-fade-in">
              Unleash the Power of AI
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in delay-100">
              Revolutionize your trading strategies with cutting-edge AI
              technology.
            </p>
            <div className="mt-12 animate-fade-in delay-200">
              <Button className="bg-violet-500 hover:bg-violet-600 text-white font-bold py-3 px-6 rounded-full mr-4">
                Get Started
              </Button>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Trading API Edge Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-white mb-4">
                Trading API Edge
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced tools and insights for professional traders
              </p>
            </div>

            {/* Trading Edge Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1: Algorithmic Trading */}
              <div className="trading-edge-card">
                <Card className="bg-transparent shadow-none h-full flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-white">
                      Algorithmic Trading
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      Automate your trading strategies with precision.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-300">
                      Implement sophisticated algorithms for optimal trade
                      execution.
                    </p>
                  </CardContent>
                  <CardFooter className="justify-end">
                    <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                      Explore
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              {/* Card 2: Real-Time Analytics */}
              <div className="trading-edge-card">
                <Card className="bg-transparent shadow-none h-full flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-white">
                      Real-Time Analytics
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      Gain instant insights with live market data analysis.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-300">
                      Make informed decisions with up-to-the-minute analytics and
                      visualizations.
                    </p>
                  </CardContent>
                  <CardFooter className="justify-end">
                    <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                      Discover
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              {/* Card 3: Predictive AI Models */}
              <div className="trading-edge-card">
                <Card className="bg-transparent shadow-none h-full flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-white">
                      Predictive AI Models
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      Anticipate market movements with advanced AI predictions.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-300">
                      Leverage machine learning to forecast trends and identify
                      opportunities.
                    </p>
                  </CardContent>
                  <CardFooter className="justify-end">
                    <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                      Analyze
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              {/* Card 4: Secure API Integration */}
              <div className="trading-edge-card">
                <Card className="bg-transparent shadow-none h-full flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-white">
                      Secure API Integration
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      Seamlessly integrate our API into your existing platform.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-300">
                      Ensure secure and reliable data transmission with our
                      robust API.
                    </p>
                  </CardContent>
                  <CardFooter className="justify-end">
                    <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                      Integrate
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced AI Solutions Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Advanced AI Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our suite of AI-powered tools designed for modern
                traders.
              </p>
            </div>

            {/* Solutions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Solution 1: AI-Driven Portfolio Management */}
              <div className="glass-dark p-6 rounded-2xl hover-scale">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  AI-Driven Portfolio Management
                </h3>
                <p className="text-gray-300">
                  Optimize your portfolio with AI algorithms that analyze market
                  trends and manage risk.
                </p>
                <Button className="mt-6 bg-violet-500 hover:bg-violet-600 text-white">
                  Learn More
                </Button>
              </div>

              {/* Solution 2: Automated Risk Assessment */}
              <div className="glass-dark p-6 rounded-2xl hover-scale">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Automated Risk Assessment
                </h3>
                <p className="text-gray-300">
                  Identify and mitigate potential risks with our automated risk
                  assessment tools.
                </p>
                <Button className="mt-6 bg-violet-500 hover:bg-violet-600 text-white">
                  Explore
                </Button>
              </div>

              {/* Solution 3: Smart Order Routing */}
              <div className="glass-dark p-6 rounded-2xl hover-scale">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Smart Order Routing
                </h3>
                <p className="text-gray-300">
                  Execute trades efficiently with smart order routing that
                  optimizes for speed and cost.
                </p>
                <Button className="mt-6 bg-violet-500 hover:bg-violet-600 text-white">
                  Discover
                </Button>
              </div>

              {/* Solution 4: Sentiment Analysis */}
              <div className="glass-dark p-6 rounded-2xl hover-scale">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Sentiment Analysis
                </h3>
                <p className="text-gray-300">
                  Gauge market sentiment with AI-powered analysis of news and
                  social media.
                </p>
                <Button className="mt-6 bg-violet-500 hover:bg-violet-600 text-white">
                  Analyze
                </Button>
              </div>

              {/* Solution 5: High-Frequency Trading Tools */}
              <div className="glass-dark p-6 rounded-2xl hover-scale">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  High-Frequency Trading Tools
                </h3>
                <p className="text-gray-300">
                  Access advanced tools for high-frequency trading, optimized
                  for speed and precision.
                </p>
                <Button className="mt-6 bg-violet-500 hover:bg-violet-600 text-white">
                  Trade Now
                </Button>
              </div>

              {/* Solution 6: Custom AI Solutions */}
              <div className="glass-dark p-6 rounded-2xl hover-scale">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Custom AI Solutions
                </h3>
                <p className="text-gray-300">
                  Develop custom AI solutions tailored to your specific trading
                  needs.
                </p>
                <Button className="mt-6 bg-violet-500 hover:bg-violet-600 text-white">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Read testimonials from traders who have transformed their
                strategies with our AI solutions.
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="glass-dark p-6 rounded-2xl">
                <div className="flex items-center mb-4">
                  <Avatar className="mr-4">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      John Doe
                    </h4>
                    <p className="text-sm text-gray-400">Professional Trader</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  "The AI-driven portfolio management tool has significantly
                  improved my trading efficiency and profitability."
                </p>
              </div>

              {/* Testimonial 2 */}
              <div className="glass-dark p-6 rounded-2xl">
                <div className="flex items-center mb-4">
                  <Avatar className="mr-4">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      Jane Smith
                    </h4>
                    <p className="text-sm text-gray-400">Hedge Fund Manager</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  "The real-time analytics dashboard provides invaluable
                  insights that help me make informed decisions quickly."
                </p>
              </div>

              {/* Testimonial 3 */}
              <div className="glass-dark p-6 rounded-2xl">
                <div className="flex items-center mb-4">
                  <Avatar className="mr-4">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      David Johnson
                    </h4>
                    <p className="text-sm text-gray-400">Independent Investor</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  "The predictive AI models have given me a competitive edge in
                  the market, allowing me to anticipate trends and maximize
                  returns."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8 animate-glow">
              Ready to Transform Your Trading?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in delay-100">
              Join our community of successful traders and start leveraging the
              power of AI today.
            </p>
            <div className="mt-12 animate-fade-in delay-200">
              <Button className="bg-violet-500 hover:bg-violet-600 text-white font-bold py-3 px-6 rounded-full mr-4">
                Sign Up Now
              </Button>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full">
                Request a Demo
              </Button>
            </div>
          </div>
        </section>
      </Shell>
    </>
  );
};

export default Index;
