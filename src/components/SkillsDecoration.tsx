'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

const SkillsDecoration = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === 'dark';
  
  const decorations = [
    { x: '10%', y: '20%', size: 6, delay: 0 },
    { x: '85%', y: '15%', size: 8, delay: 0.5 },
    { x: '70%', y: '60%', size: 10, delay: 1 },
    { x: '20%', y: '80%', size: 7, delay: 1.5 },
    { x: '40%', y: '30%', size: 5, delay: 2 },
    { x: '65%', y: '85%', size: 9, delay: 2.5 },
    { x: '90%', y: '40%', size: 6, delay: 3 },
    { x: '30%', y: '50%', size: 8, delay: 3.5 },
  ];

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {decorations.map((decoration, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full ${
            isDark ? 'bg-blue-500/20' : 'bg-blue-400/20'
          }`}
          style={{
            left: decoration.x,
            top: decoration.y,
            width: decoration.size,
            height: decoration.size,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: decoration.delay,
          }}
        />
      ))}

      {/* Code-like decoration */}
      <div className="absolute top-10 left-5 opacity-10">
        <motion.div
          className="font-mono text-xs text-primary"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <div>{'{'}</div>
          <div className="ml-4">"skills": [</div>
          <div className="ml-8">"frontend",</div>
          <div className="ml-8">"backend",</div>
          <div className="ml-8">"design"</div>
          <div className="ml-4">]</div>
          <div>{'}'}</div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 right-5 opacity-10">
        <motion.div
          className="font-mono text-xs text-primary"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, delay: 2 }}
        >
          <div>{'<skills>'}</div>
          <div className="ml-4">{'<frontend />'}</div>
          <div className="ml-4">{'<backend />'}</div>
          <div className="ml-4">{'<tools />'}</div>
          <div>{'</skills>'}</div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsDecoration; 