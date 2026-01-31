import { useState, useEffect } from 'react';

export interface Particle {
  id: number;
  initialX: number;
  initialY: number;
  initialOpacity: number;
  animateY: number;
  duration: number;
}

export const useFloatingParticles = (count: number = 20) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generatedParticles = Array.from({ length: count }, (_, i) => ({
      id: i,
      initialX: Math.random() * window.innerWidth,
      initialY: Math.random() * window.innerHeight,
      initialOpacity: Math.random() * 0.5 + 0.2,
      animateY: Math.random() * -200 - 100,
      duration: Math.random() * 3 + 2
    }));
    setParticles(generatedParticles);
  }, [count]);

  return particles;
};
