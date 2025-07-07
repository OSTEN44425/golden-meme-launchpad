
import React from 'react';
import './TypingAnimation.css';

interface TypingAnimationProps {
  texts: string[];
  className?: string;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({ texts, className = '' }) => {
  return (
    <div className={`typing-slider ${className}`}>
      {texts.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </div>
  );
};

export default TypingAnimation;
