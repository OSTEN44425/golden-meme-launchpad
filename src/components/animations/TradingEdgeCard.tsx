
import React from 'react';

interface TradingEdgeCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const TradingEdgeCard: React.FC<TradingEdgeCardProps> = ({ title, description, icon }) => {
  return (
    <div className="trading-edge-card relative bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 group hover:bg-slate-800/60 transition-all duration-300">
      {/* Animated border bars */}
      <div className="bar top"></div>
      <div className="bar right delay"></div>
      <div className="bar bottom delay"></div>
      <div className="bar left"></div>
      
      <div className="relative z-10">
        <div className="mb-6 text-violet-400">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
        <p className="text-slate-300 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default TradingEdgeCard;
