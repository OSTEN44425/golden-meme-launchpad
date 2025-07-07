
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Zap, Shield, BarChart3, Rocket, Code, Users, Star, Plus, Minus, ArrowRight, Layers, TrendingUp, Globe, Lock, Activity, Database, Settings, ArrowUp, FileText, DollarSign, Headphones, MessageCircle } from "lucide-react";
import FadeContent from "@/components/animations/FadeContent";
import CountUp from "@/components/animations/CountUp";
import ModernGrid from "@/components/animations/ModernGrid";
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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden font-sans relative">
      {/* Modern Grid Background */}
      <ModernGrid />

      {/* Background Assets */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 right-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-3000"></div>
      </div>

      {/* Enhanced Navigation */}
      <FadeContent>
        <header className="backdrop-blur-xl bg-slate-950/80 sticky top-0 z-50 transition-all duration-500 border-b border-slate-800/30">
          <div className="container mx-auto px-8 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/50 group-hover:scale-110 transition-all duration-300">
                  <Zap className="w-6 h-6 text-white drop-shadow-lg" />
                </div>
                <div className="absolute inset-0 w-10 h-10 rounded-xl bg-blue-500/30 blur-md animate-pulse"></div>
              </div>
              <span className="text-xl font-bold text-white font-inter tracking-wide">
                launchpad.trade
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-8 font-inter">
              {[
                { name: "Documentation", id: "documentation" },
                { name: "Pricing", id: "pricing" }
              ].map((item, index) => (
                <FadeContent key={item.name} delay={index * 100}>
                  <button 
                    onClick={() => scrollToSection(item.id)}
                    className="nav-link-hover text-slate-200 font-medium text-sm px-4 py-2 rounded-lg transition-colors duration-300 hover:text-white"
                  >
                    {item.name}
                  </button>
                </FadeContent>
              ))}
            </nav>
            <button 
              onClick={() => scrollToSection('cta-final')}
              className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 text-slate-200 hover:text-white hover:bg-slate-800/80 font-medium shadow-lg transition-all duration-300 text-sm px-6 py-2 rounded-lg relative overflow-hidden"
            >
              <span className="relative z-10">Get my API Key</span>
            </button>
          </div>
        </header>
      </FadeContent>

      {/* Section Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700/30 to-transparent"></div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <FadeContent delay={400} blur={true}>
              <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight font-inter">
                The <span className="text-blue-400">Fastest</span> API
                <br />
                to Trade and Launch on{" "}
                <span className="text-blue-400">letsbonk.fun</span>
              </h1>
            </FadeContent>
            
            <FadeContent delay={600}>
              <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed font-inter opacity-90">
                Integrate professional-grade infrastructure in minutes to automate your trades and token launches. Maximum reliability, minimal fees.
              </p>
            </FadeContent>
            
            <FadeContent delay={800}>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
                <button 
                  onClick={() => scrollToSection('cta-final')}
                  className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 text-slate-200 hover:text-white hover:bg-slate-800/80 font-medium px-8 py-3 rounded-lg shadow-lg transition-all duration-300 relative overflow-hidden"
                >
                  <span className="relative z-10">Generate my Free API Key</span>
                </button>
                <button 
                  onClick={() => scrollToSection('documentation')}
                  className="bg-transparent border border-slate-600/50 text-slate-300 hover:border-slate-500 hover:text-white backdrop-blur-sm hover:bg-slate-800/20 font-medium px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  Explore Documentation
                </button>
              </div>
            </FadeContent>

            <FadeContent delay={1000}>
              <p className="text-sm text-slate-400 font-inter opacity-80">
                No credit card required. Simple integration.
              </p>
            </FadeContent>
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700/30 to-transparent mb-16"></div>

      {/* Social Proof / Trust */}
      <FadeContent>
        <section className="py-16 relative">
          <div className="container mx-auto px-6 text-center">
            <p className="text-sm text-slate-400 mb-8 uppercase tracking-wider font-inter opacity-70">Compatible with the Solana ecosystem</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              <div className="text-2xl font-bold text-slate-500 font-inter">Solana</div>
              <div className="text-2xl font-bold text-slate-500 font-inter">Jito Labs</div>
              <div className="text-2xl font-bold text-slate-500 font-inter">letsbonk.fun</div>
              <div className="text-2xl font-bold text-slate-500 font-inter">0slot</div>
              <div className="text-2xl font-bold text-slate-500 font-inter">astralane</div>
            </div>
          </div>
        </section>
      </FadeContent>

      {/* Section Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700/30 to-transparent my-16"></div>

      {/* Use Cases - Tab Section */}
      <FadeContent>
        <section className="py-24 relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-inter">
                Built for <span className="text-blue-400">Your Goal</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <FadeContent delay={300}>
                <Card className="bg-slate-900/40 backdrop-blur-sm border-slate-700/30 relative shadow-xl h-full flex flex-col hover:scale-105 transition-all duration-300">
                  <CardHeader className="pb-6">
                    <Badge className="bg-gradient-to-r from-blue-500 to-violet-500 text-white font-bold px-4 py-1 text-sm animate-pulse mb-4 w-fit font-inter">
                      BOT DEVELOPERS
                    </Badge>
                    <CardTitle className="text-2xl font-bold text-white mb-4 font-inter">Create Unstoppable Trading Bots</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-4">
                      {[
                        "Snipe token launches before everyone else with Jito bundles",
                        "Execute complex buy/sell strategies with minimal latency", 
                        "Robust and stable API, designed for 24/7 operation"
                      ].map((feature, i) => (
                        <li key={i} className="flex items-start text-slate-300 font-inter">
                          <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-base opacity-90">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </FadeContent>

              <FadeContent delay={500}>
                <Card className="bg-slate-900/40 backdrop-blur-sm border-slate-700/30 h-full flex flex-col hover:scale-105 transition-all duration-300">
                  <CardHeader className="pb-6">
                    <Badge className="bg-gradient-to-r from-violet-500 to-purple-500 text-white font-bold px-4 py-1 text-sm animate-pulse mb-4 w-fit font-inter">
                      PROJECT CREATORS
                    </Badge>
                    <CardTitle className="text-2xl font-bold text-white mb-4 font-inter">Launch Your Token Seamlessly</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-4">
                      {[
                        "Automate token creation and deployment via a simple API call",
                        "Ensure perfect initial liquidity",
                        "Save time and avoid costly manual errors"
                      ].map((feature, i) => (
                        <li key={i} className="flex items-start text-slate-300 font-inter">
                          <CheckCircle className="w-5 h-5 text-violet-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-base opacity-90">{feature}</span>
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

      {/* Section Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700/30 to-transparent my-16"></div>

      {/* Key Benefits */}
      <FadeContent>
        <section className="py-24 relative">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Zap,
                  title: "Radical Simplicity",
                  description: "Integrate our API in under 5 minutes. Clear documentation and logical endpoints so you can focus on your strategy, not our infrastructure.",
                  color: "from-blue-500/20 to-cyan-500/20",
                  borderColor: "border-blue-500/30",
                  iconColor: "text-blue-400"
                },
                {
                  icon: Rocket,
                  title: "Performance & Stability",
                  description: "Leverage Jito bundles for atomic and priority transactions. Our service relies on the best providers (0slot, astralane) for near-instant execution.",
                  color: "from-violet-500/20 to-purple-500/20",
                  borderColor: "border-violet-500/30",
                  iconColor: "text-violet-400"
                },
                {
                  icon: DollarSign,
                  title: "Lowest and Transparent Fees",
                  description: "A unique and clear fee structure: 0.8% on transactions. That's it. No hidden fees, no subscription.",
                  color: "from-green-500/20 to-emerald-500/20",
                  borderColor: "border-green-500/30",
                  iconColor: "text-green-400"
                },
                {
                  icon: FileText,
                  title: "Exemplary Documentation",
                  description: "Copy-paste guides, complete API reference and tutorials to get you operational immediately.",
                  color: "from-orange-500/20 to-red-500/20",
                  borderColor: "border-orange-500/30",
                  iconColor: "text-orange-400"
                }
              ].map((feature, index) => (
                <FadeContent key={index} delay={index * 200}>
                  <Card className={`bg-slate-900/40 backdrop-blur-sm ${feature.borderColor} hover:border-opacity-50 transition-all duration-300 group h-full flex flex-col hover:scale-105`}>
                    <CardHeader className="pb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border ${feature.borderColor}`}>
                        <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                      </div>
                      <CardTitle className="text-white text-xl font-semibold font-inter">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p className="text-slate-300 text-sm leading-relaxed font-inter opacity-90">{feature.description}</p>
                    </CardContent>
                  </Card>
                </FadeContent>
              ))}
            </div>
          </div>
        </section>
      </FadeContent>

      {/* Section Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700/30 to-transparent my-16"></div>

      {/* Code Snippet */}
      <FadeContent>
        <section id="documentation" className="py-24 relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-inter">
                <span className="text-blue-400">Elegance</span> in Action
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <Card className="bg-slate-900/40 backdrop-blur-sm border-slate-700/30 hover:border-slate-600/30 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-white text-xl font-semibold mb-4 font-inter">Buy 1 SOL of $MYTOKEN</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-slate-900/80 rounded-lg p-6 font-mono text-sm">
                    <div className="text-green-400 mb-2"># Python</div>
                    <div className="text-blue-300">from</div> <div className="text-yellow-300">launchpad_trade</div> <div className="text-blue-300">import</div> <div className="text-yellow-300">LaunchpadClient</div>
                    <br /><br />
                    <div className="text-slate-400"># Initialize client</div>
                    <div className="text-yellow-300">client</div> <div className="text-blue-300">=</div> <div className="text-yellow-300">LaunchpadClient</div><div className="text-white">(</div><div className="text-orange-300">api_key</div><div className="text-blue-300">=</div><div className="text-green-300">"YOUR_API_KEY"</div><div className="text-white">)</div>
                    <br /><br />
                    <div className="text-slate-400"># Buy a token in a single line</div>
                    <div className="text-yellow-300">tx_signature</div> <div className="text-blue-300">=</div> <div className="text-yellow-300">client</div><div className="text-white">.</div><div className="text-blue-300">buy</div><div className="text-white">(</div><div className="text-orange-300">token</div><div className="text-blue-300">=</div><div className="text-green-300">"TOKEN_ADDRESS"</div><div className="text-white">,</div> <div className="text-orange-300">sol_amount</div><div className="text-blue-300">=</div><div className="text-purple-300">1.0</div><div className="text-white">)</div>
                    <br /><br />
                    <div className="text-blue-300">print</div><div className="text-white">(</div><div className="text-green-300">f"Purchase successful! Signature: </div><div className="text-white">{"{"}</div><div className="text-yellow-300">tx_signature</div><div className="text-white">{"}"}</div><div className="text-green-300">"</div><div className="text-white">)</div>
                  </div>
                  <div className="mt-6 text-center">
                    <Button 
                      onClick={() => scrollToSection('documentation')}
                      className="bg-transparent border border-slate-600/50 text-slate-300 hover:border-slate-500 hover:text-white backdrop-blur-sm hover:bg-slate-800/20 font-medium transition-all duration-300 hover:scale-105 font-inter"
                    >
                      Explore Complete Documentation
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </FadeContent>

      {/* Section Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700/30 to-transparent my-16"></div>

      {/* Pricing Section */}
      <FadeContent>
        <section id="pricing" className="py-24 relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-inter">
                <span className="text-blue-400">Simple</span> and Predictable Pricing
              </h2>
            </div>

            <div className="max-w-2xl mx-auto">
              <Card className="bg-slate-900/40 backdrop-blur-sm border-slate-700/30 relative shadow-xl hover:scale-105 transition-all duration-300">
                <CardHeader className="text-center pb-6">
                  <div className="text-sm font-medium text-blue-400 mb-2 font-inter">TRANSACTION FEE</div>
                  <div className="text-6xl font-bold text-white mb-4 font-inter">0.8<span className="text-2xl text-slate-400">%</span></div>
                  <CardDescription className="text-slate-300 text-lg font-inter opacity-90">
                    Only on successful transactions. No token creation fees, no monthly subscription fees.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <ul className="space-y-3 mb-8">
                    {[
                      "No hidden fees",
                      "No monthly subscription", 
                      "Billing only on successful transactions",
                      "Total cost transparency"
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center justify-center text-slate-300 font-inter opacity-90">
                        <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </FadeContent>

      {/* Section Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700/30 to-transparent my-16"></div>

      {/* Community CTA */}
      <FadeContent>
        <section className="py-24 relative">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-slate-900/40 backdrop-blur-sm border-slate-700/30 relative shadow-xl hover:scale-105 transition-all duration-300 text-center">
                <CardHeader className="pb-8">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-violet-500 rounded-full flex items-center justify-center">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-3xl lg:text-4xl font-bold text-white mb-4 font-inter">
                    Join the <span className="text-blue-400">Community</span>
                  </CardTitle>
                  <CardDescription className="text-xl text-slate-300 font-inter opacity-90">
                    Join our community of traders and investors to get the latest news, insights, and analysis on the crypto market. Our community is dedicated to helping you make informed decisions and achieve your financial goals.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                    <Button className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-bold px-8 py-3 transition-all duration-300 shadow-lg hover:scale-105 font-inter">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Discord
                    </Button>
                    <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold px-8 py-3 transition-all duration-300 shadow-lg hover:scale-105 font-inter">
                      <Users className="w-5 h-5 mr-2" />
                      X / Twitter
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </FadeContent>

      {/* Section Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700/30 to-transparent my-16"></div>

      {/* Final CTA */}
      <FadeContent>
        <section id="cta-final" className="py-24 relative">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 font-inter">
              Ready to Dominate <span className="text-blue-400">letsbonk.fun</span>?
            </h2>
            <button 
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-slate-200 hover:text-white hover:bg-slate-800/70 font-medium px-12 py-4 text-lg shadow-lg transition-all duration-300 relative overflow-hidden rounded-lg"
            >
              <span className="relative z-10 font-inter">Get my API Key and Start</span>
            </button>
          </div>
        </section>
      </FadeContent>

      {/* Section Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700/30 to-transparent my-16"></div>

      {/* Footer */}
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
                  <span className="text-xl font-bold text-white font-inter tracking-wide">
                    launchpad.trade
                  </span>
                </div>
                <p className="text-slate-300 max-w-sm mb-4 font-medium leading-relaxed font-inter opacity-90">
                  The fastest and most reliable API to automate your trades on letsbonk.fun.
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-bold text-white mb-4 text-lg font-inter">
                  Product
                </h4>
                <ul className="space-y-3">
                  {[
                    { name: "Documentation", id: "documentation" },
                    { name: "Pricing", id: "pricing" }
                  ].map((link, i) => (
                    <li key={i}>
                      <button
                        onClick={() => scrollToSection(link.id)}
                        className="text-slate-300 hover:text-blue-400 transition-all duration-300 text-sm font-medium hover:translate-x-1 block py-1 hover:bg-slate-800/20 px-2 rounded-md backdrop-blur-sm text-left font-inter"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-bold text-white mb-4 text-lg font-inter">
                  Support
                </h4>
                <ul className="space-y-3">
                  {["Discord", "Telegram", "Contact", "Terms of Service", "Privacy Policy"].map((link, i) => (
                    <li key={i}>
                      <a 
                        href="#" 
                        className="text-slate-300 hover:text-violet-400 transition-all duration-300 text-sm font-medium hover:translate-x-1 block py-1 hover:bg-slate-800/20 px-2 rounded-md backdrop-blur-sm font-inter"
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
              <p className="font-medium font-inter">
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
                    className="hover:text-blue-400 transition-all duration-300 font-medium hover:scale-105 hover:underline decoration-blue-400/50 underline-offset-4 font-inter"
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
