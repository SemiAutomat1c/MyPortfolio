'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

const HeroBackground = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === 'dark';
  
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Grid pattern */}
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="grid-pattern"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke={isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'}
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>

      {/* Animated circles */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className={`rounded-full ${isDark ? 'bg-blue-500' : 'bg-blue-400'} opacity-10 blur-3xl`}
          initial={{ width: 100, height: 100 }}
          animate={{ 
            width: [100, 300, 100],
            height: [100, 300, 100],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="absolute top-3/4 right-1/4 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className={`rounded-full ${isDark ? 'bg-purple-500' : 'bg-purple-400'} opacity-10 blur-3xl`}
          initial={{ width: 200, height: 200 }}
          animate={{ 
            width: [200, 400, 200],
            height: [200, 400, 200],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-dark" />
    </div>
  );
};

export default HeroBackground; 