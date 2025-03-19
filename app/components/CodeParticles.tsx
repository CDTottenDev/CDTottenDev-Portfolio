'use client'

import { useState } from 'react'

export default function CodeParticles() {
  const [particles] = useState(() => 
    Array.from({ length: 20 }).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: 5 + Math.random() * 10,
      delay: Math.random() * 5,
      content: Math.random() > 0.5 ? 'code' : 'function'
    }))
  );

  return (
    <div className="absolute inset-0 z-0 opacity-30">
      {particles.map((particle, i) => (
        <div 
          key={i}
          className="absolute text-indigo-300/50 text-xs"
          style={{
            top: `${particle.top}%`,
            left: `${particle.left}%`,
            animation: `float ${particle.duration}s linear infinite`,
            animationDelay: `${particle.delay}s`
          }}
        >
          {'{'}
          {particle.content}
          {'}'}
        </div>
      ))}
    </div>
  );
} 