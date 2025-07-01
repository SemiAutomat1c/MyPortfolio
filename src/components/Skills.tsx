'use client';

import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaJava } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiPostgresql, SiMariadb, SiSpring, SiVite, SiRust, SiHugo } from 'react-icons/si';

const Skills = () => {
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

  return (
    <section id="skills" className="pt-4 pb-12">
      <div className="container max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white text-center">What I work with</h2>

        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-8">
          {frontendSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-3xl"
            >
              {skill.icon}
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
          {backendSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-3xl"
            >
              {skill.icon}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 