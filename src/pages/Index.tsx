
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Zap, Shield, BarChart3, Rocket, Code, Users, Star, Plus, Minus, ArrowRight, Layers, TrendingUp, Globe, Lock, Activity, Database, Settings, ArrowUp, FileText, DollarSign, Headphones, MessageCircle } from "lucide-react";
import FadeContent from "@/components/animations/FadeContent";
import ScrollFloat from "@/components/animations/ScrollFloat";
import SplitText from "@/components/animations/SplitText";
import BlurText from "@/components/animations/BlurText";
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
    <div className="min-h-screen bg-black text-white overflow-x-hidden font-sans relative">
      {/* Modern Grid Background */}
      <ModernGrid />

      {/* Background Assets */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-violet-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-10 w-48 h-48 bg-gradient-to-br from-violet-400/20 to-indigo-500/20 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-gradient-to-br from-indigo-500/30 to-violet-500/30 rounded-full blur-2xl animate-bounce-slow"></div>
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-gradient-to-br from-purple-400/25 to-violet-400/25 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/3 w-36 h-36 bg-gradient-to-br from-violet-300/15 to-purple-300/15 rounded-full blur-2xl animate-float"></div>
      </div>

      {/* Enhanced Navigation */}
      <FadeContent>
        <header className="backdrop-blur-xl bg-black/90 sticky top-0 z-50 transition-all duration-500 border-b border-violet-500/20">
          <div className="container mx-auto px-8 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/50 group-hover:scale-110 transition-all duration-300">
                  <Zap className="w-6 h-6 text-white drop-shadow-lg" />
                </div>
                <div className="absolute inset-0 w-10 h-10 rounded-xl bg-violet-500/30 blur-md animate-pulse"></div>
              </div>
              <span className="text-xl font-bold text-white font-mono tracking-wide">
                launchpad.trade
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('documentation')}
                className="text-gray-300 hover:text-violet-400 font-semibold text-sm px-4 py-2 rounded-lg transition-colors duration-300"
              >
                Documentation
              </button>
            </nav>
            <button 
              onClick={() => scrollToSection('cta-final')}
              className="bg-gray-800/60 backdrop-blur-sm border border-gray-600/40 text-gray-300 hover:bg-gray-700/60 hover:text-white font-bold shadow-xl transition-all duration-300 text-sm px-6 py-2 rounded-full relative overflow-hidden group"
            >
              <span className="relative z-10">Get my API Key</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </button>
          </div>
        </header>
      </FadeContent>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <FadeContent delay={400} blur={true}>
              <ScrollFloat containerClassName="mb-8">
                The Fastest API for Trading and Launching on letsbonk.fun
              </ScrollFloat>
            </FadeContent>
            
            <FadeContent delay={600}>
              <SplitText 
                text="Integrate professional-grade infrastructure in minutes to automate your trades and token launches. Maximum reliability, minimal fees."
                className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
              />
            </FadeContent>
            
            <FadeContent delay={800}>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
                <button 
                  onClick={() => scrollToSection('cta-final')}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/30 text-gray-300 hover:bg-gray-700/50 hover:text-white font-bold px-8 py-3 rounded-full shadow-xl transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10">Generate my Free API Key</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </button>
                <button 
                  onClick={() => scrollToSection('documentation')}
                  className="bg-transparent border-2 border-gray-600/50 text-gray-300 hover:border-violet-500/50 hover:text-violet-400 backdrop-blur-sm hover:bg-gray-800/20 font-semibold px-8 py-3 rounded-full transition-all duration-300"
                >
                  Explore Documentation
                </button>
              </div>
            </FadeContent>

            <FadeContent delay={1000}>
              <p className="text-sm text-gray-400 italic mb-4">
                No credit card required. Simple integration.
              </p>
            </FadeContent>
          </div>
        </div>
      </section>

      {/* Animated Section separator */}
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="w-8 h-8 bg-violet-500/20 rounded-full border border-violet-500/50 animate-pulse"></div>
        </div>
      </div>

      {/* Social Proof / Trust */}
      <FadeContent>
        <section className="py-12 relative">
          <div className="container mx-auto px-6 text-center">
            <BlurText 
              text="Compatible with Solana Ecosystem" 
              className="text-sm text-gray-400 mb-8 uppercase tracking-wider"
            />
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              <div className="text-2xl font-bold text-gray-500">Solana</div>
              <div className="text-2xl font-bold text-gray-500">Jito Labs</div>
              <div className="text-2xl font-bold text-gray-500">letsbonk.fun</div>
              <div className="text-2xl font-bold text-gray-500">0slot</div>
              <div className="text-2xl font-bold text-gray-500">astralane</div>
            </div>
          </div>
        </section>
      </FadeContent>

      {/* Animated Section separator */}
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="w-8 h-8 bg-violet-500/20 rounded-full border border-violet-500/50 animate-pulse"></div>
        </div>
      </div>

      {/* Use Cases Section */}
      <FadeContent>
        <section className="py-16 relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <BlurText 
                text="Built for Your Goals"
                className="text-3xl lg:text-4xl font-bold mb-6"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <FadeContent delay={300}>
                <Card className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 backdrop-blur-sm border-violet-500/30 relative shadow-xl h-full flex flex-col hover-scale">
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
                        <li key={i} className="flex items-start text-gray-300">
                          <CheckCircle className="w-5 h-5 text-violet-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </FadeContent>

              <FadeContent delay={500}>
                <Card className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 backdrop-blur-sm border-purple-500/30 h-full flex flex-col hover-scale">
                  <CardHeader className="pb-6">
                    <Badge className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold px-4 py-1 text-sm animate-pulse mb-4 w-fit">
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
                        <li key={i} className="flex items-start text-gray-300">
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

      {/* Animated Section separator */}
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="w-8 h-8 bg-violet-500/20 rounded-full border border-violet-500/50 animate-pulse"></div>
        </div>
      </div>

      {/* Key Benefits */}
      <FadeContent>
        <section className="py-16 relative">
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
                  color: "from-purple-500/20 to-indigo-500/20",
                  borderColor: "border-purple-500/30",
                  iconColor: "text-purple-400"
                },
                {
                  icon: DollarSign,
                  title: "Lowest & Transparent Fees",
                  description: "A unique and clear fee structure: 0.8% on transactions. That's it. No hidden fees, no subscription.",
                  color: "from-indigo-500/20 to-violet-500/20",
                  borderColor: "border-indigo-500/30",
                  iconColor: "text-indigo-400"
                },
                {
                  icon: FileText,
                  title: "Exemplary Documentation",
                  description: "Copy-paste guides, complete API reference, and tutorials to get you operational immediately.",
                  color: "from-violet-500/20 to-purple-500/20",
                  borderColor: "border-violet-500/30",
                  iconColor: "text-violet-400"
                }
              ].map((feature, index) => (
                <FadeContent key={index} delay={index * 200}>
                  <Card className={`bg-gradient-to-br ${feature.color} backdrop-blur-sm ${feature.borderColor} hover:border-opacity-50 transition-all duration-300 group h-full flex flex-col hover-scale border`}>
                    <CardHeader className="pb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border ${feature.borderColor}`}>
                        <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                      </div>
                      <CardTitle className="text-white text-xl font-semibold">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </FadeContent>
              ))}
            </div>
          </div>
        </section>
      </FadeContent>

      {/* Animated Section separator */}
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="w-8 h-8 bg-violet-500/20 rounded-full border border-violet-500/50 animate-pulse"></div>
        </div>
      </div>

      {/* Code Excerpt */}
      <FadeContent>
        <section id="documentation" className="py-16 relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <SplitText 
                text="Elegance in Action"
                className="text-3xl lg:text-4xl font-bold mb-6"
              />
            </div>

            <div className="max-w-2xl mx-auto">
              <Card className="bg-gray-900/60 backdrop-blur-sm border-gray-700/30 hover:border-violet-500/30 transition-all duration-300 hover-scale">
                <CardHeader>
                  <CardTitle className="text-white text-xl font-semibold mb-4">Buy 1 SOL of $MYTOKEN</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-black/80 rounded-lg p-6 font-mono text-sm">
                    <div className="text-green-400 mb-2"># Python</div>
                    <div className="text-violet-300">from</div> <div className="text-yellow-300">launchpad_trade</div> <div className="text-violet-300">import</div> <div className="text-yellow-300">LaunchpadClient</div>
                    <br /><br />
                    <div className="text-gray-400"># Initialize client</div>
                    <div className="text-yellow-300">client</div> <div className="text-violet-300">=</div> <div className="text-yellow-300">LaunchpadClient</div><div className="text-white">(</div><div className="text-orange-300">api_key</div><div className="text-violet-300">=</div><div className="text-green-300">"YOUR_API_KEY"</div><div className="text-white">)</div>
                    <br /><br />
                    <div className="text-gray-400"># Buy a token in one line</div>
                    <div className="text-yellow-300">tx_signature</div> <div className="text-violet-300">=</div> <div className="text-yellow-300">client</div><div className="text-white">.</div><div className="text-violet-300">buy</div><div className="text-white">(</div><div className="text-orange-300">token</div><div className="text-violet-300">=</div><div className="text-green-300">"TOKEN_ADDRESS"</div><div className="text-white">,</div> <div className="text-orange-300">sol_amount</div><div className="text-violet-300">=</div><div className="text-purple-300">1.0</div><div className="text-white">)</div>
                    <br /><br />
                    <div className="text-violet-300">print</div><div className="text-white">(</div><div className="text-green-300">f"Purchase successful! Signature: </div><div className="text-white">{"{"}</div><div className="text-yellow-300">tx_signature</div><div className="text-white">{"}"}</div><div className="text-green-300">"</div><div className="text-white">)</div>
                  </div>
                  <div className="mt-6 text-center">
                    <Button 
                      onClick={() => scrollToSection('documentation')}
                      className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/30 hover:bg-gray-700/50 text-gray-300 hover:text-white font-medium transition-all duration-300 hover:scale-105"
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

      {/* Animated Section separator */}
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="w-8 h-8 bg-violet-500/20 rounded-full border border-violet-500/50 animate-pulse"></div>
        </div>
      </div>

      {/* Pricing Section */}
      <FadeContent>
        <section id="pricing" className="py-16 relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <BlurText 
                text="Simple and Predictable Pricing"
                className="text-3xl lg:text-4xl font-bold mb-6"
              />
            </div>

            <div className="max-w-2xl mx-auto">
              <Card className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 backdrop-blur-sm border-violet-500/30 relative shadow-xl hover-scale">
                <CardHeader className="text-center pb-6">
                  <div className="text-sm font-medium text-violet-400 mb-2">TRANSACTION FEE</div>
                  <div className="text-6xl font-bold text-white mb-4">0.8<span className="text-2xl text-gray-400">%</span></div>
                  <CardDescription className="text-gray-300 text-lg">
                    Only on successful transactions. No token creation fees, no monthly subscription fees.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <ul className="space-y-3 mb-8">
                    {[
                      "No hidden fees",
                      "No monthly subscription", 
                      "Billing only on successful transactions",
                      "Complete cost transparency"
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center justify-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-violet-400 mr-3 flex-shrink-0" />
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

      {/* Animated Section separator */}
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="w-8 h-8 bg-violet-500/20 rounded-full border border-violet-500/50 animate-pulse"></div>
        </div>
      </div>

      {/* Community Section */}
      <FadeContent>
        <section className="py-16 relative">
          <div className="container mx-auto px-6 max-w-6xl">
            <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border-violet-500/30 relative shadow-2xl overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-purple-500/5 to-transparent"></div>
              <CardContent className="relative z-10 p-16 text-center">
                <SplitText 
                  text="Join the Community of Builders"
                  className="text-3xl lg:text-4xl font-bold mb-6 text-white"
                />
                <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                  Connect with other developers, get fast support, and share your strategies on our community channels. Join our community of traders and investors to get the latest news, insights, and analysis on the crypto market.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <Button className="bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold px-8 py-3 transition-all duration-300 shadow-lg hover:scale-105 rounded-full">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Join our Discord
                  </Button>
                  <Button className="bg-[#1DA1F2] hover:bg-[#1A91DA] text-white font-bold px-8 py-3 transition-all duration-300 shadow-lg hover:scale-105 rounded-full">
                    <Users className="w-5 h-5 mr-2" />
                    Follow on Twitter
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </FadeContent>

      {/* Animated Section separator */}
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="w-8 h-8 bg-violet-500/20 rounded-full border border-violet-500/50 animate-pulse"></div>
        </div>
      </div>

      {/* Final CTA */}
      <FadeContent>
        <section id="cta-final" className="py-16 relative">
          <div className="container mx-auto px-6 text-center">
            <BlurText 
              text="Ready to Dominate letsbonk.fun?"
              className="text-3xl lg:text-4xl font-bold mb-8"
            />
            <button 
              className="bg-gray-800/40 backdrop-blur-sm border border-gray-600/30 text-gray-300 hover:bg-gray-700/40 hover:text-white font-bold px-12 py-4 text-lg rounded-full shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Get my API Key and Start</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </button>
          </div>
        </section>
      </FadeContent>

      {/* Footer */}
      <FadeContent>
        <footer className="border-t border-gray-800/30 bg-gradient-to-br from-black/90 via-gray-900/60 to-black/90 backdrop-blur-xl shadow-2xl shadow-gray-900/40">
          <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="relative">
                    <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-violet-500/40">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div className="absolute inset-0 w-8 h-8 rounded-lg bg-violet-500/20 blur-md animate-pulse"></div>
                  </div>
                  <span className="text-xl font-bold text-white font-mono tracking-wide">
                    launchpad.trade
                  </span>
                </div>
                <p className="text-gray-300 max-w-sm mb-4 font-medium leading-relaxed">
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
                      className="text-gray-300 hover:text-violet-400 transition-all duration-300 text-sm font-medium hover:translate-x-1 block py-1 hover:bg-gray-800/20 px-2 rounded-md backdrop-blur-sm text-left"
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
                        className="text-gray-300 hover:text-violet-400 transition-all duration-300 text-sm font-medium hover:translate-x-1 block py-1 hover:bg-gray-800/20 px-2 rounded-md backdrop-blur-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <Separator className="my-6 bg-gradient-to-r from-transparent via-gray-700/50 to-transparent" />
            
            <div className="flex flex-col md:flex-row items-center justify-between text-gray-300 text-sm">
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
