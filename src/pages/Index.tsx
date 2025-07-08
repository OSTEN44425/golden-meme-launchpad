
import React from 'react';
import CountUp from 'react-countup';
import { ModernButton } from '@/components/ui/modern-button';
import FadeContent from '@/components/animations/FadeContent';
import {
  Activity,
  Zap,
  TrendingUp,
  Lock,
  Globe,
  Code,
  Headphones,
  Shield,
  DollarSign,
  FileText
} from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-background via-background to-background/90"></div>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeContent>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Your Gateway to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">
                Advanced Trading
              </span>
            </h1>
          </FadeContent>
          
          <FadeContent delay={200}>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Unlock professional trading capabilities with our cutting-edge API. 
              Built for developers, traders, and institutions who demand excellence.
            </p>
          </FadeContent>

          <FadeContent delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <ModernButton
                size="lg"
                className="bg-slate-900/30 border border-slate-700/40 text-slate-300 hover:bg-slate-800/20 hover:text-white backdrop-blur-sm transition-all duration-300"
              >
                Get my API Key and Start
              </ModernButton>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <ModernButton
                  variant="ghost"
                  size="md"
                  className="bg-slate-900/20 border border-slate-700/30 text-slate-400 hover:bg-slate-800/15 hover:text-slate-300 backdrop-blur-sm transition-all duration-300"
                >
                  Join our Discord
                </ModernButton>
                
                <ModernButton
                  variant="ghost"
                  size="md"
                  className="bg-slate-900/20 border border-slate-700/30 text-slate-400 hover:bg-slate-800/15 hover:text-slate-300 backdrop-blur-sm transition-all duration-300"
                >
                  Follow on Twitter
                </ModernButton>
                
                <ModernButton
                  variant="ghost"
                  size="md"
                  className="bg-slate-900/20 border border-slate-700/30 text-slate-400 hover:bg-slate-800/15 hover:text-slate-300 backdrop-blur-sm transition-all duration-300"
                >
                  Join our Telegram
                </ModernButton>
              </div>
            </div>
          </FadeContent>

          {/* Trading Volume Stats */}
          <FadeContent delay={600}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  <CountUp end={50} duration={2000} />B+
                </div>
                <p className="text-gray-400">Volume Traded</p>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  <CountUp end={99.9} duration={2000} decimals={1} />%
                </div>
                <p className="text-gray-400">Uptime</p>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  <CountUp end={10000} duration={2000} />+
                </div>
                <p className="text-gray-400">Active Users</p>
              </div>
            </div>
          </FadeContent>
        </div>
      </section>

      {/* Trading API Edge Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <FadeContent>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Trading API
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">
                  Edge
                </span>
              </h2>
            </FadeContent>
            <FadeContent delay={200}>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the next generation of trading infrastructure designed for speed, reliability, and scale.
              </p>
            </FadeContent>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeContent delay={400}>
              <div className="glowing-border p-8 h-full">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Radical Simplicity</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Clean, intuitive API design that gets you up and running in minutes, not hours. 
                    Our RESTful endpoints follow industry standards for maximum compatibility.
                  </p>
                </div>
              </div>
            </FadeContent>

            <FadeContent delay={500}>
              <div className="glowing-border p-8 h-full">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Performance & Stability</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Sub-millisecond response times with 99.9% uptime guarantee. 
                    Our infrastructure scales automatically to handle your growing trading volume.
                  </p>
                </div>
              </div>
            </FadeContent>

            <FadeContent delay={600}>
              <div className="glowing-border p-8 h-full">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <DollarSign className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Lowest & Transparent Fees</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Industry-leading fee structure with no hidden costs. 
                    What you see is what you pay, with volume discounts for high-frequency traders.
                  </p>
                </div>
              </div>
            </FadeContent>

            <FadeContent delay={700}>
              <div className="glowing-border p-8 h-full">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Exemplary Documentation</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Comprehensive guides, interactive examples, and detailed references. 
                    Our documentation is written by developers, for developers.
                  </p>
                </div>
              </div>
            </FadeContent>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <FadeContent>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful Features
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">
                  Built for Scale
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to build sophisticated trading applications and scale your business.
              </p>
            </div>
          </FadeContent>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeContent delay={200}>
              <div className="glass-dark p-6 rounded-xl h-full hover-scale">
                <div className="mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-violet-500 to-blue-500 rounded-lg flex items-center justify-center mb-3">
                    <Activity className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Real-time Data</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Live market data with WebSocket connections for instant updates on prices, order books, and trades.
                  </p>
                </div>
              </div>
            </FadeContent>

            <FadeContent delay={300}>
              <div className="glass-dark p-6 rounded-xl h-full hover-scale">
                <div className="mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-violet-500 to-blue-500 rounded-lg flex items-center justify-center mb-3">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Advanced Analytics</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Built-in technical indicators, portfolio analytics, and risk management tools to power your strategies.
                  </p>
                </div>
              </div>
            </FadeContent>

            <FadeContent delay={400}>
              <div className="glass-dark p-6 rounded-xl h-full hover-scale">
                <div className="mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-violet-500 to-blue-500 rounded-lg flex items-center justify-center mb-3">
                    <Lock className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Bank-level Security</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Military-grade encryption, multi-factor authentication, and cold storage for maximum security.
                  </p>
                </div>
              </div>
            </FadeContent>

            <FadeContent delay={500}>
              <div className="glass-dark p-6 rounded-xl h-full hover-scale">
                <div className="mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-violet-500 to-blue-500 rounded-lg flex items-center justify-center mb-3">
                    <Globe className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Global Markets</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Access to major cryptocurrency exchanges and traditional markets through a single unified API.
                  </p>
                </div>
              </div>
            </FadeContent>

            <FadeContent delay={600}>
              <div className="glass-dark p-6 rounded-xl h-full hover-scale">
                <div className="mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-violet-500 to-blue-500 rounded-lg flex items-center justify-center mb-3">
                    <Code className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Multi-language SDKs</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Official libraries for Python, JavaScript, Go, and more. Get started quickly in your preferred language.
                  </p>
                </div>
              </div>
            </FadeContent>

            <FadeContent delay={700}>
              <div className="glass-dark p-6 rounded-xl h-full hover-scale">
                <div className="mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-violet-500 to-blue-500 rounded-lg flex items-center justify-center mb-3">
                    <Headphones className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">24/7 Support</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Round-the-clock technical support from our team of experts, ready to help you succeed.
                  </p>
                </div>
              </div>
            </FadeContent>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <FadeContent>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Trading?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of developers and traders who trust our platform for their critical trading infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ModernButton size="lg">
                Get Started Now
              </ModernButton>
              <ModernButton variant="secondary" size="lg">
                View Documentation
              </ModernButton>
            </div>
          </FadeContent>
        </div>
      </section>
    </div>
  );
};

export default Index;
