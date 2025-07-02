'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaJava } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiPostgresql, SiMariadb, SiSpring, SiVite, SiRust, SiHugo } from 'react-icons/si';
import SkillsDecoration from './SkillsDecoration';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const frontendSkills = [
    { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
    { name: 'Hugo', icon: <SiHugo className="text-gray-800 dark:text-white" /> },
    { name: 'React', icon: <FaReact className="text-blue-500" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-gray-800 dark:text-white" /> },
    { name: 'Vite', icon: <SiVite className="text-purple-500" /> },
    { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-400" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
  ];

  const backendSkills = [
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-400" /> },
    { name: 'MariaDB', icon: <SiMariadb className="text-gray-800 dark:text-white" /> },
    { name: 'Rust', icon: <SiRust className="text-orange-600" /> },
    { name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
    { name: 'Java', icon: <FaJava className="text-red-400" /> },
    { name: 'Spring', icon: <SiSpring className="text-green-400" /> },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    },
    hover: { 
      scale: 1.2,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section id="skills" className="pt-4 pb-12 relative">
      <SkillsDecoration />
      <div className="container max-w-3xl mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-gray-900 dark:text-white text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          What I work with
        </motion.h2>

        <div className="mb-8">
          <motion.h3 
            className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Frontend
          </motion.h3>
          <motion.div 
            className="flex flex-wrap justify-center gap-x-12 gap-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {frontendSkills.map((skill) => (
              <motion.div
                key={skill.name}
                className="relative flex flex-col items-center"
                variants={skillVariants}
                whileHover="hover"
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
              >
                <div className="text-3xl">
                  {skill.icon}
                </div>
                {hoveredSkill === skill.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-8 whitespace-nowrap bg-gray-900 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded"
                  >
                    {skill.name}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div>
          <motion.h3 
            className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Backend & Tools
          </motion.h3>
          <motion.div 
            className="flex flex-wrap justify-center gap-x-12 gap-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {backendSkills.map((skill) => (
              <motion.div
                key={skill.name}
                className="relative flex flex-col items-center"
                variants={skillVariants}
                whileHover="hover"
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
              >
                <div className="text-3xl">
                  {skill.icon}
                </div>
                {hoveredSkill === skill.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-8 whitespace-nowrap bg-gray-900 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded"
                  >
                    {skill.name}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 