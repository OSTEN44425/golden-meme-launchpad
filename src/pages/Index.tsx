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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden font-sans relative">
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
          {/* Full width animated violet separator line */}
          <div className="relative h-px w-full">
            <div className="absolute inset-0 w-full bg-gradient-to-r from-transparent via-violet-500/30 to-transparent animate-pulse"></div>
            <div className="absolute left-0 w-full h-px bg-gradient-to-r from-violet-400/20 via-violet-500/50 to-violet-400/20 animate-pulse" style={{animationDelay: '0.5s'}}></div>
          </div>
        </header>
      </FadeContent>

      {/* Hero Section */}
      <FadeContent>
        <section className="pt-20 pb-16 relative">
          <div className="container mx-auto px-6 max-w-5xl text-center">
            <h1 className="text-5xl font-extrabold mb-6 leading-tight">
              The Ultimate Crypto Trading API
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12">
              Access real-time market data, execute trades, and manage your portfolio with ease.
            </p>
            <Button size="lg" onClick={() => scrollToSection('cta-final')}>
              Get Started
            </Button>
          </div>
        </section>
      </FadeContent>

      {/* AI Bot Section - Moved much higher */}
      <FadeContent>
        <section className="py-4 relative">
          <div className="container mx-auto px-6 flex justify-center">
            <AIBot />
          </div>
        </section>
      </FadeContent>

      {/* Social Proof / Trust Section */}
      <FadeContent>
        <section className="py-12 relative">
          <div className="container mx-auto px-6 max-w-5xl flex flex-wrap justify-center gap-8">
            <Badge variant="secondary" className="text-lg px-6 py-3">
              Trusted by 10,000+ traders
            </Badge>
            <Badge variant="secondary" className="text-lg px-6 py-3">
              99.99% uptime
            </Badge>
            <Badge variant="secondary" className="text-lg px-6 py-3">
              24/7 Support
            </Badge>
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
          <div className="container mx-auto px-6 max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-12">
            <Card>
              <CardHeader>
                <CardTitle>Real-time Data</CardTitle>
                <CardDescription>Get up-to-the-second market data for all major cryptocurrencies.</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart3 className="w-8 h-8 text-violet-500 mb-4" />
                <p>Stay ahead with live updates and market trends.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Trade Execution</CardTitle>
                <CardDescription>Execute trades instantly with our low-latency API.</CardDescription>
              </CardHeader>
              <CardContent>
                <Rocket className="w-8 h-8 text-violet-500 mb-4" />
                <p>Fast and reliable order placement for all supported exchanges.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Portfolio Management</CardTitle>
                <CardDescription>Manage your assets and track performance seamlessly.</CardDescription>
              </CardHeader>
              <CardContent>
                <Users className="w-8 h-8 text-violet-500 mb-4" />
                <p>Keep your investments organized and optimized.</p>
              </CardContent>
            </Card>
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

      {/* Key Benefits Section */}
      <FadeContent>
        <section className="py-12 relative">
          <div className="container mx-auto px-6 max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Reliable & Secure</h3>
              <p className="text-slate-300 mb-6">
                Our API is built with security and reliability in mind, ensuring your data and trades are safe.
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-400">
                <li>256-bit encryption</li>
                <li>99.99% uptime SLA</li>
                <li>Comprehensive logging and monitoring</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Developer Friendly</h3>
              <p className="text-slate-300 mb-6">
                Easy to integrate with detailed documentation and SDKs for multiple languages.
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-400">
                <li>REST and WebSocket support</li>
                <li>Interactive API explorer</li>
                <li>Community and professional support</li>
              </ul>
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

      {/* Code Excerpt Section */}
      <FadeContent>
        <section className="py-12 relative">
          <div className="container mx-auto px-6 max-w-5xl">
            <pre className="bg-slate-900 rounded-lg p-6 overflow-x-auto text-sm text-green-400 font-mono">
{`// Example API call
fetch('https://api.launchpad.trade/v1/market/ticker?symbol=BTCUSD')
  .then(res => res.json())
  .then(data => console.log(data));`}
            </pre>
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

      {/* Community Section - Enhanced with decorative icons */}
      <FadeContent>
        <section className="py-20 relative">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="relative group">
              {/* Animated gradient border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-700/40 via-violet-600/40 to-violet-700/40 rounded-3xl opacity-30 group-hover:opacity-50 blur-sm transition-all duration-500 animate-pulse"></div>
              
              {/* Main container */}
              <div className="relative bg-gradient-to-br from-slate-950/98 via-slate-900/98 to-slate-950/98 rounded-3xl border border-violet-700/30 backdrop-blur-xl overflow-hidden">
                {/* Decorative Social Media Icons in corners and random positions */}
                {/* Discord icons */}
                <div className="absolute top-6 left-6 w-12 h-12 text-violet-500/40 animate-pulse">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-full h-full">
                    <path fill="currentColor" d="M 18.90625 7 C 18.90625 7 9.23 8.265 4.84375 17.8125 C 4.84375 17.8125 -0.03125 27.34375 -0.03125 38.34375 C -0.03125 38.34375 3.0625 43.15625 11.21875 43.59375 C 11.21875 43.59375 12.65625 41.84375 13.78125 40.34375 C 8.46875 38.84375 6.65625 35.65625 6.65625 35.65625 C 6.65625 35.65625 7.125 36 8 36.5 C 8.125 36.59375 8.25 36.625 8.375 36.71875 C 8.5 36.8125 8.59375 36.875 8.71875 36.96875 C 10.71875 38.09375 12.84375 39.0625 15.125 39.75 C 19.125 40.96875 23.75 41.40625 28.75 39.75 C 30.84375 39.0625 33.03125 38.09375 35.34375 36.71875 C 35.46875 36.625 35.5625 36.5625 35.6875 36.46875 C 35.8125 36.375 35.9375 36.34375 36.0625 36.25 C 36.9375 35.75 37.40625 35.40625 37.40625 35.40625 C 37.40625 35.40625 35.59375 38.59375 30.28125 40.09375 C 31.40625 41.59375 32.84375 43.34375 32.84375 43.34375 C 40.96875 42.90625 44.03125 38.125 44.03125 38.125 C 44.03125 27.125 39.15625 17.59375 39.15625 17.59375 C 34.75 8.03125 25.09375 6.78125 25.09375 6.78125 L 24.625 7.34375 C 30.15625 9.09375 32.71875 11.59375 32.71875 11.59375 C 29.40625 9.71875 26.1875 8.96875 23.40625 8.75 C 21.21875 8.5625 19.125 8.65625 17.28125 8.9375 C 17.09375 8.9375 16.9375 8.96875 16.75 8.96875 C 15.875 9.0625 13.75 9.4375 11.1875 10.75 C 10.3125 11.15625 9.78125 11.4375 9.78125 11.4375 C 9.78125 11.4375 12.46875 8.78125 18.375 7.03125 L 18.90625 7 z M 18.28125 18.15625 C 20.46875 18.15625 22.1875 20.03125 22.15625 22.28125 C 22.15625 24.53125 20.46875 26.40625 18.28125 26.40625 C 16.125 26.40625 14.4375 24.53125 14.4375 22.28125 C 14.4375 20.03125 16.125 18.15625 18.28125 18.15625 z M 31.71875 18.15625 C 33.90625 18.15625 35.59375 20.03125 35.5625 22.28125 C 35.5625 24.53125 33.90625 26.40625 31.71875 26.40625 C 29.5625 26.40625 27.875 24.53125 27.875 22.28125 C 27.875 20.03125 29.5625 18.15625 31.71875 18.15625 z"/>
                  </svg>
                </div>
                
                {/* Twitter icon */}
                <div className="absolute top-8 right-12 w-10 h-10 text-blue-500/30 animate-pulse" style={{animationDelay: '1s'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-full h-full">
                    <path fill="currentColor" d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 30.693359 14.058594 C 27.093054 14.058594 24.152344 16.998175 24.152344 20.597656 C 24.152344 20.622956 24.159856 20.646615 24.160156 20.671875 C 20.346071 20.164308 16.972078 18.281343 14.654297 15.439453 A 1.0001 1.0001 0 0 0 13.015625 15.568359 C 12.452734 16.536013 12.130859 17.663768 12.130859 18.857422 C 12.130859 19.919597 12.426761 20.906321 12.878906 21.796875 A 1.0001 1.0001 0 0 0 12.085938 22.773438 L 12.085938 22.84375 C 12.085938 24.777783 12.990963 26.452789 14.332031 27.652344 A 1.0001 1.0001 0 0 0 14.072266 28.677734 C 14.630704 30.41466 15.93241 31.774479 17.5625 32.541016 C 16.258408 33.150994 14.861087 33.587891 13.320312 33.587891 C 12.909515 33.587891 12.510187 33.564538 12.119141 33.517578 A 1.0001 1.0001 0 0 0 11.460938 35.353516 C 14.065405 37.024617 17.166795 38 20.490234 38 C 25.860882 38 30.105907 35.743874 32.943359 32.525391 C 35.780812 29.306907 37.253906 25.153083 37.253906 21.240234 C 37.253906 21.122724 37.248494 21.01029 37.246094 20.894531 C 38.219933 20.11274 39.135827 19.250444 39.830078 18.210938 A 1.0001 1.0001 0 0 0 38.705078 16.699219 C 38.866705 16.38464 39.095491 16.111528 39.205078 15.769531 A 1.0001 1.0001 0 0 0 37.744141 14.603516 C 36.869551 15.121731 35.886845 15.463383 34.869141 15.701172 C 33.725772 14.727018 32.30529 14.058594 30.693359 14.058594 z M 30.693359 16.058594 C 32.005547 16.058594 33.178321 16.606981 34.005859 17.490234 A 1.0001 1.0001 0 0 0 34.927734 17.789062 C 35.079649 17.759183 35.201682 17.662443 35.351562 17.626953 C 35.332963 17.638463 35.321514 17.658672 35.302734 17.669922 A 1.0001 1.0001 0 0 0 35.832031 19.527344 C 35.763341 19.579724 35.722335 19.662323 35.652344 19.712891 A 1.0001 1.0001 0 0 0 35.238281 20.566406 C 35.247781 20.79066 35.253906 21.015832 35.253906 21.240234 C 35.253906 24.645385 33.939657 28.371609 31.443359 31.203125 C 28.947059 34.03464 25.308587 36 20.490234 36 C 18.837046 36 17.2817 35.669687 15.800781 35.167969 C 17.643043 34.77762 19.387244 34.125203 20.816406 33.003906 A 1.0001 1.0001 0 0 0 20.21875 31.21875 C 18.803099 31.19304 17.712807 30.392345 16.898438 29.359375 C 17.197615 29.320665 17.507049 29.319275 17.792969 29.240234 A 1.0001 1.0001 0 0 0 17.724609 27.294922 C 16.073199 26.96164 14.784996 25.723029 14.3125 24.121094 C 14.7378 24.223448 15.110445 24.452375 15.5625 24.466797 A 1.0001 1.0001 0 0 0 16.150391 22.636719 C 14.930654 21.821102 14.130859 20.439709 14.130859 18.857422 C 14.130859 18.530423 14.306329 18.270522 14.371094 17.964844 C 17.211591 20.776703 20.99183 22.6429 25.248047 22.857422 A 1.0001 1.0001 0 0 0 26.271484 21.628906 C 26.193654 21.29976 26.152344 20.956387 26.152344 20.597656 C 26.152344 18.079138 28.173664 16.058594 30.693359 16.058594 z"/>
                  </svg>
                </div>

                {/* Telegram icon */}
                <div className="absolute top-16 left-20 w-8 h-8 text-violet-500/25 animate-pulse" style={{animationDelay: '2s'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-full h-full">
                    <radialGradient id="La9SoowKGoEUHOnYdJMSEa_2mIgusGquJFz_gr1" cx="24" cy="10.009" r="32.252" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#8c9eff"></stop><stop offset=".368" stopColor="#889af8"></stop><stop offset=".889" stopColor="#7e8fe6"></stop><stop offset="1" stopColor="#7b8ce1"></stop></radialGradient><path fill="url(#La9SoowKGoEUHOnYdJMSEa_2mIgusGquJFz_gr1)" d="M40.107,12.15c-0.065-0.102-0.139-0.182-0.236-0.255c-0.769-0.578-4.671-3.339-9.665-3.875	c-0.01-0.001-0.048-0.003-0.057-0.003c-0.098,0-0.183,0.057-0.224,0.14l-0.269,0.538c0,0-0.001,0-0.001,0	c-0.017,0.033-0.026,0.071-0.026,0.111c0,0.109,0.07,0.202,0.168,0.236c0.006,0.002,0.048,0.011,0.063,0.014	c4.267,1.028,6.863,2.89,9.149,4.945c-4.047-2.066-8.044-4.001-15.009-4.001s-10.961,1.936-15.009,4.001	c2.286-2.055,4.882-3.917,9.149-4.945c0.015-0.004,0.057-0.012,0.063-0.014c0.098-0.034,0.168-0.127,0.168-0.236	c0-0.04-0.009-0.078-0.026-0.111c0,0-0.001,0-0.001,0l-0.269-0.538c-0.041-0.083-0.125-0.14-0.224-0.14	c-0.009,0-0.048,0.002-0.057,0.003c-4.994,0.536-8.896,3.297-9.665,3.875c-0.097,0.073-0.17,0.153-0.236,0.255	c-0.708,1.107-5.049,8.388-5.892,21.632c-0.009,0.142,0.04,0.289,0.135,0.395c4.592,5.144,11.182,5.752,12.588,5.823	c0.167,0.008,0.327-0.065,0.427-0.199l1.282-1.709c0.1-0.134,0.046-0.322-0.111-0.379c-2.705-0.986-5.717-2.7-8.332-5.706	C11.231,34.457,16.12,37,24,37s12.769-2.543,16.009-4.993c-2.616,3.006-5.627,4.719-8.332,5.706	c-0.157,0.057-0.211,0.245-0.111,0.379l1.282,1.709c0.101,0.134,0.26,0.208,0.427,0.199c1.407-0.072,7.996-0.679,12.588-5.823	c0.095-0.106,0.144-0.253,0.135-0.395C45.156,20.538,40.815,13.257,40.107,12.15z"></path><ellipse cx="30.5" cy="26" opacity=".05" rx="4.5" ry="5"></ellipse><ellipse cx="30.5" cy="26" opacity=".05" rx="4" ry="4.5"></ellipse><ellipse cx="30.5" cy="26" fill="#fff" rx="3.5" ry="4"></ellipse><ellipse cx="17.5" cy="26" opacity=".05" rx="4.5" ry="5"></ellipse><ellipse cx="17.5" cy="26" opacity=".05" rx="4" ry="4.5"></ellipse><ellipse cx="17.5" cy="26" fill="#fff" rx="3.5" ry="4"></ellipse>
                  </svg>
                </div>

                {/* Additional random positioned icons */}
                <div className="absolute bottom-12 right-8 w-14 h-14 text-violet-500/35 animate-pulse" style={{animationDelay: '3s'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-full h-full">
                    <path fill="currentColor" d="M 18.90625 7 C 18.90625 7 9.23 8.265 4.84375 17.8125 C 4.84375 17.8125 -0.03125 27.34375 -0.03125 38.34375 C -0.03125 38.34375 3.0625 43.15625 11.21875 43.59375 C 11.21875 43.59375 12.65625 41.84375 13.78125 40.34375 C 8.46875 38.84375 6.65625 35.65625 6.65625 35.65625 C 6.65625 35.65625 7.125 36 8 36.5 C 8.125 36.59375 8.25 36.625 8.375 36.71875 C 8.5 36.8125 8.59375 36.875 8.71875 36.96875 C 10.71875 38.09375 12.84375 39.0625 15.125 39.75 C 19.125 40.96875 23.75 41.40625 28.75 39.75 C 30.84375 39.0625 33.03125 38.09375 35.34375 36.71875 C 35.46875 36.625 35.5625 36.5625 35.6875 36.46875 C 35.8125 36.375 35.9375 36.34375 36.0625 36.25 C 36.9375 35.75 37.40625 35.40625 37.40625 35.40625 C 37.40625 35.40625 35.59375 38.59375 30.28125 40.09375 C 31.40625 41.59375 32.84375 43.34375 32.84375 43.34375 C 40.96875 42.90625 44.03125 38.125 44.03125 38.125 C 44.03125 27.125 39.15625 17.59375 39.15625 17.59375 C 34.75 8.03125 25.09375 6.78125 25.09375 6.78125 L 24.625 7.34375 C 30.15625 9.09375 32.71875 11.59375 32.71875 11.59375 C 29.40625 9.71875 26.1875 8.96875 23.40625 8.75 C 21.21875 8.5625 19.125 8.65625 17.28125 8.9375 C 17.09375 8.9375 16.9375 8.96875 16.75 8.96875 C 15.875 9.0625 13.75 9.4375 11.1875 10.75 C 10.3125 11.15625 9.78125 11.4375 9.78125 11.4375 C 9.78125 11.4375 12.46875 8.78125 18.375 7.03125 L 18.90625 7 z M 18.28125 18.15625 C 20.46875 18.15625 22.1875 20.03125 22.15625 22.28125 C 22.15625 24.53125 20.46875 26.40625 18.28125 26.40625 C 16.125 26.40625 14.4375 24.53125 14.4375 22.28125 C 14.4375 20.03125 16.125 18.15625 18.28125 18.15625 z M 31.71875 18.15625 C 33.90625 18.15625 35.59375 20.03125 35.5625 22.28125 C 35.5625 24.53125 33.90625 26.40625 31.71875 26.40625 C 29.5625 26.40625 27.875 24.53125 27.875 22.28125 C 27.875 20.03125 29.5625 18.15625 31.71875 18.15625 z"/>
                  </svg>
                </div>

                <div className="absolute bottom-6 left-12 w-9 h-9 text-blue-500/25 animate-pulse" style={{animationDelay: '4s'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-full h-full">
                    <radialGradient id="tg-grad" cx="24" cy="10.009" r="32.252" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#8c9eff"></stop><stop offset=".368" stopColor="#889af8"></stop><stop offset=".889" stopColor="#7e8fe6"></stop><stop offset="1" stopColor="#7b8ce1"></stop></radialGradient><path fill="url(#tg-grad)" d="M40.107,12.15c-0.065-0.102-0.139-0.182-0.236-0.255c-0.769-0.578-4.671-3.339-9.665-3.875	c-0.01-0.001-0.048-0.003-0.057-0.003c-0.098,0-0.183,0.057-0.224,0.14l-0.269,0.538c0,0-0.001,0-0.001,0	c-0.017,0.033-0.026,0.071-0.026,0.111c0,0.109,0.07,0.202,0.168,0.236c0.006,0.002,0.048,0.011,0.063,0.014	c4.267,1.028,6.863,2.89,9.149,4.945c-4.047-2.066-8.044-4.001-15.009-4.001s-10.961,1.936-15.009,4.001	c2.286-2.055,4.882-3.917,9.149-4.945c0.015-0.004,0.057-0.012,0.063-0.014c0.098-0.034,0.168-0.127,0.168-0.236	c0-0.04-0.009-0.078-0.026-0.111c0,0-0.001,0-0.001,0l-0.269-0.538c-0.041-0.083-0.125-0.14-0.224-0.14	c-0.009,0-0.048,0.002-0.057,0.003c-4.994,0.536-8.896,3.297-9.665,3.875c-0.097,0.073-0.17,0.153-0.236,0.255	c-0.708,1.107-5.049,8.388-5.892,21.632c-0.009,0.142,0.04,0.289,0.135,0.395c4.592,5.144,11.182,5.752,12.588,5.823	c0.167,0.008,0.327-0.065,0.427-0.199l1.282-1.709c0.1-0.134,0.046-0.322-0.111-0.379c-2.705-0.986-5.717-2.7-8.332-5.706	C11.231,34.457,16.12,37,24,37s12.769-2.543,16.009-4.993c-2.616,3.006-5.627,4.719-8.332,5.706	c-0.157,0.057-0.211,0.245-0.111,0.379l1.282,1.709c0.101,0.134,0.26,0.208,0.427,0.199c1.407-0.072,7.996-0.679,12.588-5.823	c0.095-0.106,0.144-0.253,0.135-0.395C45.156,20.538,40.815,13.257,40.107,12.15z"></path><ellipse cx="30.5" cy="26" opacity=".05" rx="4.5" ry="5"></ellipse><ellipse cx="30.5" cy="26" opacity=".05" rx="4" ry="4.5"></ellipse><ellipse cx="30.5" cy="26" fill="#fff" rx="3.5" ry="4"></ellipse><ellipse cx="17.5" cy="26" opacity=".05" rx="4.5" ry="5"></ellipse><ellipse cx="17.5" cy="26" opacity=".05" rx="4" ry="4.5"></ellipse><ellipse cx="17.5" cy="26" fill="#fff" rx="3.5" ry="4"></ellipse>
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
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-6">
                    <button className="group/btn relative bg-slate-700/20 hover:bg-slate-600/30 text-slate-200 hover:text-white font-bold px-10 py-5 transition-all duration-300 shadow-xl rounded-2xl overflow-hidden hover:scale-105 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-violet-500/30 backdrop-blur-sm">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-400/10 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                      <span className="relative z-10 flex items-center text-lg">
                        <MessageCircle className="w-6 h-6 mr-3" />
                        Join our Discord
                      </span>
                    </button>
                    <button className="group/btn relative bg-slate-700/20 hover:bg-slate-600/30 text-slate-200 hover:text-white font-bold px-10 py-5 transition-all duration-300 shadow-xl rounded-2xl overflow-hidden hover:scale-105 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-violet-500/30 backdrop-blur-sm">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-400/10 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                      <span className="relative z-10 flex items-center text-lg">
                        <Users className="w-6 h-6 mr-3" />
                        Follow on Twitter
                      </span>
                    </button>
                    <button className="group/btn relative bg-slate-700/20 hover:bg-slate-600/30 text-slate-200 hover:text-white font-bold px-10 py-5 transition-all duration-300 shadow-xl rounded-2xl overflow-hidden hover:scale-105 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-violet-500/30 backdrop-blur-sm">
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

      {/* Footer Section */}
      <FadeContent>
        <footer className="py-12 bg-slate-900 text-slate-400 text-center text-sm">
          &copy; {new Date().getFullYear()} launchpad.trade. All rights reserved.
        </footer>
      </FadeContent>
    </div>
  );
};

export default Index;
