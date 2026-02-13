import { motion } from 'framer-motion';
import { HeartIcon } from '../constants';
import { useEffect, useState } from 'react';

interface Heart {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts(prev => [
        ...prev.slice(-8),
        {
          id: Date.now(),
          left: Math.random() * 100,
          delay: Math.random() * 0.5,
          duration: 6 + Math.random() * 4,
          size: 20 + Math.random() * 30,
        }
      ]);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map(heart => (
        <motion.div
          key={heart.id}
          initial={{ y: '100vh', opacity: 0, x: `${heart.left}%` }}
          animate={{
            y: '-100vh',
            opacity: [0, 0.4, 0.4, 0],
            x: `${heart.left + (Math.random() - 0.5) * 20}%`,
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            ease: 'linear',
          }}
          className="absolute"
        >
          <HeartIcon size={heart.size} color="#f9a8d4" />
        </motion.div>
      ))}
    </div>
  );
}
