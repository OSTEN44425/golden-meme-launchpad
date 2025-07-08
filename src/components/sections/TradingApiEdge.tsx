
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
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-violet-400 rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 4}s`
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Main card with glowing border */}
              <div className="relative h-full p-8 rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 transition-all duration-500 group-hover:transform group-hover:scale-105 glowing-border">
                
                {/* Floating particles around card */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-0.5 h-0.5 bg-violet-400 rounded-full animate-float"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 1}s`,
                        animationDuration: `${2 + Math.random()}s`
                      }}
                    />
                  ))}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-violet-200 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-violet-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TradingApiEdge;
