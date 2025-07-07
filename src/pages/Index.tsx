
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Zap, Shield, BarChart3, Rocket, Code, Users, Star, ChevronDown, ArrowRight, Layers, TrendingUp, Globe, Lock } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden font-sans">
      {/* Navigation */}
      <header className="border-b border-white/10 backdrop-blur-md bg-black/80 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-violet-500 via-violet-600 to-violet-700 rounded-lg flex items-center justify-center font-bold text-white shadow-lg text-sm">
              MK
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">MemeKit</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-violet-400 transition-all duration-300 font-medium text-sm hover:scale-105">Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-violet-400 transition-all duration-300 font-medium text-sm hover:scale-105">Pricing</a>
            <a href="#docs" className="text-gray-300 hover:text-violet-400 transition-all duration-300 font-medium text-sm hover:scale-105">Documentation</a>
            <a href="#faq" className="text-gray-300 hover:text-violet-400 transition-all duration-300 font-medium text-sm hover:scale-105">FAQ</a>
          </nav>
          <div className="flex items-center space-x-3">
            <Button variant="ghost" className="text-gray-300 hover:text-violet-400 hover:bg-violet-400/10 border-transparent text-sm transition-all duration-300">
              Log In
            </Button>
            <Button className="bg-gradient-to-r from-violet-500 via-violet-600 to-violet-700 hover:from-violet-400 hover:via-violet-500 hover:to-violet-600 text-white font-semibold shadow-xl hover:shadow-violet-500/30 transition-all duration-300 text-sm transform hover:scale-105">
              Get API Key
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Enhanced animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-r from-violet-500/10 via-transparent to-violet-400/10 rounded-full blur-2xl"></div>
          <div className="absolute top-10 right-20 w-40 h-40 bg-violet-400/10 rounded-full blur-2xl animate-bounce delay-500"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-violet-500/15 to-violet-400/15 backdrop-blur-md rounded-full px-6 py-3 text-sm border border-violet-500/30 shadow-xl hover:shadow-violet-500/20 transition-all duration-300 transform hover:scale-105">
                <Rocket className="w-4 h-4 text-violet-400" />
                <span className="text-gray-200 font-medium">Developer API • Easy to Use</span>
                <ArrowRight className="w-3 h-3 text-violet-400" />
              </div>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Deploy & Trade
              </span>
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-violet-500 to-violet-600 bg-clip-text text-transparent">
                Memecoins
              </span>
              <br />
              <span className="text-white text-3xl lg:text-5xl font-normal">
                on Bonk & PumpFun
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              The complete API to deploy tokens, trade in real-time and integrate all Solana launchpads. 
              <span className="text-violet-400 font-medium"> Bonk, PumpFun and more.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-16">
              <Button size="lg" className="bg-gradient-to-r from-violet-500 via-violet-600 to-violet-700 hover:from-violet-400 hover:via-violet-500 hover:to-violet-600 text-white font-bold px-10 py-6 text-lg shadow-2xl hover:shadow-violet-500/30 transition-all duration-300 transform hover:scale-105 rounded-xl">
                <Zap className="w-5 h-5 mr-3" />
                Start Now
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-violet-400 text-violet-400 hover:bg-violet-500 hover:text-white px-10 py-6 text-lg backdrop-blur-md transition-all duration-300 transform hover:scale-105 rounded-xl bg-violet-400/10">
                <Code className="w-5 h-5 mr-3" />
                API Documentation
              </Button>
            </div>

            {/* Enhanced integration badges */}
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-70">
              <div className="flex items-center space-x-3 text-sm bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
                <div className="w-6 h-6 bg-gradient-to-r from-orange-400 to-red-500 rounded-md"></div>
                <span className="text-white">Bonk Protocol</span>
              </div>
              <div className="flex items-center space-x-3 text-sm bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-md"></div>
                <span className="text-white">PumpFun</span>
              </div>
              <div className="flex items-center space-x-3 text-sm bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-md"></div>
                <span className="text-white">All Launchpads</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Enhanced */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { value: "50K+", label: "Tokens Launched", icon: Rocket, color: "from-violet-400 to-violet-600" },
              { value: "$10M+", label: "Volume Traded", icon: TrendingUp, color: "from-green-400 to-emerald-600" },
              { value: "99.9%", label: "API Uptime", icon: Shield, color: "from-blue-400 to-cyan-600" },
              { value: "1000+", label: "Active Developers", icon: Users, color: "from-pink-400 to-rose-600" }
            ].map((stat, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-xl border-white/10 hover:border-violet-400/50 transition-all duration-500 group relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-violet-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 text-center relative z-10">
                  <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 font-medium text-base">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Completely redesigned */}
      <section id="features" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-violet-500/20 text-violet-400 border-violet-500/40 px-4 py-2 text-sm font-semibold rounded-full">
              FEATURES
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              <span className="text-white">Complete </span>
              <span className="bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">API Suite</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Deploy, trade and manage your memecoins on all Solana protocols with our enterprise-grade tools.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Rocket,
                title: "Deploy & Launch",
                description: "Deploy your tokens in seconds on Bonk, PumpFun and all Solana launchpads. Automatic tokenomics configuration and liquidity.",
                features: ["Instant deployment", "Multi-launchpads", "Auto liquidity"],
                gradient: "from-violet-500 to-violet-700"
              },
              {
                icon: TrendingUp,
                title: "Real-Time Trading",
                description: "Trade your memecoins directly via API with real-time data, advanced analytics and performance monitoring.",
                features: ["Trading API", "Real-time data", "Advanced analytics"],
                gradient: "from-blue-500 to-purple-600"
              },
              {
                icon: Layers,
                title: "Complete Integrations",
                description: "Connect to all protocols: Bonk, PumpFun, Raydium and more. One API for the entire Solana ecosystem.",
                features: ["Multi-protocols", "Unified API", "Custom webhooks"],
                gradient: "from-emerald-500 to-teal-600"
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-white/20 hover:border-violet-400/50 transition-all duration-500 group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-violet-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-violet-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10 p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white mb-4 font-bold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 px-8 pb-8">
                  <CardDescription className="text-gray-300 text-base mb-6 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                  <ul className="space-y-3">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-5 h-5 text-violet-400 mr-3 flex-shrink-0" />
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - Enhanced */}
      <section id="pricing" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              <span className="text-white">Simple </span>
              <span className="bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              No hidden fees. Choose the perfect plan for your memecoin project.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:border-white/20 transition-all duration-300 rounded-3xl">
              <CardHeader className="text-center pb-8 p-8">
                <CardTitle className="text-2xl text-white mb-4 font-bold">STARTER</CardTitle>
                <CardDescription className="text-gray-300 mb-8 text-base">Perfect for testing and small projects</CardDescription>
                <div className="text-4xl font-bold text-white mb-3">Free</div>
                <div className="text-gray-400 text-base">Forever</div>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <ul className="space-y-4 mb-8">
                  {["5 tokens per month", "Analytics dashboard", "Community support", "Documentation access"].map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300 text-base">
                      <CheckCircle className="w-5 h-5 text-violet-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30 transition-all duration-300 text-base py-3 rounded-xl">
                  Start Free
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="bg-gradient-to-br from-violet-500/15 via-violet-500/10 to-violet-600/10 backdrop-blur-xl border-violet-500/40 relative scale-105 shadow-2xl rounded-3xl hover:shadow-violet-500/25">
              <Badge className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-violet-500 to-violet-600 text-white font-bold px-6 py-2 text-sm rounded-full shadow-lg">
                POPULAR
              </Badge>
              <CardHeader className="text-center pb-8 p-8">
                <CardTitle className="text-2xl text-white mb-4 font-bold">PRO</CardTitle>
                <CardDescription className="text-gray-300 mb-8 text-base">For serious builders</CardDescription>
                <div className="text-4xl font-bold text-violet-400 mb-3">$99</div>
                <div className="text-gray-400 text-base">/month</div>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <ul className="space-y-4 mb-8">
                  {["Unlimited tokens", "Advanced analytics", "Priority support", "Custom webhooks", "White-label options"].map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300 text-base">
                      <CheckCircle className="w-5 h-5 text-violet-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-gradient-to-r from-violet-500 to-violet-600 hover:from-violet-400 hover:to-violet-500 text-white font-bold transition-all duration-300 shadow-xl text-base py-3 rounded-xl hover:shadow-violet-500/30 transform hover:scale-105">
                  Try Pro Free
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:border-white/20 transition-all duration-300 rounded-3xl">
              <CardHeader className="text-center pb-8 p-8">
                <CardTitle className="text-2xl text-white mb-4 font-bold">ENTERPRISE</CardTitle>
                <CardDescription className="text-gray-300 mb-8 text-base">For large-scale operations</CardDescription>
                <div className="text-4xl font-bold text-white mb-3">Custom</div>
                <div className="text-gray-400 text-base">Contact us</div>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <ul className="space-y-4 mb-8">
                  {["Everything in Pro", "Dedicated infrastructure", "24/7 support", "Custom integrations", "SLA guarantees"].map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300 text-base">
                      <CheckCircle className="w-5 h-5 text-violet-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30 transition-all duration-300 text-base py-3 rounded-xl">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials - Enhanced */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              <span className="text-white">What </span>
              <span className="bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">developers</span>
              <span className="text-white"> say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "devmike", text: "MemeKit's API is incredibly efficient. I launched my first memecoin in less than 5 minutes. Clear docs and great support!", avatar: "DM" },
              { name: "solanadev", text: "The analytics dashboard is a game changer. Real-time insights helped me optimize my tokens and grow my community.", avatar: "SD" },
              { name: "memequeen", text: "Security features give me peace of mind. Anti-rug protection and automatic auditing saved my project from potential issues.", avatar: "MQ" }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-xl border-white/10 hover:border-violet-400/30 transition-all duration-500 group rounded-2xl">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-violet-700 rounded-full flex items-center justify-center text-white font-bold mr-4 text-base shadow-lg">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white text-base">{testimonial.name}</div>
                      <div className="flex text-violet-400 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-base">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Enhanced */}
      <section id="faq" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">FAQ</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { q: "What is MemeKit API?", a: "MemeKit is a comprehensive API platform that allows developers to easily launch, manage and analyze memecoins on Solana protocols like Bonk and PumpFun." },
              { q: "How fast can I launch a memecoin?", a: "With our API, you can deploy a memecoin in less than 5 minutes on multiple launchpads simultaneously." },
              { q: "Which protocols do you support?", a: "We support Bonk Protocol, PumpFun, Raydium and all major launchpads in the Solana ecosystem." },
              { q: "Do you provide technical support?", a: "Yes, we offer free community support, priority support for Pro plans, and 24/7 support for Enterprise." }
            ].map((faq, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-xl border-white/10 hover:border-violet-400/30 transition-all duration-500 rounded-2xl">
                <CardHeader className="flex flex-row items-center justify-between cursor-pointer p-8">
                  <CardTitle className="text-white text-xl font-semibold">{faq.q}</CardTitle>
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <p className="text-gray-300 leading-relaxed text-base">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-transparent to-violet-600/10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8">
              <span className="text-white">Ready to launch your </span>
              <span className="bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">memecoin</span>
              <span className="text-white">?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Join thousands of developers building the future of memecoins on Solana with MemeKit API.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
              <Button size="lg" className="bg-gradient-to-r from-violet-500 via-violet-600 to-violet-700 hover:from-violet-400 hover:via-violet-500 hover:to-violet-600 text-white font-bold px-10 py-6 text-lg shadow-2xl hover:shadow-violet-500/30 transition-all duration-300 transform hover:scale-105 rounded-xl">
                <Zap className="w-5 h-5 mr-3" />
                Start Free
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-violet-400 text-violet-400 hover:bg-violet-500 hover:text-white px-10 py-6 text-lg backdrop-blur-md transition-all duration-300 transform hover:scale-105 rounded-xl bg-violet-400/10">
                <Globe className="w-5 h-5 mr-3" />
                View Live Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Enhanced */}
      <footer className="border-t border-white/10 bg-black/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-violet-500 via-violet-600 to-violet-700 rounded-xl flex items-center justify-center font-bold text-white shadow-xl text-base">
                  MK
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">MemeKit</span>
              </div>
              <p className="text-gray-400 leading-relaxed text-base">
                Building the future of memecoin development on Solana.
              </p>
            </div>
            
            {[
              { title: "Product", links: ["Features", "Pricing", "Documentation", "API Reference"] },
              { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
              { title: "Community", links: ["Discord", "Twitter", "GitHub", "Support"] }
            ].map((section, index) => (
              <div key={index} className="space-y-6">
                <h4 className="font-semibold text-white text-lg">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors duration-300 text-base">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <Separator className="my-12 bg-white/10" />
          
          <div className="flex flex-col md:flex-row items-center justify-between text-gray-400 text-base">
            <p>© 2024 MemeKit. All rights reserved.</p>
            <div className="flex items-center space-x-8 mt-6 md:mt-0">
              <a href="#" className="hover:text-violet-400 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-violet-400 transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
