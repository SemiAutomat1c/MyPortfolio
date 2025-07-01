'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaEnvelope, FaGithub, FaInstagram } from 'react-icons/fa';

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

  return (
    <section id="home" className="pt-40 pb-4">
      <div className="container max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 bg-white dark:bg-dark mb-4 relative shadow-sm"
        >
          {/* Social icons in the upper right corner */}
          <div className="absolute top-6 right-6 flex items-center space-x-4">
            <a
              href="mailto:ryan.deniega13@gmail.com"
              className="text-xl text-gray-600 hover:text-gray-900 transition-colors dark:text-gray-400 dark:hover:text-white"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/SemiAutomat1c"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-gray-600 hover:text-gray-900 transition-colors dark:text-gray-400 dark:hover:text-white"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/ryan_0101010/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-gray-600 hover:text-gray-900 transition-colors dark:text-gray-400 dark:hover:text-white"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Ryan Deniega
          </h1>
          <p className="text-lg mb-2 text-gray-600 dark:text-gray-400">
            <span className="inline-block mr-1">📍</span>
            <a 
              href="https://www.google.com/maps/place/Tagum+City,+Davao+del+Norte,+Philippines" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Tagum City, Philippines
            </a>
          </p>
          <p className="text-lg mb-2 text-gray-700 dark:text-gray-300">
            {calculateAge()} year old Computer Science student with a passion for tech currently building projects to gain hands-on experience and grow my portfolio.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 