'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ProjectPageTransitionProps {
  children: ReactNode;
}

const ProjectPageTransition = ({ children }: ProjectPageTransitionProps) => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.3
      }
    },
    exit: {
      opacity: 0,
      transition: { 
        when: "afterChildren",
        staggerChildren: 0.1,
        staggerDirection: -1
      }
    }
  };
  
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
    >
      {children}
    </motion.div>
  );
};

export default ProjectPageTransition; 