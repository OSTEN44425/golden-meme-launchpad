import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Zap, Shield, BarChart3, Rocket, Code, Users, Star, ChevronDown, ArrowRight, Layers, TrendingUp, Globe, Lock, Activity, Database, Settings } from "lucide-react";
import FadeContent from "@/components/animations/FadeContent";
import StarBorder from "@/components/animations/StarBorder";
import CountUp from "@/components/animations/CountUp";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden font-sans">
      {/* Navigation modernisée */}
      <FadeContent>
        <header className="border-b border-slate-800/50 backdrop-blur-xl bg-slate-950/90 sticky top-0 z-50 transition-all duration-500 hover:bg-slate-950/95">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3 group">
              {/* Logo éclair bleu néon */}
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-all duration-300 animate-pulse">
                  <Zap className="w-6 h-6 text-white animate-bounce" />
                </div>
                <div className="absolute inset-0 w-10 h-10 rounded-lg bg-blue-500/20 blur-md animate-pulse"></div>
              </div>
              <span className="text-xl font-bold text-white bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                Launchpad Trade
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              {["Features", "Pricing", "Testimonials", "FAQ"].map((item, index) => (
                <FadeContent key={item} delay={index * 100}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-slate-300 hover:text-blue-400 transition-all duration-300 font-medium text-sm relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </FadeContent>
              ))}
            </nav>
            <div className="flex items-center space-x-3">
              <StarBorder color="#60a5fa" speed="4s">
                <Button 
                  variant="ghost" 
                  className="text-slate-300 hover:text-white hover:bg-slate-800/50 text-sm transition-all duration-300"
                >
                  Log In
                </Button>
              </StarBorder>
              <StarBorder color="#8b5cf6" speed="3s">
                <Button className="bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white font-medium shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-sm">
                  Join the Alpha
                </Button>
              </StarBorder>
            </div>
          </div>
        </header>
      </FadeContent>

      {/* Hero Section avec animations */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Fond animé */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-violet-500/5 rounded-full blur-2xl animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <FadeContent delay={200}>
              <div className="mb-8">
                <StarBorder color="#60a5fa" speed="5s">
                  <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-md rounded-full px-4 py-2 text-sm border border-slate-700/50">
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

      {/* Stats section avec CountUp */}
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

      {/* Section avec image 3D */}
      <FadeContent>
        <section className="py-24 relative">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <FadeContent delay={200}>
                <div>
                  <h2 className="text-white text-4xl lg:text-5xl font-bold mb-6">
                    Launchpad Trade - all <span className="text-blue-400 animate-glow">the best</span> alpha groups in one place
                  </h2>
                  <div className="space-y-4 text-slate-300">
                    <p className="text-lg">Simple - +$<CountUp to={3000} duration={2} />worth of Alpha Groups in one place</p>
                    <p>
                      Launchpad Trade's goal is to give you the complete "Degen Toolbox" to 
                      be profitable on Solana. Launchpad Trade Alpha provides access to top 
                      alpha groups, premium trading tools, and real-time updates, all 
                      in one affordable subscription.
                    </p>
                  </div>
                </div>
              </FadeContent>
              <FadeContent delay={400}>
                <div className="flex justify-center">
                  <StarBorder color="#8b5cf6" speed="8s">
                    <div className="w-80 h-80 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-slate-700/50 animate-float">
                      <div className="text-6xl font-bold bg-gradient-to-br from-blue-400 to-violet-400 bg-clip-text text-transparent animate-pulse">
                        LT
                      </div>
                    </div>
                  </StarBorder>
                </div>
              </FadeContent>
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
                    <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 group h-full">
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

      {/* Section avec dashboard preview */}
      <FadeContent>
        <section className="py-24 relative">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <FadeContent delay={200}>
                <div>
                  <div className="text-sm font-medium text-slate-400 mb-4 tracking-wider uppercase">WHAT MORE?</div>
                  <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                    All in One <span className="text-blue-400 animate-glow">Web Platform</span>
                  </h2>
                  <ul className="space-y-4">
                    {[
                      "Average 400 ms processing (site) and 12 s delivery (Discord) for near instant token alerts.",
                      "Live feed of every shared token with full on-chain & social metrics.",
                      "Trending tokens & tickers over 10m, 30m, 1h, 24h windows.",
                      "Leaderboards for top callers, aggregators, servers, and channels.",
                      "One-click reverse-image search to verify any token graphic.",
                      "Quick-buy links for instant token purchases.",
                      "Desktop notifications so you never miss a signal.",
                      "Compact mode for streamlined trend visibility."
                    ].map((item, i) => (
                      <FadeContent key={i} delay={i * 50}>
                        <li className="flex items-start text-slate-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      </FadeContent>
                    ))}
                  </ul>
                </div>
              </FadeContent>
              <FadeContent delay={400}>
                <div className="flex justify-center">
                  <StarBorder color="#8b5cf6" speed="7s">
                    <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-2xl">
                      <div className="bg-slate-800/50 rounded-lg p-4 mb-4">
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="w-6 h-6 bg-blue-500 rounded animate-pulse"></div>
                          <span className="text-white font-medium">Dashboard Preview</span>
                        </div>
                        <div className="space-y-2">
                          <div className="h-2 bg-blue-500/30 rounded w-full animate-pulse"></div>
                          <div className="h-2 bg-violet-500/30 rounded w-3/4 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                          <div className="h-2 bg-green-500/30 rounded w-1/2 animate-pulse" style={{animationDelay: '1s'}}></div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-slate-800/30 rounded-lg p-3 text-center">
                          <div className="text-2xl font-bold text-blue-400">
                            <CountUp to={286} duration={2} />
                          </div>
                          <div className="text-xs text-slate-400">Active Signals</div>
                        </div>
                        <div className="bg-slate-800/30 rounded-lg p-3 text-center">
                          <div className="text-2xl font-bold text-green-400">
                            <CountUp to={69.92} duration={2} />%
                          </div>
                          <div className="text-xs text-slate-400">Win Rate</div>
                        </div>
                      </div>
                    </div>
                  </StarBorder>
                </div>
              </FadeContent>
            </div>
          </div>
        </section>
      </FadeContent>

      {/* Mirroring Technology section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Mirroring Technology
            </h2>
            <p className="text-xl text-slate-300">
              Mirror the best alpha groups in seconds
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Activity,
                title: "RoleSync™",
                description: "Assign roles on our Discord server that match your roles in each source group. Receive pings at the exact same time as real group members."
              },
              {
                icon: Zap,
                title: "RealTimeSync™",
                description: "Automatic channel integration: whenever a new channel is created, it's instantly provisioned on our server and begins mirroring content without any manual setup. Real-time mirroring at an average speed of 200ms. Zero downtime for over 8 months. No manual steps—always current without effort."
              },
              {
                icon: Database,
                title: "ReplySync™",
                description: "Inline reply context: clearly display whom each message is replying to. One-click navigation: jump directly to the original message for full conversation clarity."
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-slate-900/30 backdrop-blur-sm border-slate-700/30 hover:border-slate-600/30 transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <CardTitle className="text-white text-xl font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-300 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section avec animations */}
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
                        Access over 110 premium alpha channels — Potion, Pastel, Digiworld, Cryptic, 
                        Shocked, Yogurt, Heaven Or Hell, Minted, Secret Society, Technical Alpha Group, 
                        Vanquish, Pumpfun Trenches, Prosperity, and more.
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
                          Elevate your trading with our comprehensive professional suite of 
                          premium tools. Full Access includes everything in ALPHA plus exclusive 
                          features designed for serious traders seeking an edge in the market.
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
                        One payment, endless value. Get permanent access to our complete suite of premium 
                        features with no recurring fees. Includes all current and future Full Access benefits — the 
                        ultimate investment in your trading success.
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

            <FadeContent delay={600}>
              <div className="text-center mt-12">
                <StarBorder color="#64748b" speed="5s">
                  <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white mr-4">
                    Go to checkout
                  </Button>
                </StarBorder>
                <span className="mx-4 text-slate-400">•</span>
                <Button variant="link" className="text-blue-400 hover:text-blue-300 p-0">
                  See our plans more in Detail →
                </Button>
              </div>
            </FadeContent>
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
            <p className="text-xl text-slate-300 max-w-4xl mx-auto">
              Real feedback from traders who've experienced the edge Launchpad Trade provides. See how our 
              members are leveraging superior alpha and making consistent profits in the Solana ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "soroki",
                text: "I am truly impressed with Launchpad Trade! Not only is it incredibly efficient, but the team behind it is alsoooo friendly and helpful listening to members and constantly improving the service day by day, making so much easier to track and make profit... Shoutout to the GOATs. Highly recommend!"
              },
              {
                name: "SANITY",
                text: "This is the only alpha server you'll ever need — 100% the best value for your money. The team is constantly looking for new ways to improve the server and enhance our experience in the trenches. Honestly, it's hard not to make money in here."
              },
              {
                name: "ctoligark",
                text: "it is a magnificent server where you can see many alpha servers together and that allows you to earn money with special filters, special information and privileged options that have been developed on it. I was amazed when I first saw it and the management responds to our requests very quickly and takes care of us. What could be better than this"
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

      {/* Community Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Join the <span className="text-blue-400">Community</span>
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-4xl mx-auto">
            Join our community of traders and investors to get the latest news, insights, and 
            analysis on the crypto market. Our community is dedicated to helping you make 
            informed decisions and achieve your financial goals.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3">
              Discord
            </Button>
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-6 py-3">
              X / Twitter
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              <span className="text-blue-400">F</span>requently{" "}
              <span className="text-blue-400">A</span>sked{" "}
              <span className="text-blue-400">Q</span>uestions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              { q: "What Groups And Tools Are Currently Included?", a: "We monitor over 110+ premium alpha groups including Potion, Pastel, Digiworld, Cryptic, and many more top-tier Solana trading communities." },
              { q: "What is an aggregator?", a: "An aggregator consolidates calls from multiple alpha groups into a single channel, allowing you to filter and customize the information you receive based on your trading preferences." },
              { q: "How Does Launchpad Trade Save Me Money?", a: "Instead of paying for 13+ separate alpha group subscriptions (which could cost $3000+/month), you get access to all of them for just 1-2 SOL per month." },
              { q: "How Are Updates Delivered In Real-Time?", a: "Our proprietary RealTimeSync™ technology delivers calls with an average latency of just 200ms, ensuring you get alpha signals almost instantly." },
              { q: "Can I Request New Alpha Groups Or Tools?", a: "Yes! We're constantly expanding our coverage. Premium members can request new groups and tools, and we prioritize based on community demand." },
              { q: "How Do I Get Access To The Tool?", a: "Simply choose your plan, complete payment, and you'll receive instant Discord access plus web platform credentials within minutes." }
            ].map((faq, index) => (
              <Card key={index} className="bg-slate-900/30 backdrop-blur-sm border-slate-700/30 hover:border-slate-600/30 transition-all duration-300">
                <CardHeader className="flex flex-row items-center justify-between cursor-pointer">
                  <CardTitle className="text-white text-lg font-medium">{faq.q}</CardTitle>
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="link" className="text-slate-400 hover:text-white inline-flex items-center">
              ↑ Back to Top
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FadeContent>
        <footer className="border-t border-slate-800/50 bg-slate-950/80 backdrop-blur-md">
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
            
            <Separator className="my-8 bg-slate-800/50" />
            
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
