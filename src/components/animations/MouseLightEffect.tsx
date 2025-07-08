
import React, { useEffect, useState } from 'react';

const MouseLightEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-50 transition-opacity duration-200"
      style={{
        left: mousePosition.x - 100,
        top: mousePosition.y - 100,
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(139, 92, 246, 0.08) 30%, rgba(139, 92, 246, 0.03) 60%, transparent 100%)',
        borderRadius: '50%',
        filter: 'blur(8px)',
      }}
    />
  );
};

export default MouseLightEffect;
