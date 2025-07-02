'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaArrowRight } from 'react-icons/fa';
import { SiTypescript, SiVite, SiNextdotjs, SiTailwindcss } from 'react-icons/si';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "KLIND OS",
      image: "/images/project-placeholder.jpg",
      description: "ArchLinux distribution with its own GUI written in JavaScript.",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js"],
      link: "/projects/klind-os"
    },
    {
      id: 2,
      title: "QuizAPP",
      image: "/images/project-placeholder.jpg",
      description: "Full-Stack web application for creating and sharing quizzes with others. (Czech)",
      technologies: ["React", "Vite", "TypeScript"],
      link: "/projects/quiz-app"
    },
    {
      id: 3,
      title: "Portfolio Website",
      image: "/images/project-placeholder.jpg",
      description: "My personal portfolio website built with Next.js and Tailwind CSS.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      link: "/projects/portfolio"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    hover: {
      y: -5,
      transition: {
        duration: 0.3
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.5
      }
    }
  };

  const techBadgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.3
      }
    },
    hover: {
      y: -3,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-16">
      <div className="container max-w-3xl mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              whileHover="hover"
              className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden bg-white dark:bg-dark shadow-sm"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <motion.div
                  variants={imageVariants}
                  className="h-full w-full"
                >
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 dark:text-white">{project.title}</h3>
                <motion.div 
                  className="flex flex-wrap gap-2 mb-4"
                  variants={containerVariants}
                >
                  {project.technologies.map((tech, i) => {
                    let icon;
                    switch(tech) {
                      case 'HTML': icon = <FaHtml5 className="text-orange-500" />; break;
                      case 'CSS': icon = <FaCss3Alt className="text-blue-400" />; break;
                      case 'JavaScript': icon = <FaJs className="text-yellow-400" />; break;
                      case 'React': icon = <FaReact className="text-blue-500" />; break;
                      case 'Node.js': icon = <FaNodeJs className="text-green-500" />; break;
                      case 'TypeScript': icon = <SiTypescript className="text-blue-600" />; break;
                      case 'Vite': icon = <SiVite className="text-purple-500" />; break;
                      case 'Next.js': icon = <SiNextdotjs className="text-black dark:text-white" />; break;
                      case 'Tailwind CSS': icon = <SiTailwindcss className="text-sky-500" />; break;
                      default: icon = null;
                    }
                    
                    return (
                      <motion.span 
                        key={i} 
                        className="flex items-center gap-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm dark:bg-gray-800 dark:text-gray-300"
                        variants={techBadgeVariants}
                        whileHover="hover"
                      >
                        {icon}
                        {tech}
                      </motion.span>
                    );
                  })}
                </motion.div>
                <p className="text-gray-700 mb-4 dark:text-gray-300">{project.description}</p>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    href={project.link} 
                    className="text-primary hover:underline flex items-center gap-1 group"
                  >
                    Learn more
                    <motion.span
                      initial={{ x: 0 }}
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                        repeatDelay: 1
                      }}
                    >
                      <FaArrowRight className="inline-block ml-1 text-sm" />
                    </motion.span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 