import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Zap, Shield, BarChart3, Rocket, Code, Users, Star, Plus, Minus, ArrowRight, Layers, TrendingUp, Globe, Lock, Activity, Database, Settings, ArrowUp, FileText, DollarSign, Headphones, MessageCircle } from "lucide-react";
import FadeContent from "@/components/animations/FadeContent";
import CountUp from "@/components/animations/CountUp";
import ModernGrid from "@/components/animations/ModernGrid";
import AIBot from "@/components/animations/AIBot";
import { useLenis } from "@/hooks/useLenis";

const Index = () => {
  // Initialize Lenis smooth scroll
  useLenis();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden font-sans relative">
      {/* Modern Grid Background */}
      <ModernGrid />

      {/* Background Assets */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-violet-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-br from-cyan-500/20 to-violet-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 left-1/3 w-16 h-16 bg-gradient-to-br from-emerald-500/30 to-teal-500/30 rounded-full blur-2xl animate-bounce-slow"></div>
      </div>

      {/* Enhanced Navigation */}
      <FadeContent>
        <header className="backdrop-blur-xl bg-slate-950/80 sticky top-0 z-50 transition-all duration-500">
          <div className="container mx-auto px-8 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-violet-400 via-violet-500 to-violet-600 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/50 group-hover:scale-110 transition-all duration-300">
                  <Zap className="w-6 h-6 text-white drop-shadow-lg" />
                </div>
                <div className="absolute inset-0 w-10 h-10 rounded-xl bg-violet-500/30 blur-md animate-pulse"></div>
              </div>
              <span className="text-xl font-bold text-white font-mono tracking-wide">
                launchpad.trade
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <FadeContent delay={100}>
                <button 
                  onClick={() => scrollToSection('documentation')}
                  className="text-slate-200 hover:text-violet-400 font-semibold text-sm px-4 py-2 rounded-lg transition-colors duration-300"
                >
                  Documentation
                </button>
              </FadeContent>
            </nav>
            <button 
              onClick={() => scrollToSection('cta-final')}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 text-white hover:bg-slate-700/50 font-bold shadow-xl transition-all duration-300 text-sm px-6 py-2 rounded-full relative overflow-hidden group"
            >
              <span className="relative z-10">Get my API Key</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </button>
          </div>
          {/* Full-width animated violet separator line - more transparent */}
          <div className="relative h-px w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-500/20 to-transparent animate-pulse"></div>
            <div className="absolute left-0 w-full h-px bg-gradient-to-r from-violet-400/10 via-violet-500/30 to-violet-400/10 animate-pulse" style={{animationDelay: '0.5s'}}></div>
          </div>
        </header>
      </FadeContent>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <FadeContent delay={400} blur={true}>
              <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
                <span className="text-violet-400">The Fastest API</span>
                <br />
                <span className="text-white">for Trading and Launching on</span>{" "}
                <span className="text-violet-400">letsbonk.fun</span>
              </h1>
            </FadeContent>
            
            <FadeContent delay={600}>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Integrate professional-grade infrastructure in minutes to automate your trades and token launches. Maximum reliability, minimal fees.
              </p>
            </FadeContent>
            
            <FadeContent delay={800}>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-6">
                <button 
                  onClick={() => scrollToSection('cta-final')}
                  className="bg-slate-800/60 backdrop-blur-sm border border-slate-600/40 text-white hover:bg-slate-700/60 font-bold px-8 py-3 rounded-full shadow-xl transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10">Generate my Free API Key</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </button>
                <button 
                  onClick={() => scrollToSection('documentation')}
                  className="glowing-border bg-transparent border-2 border-slate-600/50 text-slate-300 hover:border-slate-500 hover:text-white backdrop-blur-sm hover:bg-slate-800/20 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
                >
                  Explore Documentation
                </button>
              </div>
            </FadeContent>

            <FadeContent delay={1000}>
              <p className="text-sm text-slate-400 italic mb-16">
                No credit card required. Simple integration.
              </p>
            </FadeContent>
          </div>
        </div>
      </section>

      {/* AI Bot Section - Moved much higher */}
      <FadeContent>
        <section className="py-4 relative">
          <div className="container mx-auto px-6 flex justify-center">
            <AIBot />
          </div>
        </section>
      </FadeContent>

      {/* Social Proof / Trust */}
      <FadeContent>
        <section className="py-12 relative">
          <div className="container mx-auto px-6 text-center">
            <p className="text-sm text-slate-400 mb-8 uppercase tracking-wider">Compatible with Solana Ecosystem</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              <div className="text-2xl font-bold text-slate-500">Solana</div>
              <div className="text-2xl font-bold text-slate-500">letsbonk.fun</div>
              <div className="text-2xl font-bold text-slate-500">Jito Labs</div>
              <div className="text-2xl font-bold text-slate-500">Temporal</div>
              <div className="text-2xl font-bold text-slate-500">0slot</div>
            </div>
          </div>
        </section>
      </FadeContent>

      {/* Violet Section separator */}
      <div className="relative py-6">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent animate-pulse"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-violet-500 rounded-full animate-ping"></div>
        </div>
      </div>

      {/* Use Cases Section */}
      <FadeContent>
        <section className="py-16 relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Built for <span className="text-violet-400">Your Goals</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <FadeContent delay={300}>
                <Card className="glowing-border glass-effect bg-gradient-to-br from-violet-500/10 to-purple-500/10 backdrop-blur-sm border-violet-500/30 relative shadow-xl h-full flex flex-col hover-scale">
                  <CardHeader className="pb-6">
                    <Badge className="bg-gradient-to-r from-violet-500 to-purple-500 text-white font-bold px-4 py-1 text-sm animate-pulse mb-4 w-fit">
                      BOT DEVELOPERS
                    </Badge>
                    <CardTitle className="text-2xl font-bold text-white mb-4">Create Unstoppable Trading Bots</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-4">
                      {[
                        "Snipe token launches before everyone else with Jito bundles",
                        "Execute complex buy/sell strategies with minimal latency", 
                        "Robust and stable API designed for 24/7 operation"
                      ].map((feature, i) => (
                        <li key={i} className="flex items-start text-slate-300">
                          <CheckCircle className="w-5 h-5 text-violet-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </FadeContent>

              <FadeContent delay={500}>
                <Card className="glowing-border glass-effect bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border-purple-500/30 h-full flex flex-col hover-scale">
                  <CardHeader className="pb-6">
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold px-4 py-1 text-sm animate-pulse mb-4 w-fit">
                      PROJECT CREATORS
                    </Badge>
                    <CardTitle className="text-2xl font-bold text-white mb-4">Launch Your Token Seamlessly</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-4">
                      {[
                        "Automate token creation and deployment with a simple API call",
                        "Ensure perfect initial liquidity",
                        "Save time and avoid costly manual errors"
                      ].map((feature, i) => (
                        <li key={i} className="flex items-start text-slate-300">
                          <CheckCircle className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </FadeContent>
            </div>
          </div>
        </section>
      </FadeContent>

      {/* Violet Section separator */}
      <div className="relative py-6">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent animate-pulse"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-violet-500 rounded-full animate-ping"></div>
        </div>
      </div>

      {/* Trading API Edge Title */}
      <FadeContent>
        <section className="py-12 relative">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-16">
              <span className="text-white">Trading</span>{" "}
              <span className="text-violet-400">API Edge</span>
            </h2>
          </div>
        </section>
      </FadeContent>

      {/* Key Benefits */}
      <FadeContent>
        <section className="py-20 relative">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Zap,
                  title: "Radical Simplicity",
                  description: "Integrate our API in less than 5 minutes. Clear documentation and logical endpoints to focus on your strategy, not our infrastructure.",
                  color: "from-violet-500/20 to-purple-500/20",
                  borderColor: "border-violet-500/30",
                  iconColor: "text-violet-400"
                },
                {
                  icon: Rocket,
                  title: "Performance & Stability",
                  description: "Leverage Jito bundles for atomic and priority transactions. Our service relies on the best providers (0slot, astralane) for near-instant execution.",
                  color: "from-purple-500/20 to-pink-500/20",
                  borderColor: "border-purple-500/30",
                  iconColor: "text-purple-400"
                },
                {
                  icon: DollarSign,
                  title: "Lowest & Transparent Fees",
                  description: "A unique and clear fee structure: 0.8% on transactions. That's it. No hidden fees, no subscription.",
                  color: "from-violet-500/20 to-emerald-500/20",
                  borderColor: "border-violet-500/30",
                  iconColor: "text-violet-400"
                },
                {
                  icon: FileText,
                  title: "Exemplary Documentation",
                  description: "Copy-paste guides, complete API reference, and tutorials to get you operational immediately.",
                  color: "from-violet-500/20 to-red-500/20",
                  borderColor: "border-violet-500/30",
                  iconColor: "text-violet-400"
                }
              ].map((feature, index) => (
                <FadeContent key={index} delay={index * 200}>
                  <Card className={`glowing-border glass-effect bg-gradient-to-br ${feature.color} backdrop-blur-sm ${feature.borderColor} hover:border-opacity-50 transition-all duration-300 group h-full flex flex-col hover-scale`}>
                    <CardHeader className="pb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border ${feature.borderColor}`}>
                        <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                      </div>
                      <CardTitle className="text-white text-xl font-semibold">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p className="text-slate-300 text-sm leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </FadeContent>
              ))}
            </div>
          </div>
        </section>
      </FadeContent>

      {/* New Pricing Section with emphasis on being cheapest */}
      <FadeContent>
        <section className="py-20 relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                <span className="text-white">API</span>{" "}
                <span className="text-violet-400">Pricing</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="glowing-border glass-effect bg-gradient-to-br from-violet-500/10 to-purple-500/10 backdrop-blur-sm border-violet-500/30 relative shadow-xl hover-scale">
                <CardContent className="p-16 text-center relative">
                  {/* "CHEAPEST" badge - Changed to violet */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-violet-500 to-purple-500 text-white font-bold px-6 py-2 text-lg animate-pulse shadow-lg">
                      🏆 CHEAPEST ON THE MARKET
                    </Badge>
                  </div>

                  {/* Large percentage */}
                  <div className="mb-8 mt-4">
                    <div className="text-8xl lg:text-9xl font-bold text-violet-400 mb-4">
                      0.8<span className="text-6xl lg:text-7xl">%</span>
                    </div>
                    <p className="text-2xl text-slate-300 font-medium mb-4">
                      Per successful transaction
                    </p>
                  </div>

                  {/* Features list */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                    {[
                      "No monthly fees",
                      "No subscription fees", 
                      "No fees on read-only API calls",
                      "No fees on failed transactions"
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center text-slate-300 text-lg">
                        <CheckCircle className="w-6 h-6 text-violet-400 mr-4 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </FadeContent>

      {/* Community Section - Enhanced with Telegram button and better distributed decorative icons */}
      <FadeContent>
        <section className="py-20 relative">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="relative group">
              {/* Animated gradient border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-slate-700/40 via-slate-600/40 to-slate-700/40 rounded-3xl opacity-30 group-hover:opacity-50 blur-sm transition-all duration-500 animate-pulse"></div>
              
              {/* Main container */}
              <div className="relative bg-gradient-to-br from-slate-950/98 via-slate-900/98 to-slate-950/98 rounded-3xl border border-slate-700/30 backdrop-blur-xl overflow-hidden">
                {/* Better distributed decorative social media icons - positioned in empty spaces */}
                {/* Discord icon - top left area, away from title */}
                <div className="absolute top-12 left-8 w-10 h-10 text-violet-500/20 animate-pulse">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </div>
                
                {/* Twitter icon - top right area, smaller */}
                <div className="absolute top-14 right-12 w-8 h-8 text-blue-400/20 animate-pulse" style={{animationDelay: '1s'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </div>
                
                {/* Telegram icon - center left area */}
                <div className="absolute top-1/2 left-6 w-12 h-12 text-violet-500/20 animate-pulse" style={{animationDelay: '2s'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.17c-.07-.08-.17-.05-.24-.03-.1.03-1.67 1.06-4.71 3.11-.45.3-.85.45-1.21.44-.4-.01-1.16-.23-1.73-.42-.7-.23-1.26-.35-1.21-.74.03-.2.36-.4.98-.6 3.76-1.65 6.26-2.74 7.51-3.26 3.58-1.54 4.32-1.81 4.81-1.82.11 0 .35.03.5.17.13.12.17.27.19.38-.01.06-.01.24-.05.38z"/>
                  </svg>
                </div>
                
                {/* Discord icon - center right area */}
                <div className="absolute top-1/2 right-8 w-9 h-9 text-blue-500/20 animate-pulse" style={{animationDelay: '2.5s'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </div>
                
                {/* Floating gradient orbs */}
                <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-slate-700/10 to-slate-600/10 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-slate-600/10 to-slate-700/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
                
                {/* Content */}
                <div className="relative p-16 text-center">
                  <div className="mb-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-slate-800/40 to-slate-700/40 border border-slate-600/30 mb-8 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
                      <Users className="w-10 h-10 text-slate-300" />
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                      <span className="text-white">Join the</span>{" "}
                      <span className="text-violet-400">Community</span>
                    </h2>
                    <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                      Connect with other developers, get fast support, and share your strategies. Join our community of traders and investors for the latest insights and market analysis.
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8">
                    <button className="group/btn relative bg-slate-700/20 hover:bg-slate-600/30 text-slate-200 hover:text-white font-bold px-10 py-5 transition-all duration-300 shadow-xl rounded-2xl overflow-hidden hover:scale-105 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-violet-500/20 backdrop-blur-sm">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-400/10 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                      <span className="relative z-10 flex items-center text-lg">
                        <MessageCircle className="w-6 h-6 mr-3" />
                        Join our Discord
                      </span>
                    </button>
                    <button className="group/btn relative bg-slate-700/20 hover:bg-slate-600/30 text-slate-200 hover:text-white font-bold px-10 py-5 transition-all duration-300 shadow-xl rounded-2xl overflow-hidden hover:scale-105 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-violet-500/20 backdrop-blur-sm">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-400/10 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                      <span className="relative z-10 flex items-center text-lg">
                        <Users className="w-6 h-6 mr-3" />
                        Follow on Twitter
                      </span>
                    </button>
                    <button className="group/btn relative bg-slate-700/20 hover:bg-slate-600/30 text-slate-200 hover:text-white font-bold px-10 py-5 transition-all duration-300 shadow-xl rounded-2xl overflow-hidden hover:scale-105 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-violet-500/20 backdrop-blur-sm">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-400/10 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                      <span className="relative z-10 flex items-center text-lg">
                        <MessageCircle className="w-6 h-6 mr-3" />
                        Join our Telegram
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeContent>

      {/* Violet Section separator */}
      <div className="relative py-6">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent animate-pulse"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-violet-500 rounded-full animate-ping"></div>
        </div>
      </div>

      {/* Final CTA */}
      <FadeContent>
        <section id="cta-final" className="py-20 relative">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              Ready to Dominate <span className="text-violet-400">letsbonk.fun</span>?
            </h2>
            <button 
              className="bg-slate-700/50 backdrop-blur-sm border border-slate-500/30 text-slate-200 hover:bg-slate-600/50 hover:text-white font-bold px-12 py-4 text-lg rounded-full shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Get my API Key and Start</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </button>
          </div>
        </section>
      </FadeContent>

      {/* Footer */}
      <FadeContent>
        <footer className="border-t border-slate-800/30 bg-gradient-to-br from-slate-950/80 via-slate-900/60 to-slate-950/80 backdrop-blur-xl shadow-2xl shadow-slate-900/40">
          <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="relative">
                    <div className="w-8 h-8 bg-gradient-to-br from-violet-400 via-violet-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg shadow-violet-500/40">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div className="absolute inset-0 w-8 h-8 rounded-lg bg-violet-500/20 blur-md animate-pulse"></div>
                  </div>
                  <span className="text-xl font-bold text-white font-mono tracking-wide">
                    launchpad.trade
                  </span>
                </div>
                <p className="text-slate-300 max-w-sm mb-4 font-medium leading-relaxed">
                  The fastest and most reliable API to automate your trades on letsbonk.fun.
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-bold text-white mb-4 text-lg">
                  Product
                </h4>
                <ul className="space-y-3">
                  <li>
                    <button
                      onClick={() => scrollToSection('documentation')}
                      className="text-slate-300 hover:text-violet-400 transition-all duration-300 text-sm font-medium hover:translate-x-1 block py-1 hover:bg-slate-800/20 px-2 rounded-md backdrop-blur-sm text-left"
                    >
                      Documentation
                    </button>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-bold text-white mb-4 text-lg">
                  Support
                </h4>
                <ul className="space-y-3">
                  {["Discord", "Twitter", "Contact", "Terms of Service", "Privacy Policy"].map((link, i) => (
                    <li key={i}>
                      <a 
                        href="#" 
                        className="text-slate-300 hover:text-purple-400 transition-all duration-300 text-sm font-medium hover:translate-x-1 block py-1 hover:bg-slate-800/20 px-2 rounded-md backdrop-blur-sm"
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
                <span className="text-white font-semibold">
                  launchpad.trade
                </span>
                . All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                {["Privacy Policy", "Terms of Service", "Contact"].map((link, i) => (
                  <a 
                    key={i}
                    href="#" 
                    className="hover:text-violet-400 transition-all duration-300 font-medium hover:scale-105 hover:underline decoration-violet-400/50 underline-offset-4"
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
