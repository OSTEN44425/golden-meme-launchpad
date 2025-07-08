import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Star, Users, TrendingUp, Shield, Code, Database, Zap } from "lucide-react";
import { motion } from "framer-motion";
import AIBot from "@/components/animations/AIBot";
import CountUp from "@/components/animations/CountUp";
import FadeContent from "@/components/animations/FadeContent";
import TypingAnimation from "@/components/animations/TypingAnimation";
import TechGrid from "@/components/animations/TechGrid";
import ModernGrid from "@/components/animations/ModernGrid";
import MouseLightEffect from "@/components/animations/MouseLightEffect";
import FloatingDecoration from "@/components/decorations/FloatingDecoration";
import { useLenis } from "@/hooks/useLenis";

const Index = () => {
  useLenis();

  const leftIcons = [
    { icon: Code, position: 'top' as const, delay: 0 },
    { icon: Database, position: 'middle' as const, delay: 0.5 },
    { icon: Zap, position: 'bottom' as const, delay: 1 }
  ];

  const rightIcons = [
    { icon: Shield, position: 'top' as const, delay: 0.2 },
    { icon: TrendingUp, position: 'middle' as const, delay: 0.7 },
    { icon: Users, position: 'bottom' as const, delay: 1.2 }
  ];

  useEffect(() => {
    document.title = "Home | Starlight";
  }, []);

  const fadeInAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: 0.2, ease: "easeInOut" },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-violet-900/20 to-slate-900">
      <MouseLightEffect />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <TechGrid />
        <ModernGrid />
        
        {/* Floating Decorations - Only in hero section */}
        <FloatingDecoration side="left" icons={leftIcons} />
        <FloatingDecoration side="right" icons={rightIcons} />
        
        <div className="container mx-auto text-center z-10 relative">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            variants={fadeInAnimation}
            initial="initial"
            animate="animate"
          >
            Unlock the Power of AI with{" "}
            <span className="text-violet-400">Starlight</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-slate-300 mb-8"
            variants={fadeInAnimation}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
          >
            Experience cutting-edge AI solutions tailored to elevate your
            business.
          </motion.p>
          <div className="flex justify-center space-x-4">
            <motion.div
              variants={fadeInAnimation}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.6, ease: "easeInOut" }}
            >
              <Button size="lg">
                Get Started <ArrowRight className="ml-2" />
              </Button>
            </motion.div>
            <motion.div
              variants={fadeInAnimation}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.8, ease: "easeInOut" }}
            >
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <FadeContent>
            <h2 className="text-3xl font-semibold text-white text-center mb-12">
              Our Key Features
            </h2>
          </FadeContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeContent delay={0.2}>
              <Card className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-medium text-white flex items-center">
                    <CheckCircle className="mr-2 text-green-500" /> AI-Powered
                    Automation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-400">
                    Automate repetitive tasks and streamline your workflows with
                    our intelligent AI solutions.
                  </CardDescription>
                </CardContent>
              </Card>
            </FadeContent>
            <FadeContent delay={0.4}>
              <Card className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-medium text-white flex items-center">
                    <Star className="mr-2 text-yellow-500" /> Predictive Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-400">
                    Gain valuable insights into future trends and make informed
                    decisions with our advanced predictive analytics tools.
                  </CardDescription>
                </CardContent>
              </Card>
            </FadeContent>
            <FadeContent delay={0.6}>
              <Card className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-medium text-white flex items-center">
                    <Shield className="mr-2 text-blue-500" /> Enhanced Security
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-400">
                    Protect your data and infrastructure with our robust AI-driven
                    security solutions.
                  </CardDescription>
                </CardContent>
              </Card>
            </FadeContent>
          </div>
        </div>
      </section>

      {/* AI Showcase Section */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <FadeContent>
                <h2 className="text-3xl font-semibold text-white mb-4">
                  Meet Our AI Assistant
                </h2>
                <p className="text-slate-400 text-lg mb-6">
                  Our AI assistant is designed to help you navigate the complexities
                  of modern business. With advanced natural language processing and
                  machine learning capabilities, it can answer your questions,
                  provide insights, and automate tasks.
                </p>
                <Button size="lg">
                  Explore AI Assistant <ArrowRight className="ml-2" />
                </Button>
              </FadeContent>
            </div>
            <div className="order-1 lg:order-2">
              <FadeContent>
                <AIBot />
              </FadeContent>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <FadeContent>
            <h2 className="text-3xl font-semibold text-white text-center mb-12">
              Our Impact by the Numbers
            </h2>
          </FadeContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FadeContent delay={0.2}>
              <Card className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <CardHeader>
                  <CardTitle className="text-5xl font-bold text-violet-400">
                    <CountUp to={150} />+
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-400">
                    Satisfied Clients
                  </CardDescription>
                </CardContent>
              </Card>
            </FadeContent>
            <FadeContent delay={0.4}>
              <Card className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <CardHeader>
                  <CardTitle className="text-5xl font-bold text-violet-400">
                    <CountUp to={500} />+
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-400">
                    AI Solutions Deployed
                  </CardDescription>
                </CardContent>
              </Card>
            </FadeContent>
            <FadeContent delay={0.6}>
              <Card className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <CardHeader>
                  <CardTitle className="text-5xl font-bold text-violet-400">
                    <CountUp to={95} />%
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-400">
                    Customer Satisfaction
                  </CardDescription>
                </CardContent>
              </Card>
            </FadeContent>
            <FadeContent delay={0.8}>
              <Card className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <CardHeader>
                  <CardTitle className="text-5xl font-bold text-violet-400">
                    <CountUp to={30} />%
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-400">
                    Increase in Efficiency
                  </CardDescription>
                </CardContent>
              </Card>
            </FadeContent>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="container mx-auto">
          <FadeContent>
            <h2 className="text-3xl font-semibold text-white text-center mb-12">
              What Our Clients Say
            </h2>
          </FadeContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <FadeContent delay={0.2}>
              <Card className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center">
                    <img
                      src="https://randomuser.me/api/portraits/men/83.jpg"
                      alt="Client"
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <CardTitle className="text-lg font-medium text-white">
                        John Anderson
                      </CardTitle>
                      <CardDescription className="text-slate-400">
                        CEO, Tech Solutions Inc.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    "Starlight's AI solutions have revolutionized our business. We've
                    seen a significant increase in efficiency and a boost in
                    customer satisfaction."
                  </p>
                </CardContent>
              </Card>
            </FadeContent>
            <FadeContent delay={0.4}>
              <Card className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center">
                    <img
                      src="https://randomuser.me/api/portraits/women/76.jpg"
                      alt="Client"
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <CardTitle className="text-lg font-medium text-white">
                        Emily Carter
                      </CardTitle>
                      <CardDescription className="text-slate-400">
                        Marketing Director, Innovate Corp.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    "The AI-powered analytics provided by Starlight have given us
                    unprecedented insights into our customer behavior. We're now
                    able to make data-driven decisions that drive growth."
                  </p>
                </CardContent>
              </Card>
            </FadeContent>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-8 px-4 text-center text-slate-500 border-t border-slate-700">
        <p>&copy; 2024 Starlight. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
