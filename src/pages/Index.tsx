
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Zap, Shield, BarChart3, Rocket, Code, Users, Star, ChevronDown, ArrowRight, Layers, TrendingUp, Globe, Lock, Activity, Database, Settings } from "lucide-react";
import FadeContent from "@/components/animations/FadeContent";
import StarBorder from "@/components/animations/StarBorder";
import CountUp from "@/components/animations/CountUp";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden font-sans relative">
      {/* Enhanced background with animated elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/3 to-violet-500/3 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-20 right-20 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 left-20 w-1 h-1 bg-violet-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-40 right-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse" style={{animationDelay: '2.5s'}}></div>
      </div>

      {/* Enhanced Navigation */}
      <FadeContent>
        <header className="border-b border-slate-800/30 backdrop-blur-xl bg-slate-950/70 sticky top-0 z-50 transition-all duration-500">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3 group">
              {/* Enhanced neon lightning logo */}
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/50 group-hover:scale-110 transition-all duration-300 animate-pulse">
                  <Zap className="w-7 h-7 text-white drop-shadow-lg" />
                </div>
                <div className="absolute inset-0 w-12 h-12 rounded-xl bg-blue-500/30 blur-lg animate-pulse"></div>
                <div className="absolute inset-0 w-12 h-12 rounded-xl bg-blue-400/20 blur-xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
              </div>
              <span className="text-2xl font-bold text-white bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent drop-shadow-sm">
                Launchpad Trade
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              {["Features", "Pricing", "Testimonials", "FAQ"].map((item, index) => (
                <FadeContent key={item} delay={index * 100}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-slate-300 hover:text-blue-400 transition-all duration-300 font-medium text-sm relative group px-4 py-2 rounded-lg hover:bg-slate-800/30"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-violet-400 transition-all duration-300 group-hover:w-8"></span>
                  </a>
                </FadeContent>
              ))}
            </nav>
            <div className="flex items-center space-x-3">
              <Button 
                variant="ghost" 
                className="text-slate-300 hover:text-white hover:bg-slate-800/50 text-sm transition-all duration-300 border border-transparent hover:border-slate-700/50"
              >
                Log In
              </Button>
              <StarBorder color="#60a5fa" speed="4s">
                <Button className="bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white font-medium shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-sm">
                  Join the Alpha
                </Button>
              </StarBorder>
            </div>
          </div>
        </header>
      </FadeContent>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <FadeContent delay={200}>
              <div className="mb-8">
                <StarBorder color="#60a5fa" speed="5s">
                  <div className="inline-flex items-center space-x-2 bg-slate-800/30 backdrop-blur-md rounded-full px-6 py-3 text-sm border border-slate-700/30">
                    <span className="text-blue-400 font-medium">Claim free trial</span>
                    <span className="text-slate-400">Join our discord and claim</span>
                    <span className="text-violet-400 font-medium">Free Trial</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 animate-pulse" />
                  </div>
                </StarBorder>
              </div>
            </FadeContent>
            
            <FadeContent delay={400} blur={true}>
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="text-blue-400 animate-glow">Memecoin Intelligence</span>{" "}
                <span className="text-white">for</span>
                <br />
                <span className="text-white">Alpha-Obsessed</span>{" "}
                <span className="text-violet-400 animate-glow">Degens</span>
              </h1>
            </FadeContent>
            
            <FadeContent delay={600}>
              <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Launchpad Trade aggregates alpha groups signals into a single 
                solana dashboard for traders to find their edge.
              </p>
            </FadeContent>
            
            <FadeContent delay={800}>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
                <StarBorder color="#3b82f6" speed="3s">
                  <Button size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium px-8 py-6 text-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-300 rounded-lg">
                    Join the Alpha
                  </Button>
                </StarBorder>
                <StarBorder color="#8b5cf6" speed="4s">
                  <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-6 text-lg transition-all duration-300 rounded-lg bg-transparent">
                    Learn more
                  </Button>
                </StarBorder>
              </div>
            </FadeContent>
          </div>
        </div>
      </section>

      {/* Stats section with CountUp */}
      <FadeContent>
        <section className="py-16 relative">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: 10000, label: "Callers Monitored", color: "text-blue-400", suffix: "+" },
                { value: 25000000, label: "Messages Mirrored", color: "text-blue-400", suffix: "+" },
                { value: 400, label: "Call Latency (avg)", color: "text-blue-400", suffix: "ms" },
                { value: 3000, label: "Monthly Savings", color: "text-blue-400", prefix: "+$" }
              ].map((stat, index) => (
                <FadeContent key={index} delay={index * 100}>
                  <div className="group hover:scale-105 transition-all duration-300">
                    <div className={`text-4xl lg:text-5xl font-bold ${stat.color} mb-2`}>
                      {stat.prefix}
                      <CountUp 
                        to={stat.value} 
                        duration={2.5} 
                        delay={0.5} 
                        separator="," 
                      />
                      {stat.suffix}
                    </div>
                    <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
                  </div>
                </FadeContent>
              ))}
            </div>
          </div>
        </section>
      </FadeContent>

      {/* Features Section */}
      <FadeContent>
        <section id="features" className="py-24 relative">
          <div className="container mx-auto px-6">
            <FadeContent delay={200}>
              <div className="text-center mb-16">
                <div className="text-sm font-medium text-slate-400 mb-4 tracking-wider uppercase">FEATURES</div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  The only <span className="text-blue-400 animate-glow">toolbox</span> you need
                </h2>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                  The ultimate Degen Toolbox to boost your trading wins — whenever, wherever. All-in-one.
                </p>
              </div>
            </FadeContent>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Activity,
                  title: "Powerful Aggregator Technology",
                  items: [
                    "Consolidate data from 13+ groups into a single customizable Discord channel or website column.",
                    "Build and manage your own aggregator on Discord or our website in minutes.",
                    "Apply advanced filters — call frequency, number of calling groups, market cap, social metrics, holder count, price change, and more.",
                    "One-click Discord channel conversion — enable your trading bot to auto-buy every posted token."
                  ]
                },
                {
                  icon: Database,
                  title: "Caller Data Insights",
                  items: [
                    "Full history: messages/day, calls/day, win rate/day, average ROI/day.",
                    "Custom Caller Score — filter by score, win rate, ROI, message count, call count, successful calls, or specific groups.",
                    "Favorites for instant access to your preferred callers.",
                    "Whitelist & blacklist options to control exactly whose calls you receive."
                  ]
                },
                {
                  icon: Settings,
                  title: "Daily Performance Recap",
                  items: [
                    "Receive a daily summary - on Discord or via the web-app showing:",
                    "Profitable token recommendations.",
                    "24-hour win rate of each aggregator.",
                    "Data export to fine-tune your own strategies"
                  ]
                }
              ].map((feature, index) => (
                <FadeContent key={index} delay={index * 200}>
                  <StarBorder color="#60a5fa" speed="6s">
                    <Card className="bg-slate-900/30 backdrop-blur-sm border-slate-700/30 hover:border-slate-600/30 transition-all duration-300 group h-full">
                      <CardHeader className="pb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                          <feature.icon className="w-6 h-6 text-blue-400" />
                        </div>
                        <CardTitle className="text-white text-xl font-semibold">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {feature.items.map((item, i) => (
                            <li key={i} className="flex items-start text-sm text-slate-300">
                              <CheckCircle className="w-4 h-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </StarBorder>
                </FadeContent>
              ))}
            </div>
          </div>
        </section>
      </FadeContent>

      {/* Pricing Section */}
      <FadeContent>
        <section id="pricing" className="py-24 relative">
          <div className="container mx-auto px-6">
            <FadeContent delay={200}>
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  Simple <span className="text-blue-400 animate-glow">Pricing</span>
                </h2>
                <p className="text-xl text-slate-300">
                  No hidden fees, no surprises. Just one simple price for all the features you need.
                </p>
              </div>
            </FadeContent>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Alpha Plan */}
              <FadeContent delay={300}>
                <StarBorder color="#60a5fa" speed="5s">
                  <Card className="bg-slate-900/30 backdrop-blur-sm border-slate-700/30 hover:border-slate-600/30 transition-all duration-300 h-full">
                    <CardHeader className="text-center pb-6">
                      <div className="text-sm font-medium text-slate-400 mb-2">ALPHA</div>
                      <div className="text-sm text-slate-400 mb-4">UNLOCK EVERYTHING FOR JUST</div>
                      <div className="text-4xl font-bold text-white mb-1">1 SOL<span className="text-lg text-slate-400">/month</span></div>
                      <CardDescription className="text-slate-300">
                        Access over 110 premium alpha channels
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-8">
                        {["Access all the mirrored groups", "All In One Web Platform", "Powerful Aggregator Technology", "Caller Data Insights", "Daily Performance Recap"].map((feature, i) => (
                          <li key={i} className="flex items-center text-slate-300">
                            <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <StarBorder color="#64748b" speed="4s">
                        <Button className="w-full bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-500 hover:to-slate-600 text-white font-medium transition-all duration-300">
                          Get Started
                        </Button>
                      </StarBorder>
                    </CardContent>
                  </Card>
                </StarBorder>
              </FadeContent>

              {/* Full Access Plan */}
              <FadeContent delay={400}>
                <div className="relative">
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-violet-500 text-white font-bold px-4 py-1 text-sm animate-pulse">
                    BEST SELLER
                  </Badge>
                  <StarBorder color="#3b82f6" speed="3s">
                    <Card className="bg-gradient-to-br from-blue-500/10 to-violet-500/10 backdrop-blur-sm border-blue-500/30 relative shadow-xl h-full">
                      <CardHeader className="text-center pb-6">
                        <div className="text-sm font-medium text-blue-400 mb-2">FULL ACCESS</div>
                        <div className="text-sm text-slate-400 mb-4">THE COMPLETE EXPERIENCE FOR JUST</div>
                        <div className="text-4xl font-bold text-white mb-1">2 SOL<span className="text-lg text-slate-400">/month</span></div>
                        <CardDescription className="text-slate-300">
                          Elevate your trading with our comprehensive professional suite
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3 mb-8">
                          {["Everything in ALPHA", "Copy Trade Wallet Finder", "Private daily recaps", "Private custom aggregators", "Advanced analytics"].map((feature, i) => (
                            <li key={i} className="flex items-center text-slate-300">
                              <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <StarBorder color="#3b82f6" speed="3s">
                          <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold transition-all duration-300 shadow-lg">
                            Get Full Access
                          </Button>
                        </StarBorder>
                      </CardContent>
                    </Card>
                  </StarBorder>
                </div>
              </FadeContent>

              {/* Lifetime Plan */}
              <FadeContent delay={500}>
                <StarBorder color="#f59e0b" speed="4s">
                  <Card className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm border-yellow-500/30 h-full">
                    <CardHeader className="text-center pb-6">
                      <div className="text-sm font-medium text-yellow-400 mb-2">LIFETIME</div>
                      <div className="text-4xl font-bold text-white mb-1">25 SOL</div>
                      <CardDescription className="text-slate-300">
                        One payment, endless value. Get permanent access to our complete suite
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-8">
                        {["Everything in FULL ACCESS", "No recurring payments ever", "Exclusive lifetime member community", "More Custom Aggregators", "Priority access to new features"].map((feature, i) => (
                          <li key={i} className="flex items-center text-slate-300">
                            <CheckCircle className="w-5 h-5 text-yellow-400 mr-3" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <StarBorder color="#f59e0b" speed="3s">
                        <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold transition-all duration-300 shadow-lg">
                          Go Lifetime
                        </Button>
                      </StarBorder>
                    </CardContent>
                  </Card>
                </StarBorder>
              </FadeContent>
            </div>
          </div>
        </section>
      </FadeContent>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-sm font-medium text-slate-400 mb-4 tracking-wider uppercase">TESTIMONIALS</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Hear what <span className="text-blue-400">winners</span> say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "soroki",
                text: "I am truly impressed with Launchpad Trade! Not only is it incredibly efficient, but the team behind it is also friendly and helpful."
              },
              {
                name: "SANITY",
                text: "This is the only alpha server you'll ever need — 100% the best value for your money. The team is constantly improving the service."
              },
              {
                name: "ctoligark",
                text: "It is a magnificent server where you can see many alpha servers together with special filters and privileged options."
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-slate-900/30 backdrop-blur-sm border-slate-700/30 hover:border-slate-600/30 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3 text-sm">
                      {testimonial.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                  </div>
                  <p className="text-slate-300 leading-relaxed">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section with Accordion */}
      <FadeContent>
        <section id="faq" className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold">
                <span className="text-blue-400">F</span>requently{" "}
                <span className="text-blue-400">A</span>sked{" "}
                <span className="text-blue-400">Q</span>uestions
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {[
                  { 
                    q: "What Groups And Tools Are Currently Included?", 
                    a: "We monitor over 110+ premium alpha groups including Potion, Pastel, Digiworld, Cryptic, Shocked, Yogurt, Heaven Or Hell, Minted, Secret Society, Technical Alpha Group, Vanquish, Pumpfun Trenches, Prosperity, and many more top-tier Solana trading communities. Each group provides unique insights and trading signals to maximize your alpha opportunities." 
                  },
                  { 
                    q: "What is an aggregator?", 
                    a: "An aggregator consolidates calls from multiple alpha groups into a single channel, allowing you to filter and customize the information you receive based on your trading preferences. You can set filters for market cap, call frequency, caller performance, and much more to only see the signals that matter most to your trading strategy." 
                  },
                  { 
                    q: "How Does Launchpad Trade Save Me Money?", 
                    a: "Instead of paying for 13+ separate alpha group subscriptions (which could cost $3000+/month), you get access to all of them for just 1-2 SOL per month. This represents massive savings while giving you access to more alpha sources than you could afford individually. Plus, our aggregation technology helps you filter out noise and focus on the highest-quality signals." 
                  },
                  { 
                    q: "How Are Updates Delivered In Real-Time?", 
                    a: "Our proprietary RealTimeSync™ technology delivers calls with an average latency of just 400ms on our website and 12 seconds on Discord, ensuring you get alpha signals almost instantly. We maintain 99.9% uptime and have been running without downtime for over 8 months. Our infrastructure automatically scales to handle high-volume periods without degradation." 
                  },
                  { 
                    q: "Can I Request New Alpha Groups Or Tools?", 
                    a: "Yes! We're constantly expanding our coverage based on community feedback. Premium members can request new groups and tools through our Discord server, and we prioritize additions based on community demand and group quality. We evaluate new alpha sources weekly and typically add 2-3 new premium groups each month." 
                  },
                  { 
                    q: "How Do I Get Access To The Tool?", 
                    a: "Simply choose your plan above, complete payment through our secure checkout, and you'll receive instant Discord access plus web platform credentials within 5 minutes. Our onboarding process includes a welcome guide, setup tutorials, and access to our support team to ensure you get the most out of your subscription from day one." 
                  }
                ].map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-slate-900/30 backdrop-blur-sm border-slate-700/30 rounded-lg px-6 hover:border-slate-600/30 transition-all duration-300"
                  >
                    <AccordionTrigger className="text-white text-lg font-medium hover:text-blue-400 transition-colors py-6">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-300 pb-6 leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </FadeContent>

      {/* Footer */}
      <FadeContent>
        <footer className="border-t border-slate-800/30 bg-slate-950/70 backdrop-blur-md">
          <div className="container mx-auto px-6 py-16">
            <div className="flex flex-col md:flex-row justify-between items-start mb-12">
              <div className="mb-8 md:mb-0">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="relative">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center font-bold text-white text-sm shadow-lg shadow-blue-500/30 animate-pulse">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div className="absolute inset-0 w-8 h-8 rounded-lg bg-blue-500/20 blur-md animate-pulse"></div>
                  </div>
                  <span className="text-xl font-semibold text-white">Launchpad Trade</span>
                </div>
                <p className="text-slate-400 max-w-sm">
                  We've mirrored the past, now we're shaping the future.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-12">
                <div>
                  <h4 className="font-semibold text-white mb-4">Product</h4>
                  <ul className="space-y-2">
                    {["Features", "Pricing", "Testimonials", "FAQ"].map((link, i) => (
                      <li key={i}>
                        <a href={`#${link.toLowerCase()}`} className="text-slate-400 hover:text-white transition-colors">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <Separator className="my-8 bg-slate-800/30" />
            
            <div className="flex flex-col md:flex-row items-center justify-between text-slate-400 text-sm">
              <p>© 2025 Copyright Launchpad Trade. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </FadeContent>
    </div>
  );
};

export default Index;
