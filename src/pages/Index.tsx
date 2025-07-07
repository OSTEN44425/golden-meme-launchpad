
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Zap, Shield, BarChart3, Rocket, Code, Users, Star, Plus, Minus, ArrowRight, Layers, TrendingUp, Globe, Lock, Activity, Database, Settings, ArrowUp } from "lucide-react";
import FadeContent from "@/components/animations/FadeContent";
import CountUp from "@/components/animations/CountUp";
import ModernGrid from "@/components/animations/ModernGrid";
import { useLenis } from "@/hooks/useLenis";

const Index = () => {
  // Initialize Lenis smooth scroll
  useLenis();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden font-sans relative">
      {/* Modern Grid Background */}
      <ModernGrid />

      {/* Enhanced Navigation with separation */}
      <FadeContent>
        <header className="backdrop-blur-xl bg-slate-950/80 sticky top-0 z-50 transition-all duration-500">
          <div className="container mx-auto px-8 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3 group">
              {/* Enhanced neon lightning logo */}
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/50 group-hover:scale-110 transition-all duration-300">
                  <Zap className="w-6 h-6 text-white drop-shadow-lg" />
                </div>
                <div className="absolute inset-0 w-10 h-10 rounded-xl bg-blue-500/30 blur-md animate-pulse"></div>
              </div>
              <span className="text-xl font-bold text-white bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent font-mono tracking-wide">
                Launchpad Trade
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              {["Features", "Pricing", "Testimonials", "FAQ"].map((item, index) => (
                <FadeContent key={item} delay={index * 100}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="relative text-slate-200 hover:text-blue-300 transition-all duration-300 font-semibold text-sm px-4 py-2 rounded-lg hover:bg-slate-800/20 group"
                  >
                    <span className="relative z-10">{item}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                    <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-violet-400 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                  </a>
                </FadeContent>
              ))}
            </nav>
            <Button className="glowing-border bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold shadow-xl hover:shadow-blue-500/30 transition-all duration-300 text-sm px-6 py-2 rounded-full border border-blue-400/20 hover:border-blue-300/30 backdrop-blur-sm hover:scale-105 relative overflow-hidden group">
              <span className="relative z-10">Join the Alpha</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </Button>
          </div>
          {/* Subtle separation line */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent"></div>
        </header>
      </FadeContent>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <FadeContent delay={200}>
              <div className="mb-8">
                <div className="inline-flex items-center space-x-2 glowing-border glass-effect rounded-full px-6 py-3 text-sm border border-slate-700/30 hover-scale">
                  <span className="text-blue-400 font-medium">Claim free trial</span>
                  <span className="text-slate-400">Join our discord and claim</span>
                  <span className="text-violet-400 font-medium">Free Trial</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 animate-pulse" />
                </div>
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
                <button className="glowing-border bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold px-8 py-3 rounded-full shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 border border-blue-400/20 hover:border-blue-300/30 backdrop-blur-sm relative overflow-hidden group">
                  <span className="relative z-10">Join the Alpha</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </button>
                <button className="glowing-border bg-transparent border-2 border-slate-600/50 text-slate-300 hover:border-slate-500 hover:text-white backdrop-blur-sm hover:bg-slate-800/20 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
                  Learn more
                </button>
              </div>
            </FadeContent>
          </div>
        </div>
      </section>

      {/* Stats section with CountUp - Enhanced text */}
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
                  <div className="glowing-border group hover:scale-105 transition-all duration-300 hover-scale glass-effect rounded-lg p-6">
                    <div className={`text-4xl lg:text-5xl font-bold ${stat.color} mb-2 font-mono`}>
                      {stat.prefix}
                      <CountUp 
                        to={stat.value} 
                        duration={2.5} 
                        delay={0.5} 
                        separator="," 
                      />
                      {stat.suffix}
                    </div>
                    <div className="text-white text-base font-semibold">{stat.label}</div>
                  </div>
                </FadeContent>
              ))}
            </div>
          </div>
        </section>
      </FadeContent>

      {/* Features Section - Equal heights and more colors */}
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
                  color: "from-blue-500/20 to-cyan-500/20",
                  borderColor: "border-blue-500/30",
                  iconColor: "text-blue-400",
                  bgGradient: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10",
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
                  color: "from-violet-500/20 to-purple-500/20",
                  borderColor: "border-violet-500/30",
                  iconColor: "text-violet-400",
                  bgGradient: "bg-gradient-to-br from-violet-500/10 to-purple-500/10",
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
                  color: "from-green-500/20 to-emerald-500/20",
                  borderColor: "border-green-500/30",
                  iconColor: "text-green-400",
                  bgGradient: "bg-gradient-to-br from-green-500/10 to-emerald-500/10",
                  items: [
                    "Receive a daily summary - on Discord or via the web-app showing:",
                    "Profitable token recommendations.",
                    "24-hour win rate of each aggregator.",
                    "Data export to fine-tune your own strategies"
                  ]
                }
              ].map((feature, index) => (
                <FadeContent key={index} delay={index * 200}>
                  <Card className={`glowing-border glass-effect ${feature.bgGradient} backdrop-blur-sm ${feature.borderColor} hover:border-opacity-50 transition-all duration-300 group h-full flex flex-col hover-scale`}>
                    <CardHeader className="pb-4">
                      <div className={`w-12 h-12 ${feature.bgGradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border ${feature.borderColor}`}>
                        <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                      </div>
                      <CardTitle className="text-white text-xl font-semibold">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <ul className="space-y-3">
                        {feature.items.map((item, i) => (
                          <li key={i} className="flex items-start text-sm text-slate-300">
                            <CheckCircle className={`w-4 h-4 ${feature.iconColor} mr-2 mt-0.5 flex-shrink-0`} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </FadeContent>
              ))}
            </div>
          </div>
        </section>
      </FadeContent>

      {/* Pricing Section - Equal heights */}
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
              {/* All pricing cards with equal heights */}
              <FadeContent delay={300}>
                <Card className="glowing-border glass-effect backdrop-blur-sm border-slate-700/30 hover:border-slate-600/30 transition-all duration-300 h-full flex flex-col hover-scale">
                  <CardHeader className="text-center pb-6">
                    <div className="text-sm font-medium text-slate-400 mb-2">ALPHA</div>
                    <div className="text-sm text-slate-400 mb-4">UNLOCK EVERYTHING FOR JUST</div>
                    <div className="text-4xl font-bold text-white mb-1">1 SOL<span className="text-lg text-slate-400">/month</span></div>
                    <CardDescription className="text-slate-300">
                      Access over 110 premium alpha channels
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <ul className="space-y-3 mb-8 flex-1">
                      {["Access all the mirrored groups", "All In One Web Platform", "Powerful Aggregator Technology", "Caller Data Insights", "Daily Performance Recap"].map((feature, i) => (
                        <li key={i} className="flex items-center text-slate-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="glowing-border w-full bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-500 hover:to-slate-600 text-white font-medium transition-all duration-300 modern-button hover-scale">
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              </FadeContent>

              <FadeContent delay={400}>
                <div className="relative">
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-violet-500 text-white font-bold px-4 py-1 text-sm animate-pulse z-10">
                    BEST SELLER
                  </Badge>
                  <Card className="glowing-border glass-effect bg-gradient-to-br from-blue-500/10 to-violet-500/10 backdrop-blur-sm border-blue-500/30 relative shadow-xl h-full flex flex-col hover-scale">
                    <CardHeader className="text-center pb-6">
                      <div className="text-sm font-medium text-blue-400 mb-2">FULL ACCESS</div>
                      <div className="text-sm text-slate-400 mb-4">THE COMPLETE EXPERIENCE FOR JUST</div>
                      <div className="text-4xl font-bold text-white mb-1">2 SOL<span className="text-lg text-slate-400">/month</span></div>
                      <CardDescription className="text-slate-300">
                        Elevate your trading with our comprehensive professional suite
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <ul className="space-y-3 mb-8 flex-1">
                        {["Everything in ALPHA", "Copy Trade Wallet Finder", "Private daily recaps", "Private custom aggregators", "Advanced analytics"].map((feature, i) => (
                          <li key={i} className="flex items-center text-slate-300">
                            <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button className="glowing-border w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold transition-all duration-300 shadow-lg modern-button hover-scale">
                        Get Full Access
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </FadeContent>

              <FadeContent delay={500}>
                <Card className="glowing-border glass-effect bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm border-yellow-500/30 h-full flex flex-col hover-scale">
                  <CardHeader className="text-center pb-6">
                    <div className="text-sm font-medium text-yellow-400 mb-2">LIFETIME</div>
                    <div className="text-4xl font-bold text-white mb-1">25 SOL</div>
                    <CardDescription className="text-slate-300">
                      One payment, endless value. Get permanent access to our complete suite
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <ul className="space-y-3 mb-8 flex-1">
                      {["Everything in FULL ACCESS", "No recurring payments ever", "Exclusive lifetime member community", "More Custom Aggregators", "Priority access to new features"].map((feature, i) => (
                        <li key={i} className="flex items-center text-slate-300">
                          <CheckCircle className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="glowing-border w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold transition-all duration-300 shadow-lg modern-button hover-scale">
                      Go Lifetime
                    </Button>
                  </CardContent>
                </Card>
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
              <Card key={index} className="glowing-border glass-effect backdrop-blur-sm border-slate-700/30 hover:border-slate-600/30 transition-all duration-300 hover-scale">
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

      {/* Enhanced FAQ Section with + and - icons */}
      <FadeContent>
        <section id="faq" className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold font-mono">
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
                    className="glowing-border glass-effect backdrop-blur-sm border-slate-700/30 rounded-lg px-6 hover:border-slate-600/30 transition-all duration-300 hover-scale"
                  >
                    <AccordionTrigger className="text-white text-lg font-bold hover:text-blue-400 transition-colors py-6 text-left font-mono [&[data-state=open]>svg]:hidden">
                      <div className="flex items-center justify-between w-full">
                        <span>{faq.q}</span>
                        <div className="flex items-center">
                          <Plus className="h-5 w-5 shrink-0 transition-transform duration-200 group-data-[state=open]:hidden" />
                          <Minus className="h-5 w-5 shrink-0 transition-transform duration-200 hidden group-data-[state=open]:block" />
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-300 pb-6 leading-relaxed text-base font-medium">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              
              {/* Back to Top Button */}
              <div className="text-center mt-12">
                <Button 
                  onClick={scrollToTop}
                  variant="ghost" 
                  className="glowing-border text-slate-400 hover:text-blue-400 transition-all duration-300 font-medium hover-scale modern-button"
                >
                  <ArrowUp className="w-4 h-4 mr-2" />
                  Back to Top
                </Button>
              </div>
            </div>
          </div>
        </section>
      </FadeContent>

      {/* Enhanced Footer - Modern and complete with colors */}
      <FadeContent>
        <footer className="border-t border-slate-800/30 bg-gradient-to-br from-slate-950/80 via-slate-900/60 to-slate-950/80 backdrop-blur-xl shadow-2xl shadow-slate-900/40">
          <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="relative">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-400 via-blue-500 to-violet-500 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/40">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div className="absolute inset-0 w-8 h-8 rounded-lg bg-blue-500/20 blur-md animate-pulse"></div>
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent font-mono tracking-wide">
                    Launchpad Trade
                  </span>
                </div>
                <p className="text-slate-300 max-w-sm mb-4 font-medium leading-relaxed">
                  <span className="text-blue-400 font-semibold">We've mirrored the past</span>, now we're{" "}
                  <span className="text-violet-400 font-semibold">shaping the future</span>.
                </p>
                <div className="flex space-x-4">
                  <div className="text-slate-400 hover:text-blue-400 transition-all duration-300 cursor-pointer hover:scale-110 p-2 rounded-lg hover:bg-slate-800/30 backdrop-blur-sm">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-slate-400 hover:text-violet-400 transition-all duration-300 cursor-pointer hover:scale-110 p-2 rounded-lg hover:bg-slate-800/30 backdrop-blur-sm">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-bold text-white mb-4 text-lg bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                  Product
                </h4>
                <ul className="space-y-3">
                  {["Features", "Pricing", "Testimonials", "FAQ"].map((link, i) => (
                    <li key={i}>
                      <a 
                        href={`#${link.toLowerCase()}`} 
                        className="text-slate-300 hover:text-blue-400 transition-all duration-300 text-sm font-medium hover:translate-x-1 block py-1 hover:bg-slate-800/20 px-2 rounded-md backdrop-blur-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-bold text-white mb-4 text-lg bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                  Support
                </h4>
                <ul className="space-y-3">
                  {["Discord", "Documentation", "Help Center", "Contact"].map((link, i) => (
                    <li key={i}>
                      <a 
                        href="#" 
                        className="text-slate-300 hover:text-violet-400 transition-all duration-300 text-sm font-medium hover:translate-x-1 block py-1 hover:bg-slate-800/20 px-2 rounded-md backdrop-blur-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <Separator className="my-6 bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
            
            <div className="flex flex-col md:flex-row items-center justify-between text-slate-300 text-sm">
              <p className="font-medium">
                © 2025 Copyright{" "}
                <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent font-semibold">
                  Launchpad Trade
                </span>
                . All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                {["Privacy Policy", "Terms of Service", "Cookies"].map((link, i) => (
                  <a 
                    key={i}
                    href="#" 
                    className="hover:text-blue-400 transition-all duration-300 font-medium hover:scale-105 hover:underline decoration-blue-400/50 underline-offset-4"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </FadeContent>
    </div>
  );
};

export default Index;
