
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Zap, Shield, BarChart3, Rocket, Code, Users, Star, ChevronDown, ArrowRight, Layers, TrendingUp, Globe, Lock } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden font-sans">
      {/* Navigation */}
      <header className="border-b border-white/10 backdrop-blur-md bg-black/50 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-violet-400 via-violet-500 to-violet-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg text-sm">
              MK
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">MemeKit</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-gray-300 hover:text-violet-400 transition-all duration-300 font-medium text-sm">Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-violet-400 transition-all duration-300 font-medium text-sm">Pricing</a>
            <a href="#docs" className="text-gray-300 hover:text-violet-400 transition-all duration-300 font-medium text-sm">Documentation</a>
            <a href="#faq" className="text-gray-300 hover:text-violet-400 transition-all duration-300 font-medium text-sm">FAQ</a>
          </nav>
          <div className="flex items-center space-x-3">
            <Button variant="ghost" className="text-gray-300 hover:text-violet-400 hover:bg-violet-400/10 border-transparent text-sm">
              Log In
            </Button>
            <Button className="bg-gradient-to-r from-violet-500 via-violet-600 to-violet-700 hover:from-violet-600 hover:via-violet-700 hover:to-violet-800 text-white font-semibold shadow-lg hover:shadow-violet-500/25 transition-all duration-300 text-sm">
              Get API Key
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-violet-500/5 via-transparent to-violet-400/5 rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-violet-500/10 to-violet-400/10 backdrop-blur-sm rounded-full px-5 py-2 text-xs border border-violet-500/20 shadow-lg">
                <Rocket className="w-4 h-4 text-violet-400" />
                <span className="text-gray-300">Developer API • Easy to Use</span>
                <ArrowRight className="w-3 h-3 text-violet-400" />
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Deploy & Trade
              </span>
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-violet-500 to-violet-600 bg-clip-text text-transparent">
                Memecoins
              </span>
              <br />
              <span className="text-white text-2xl lg:text-4xl font-normal">
                on Bonk & PumpFun
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              The complete API to deploy tokens, trade in real-time and integrate all Solana launchpads. 
              <span className="text-violet-400"> Bonk, PumpFun and more.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <Button size="lg" className="bg-gradient-to-r from-violet-500 via-violet-600 to-violet-700 hover:from-violet-600 hover:via-violet-700 hover:to-violet-800 text-white font-bold px-8 py-5 text-base shadow-2xl hover:shadow-violet-500/25 transition-all duration-300 transform hover:scale-105">
                <Zap className="w-4 h-4 mr-2" />
                Start Now
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-violet-400/50 text-violet-400 hover:border-violet-400 hover:text-violet-300 hover:bg-violet-400/10 px-8 py-5 text-base backdrop-blur-sm transition-all duration-300">
                <Code className="w-4 h-4 mr-2" />
                API Documentation
              </Button>
            </div>

            {/* Integration badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 opacity-60">
              <div className="flex items-center space-x-2 text-xs">
                <div className="w-6 h-6 bg-gradient-to-r from-orange-400 to-red-500 rounded-md"></div>
                <span>Bonk Protocol</span>
              </div>
              <div className="flex items-center space-x-2 text-xs">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-md"></div>
                <span>PumpFun</span>
              </div>
              <div className="flex items-center space-x-2 text-xs">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-md"></div>
                <span>All Launchpads</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { value: "50K+", label: "Tokens Launched", icon: Rocket },
              { value: "$10M+", label: "Volume Traded", icon: TrendingUp },
              { value: "99.9%", label: "API Uptime", icon: Shield },
              { value: "1000+", label: "Active Developers", icon: Users }
            ].map((stat, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-md border-white/10 hover:border-violet-400/50 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <stat.icon className="w-6 h-6 text-violet-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 font-medium text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-violet-500/10 text-violet-400 border-violet-500/20 px-3 py-1 text-xs font-semibold">
              FEATURES
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              <span className="text-white">Complete </span>
              <span className="bg-gradient-to-r from-violet-400 to-violet-500 bg-clip-text text-transparent">API Suite</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Deploy, trade and manage your memecoins on all Solana protocols with our enterprise-grade tools.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Rocket,
                title: "Deploy & Launch",
                description: "Deploy your tokens in seconds on Bonk, PumpFun and all Solana launchpads. Automatic tokenomics configuration and liquidity.",
                features: ["Instant deployment", "Multi-launchpads", "Auto liquidity"]
              },
              {
                icon: TrendingUp,
                title: "Real-Time Trading",
                description: "Trade your memecoins directly via API with real-time data, advanced analytics and performance monitoring.",
                features: ["Trading API", "Real-time data", "Advanced analytics"]
              },
              {
                icon: Layers,
                title: "Complete Integrations",
                description: "Connect to all protocols: Bonk, PumpFun, Raydium and more. One API for the entire Solana ecosystem.",
                features: ["Multi-protocols", "Unified API", "Custom webhooks"]
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-md border-white/10 hover:border-violet-400/50 transition-all duration-500 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-400/5 via-transparent to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-white mb-3">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-4 h-4 text-violet-400 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              <span className="text-white">Simple </span>
              <span className="bg-gradient-to-r from-violet-400 to-violet-500 bg-clip-text text-transparent">Pricing</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              No hidden fees. Choose the perfect plan for your memecoin project.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Starter Plan */}
            <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:border-white/20 transition-all duration-300">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-xl text-white mb-3">STARTER</CardTitle>
                <CardDescription className="text-gray-300 mb-6">Perfect for testing and small projects</CardDescription>
                <div className="text-3xl font-bold text-white mb-2">Free</div>
                <div className="text-gray-400 text-sm">Forever</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {["5 tokens per month", "Analytics dashboard", "Community support", "Documentation access"].map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-violet-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white/30 transition-all duration-300 text-sm">
                  Start Free
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="bg-gradient-to-b from-violet-500/10 via-violet-500/5 to-violet-600/5 backdrop-blur-md border-violet-500/30 relative scale-105 shadow-2xl">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-violet-500 to-violet-600 text-white font-bold px-4 py-1 text-xs">
                POPULAR
              </Badge>
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-xl text-white mb-3">PRO</CardTitle>
                <CardDescription className="text-gray-300 mb-6">For serious builders</CardDescription>
                <div className="text-3xl font-bold text-violet-400 mb-2">$99</div>
                <div className="text-gray-400 text-sm">/month</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {["Unlimited tokens", "Advanced analytics", "Priority support", "Custom webhooks", "White-label options"].map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-violet-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-gradient-to-r from-violet-500 to-violet-600 hover:from-violet-600 hover:to-violet-700 text-white font-bold transition-all duration-300 shadow-lg text-sm">
                  Try Pro Free
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:border-white/20 transition-all duration-300">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-xl text-white mb-3">ENTERPRISE</CardTitle>
                <CardDescription className="text-gray-300 mb-6">For large-scale operations</CardDescription>
                <div className="text-3xl font-bold text-white mb-2">Custom</div>
                <div className="text-gray-400 text-sm">Contact us</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {["Everything in Pro", "Dedicated infrastructure", "24/7 support", "Custom integrations", "SLA guarantees"].map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-violet-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white/30 transition-all duration-300 text-sm">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              <span className="text-white">What </span>
              <span className="bg-gradient-to-r from-violet-400 to-violet-500 bg-clip-text text-transparent">developers</span>
              <span className="text-white"> say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "devmike", text: "MemeKit's API is incredibly efficient. I launched my first memecoin in less than 5 minutes. Clear docs and great support!" },
              { name: "solanadev", text: "The analytics dashboard is a game changer. Real-time insights helped me optimize my tokens and grow my community." },
              { name: "memequeen", text: "Security features give me peace of mind. Anti-rug protection and automatic auditing saved my project from potential issues." }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-md border-white/10 hover:border-violet-400/30 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-violet-600 rounded-full flex items-center justify-center text-white font-bold mr-3 text-sm">
                      {testimonial.name[0].toUpperCase()}
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                      <div className="flex text-violet-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-sm">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-violet-400 to-violet-500 bg-clip-text text-transparent">FAQ</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "What is MemeKit API?", a: "MemeKit is a comprehensive API platform that allows developers to easily launch, manage and analyze memecoins on Solana protocols like Bonk and PumpFun." },
              { q: "How fast can I launch a memecoin?", a: "With our API, you can deploy a memecoin in less than 5 minutes on multiple launchpads simultaneously." },
              { q: "Which protocols do you support?", a: "We support Bonk Protocol, PumpFun, Raydium and all major launchpads in the Solana ecosystem." },
              { q: "Do you provide technical support?", a: "Yes, we offer free community support, priority support for Pro plans, and 24/7 support for Enterprise." }
            ].map((faq, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-md border-white/10 hover:border-violet-400/30 transition-all duration-300">
                <CardHeader className="flex flex-row items-center justify-between cursor-pointer">
                  <CardTitle className="text-white text-base">{faq.q}</CardTitle>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed text-sm">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-transparent to-violet-600/10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              <span className="text-white">Ready to launch your </span>
              <span className="bg-gradient-to-r from-violet-400 to-violet-500 bg-clip-text text-transparent">memecoin</span>
              <span className="text-white">?</span>
            </h2>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed">
              Join thousands of developers building the future of memecoins on Solana with MemeKit API.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button size="lg" className="bg-gradient-to-r from-violet-500 via-violet-600 to-violet-700 hover:from-violet-600 hover:via-violet-700 hover:to-violet-800 text-white font-bold px-8 py-5 text-base shadow-2xl hover:shadow-violet-500/25 transition-all duration-300 transform hover:scale-105">
                <Zap className="w-4 h-4 mr-2" />
                Start Free
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-violet-400/50 text-violet-400 hover:border-violet-400 hover:text-violet-300 hover:bg-violet-400/10 px-8 py-5 text-base backdrop-blur-sm transition-all duration-300">
                <Globe className="w-4 h-4 mr-2" />
                View Live Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-violet-500 via-violet-600 to-violet-700 rounded-lg flex items-center justify-center font-bold text-white shadow-lg text-sm">
                  MK
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">MemeKit</span>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm">
                Building the future of memecoin development on Solana.
              </p>
            </div>
            
            {[
              { title: "Product", links: ["Features", "Pricing", "Documentation", "API Reference"] },
              { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
              { title: "Community", links: ["Discord", "Twitter", "GitHub", "Support"] }
            ].map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-white text-base">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors duration-300 text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <Separator className="my-8 bg-white/10" />
          
          <div className="flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
            <p>© 2024 MemeKit. All rights reserved.</p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
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
