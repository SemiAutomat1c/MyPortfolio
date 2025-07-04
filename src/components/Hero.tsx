'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaEnvelope, FaGithub, FaInstagram, FaDownload } from 'react-icons/fa';
import HeroBackground from './HeroBackground';

const Hero = () => {
  const calculateAge = () => {
    const birthDate = new Date('2003-03-09');
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    // If birthday hasn't occurred this year, subtract one year
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  };

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };
  
  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    hover: { 
      scale: 1.2,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section id="home" className="pt-20 md:pt-40 pb-4 relative">
      <HeroBackground />
      <div className="container max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 md:p-6 bg-white/80 dark:bg-dark/80 backdrop-blur-sm mb-4 relative shadow-sm"
        >
          {/* Social icons in the upper right corner */}
          <motion.div 
            className="absolute top-4 md:top-6 right-4 md:right-6 flex items-center space-x-3 md:space-x-4"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.a
              href="mailto:ryan.deniega13@gmail.com"
              className="text-lg md:text-xl text-gray-600 hover:text-gray-900 transition-colors dark:text-gray-400 dark:hover:text-white"
              aria-label="Email"
              variants={socialIconVariants}
              whileHover="hover"
            >
              <FaEnvelope />
            </motion.a>
            <motion.a
              href="https://github.com/SemiAutomat1c"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg md:text-xl text-gray-600 hover:text-gray-900 transition-colors dark:text-gray-400 dark:hover:text-white"
              aria-label="GitHub"
              variants={socialIconVariants}
              whileHover="hover"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/ryan_0101010/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg md:text-xl text-gray-600 hover:text-gray-900 transition-colors dark:text-gray-400 dark:hover:text-white"
              aria-label="Instagram"
              variants={socialIconVariants}
              whileHover="hover"
            >
              <FaInstagram />
            </motion.a>
            <motion.a
              href="/Resume.pdf"
              download
              className="text-lg md:text-xl text-gray-600 hover:text-gray-900 transition-colors dark:text-gray-400 dark:hover:text-white"
              aria-label="Download Resume"
              title="Download Resume"
              variants={socialIconVariants}
              whileHover="hover"
            >
              <FaDownload />
            </motion.a>
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="mt-8 md:mt-0"
          >
            <motion.h1 
              className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 text-gray-900 dark:text-white"
              variants={itemVariants}
            >
              Ryan Deniega
            </motion.h1>
            <motion.p 
              className="text-lg mb-2 text-gray-600 dark:text-gray-400"
              variants={itemVariants}
            >
              <span className="inline-block mr-1">📍</span>
              <a 
                href="https://www.google.com/maps/place/Tagum+City,+Davao+del+Norte,+Philippines" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                Tagum City, Philippines
              </a>
            </motion.p>
            <motion.p 
              className="text-lg mb-2 text-gray-700 dark:text-gray-300"
              variants={itemVariants}
            >
              {calculateAge()} year old Computer Science student with a passion for tech currently building projects to gain hands-on experience and grow my portfolio.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 