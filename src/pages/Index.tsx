
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, TrendingUp, Shield, Zap, Bot, BarChart3, Globe, Users, CheckCircle, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CountUp from "@/components/animations/CountUp";
import TypingAnimation from "@/components/animations/TypingAnimation";
import FloatingDecoration from "@/components/decorations/FloatingDecoration";

const Index = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      {/* Shooting Stars Background */}
      <div className="shooting-stars">
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
      </div>

      {/* Floating Decorations */}
      <FloatingDecoration 
        side="left"
        icons={[
          { icon: TrendingUp, position: 'top', delay: 0 },
          { icon: Bot, position: 'middle', delay: 1 },
          { icon: BarChart3, position: 'bottom', delay: 2 }
        ]}
      />
      <FloatingDecoration 
        side="right"
        icons={[
          { icon: Shield, position: 'top', delay: 0.5 },
          { icon: Globe, position: 'middle', delay: 1.5 },
          { icon: Zap, position: 'bottom', delay: 2.5 }
        ]}
      />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 glass-effect py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <a href="/" className="text-xl font-bold font-pro">
            AI Trading Platform
          </a>
          <nav className="space-x-6">
            <a href="#features" className="nav-link">Features</a>
            <a href="#pricing" className="nav-link">Pricing</a>
            <a href="#testimonials" className="nav-link">Testimonials</a>
            <Button variant="secondary" size="sm" asChild className="nav-button-hover">
              <a href="#contact">Get Started <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold font-pro mb-6 animate-fade-in"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Unlock the Power of AI-Driven Trading
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in delay-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Maximize your investment potential with our cutting-edge AI algorithms.
          </motion.p>
          <div className="flex justify-center space-x-4 animate-fade-in delay-300">
            <Button size="lg" className="button-hover-fix">
              Start Trading Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="button-hover-fix">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-semibold font-pro mb-4">Key Features</h2>
            <p className="text-muted-foreground">Explore the powerful features that make our AI trading platform the best choice for investors.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <motion.div
              className="glass p-6 rounded-lg hover-scale"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center mb-4">
                <TrendingUp className="w-6 h-6 mr-2 text-violet-400" />
                <h3 className="text-lg font-semibold">Advanced AI Algorithms</h3>
              </div>
              <p className="text-muted-foreground">Our platform uses state-of-the-art AI algorithms to analyze market trends and make informed trading decisions.</p>
            </motion.div>

            {/* Feature Card 2 */}
            <motion.div
              className="glass p-6 rounded-lg hover-scale"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 mr-2 text-violet-400" />
                <h3 className="text-lg font-semibold">Secure and Reliable</h3>
              </div>
              <p className="text-muted-foreground">We prioritize the security of your investments with advanced encryption and robust security measures.</p>
            </motion.div>

            {/* Feature Card 3 */}
            <motion.div
              className="glass p-6 rounded-lg hover-scale"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center mb-4">
                <Zap className="w-6 h-6 mr-2 text-violet-400" />
                <h3 className="text-lg font-semibold">Real-Time Data Analysis</h3>
              </div>
              <p className="text-muted-foreground">Access real-time market data and analysis to make quick and effective trading decisions.</p>
            </motion.div>

            {/* Feature Card 4 */}
            <motion.div
              className="glass p-6 rounded-lg hover-scale"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="flex items-center mb-4">
                <Bot className="w-6 h-6 mr-2 text-violet-400" />
                <h3 className="text-lg font-semibold">Automated Trading</h3>
              </div>
              <p className="text-muted-foreground">Automate your trading strategies with our AI-powered bots, saving you time and maximizing profits.</p>
            </motion.div>

            {/* Feature Card 5 */}
            <motion.div
              className="glass p-6 rounded-lg hover-scale"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="flex items-center mb-4">
                <BarChart3 className="w-6 h-6 mr-2 text-violet-400" />
                <h3 className="text-lg font-semibold">Portfolio Management</h3>
              </div>
              <p className="text-muted-foreground">Easily manage and optimize your investment portfolio with our intuitive tools and analytics.</p>
            </motion.div>

            {/* Feature Card 6 */}
            <motion.div
              className="glass p-6 rounded-lg hover-scale"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <div className="flex items-center mb-4">
                <Globe className="w-6 h-6 mr-2 text-violet-400" />
                <h3 className="text-lg font-semibold">Global Market Access</h3>
              </div>
              <p className="text-muted-foreground">Trade on global markets and diversify your investments with access to a wide range of assets.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-16 bg-violet-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-semibold font-pro mb-4">Our Success</h2>
            <p className="text-lg">We are proud of our achievements and the success our clients have experienced.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Stat Card 1 */}
            <motion.div
              className="glass-dark p-6 rounded-lg hover-scale"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Users className="w-8 h-8 mb-4 text-violet-400" />
              <h3 className="text-2xl font-bold font-pro"><CountUp to={5000} duration={5} />+</h3>
              <p className="text-lg">Happy Clients</p>
            </motion.div>

            {/* Stat Card 2 */}
            <motion.div
              className="glass-dark p-6 rounded-lg hover-scale"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <TrendingUp className="w-8 h-8 mb-4 text-violet-400" />
              <h3 className="text-2xl font-bold font-pro"><CountUp to={30} duration={5} />%</h3>
              <p className="text-lg">Average Profit Increase</p>
            </motion.div>

            {/* Stat Card 3 */}
            <motion.div
              className="glass-dark p-6 rounded-lg hover-scale"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <CheckCircle className="w-8 h-8 mb-4 text-violet-400" />
              <h3 className="text-2xl font-bold font-pro"><CountUp to={99} duration={5} />%</h3>
              <p className="text-lg">Client Satisfaction</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-semibold font-pro mb-4">Testimonials</h2>
            <p className="text-muted-foreground">See what our clients are saying about our AI trading platform.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial Card 1 */}
            <motion.div
              className="glass p-6 rounded-lg hover-scale"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>John Doe</CardTitle>
                  <CardDescription>Investor</CardDescription>
                </CardHeader>
                <CardContent>
                  "I've been using this AI trading platform for six months and have seen a significant increase in my profits. Highly recommended!"
                </CardContent>
              </Card>
            </motion.div>

            {/* Testimonial Card 2 */}
            <motion.div
              className="glass p-6 rounded-lg hover-scale"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Jane Smith</CardTitle>
                  <CardDescription>Trader</CardDescription>
                </CardHeader>
                <CardContent>
                  "The AI algorithms are incredibly accurate, and the real-time data analysis has helped me make smarter trading decisions."
                </CardContent>
              </Card>
            </motion.div>

            {/* Testimonial Card 3 */}
            <motion.div
              className="glass p-6 rounded-lg hover-scale"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Mike Johnson</CardTitle>
                  <CardDescription>Financial Analyst</CardDescription>
                </CardHeader>
                <CardContent>
                  "This platform has revolutionized the way I manage my portfolio. The automated trading feature is a game-changer!"
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold font-pro mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8">Join our AI trading platform today and unlock your investment potential.</p>
            <Button size="lg" className="button-hover-fix">
              Start Your Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-background/80 glass-effect">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            &copy; {new Date().getFullYear()} AI Trading Platform. All rights reserved.
          </p>
          <div className="mt-4 space-x-4">
            <a href="/terms" className="text-sm text-muted-foreground hover:text-foreground footer-link">Terms of Service</a>
            <a href="/privacy" className="text-sm text-muted-foreground hover:text-foreground footer-link">Privacy Policy</a>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-2 rounded-full bg-background/80 glass-effect back-to-top-hover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowUp className="h-6 w-6" />
        </motion.button>
      )}
    </div>
  );
};

export default Index;
