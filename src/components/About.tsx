'use client';

import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-16">
      <div className="container max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">About Me</h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Hi there! I'm Ryan, a passionate Full-Stack Web Developer with several years of experience
            in creating professional websites and web applications. I specialize in modern web technologies
            and enjoy building clean, efficient, and user-friendly digital experiences.
          </p>
          
          <p className="text-lg text-gray-700 dark:text-gray-300">
            My journey in web development started when I was in high school, and since then,
            I've been constantly learning and improving my skills. I have a strong foundation in
            both front-end and back-end technologies, allowing me to create complete web solutions.
          </p>
          
          <p className="text-lg text-gray-700 dark:text-gray-300">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source
            projects, or enjoying outdoor activities. I believe in continuous learning and staying
            updated with the latest trends in the tech industry.
          </p>
          
          <div className="pt-6">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Bachelor of Computer Science</h4>
                <p className="text-gray-600 dark:text-gray-400">University Name, 2018 - 2022</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 