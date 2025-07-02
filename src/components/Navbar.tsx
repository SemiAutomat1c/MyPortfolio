'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    // Save theme preference to localStorage
    localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark');
  };

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'My work', href: '/work' },
    { name: 'Projects', href: '/projects' },
    { name: 'Posts', href: '/posts' },
    { name: 'Contact Me', href: '/contact' },
  ];

  // Animation variants
  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: i * 0.1,
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    }),
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: 'auto',
      transition: { 
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: { 
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const themeButtonVariants = {
    hover: { 
      scale: 1.1,
      rotate: 15,
      transition: { duration: 0.2 }
    },
    tap: { 
      scale: 0.9,
      rotate: 0,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-sm py-5 dark:bg-dark'
          : 'bg-white py-8 dark:bg-dark'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Left side - Your Name */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.2 }}
        >
          <Link href="/" className="text-2xl font-bold text-dark dark:text-white">
            Ryan Deniega
          </Link>
        </motion.div>

        {/* Center - Navigation Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              custom={i}
              variants={linkVariants}
              whileHover="hover"
            >
              <Link
                href={link.href}
                className={`font-medium text-lg transition-colors relative ${
                  pathname === link.href 
                    ? 'text-primary dark:text-primary' 
                    : 'text-dark hover:text-primary dark:text-white dark:hover:text-primary'
                }`}
              >
                {link.name}
                {pathname === link.href && (
                  <motion.span 
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Right side - Theme Toggle */}
        <motion.button
          onClick={toggleTheme}
          className="text-xl text-dark hover:text-primary transition-colors dark:text-white dark:hover:text-primary"
          aria-label="Toggle theme"
          variants={themeButtonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          {mounted && (theme === 'dark' ? <FaSun /> : <FaMoon />)}
        </motion.button>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button
            className="text-2xl text-dark dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 dark:bg-dark origin-top"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex flex-col items-center space-y-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    custom={i}
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                  >
                    <Link
                      href={link.href}
                      className={`font-medium transition-colors ${
                        pathname === link.href 
                          ? 'text-primary dark:text-primary' 
                          : 'text-dark hover:text-primary dark:text-white dark:hover:text-primary'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar; 