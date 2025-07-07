
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Zap, Shield, BarChart3, Rocket, Code, Users, Star, ChevronDown } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <header className="border-b border-slate-700/50 backdrop-blur-sm bg-slate-900/50 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center font-bold text-slate-900">
              MK
            </div>
            <span className="text-xl font-bold">MemeKit</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-300 hover:text-yellow-400 transition-colors">Features</a>
            <a href="#pricing" className="text-slate-300 hover:text-yellow-400 transition-colors">Pricing</a>
            <a href="#docs" className="text-slate-300 hover:text-yellow-400 transition-colors">Documentation</a>
            <a href="#faq" className="text-slate-300 hover:text-yellow-400 transition-colors">FAQ</a>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-slate-300 hover:text-yellow-400">Log In</Button>
            <Button className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-slate-900 font-semibold">
              Get API Key
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-yellow-500/10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="inline-flex items-center space-x-2 bg-slate-800/50 rounded-full px-4 py-2 text-sm border border-yellow-500/20">
                <Rocket className="w-4 h-4 text-yellow-400" />
                <span>Launch memecoins on Solana</span>
                <span className="text-yellow-400">→</span>
              </div>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-200 to-yellow-400 bg-clip-text text-transparent">
              Memecoin Intelligence <span className="text-white">for</span><br />
              <span className="text-yellow-400">Bonk Protocol Builders</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto">
              MemeKit provides the complete API toolkit to launch, manage, and scale memecoins on Solana's Bonk protocol with enterprise-grade reliability.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button size="lg" className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-slate-900 font-semibold px-8 py-4 text-lg">
                Start Building
              </Button>
              <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:border-yellow-400 hover:text-yellow-400 px-8 py-4 text-lg">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl lg:text-5xl font-bold text-yellow-400">50K+</div>
              <div className="text-slate-300">Tokens Launched</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl lg:text-5xl font-bold text-yellow-400">$10M+</div>
              <div className="text-slate-300">Volume Processed</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl lg:text-5xl font-bold text-yellow-400">99.9%</div>
              <div className="text-slate-300">API Uptime</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl lg:text-5xl font-bold text-yellow-400">1000+</div>
              <div className="text-slate-300">Active Builders</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-yellow-500/10 text-yellow-400 border-yellow-500/20">FEATURES</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              The only <span className="text-yellow-400">API toolkit</span> you need
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Launch and manage memecoins on Bonk protocol with our comprehensive suite of developer tools and real-time analytics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 hover:border-yellow-500/50 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Rocket className="w-6 h-6 text-slate-900" />
                </div>
                <CardTitle className="text-xl text-white">Token Launch API</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300 text-base">
                  Deploy memecoins on Bonk protocol in seconds with our one-click API. Configure tokenomics, set liquidity pools, and launch directly from your application.
                </CardDescription>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-yellow-400 mr-2" />
                    Instant token deployment
                  </li>
                  <li className="flex items-center text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-yellow-400 mr-2" />
                    Custom tokenomics configuration
                  </li>
                  <li className="flex items-center text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-yellow-400 mr-2" />
                    Automated liquidity management
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-yellow-500/50 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-6 h-6 text-slate-900" />
                </div>
                <CardTitle className="text-xl text-white">Real-time Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300 text-base">
                  Monitor your memecoins with comprehensive analytics. Track volume, holders, price movements, and social sentiment in real-time.
                </CardDescription>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-yellow-400 mr-2" />
                    Live trading data
                  </li>
                  <li className="flex items-center text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-yellow-400 mr-2" />
                    Holder analytics
                  </li>
                  <li className="flex items-center text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-yellow-400 mr-2" />
                    Social sentiment tracking
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-yellow-500/50 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6 text-slate-900" />
                </div>
                <CardTitle className="text-xl text-white">Security & Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300 text-base">
                  Enterprise-grade security with built-in compliance tools. Automated rug-pull protection and transparent audit trails for all transactions.
                </CardDescription>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-yellow-400 mr-2" />
                    Rug-pull protection
                  </li>
                  <li className="flex items-center text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-yellow-400 mr-2" />
                    Automated auditing
                  </li>
                  <li className="flex items-center text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-yellow-400 mr-2" />
                    Compliance reporting
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Simple <span className="text-yellow-400">Pricing</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              No hidden fees, no surprises. Choose the perfect plan for your memecoin project.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <Card className="bg-slate-800/50 border-slate-700 hover:border-yellow-500/50 transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-white mb-2">STARTER</CardTitle>
                <CardDescription className="text-slate-300 mb-6">Perfect for testing and small projects</CardDescription>
                <div className="text-4xl font-bold text-yellow-400 mb-2">Free</div>
                <div className="text-slate-400">Forever</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-slate-300">
                    <CheckCircle className="w-5 h-5 text-yellow-400 mr-3" />
                    5 token launches per month
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircle className="w-5 h-5 text-yellow-400 mr-3" />
                    Basic analytics dashboard
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircle className="w-5 h-5 text-yellow-400 mr-3" />
                    Community support
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircle className="w-5 h-5 text-yellow-400 mr-3" />
                    API documentation access
                  </li>
                </ul>
                <Button className="w-full bg-slate-700 hover:bg-slate-600 text-white">
                  Get Started Free
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="bg-gradient-to-b from-yellow-500/10 to-yellow-600/5 border-yellow-500 relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900 font-semibold">
                MOST POPULAR
              </Badge>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-white mb-2">PRO</CardTitle>
                <CardDescription className="text-slate-300 mb-6">For serious memecoin builders</CardDescription>
                <div className="text-4xl font-bold text-yellow-400 mb-2">$99</div>
                <div className="text-slate-400">/month</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-slate-300">
                    <CheckCircle className="w-5 h-5 text-yellow-400 mr-3" />
                    Unlimited token launches
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircle className="w-5 h-5 text-yellow-400 mr-3" />
                    Advanced analytics & insights
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircle className="w-5 h-5 text-yellow-400 mr-3" />
                    Priority API support
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircle className="w-5 h-5 text-yellow-400 mr-3" />
                    Custom webhook integrations
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircle className="w-5 h-5 text-yellow-400 mr-3" />
                    White-label options
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-slate-900 font-semibold">
                  Start Pro Trial
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="bg-slate-800/50 border-slate-700 hover:border-yellow-500/50 transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-white mb-2">ENTERPRISE</CardTitle>
                <CardDescription className="text-slate-300 mb-6">For large-scale operations</CardDescription>
                <div className="text-4xl font-bold text-yellow-400 mb-2">Custom</div>
                <div className="text-slate-400">Contact us</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-slate-300">
                    <CheckCircle className="w-5 h-5 text-yellow-400 mr-3" />
                    Everything in Pro
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircle className="w-5 h-5 text-yellow-400 mr-3" />
                    Dedicated infrastructure
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircle className="w-5 h-5 text-yellow-400 mr-3" />
                    24/7 phone support
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircle className="w-5 h-5 text-yellow-400 mr-3" />
                    Custom integrations
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircle className="w-5 h-5 text-yellow-400 mr-3" />
                    SLA guarantees
                  </li>
                </ul>
                <Button className="w-full bg-slate-700 hover:bg-slate-600 text-white">
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Hear what <span className="text-yellow-400">builders</span> say
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Real feedback from developers who've built successful memecoins using MemeKit API.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-slate-900 font-bold mr-4">
                    D
                  </div>
                  <div>
                    <div className="font-semibold text-white">devmike</div>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-slate-300">
                  "MemeKit's API is incredibly efficient. I launched my first memecoin in under 5 minutes. The documentation is clear and the support team is amazing!"
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-slate-900 font-bold mr-4">
                    S
                  </div>
                  <div>
                    <div className="font-semibold text-white">solanadev</div>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-slate-300">
                  "The analytics dashboard is game-changing. Real-time insights helped me optimize my token's performance and grow the community."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-slate-900 font-bold mr-4">
                    M
                  </div>
                  <div>
                    <div className="font-semibold text-white">memequeen</div>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-slate-300">
                  "Security features give me peace of mind. The rug-pull protection and automated auditing saved my project from potential issues."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-yellow-400">F</span>requently <span className="text-yellow-400">A</span>sked <span className="text-yellow-400">Q</span>uestions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader className="flex flex-row items-center justify-between cursor-pointer">
                <CardTitle className="text-white">What is MemeKit API?</CardTitle>
                <ChevronDown className="w-5 h-5 text-slate-400" />
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  MemeKit is a comprehensive API platform that allows developers to easily launch, manage, and analyze memecoins on Solana's Bonk protocol. We provide enterprise-grade tools for token deployment, real-time analytics, and security features.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader className="flex flex-row items-center justify-between cursor-pointer">
                <CardTitle className="text-white">How quickly can I launch a memecoin?</CardTitle>
                <ChevronDown className="w-5 h-5 text-slate-400" />
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader className="flex flex-row items-center justify-between cursor-pointer">
                <CardTitle className="text-white">What makes MemeKit different from other platforms?</CardTitle>
                <ChevronDown className="w-5 h-5 text-slate-400" />
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader className="flex flex-row items-center justify-between cursor-pointer">
                <CardTitle className="text-white">Do you provide technical support?</CardTitle>
                <ChevronDown className="w-5 h-5 text-slate-400" />
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Ready to launch your <span className="text-yellow-400">memecoin</span>?
            </h2>
            <p className="text-xl text-slate-300 mb-10">
              Join thousands of developers building the future of memecoins on Solana with MemeKit API.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button size="lg" className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-slate-900 font-semibold px-8 py-4 text-lg">
                Get Started Free
              </Button>
              <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:border-yellow-400 hover:text-yellow-400 px-8 py-4 text-lg">
                View Live Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-slate-900/50">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center font-bold text-slate-900">
                  MK
                </div>
                <span className="text-xl font-bold">MemeKit</span>
              </div>
              <p className="text-slate-400">
                Building the future of memecoin development on Solana.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">API Reference</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Community</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-slate-700" />
          
          <div className="flex flex-col md:flex-row items-center justify-between text-slate-400">
            <p>© 2024 MemeKit. All rights reserved.</p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
