
import React from 'react';
import { Shield, Zap, DollarSign, BookOpen } from 'lucide-react';

const TradingApiEdge = () => {
  const features = [
    {
      icon: Shield,
      title: "Radical Simplicity",
      description: "Clean, intuitive API design that gets you trading in minutes, not hours."
    },
    {
      icon: Zap,
      title: "Performance & Stability",
      description: "99.9% uptime with microsecond response times for critical trading operations."
    },
    {
      icon: DollarSign,
      title: "Lowest & Transparent Fees",
      description: "No hidden costs. Pay only for what you use with our transparent pricing model."
    },
    {
      icon: BookOpen,
      title: "Exemplary Documentation",
      description: "Comprehensive guides, examples, and support to accelerate your development."
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-violet-400 rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-violet-200 to-white bg-clip-text text-transparent">
            Trading API Edge
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Four core advantages that set our trading API apart from the competition
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Hexagonal border container */}
              <div className="relative h-full">
                {/* Animated hexagonal border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500/30 via-transparent to-violet-500/30 p-[2px] group-hover:from-violet-400/50 group-hover:to-violet-400/50 transition-all duration-500">
                  <div className="h-full rounded-3xl bg-slate-900/90 backdrop-blur-sm" />
                </div>
                
                {/* Glowing corner accents */}
                <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-violet-400 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-violet-400 rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-violet-400 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-violet-400 rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col">
                  {/* Icon with pulse effect */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-violet-500/25">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    {/* Pulse ring */}
                    <div className="absolute inset-0 w-16 h-16 rounded-2xl border-2 border-violet-400 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-violet-200 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-300 leading-relaxed flex-grow group-hover:text-slate-200 transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="mt-6 h-0.5 w-0 bg-gradient-to-r from-violet-500 to-violet-400 group-hover:w-full transition-all duration-500" />
                </div>

                {/* Floating particles on hover */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-violet-400 rounded-full animate-float"
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${20 + Math.random() * 60}%`,
                        animationDelay: `${Math.random() * 2}s`,
                        animationDuration: `${2 + Math.random() * 2}s`
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Connecting lines between cards (visible on larger screens) */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none">
          <svg className="w-full h-full opacity-20">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="rgba(139, 92, 246, 0.5)" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <line x1="25%" y1="50%" x2="42%" y2="50%" stroke="url(#lineGradient)" strokeWidth="1" />
            <line x1="58%" y1="50%" x2="75%" y2="50%" stroke="url(#lineGradient)" strokeWidth="1" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default TradingApiEdge;
