
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Zap, Shield, BarChart3, Rocket, Code, Users, Star, ChevronDown, ArrowRight, Layers, TrendingUp, Globe, Lock, Activity, Database, Settings } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden font-['Figtree'] noise-texture">
      {/* Ultra-modern navigation */}
      <header className="fixed top-0 w-full z-50 glass border-b border-white/10 transition-all duration-500">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 group animate-slide-in-left">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-electric to-blue-neon rounded-xl flex items-center justify-center text-black font-bold text-lg shadow-lg glow-blue hover:glow-violet transition-all duration-500 hover:scale-110 hover:rotate-12">
                  <Zap className="w-6 h-6 animate-pulse-glow" />
                </div>
              </div>
              <span className="text-xl font-bold text-white group-hover:text-glow-blue transition-all duration-300">
                Launchpad Trade
              </span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8 animate-fade-in delay-300">
              {["Features", "Pricing", "Testimonials", "FAQ"].map((item, index) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-white/70 hover:text-white hover:text-glow-blue transition-all duration-300 font-medium text-sm relative group"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-neon to-violet-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>
            
            <div className="flex items-center space-x-3 animate-slide-in-right">
              <Button 
                variant="ghost" 
                className="text-white/70 hover:text-white hover:bg-white/10 text-sm transition-all duration-300 hover-lift"
              >
                Log In
              </Button>
              <Button className="bg-gradient-to-r from-blue-neon to-violet-500 hover:from-violet-500 hover:to-blue-neon text-white font-medium shadow-lg hover:shadow-blue-500/50 transition-all duration-300 text-sm btn-modern hover-lift animate-shimmer bg-[length:200%_200%]">
                Join the Alpha
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with ultra-modern effects */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Ultra-modern background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-neon/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-neon/10 to-violet-500/10 rounded-full blur-2xl animate-rotate-slow"></div>
          <div className="absolute inset-0 grid-pattern opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10 max-w-5xl">
          {/* Floating badge */}
          <div className="mb-12 animate-fade-in">
            <div className="inline-flex items-center space-x-3 glass rounded-full px-6 py-3 text-sm border hover-glow hover-lift animate-bounce-subtle">
              <span className="text-blue-electric font-semibold">🚀 Claim free trial</span>
              <span className="text-white/70">Join our discord and claim</span>
              <span className="text-violet-400 font-semibold">Free Trial</span>
              <ArrowRight className="w-4 h-4 text-white/70 animate-pulse" />
            </div>
          </div>
          
          {/* Ultra-modern hero title */}
          <h1 className="text-6xl lg:text-8xl font-bold mb-12 leading-tight">
            <span className="text-blue-electric animate-fade-in-up delay-75 inline-block text-glow-blue">
              Memecoin Intelligence
            </span>
            <br />
            <span className="text-white animate-fade-in-up delay-150 inline-block">
              for{" "}
            </span>
            <span className="text-violet-400 animate-fade-in-up delay-225 inline-block text-glow-violet">
              Alpha-Obsessed
            </span>
            <br />
            <span className="text-white animate-fade-in-up delay-300 inline-block">
              Degens
            </span>
          </h1>
          
          <p className="text-xl text-white/80 mb-16 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-500">
            Launchpad Trade aggregates alpha groups signals into a single 
            solana dashboard for traders to find their edge.
          </p>
          
          {/* Ultra-modern CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-20">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-neon to-violet-500 hover:from-violet-500 hover:to-blue-neon text-white font-semibold px-12 py-6 text-lg shadow-xl hover:shadow-blue-500/50 transition-all duration-500 rounded-2xl btn-modern hover-lift animate-fade-in-up delay-700 glow-blue"
            >
              <Zap className="w-5 h-5 mr-2 animate-pulse" />
              Join the Alpha
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white px-12 py-6 text-lg transition-all duration-500 rounded-2xl glass hover-lift animate-fade-in-up delay-1000"
            >
              Learn more
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Animated stats section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "10K+", label: "Callers Monitored", color: "text-blue-electric", delay: "0ms" },
              { value: "25M+", label: "Messages Mirrored", color: "text-violet-400", delay: "150ms" },
              { value: "400ms", label: "Call Latency (avg)", color: "text-blue-electric", delay: "300ms" },
              { value: "+$3,000", label: "Monthly Savings", color: "text-violet-400", delay: "450ms" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="animate-scale-in hover-lift glass rounded-2xl p-6 hover-glow-violet transition-all duration-500"
                style={{ animationDelay: stat.delay }}
              >
                <div className={`text-5xl lg:text-6xl font-bold ${stat.color} mb-3 ${stat.color.includes('blue') ? 'text-glow-blue' : 'text-glow-violet'}`}>
                  {stat.value}
                </div>
                <div className="text-white/70 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern showcase section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-white text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                Launchpad Trade - all{" "}
                <span className="text-blue-electric text-glow-blue">the best</span>{" "}
                alpha groups in one place
              </h2>
              <div className="space-y-6 text-white/80 text-lg">
                <p className="text-xl font-medium">
                  Simple - +$3000 worth of Alpha Groups in one place
                </p>
                <p className="leading-relaxed">
                  Launchpad Trade's goal is to give you the complete "Degen Toolbox" to 
                  be profitable on Solana. Launchpad Trade Alpha provides access to top 
                  alpha groups, premium trading tools, and real-time updates, all 
                  in one affordable subscription.
                </p>
              </div>
            </div>
            <div className="flex justify-center animate-slide-in-right">
              <div className="relative">
                <div className="w-96 h-96 glass rounded-3xl flex items-center justify-center backdrop-blur-xl border border-white/20 hover-lift hover-glow transition-all duration-500">
                  <div className="text-8xl font-bold bg-gradient-to-br from-blue-electric to-violet-400 bg-clip-text text-transparent animate-pulse-glow">
                    <Zap className="w-32 h-32 text-blue-electric animate-float" />
                  </div>
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-neon/20 to-violet-500/20 rounded-3xl blur-xl animate-pulse-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ultra-modern features section */}
      <section id="features" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="text-sm font-semibold text-blue-electric mb-6 tracking-wider uppercase">FEATURES</div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              The only{" "}
              <span className="text-blue-electric text-glow-blue">toolbox</span>{" "}
              you need
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              The ultimate Degen Toolbox to boost your trading wins — whenever, wherever. All-in-one.
            </p>
          </div>

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
                ],
                delay: "0ms"
              },
              {
                icon: Database,
                title: "Caller Data Insights",
                items: [
                  "Full history: messages/day, calls/day, win rate/day, average ROI/day.",
                  "Custom Caller Score — filter by score, win rate, ROI, message count, call count, successful calls, or specific groups.",
                  "Favorites for instant access to your preferred callers.",
                  "Whitelist & blacklist options to control exactly whose calls you receive."
                ],
                delay: "200ms"
              },
              {
                icon: Settings,
                title: "Daily Performance Recap",
                items: [
                  "Receive a daily summary - on Discord or via the web-app showing:",
                  "Profitable token recommendations.",
                  "24-hour win rate of each aggregator.",
                  "Data export to fine-tune your own strategies"
                ],
                delay: "400ms"
              }
            ].map((feature, index) => (
              <Card 
                key={index} 
                className="glass hover:bg-white/10 border-white/10 hover:border-white/20 transition-all duration-500 group hover-lift hover-glow-violet animate-fade-in-up"
                style={{ animationDelay: feature.delay }}
              >
                <CardHeader className="pb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-neon/20 to-violet-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:glow-blue transition-all duration-500 glass">
                    <feature.icon className="w-8 h-8 text-blue-electric" />
                  </div>
                  <CardTitle className="text-white text-xl font-bold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {feature.items.map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-white/80">
                        <CheckCircle className="w-4 h-4 text-violet-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modern dashboard preview */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="animate-slide-in-left">
              <div className="text-sm font-semibold text-blue-electric mb-6 tracking-wider uppercase">WHAT MORE?</div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-12 leading-tight">
                All in One{" "}
                <span className="text-blue-electric text-glow-blue">Web Platform</span>
              </h2>
              <ul className="space-y-6">
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
                  <li key={i} className="flex items-start text-white/80">
                    <CheckCircle className="w-5 h-5 text-violet-400 mr-4 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center animate-slide-in-right">
              <div className="relative">
                <div className="glass rounded-3xl p-8 shadow-2xl hover-lift hover-glow transition-all duration-500 backdrop-blur-xl">
                  <div className="bg-black/30 rounded-2xl p-6 mb-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-neon to-violet-500 rounded-lg flex items-center justify-center">
                        <BarChart3 className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white font-semibold">Dashboard Preview</span>
                    </div>
                    <div className="space-y-3">
                      <div className="h-3 bg-gradient-to-r from-blue-neon/50 to-transparent rounded-full animate-shimmer"></div>
                      <div className="h-3 bg-gradient-to-r from-violet-500/50 to-transparent rounded-full animate-shimmer" style={{ animationDelay: '0.5s' }}></div>
                      <div className="h-3 bg-gradient-to-r from-blue-electric/50 to-transparent rounded-full animate-shimmer" style={{ animationDelay: '1s' }}></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass rounded-xl p-4 text-center hover-glow">
                      <div className="text-3xl font-bold text-blue-electric text-glow-blue">286</div>
                      <div className="text-xs text-white/70">Active Signals</div>
                    </div>
                    <div className="glass rounded-xl p-4 text-center hover-glow">
                      <div className="text-3xl font-bold text-violet-400 text-glow-violet">69.92%</div>
                      <div className="text-xs text-white/70">Win Rate</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-neon/20 to-violet-500/20 rounded-3xl blur-xl animate-pulse-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern mirroring technology */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl lg:text-6xl font-bold mb-8">
              <span className="text-blue-electric text-glow-blue">Mirroring</span>{" "}
              Technology
            </h2>
            <p className="text-xl text-white/80">
              Mirror the best alpha groups in seconds
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Activity,
                title: "RoleSync™",
                description: "Assign roles on our Discord server that match your roles in each source group. Receive pings at the exact same time as real group members.",
                delay: "0ms"
              },
              {
                icon: Zap,
                title: "RealTimeSync™",
                description: "Automatic channel integration: whenever a new channel is created, it's instantly provisioned on our server and begins mirroring content without any manual setup. Real-time mirroring at an average speed of 200ms. Zero downtime for over 8 months. No manual steps—always current without effort.",
                delay: "200ms"
              },
              {
                icon: Database,
                title: "ReplySync™",
                description: "Inline reply context: clearly display whom each message is replying to. One-click navigation: jump directly to the original message for full conversation clarity.",
                delay: "400ms"
              }
            ].map((feature, index) => (
              <Card 
                key={index} 
                className="glass hover:bg-white/10 border-white/10 hover:border-white/20 transition-all duration-500 hover-lift hover-glow-violet animate-fade-in-up"
                style={{ animationDelay: feature.delay }}
              >
                <CardHeader className="text-center pb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-neon/20 to-violet-500/20 rounded-3xl flex items-center justify-center mx-auto mb-6 hover:scale-110 hover:glow-blue transition-all duration-500 glass">
                    <feature.icon className="w-10 h-10 text-blue-electric" />
                  </div>
                  <CardTitle className="text-white text-xl font-bold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/80 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ultra-modern pricing section */}
      <section id="pricing" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl lg:text-6xl font-bold mb-8">
              Simple{" "}
              <span className="text-blue-electric text-glow-blue">Pricing</span>
            </h2>
            <p className="text-xl text-white/80">
              No hidden fees, no surprises. Just one simple price for all the features you need.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Alpha Plan */}
            <Card className="glass hover:bg-white/10 border-white/10 hover:border-white/20 transition-all duration-500 hover-lift animate-fade-in-up">
              <CardHeader className="text-center pb-8">
                <div className="text-sm font-semibold text-white/70 mb-3">ALPHA</div>
                <div className="text-sm text-white/60 mb-6">UNLOCK EVERYTHING FOR JUST</div>
                <div className="text-5xl font-bold text-white mb-2">1 SOL<span className="text-lg text-white/60">/month</span></div>
                <CardDescription className="text-white/80 leading-relaxed">
                  Access over 110 premium alpha channels — Potion, Pastel, Digiworld, Cryptic, 
                  Shocked, Yogurt, Heaven Or Hell, Minted, Secret Society, Technical Alpha Group, 
                  Vanquish, Pumpfun Trenches, Prosperity, and more.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-10">
                  {["Access all the mirrored groups", "All In One Web Platform", "Powerful Aggregator Technology", "Caller Data Insights", "Daily Performance Recap"].map((feature, i) => (
                    <li key={i} className="flex items-center text-white/80">
                      <CheckCircle className="w-5 h-5 text-violet-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-gradient-to-r from-white/20 to-white/10 hover:from-white/30 hover:to-white/20 text-white font-semibold transition-all duration-300 btn-modern hover-glow rounded-xl py-3">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Full Access Plan - Featured */}
            <Card className="relative scale-105 shadow-2xl animate-fade-in-up delay-200">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-neon to-violet-500 rounded-2xl blur-lg animate-pulse-glow"></div>
              <div className="relative glass rounded-2xl hover:bg-white/10 border-blue-neon/30 transition-all duration-500 hover-lift">
                <Badge className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-neon to-violet-500 text-white font-bold px-6 py-2 text-sm animate-bounce-subtle">
                  BEST SELLER
                </Badge>
                <CardHeader className="text-center pb-8 pt-8">
                  <div className="text-sm font-semibold text-blue-electric mb-3">FULL ACCESS</div>
                  <div className="text-sm text-white/60 mb-6">THE COMPLETE EXPERIENCE FOR JUST</div>
                  <div className="text-5xl font-bold text-white mb-2 text-glow-blue">2 SOL<span className="text-lg text-white/60">/month</span></div>
                  <CardDescription className="text-white/80 leading-relaxed">
                    Elevate your trading with our comprehensive professional suite of 
                    premium tools. Full Access includes everything in ALPHA plus exclusive 
                    features designed for serious traders seeking an edge in the market.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-10">
                    {["Everything in ALPHA", "Copy Trade Wallet Finder", "Private daily recaps", "Private custom aggregators", "Advanced analytics"].map((feature, i) => (
                      <li key={i} className="flex items-center text-white/80">
                        <CheckCircle className="w-5 h-5 text-blue-electric mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-blue-neon to-violet-500 hover:from-violet-500 hover:to-blue-neon text-white font-bold transition-all duration-300 shadow-xl btn-modern hover-glow rounded-xl py-3 animate-shimmer bg-[length:200%_200%]">
                    Get Full Access
                  </Button>
                </CardContent>
              </div>
            </Card>

            {/* Lifetime Plan */}
            <Card className="glass hover:bg-white/10 border-white/10 hover:border-white/20 transition-all duration-500 hover-lift animate-fade-in-up delay-400">
              <CardHeader className="text-center pb-8">
                <div className="text-sm font-semibold text-yellow-400 mb-3">LIFETIME</div>
                <div className="text-5xl font-bold text-white mb-2 text-glow-violet">25 SOL</div>
                <CardDescription className="text-white/80 leading-relaxed">
                  One payment, endless value. Get permanent access to our complete suite of premium 
                  features with no recurring fees. Includes all current and future Full Access benefits — the 
                  ultimate investment in your trading success.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-10">
                  {["Everything in FULL ACCESS", "No recurring payments ever", "Exclusive lifetime member community", "More Custom Aggregators", "Priority access to new features"].map((feature, i) => (
                    <li key={i} className="flex items-center text-white/80">
                      <CheckCircle className="w-5 h-5 text-yellow-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black font-bold transition-all duration-300 shadow-xl btn-modern hover-glow rounded-xl py-3">
                  Go Lifetime
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16 animate-fade-in-up delay-600">
            <Button variant="outline" className="border-white/20 text-white/80 hover:bg-white/10 hover:text-white mr-4 glass">
              Go to checkout
            </Button>
            <Button variant="link" className="text-blue-electric hover:text-blue-neon p-0">
              See our plans more in Detail →
            </Button>
          </div>
        </div>
      </section>

      {/* Modern testimonials */}
      <section id="testimonials" className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="text-sm font-semibold text-blue-electric mb-6 tracking-wider uppercase">TESTIMONIALS</div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-8">
              Hear what{" "}
              <span className="text-blue-electric text-glow-blue">winners</span>{" "}
              say
            </h2>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Real feedback from traders who've experienced the edge Launchpad Trade provides. See how our 
              members are leveraging superior alpha and making consistent profits in the Solana ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "soroki",
                text: "I am truly impressed with Launchpad Trade! Not only is it incredibly efficient, but the team behind it is alsoooo friendly and helpful listening to members and constantly improving the service day by day, making so much easier to track and make profit... Shoutout to the GOATs. Highly recommend!",
                delay: "0ms"
              },
              {
                name: "SANITY",
                text: "This is the only alpha server you'll ever need — 100% the best value for your money. The team is constantly looking for new ways to improve the server and enhance our experience in the trenches. Honestly, it's hard not to make money in here.",
                delay: "200ms"
              },
              {
                name: "ctoligark",
                text: "it is a magnificent server where you can see many alpha servers together and that allows you to earn money with special filters, special information and privileged options that have been developed on it. I was amazed when I first saw it and the management responds to our requests very quickly and takes care of us. What could be better than this",
                delay: "400ms"
              }
            ].map((testimonial, index) => (
              <Card 
                key={index} 
                className="glass hover:bg-white/10 border-white/10 hover:border-white/20 transition-all duration-500 hover-lift hover-glow-violet animate-fade-in-up"
                style={{ animationDelay: testimonial.delay }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-neon to-violet-500 rounded-full flex items-center justify-center text-white font-bold mr-4 text-lg">
                      {testimonial.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                  </div>
                  <p className="text-white/80 leading-relaxed italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modern community section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 animate-fade-in-up">
            Join the{" "}
            <span className="text-blue-electric text-glow-blue">Community</span>
          </h2>
          <p className="text-xl text-white/80 mb-16 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            Join our community of traders and investors to get the latest news, insights, and 
            analysis on the crypto market. Our community is dedicated to helping you make 
            informed decisions and achieve your financial goals.
          </p>
          <div className="flex items-center justify-center space-x-6 animate-fade-in-up delay-400">
            <Button className="bg-gradient-to-r from-blue-neon to-violet-500 hover:from-violet-500 hover:to-blue-neon text-white font-semibold px-8 py-4 btn-modern hover-lift">
              Discord
            </Button>
            <Button variant="outline" className="border-white/20 text-white/80 hover:bg-white/10 hover:text-white px-8 py-4 glass hover-lift">
              X / Twitter
            </Button>
          </div>
        </div>
      </section>

      {/* Modern FAQ */}
      <section id="faq" className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl lg:text-6xl font-bold">
              <span className="text-blue-electric text-glow-blue">F</span>requently{" "}
              <span className="text-blue-electric text-glow-blue">A</span>sked{" "}
              <span className="text-blue-electric text-glow-blue">Q</span>uestions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { q: "What Groups And Tools Are Currently Included?", a: "We monitor over 110+ premium alpha groups including Potion, Pastel, Digiworld, Cryptic, and many more top-tier Solana trading communities.", delay: "0ms" },
              { q: "What is an aggregator?", a: "An aggregator consolidates calls from multiple alpha groups into a single channel, allowing you to filter and customize the information you receive based on your trading preferences.", delay: "100ms" },
              { q: "How Does Launchpad Trade Save Me Money?", a: "Instead of paying for 13+ separate alpha group subscriptions (which could cost $3000+/month), you get access to all of them for just 1-2 SOL per month.", delay: "200ms" },
              { q: "How Are Updates Delivered In Real-Time?", a: "Our proprietary RealTimeSync™ technology delivers calls with an average latency of just 200ms, ensuring you get alpha signals almost instantly.", delay: "300ms" },
              { q: "Can I Request New Alpha Groups Or Tools?", a: "Yes! We're constantly expanding our coverage. Premium members can request new groups and tools, and we prioritize based on community demand.", delay: "400ms" },
              { q: "How Do I Get Access To The Tool?", a: "Simply choose your plan, complete payment, and you'll receive instant Discord access plus web platform credentials within minutes.", delay: "500ms" }
            ].map((faq, index) => (
              <Card 
                key={index} 
                className="glass hover:bg-white/10 border-white/10 hover:border-white/20 transition-all duration-500 hover-lift animate-fade-in-up"
                style={{ animationDelay: faq.delay }}
              >
                <CardHeader className="flex flex-row items-center justify-between cursor-pointer hover:text-blue-electric transition-colors duration-300">
                  <CardTitle className="text-white text-lg font-semibold">{faq.q}</CardTitle>
                  <ChevronDown className="w-5 h-5 text-white/60" />
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 leading-relaxed">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16 animate-fade-in-up delay-700">
            <Button variant="link" className="text-white/60 hover:text-white inline-flex items-center">
              ↑ Back to Top
            </Button>
          </div>
        </div>
      </section>

      {/* Modern footer */}
      <footer className="border-t border-white/10 glass">
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row justify-between items-start mb-16">
            <div className="mb-8 md:mb-0 animate-fade-in-up">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-electric to-violet-500 rounded-xl flex items-center justify-center text-black font-bold text-lg glow-blue">
                  <Zap className="w-6 h-6" />
                </div>
                <span className="text-xl font-bold text-white">Launchpad Trade</span>
              </div>
              <p className="text-white/70 max-w-sm leading-relaxed">
                We've mirrored the past, now we're shaping the future.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-16 animate-fade-in-up delay-200">
              <div>
                <h4 className="font-bold text-white mb-6">Product</h4>
                <ul className="space-y-3">
                  {["Features", "Pricing", "Testimonials", "FAQ"].map((link, i) => (
                    <li key={i}>
                      <a href={`#${link.toLowerCase()}`} className="text-white/70 hover:text-white hover:text-glow-blue transition-all duration-300">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <Separator className="my-10 bg-white/10" />
          
          <div className="flex flex-col md:flex-row items-center justify-between text-white/60 text-sm animate-fade-in-up delay-400">
            <p>© 2025 Copyright Launchpad Trade. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
