import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt, FaPhp } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';
import ProjectPageTransition from '@/components/ProjectPageTransition';
import { motion } from 'framer-motion';

export default function BookHubPage() {
  const features = [
    {
      title: "Digital Library Management",
      description: "Organize and manage your digital book collection with ease. Features include book metadata management, cover image display, and advanced categorization."
    },
    {
      title: "PDF Reader Integration",
      description: "Built-in PDF reader with progress tracking, bookmarking, and last read position memory. Seamless reading experience across devices."
    },
    {
      title: "User Management",
      description: "Comprehensive user system with authentication, profile management, and role-based access control. Secure password handling and login monitoring."
    },
    {
      title: "Reading Lists",
      description: "Create and manage reading lists like 'Want to read', 'Currently reading', and 'Completed'. Track reading progress and maintain reading streaks."
    },
    {
      title: "Community Features",
      description: "Engage with other readers through ratings, reviews, and reading statistics. Share your reading journey and discover new books."
    }
  ];

  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: i * 0.1,
        duration: 0.5
      }
    }),
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.2 }
    }
  };

  return (
    <ProjectPageTransition>
      <section className="py-16">
        <div className="container max-w-4xl mx-auto px-4">
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-8 text-center">
            <h1 className="text-4xl font-bold mb-4">BookHub</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              A comprehensive digital book management system
            </p>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            variants={imageVariants}
            className="mb-12 rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src="/images/Bookhub_img1.png"
              alt="BookHub Screenshot"
              width={1200}
              height={675}
              className="w-full"
            />
          </motion.div>

          {/* Project Overview */}
          <motion.section variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              BookHub is a web-based digital library management system designed to help users organize, read, and track their digital book collections. It features a clean, intuitive interface with powerful organization tools and a built-in PDF reader.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              The system allows users to upload and categorize their digital books, track reading progress, create custom reading lists, and engage with a community of readers through ratings and reviews.
            </p>
            <div className="flex gap-4">
              <motion.a 
                href="https://bookhub-clean.vercel.app/views/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Live Demo <FaExternalLinkAlt className="text-sm" />
              </motion.a>
              <motion.a 
                href="https://github.com/SemiAutomat1c/bookhub-clean"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                View Source <FaGithub className="text-sm" />
              </motion.a>
            </div>
          </motion.section>

          {/* Key Features */}
          <motion.section variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  custom={index}
                  variants={featureVariants}
                  whileHover="hover"
                  className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
                >
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Technology Stack */}
          <motion.section variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <motion.div 
                className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-start gap-3"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <FaPhp className="w-6 h-6 text-indigo-500 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">PHP</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Robust backend with clean architecture
                  </p>
                </div>
              </motion.div>
              <motion.div 
                className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-start gap-3"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <SiMysql className="w-6 h-6 text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">MySQL</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Reliable database for book and user data
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Back to Projects */}
          <motion.div 
            variants={itemVariants}
            className="text-center"
          >
            <Link 
              href="/projects" 
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              ← Back to Projects
            </Link>
          </motion.div>
        </div>
      </section>
    </ProjectPageTransition>
  );
} 