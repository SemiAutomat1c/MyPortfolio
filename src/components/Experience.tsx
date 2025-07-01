'use client';

import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="py-12">
      <div className="container max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">Learning Journey</h2>

        <div className="space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative pl-8 border-l-2 border-primary"
          >
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0"></div>
            <h4 className="text-xl font-bold text-gray-900 mb-2 dark:text-white">Computer Science Student</h4>
            <p className="text-gray-600 mb-4 dark:text-gray-400">University of Mindanao, Tagum City • 2022 - Present</p>
            <p className="text-gray-700 dark:text-gray-300">
              Currently pursuing a degree in Computer Science, focusing on building a strong foundation in software development,
              algorithms, and modern web technologies. Key areas of study include:
            </p>
            <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Software Development & Programming</li>
              <li>• Data Structures & Algorithms</li>
              <li>• Web Development</li>
              <li>• Database Management Systems</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative pl-8 border-l-2 border-primary"
          >
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0"></div>
            <h4 className="text-xl font-bold text-gray-900 mb-2 dark:text-white">Self-Directed Learning</h4>
            <p className="text-gray-600 mb-4 dark:text-gray-400">2023 - Present</p>
            <p className="text-gray-700 dark:text-gray-300">
              Actively learning and applying modern web development technologies through practical projects:
            </p>
            <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Built GadgetTrack, a POS system using Next.js, TypeScript, and Supabase</li>
              <li>• Mastered responsive design with Tailwind CSS</li>
              <li>• Implemented authentication and database management with Supabase</li>
              <li>• Practiced version control and project management with Git</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative pl-8 border-l-2 border-primary"
          >
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0"></div>
            <h4 className="text-xl font-bold text-gray-900 mb-2 dark:text-white">Project-Based Learning</h4>
            <p className="text-gray-600 mb-4 dark:text-gray-400">Ongoing</p>
            <p className="text-gray-700 dark:text-gray-300">
              Focusing on building real-world projects to gain practical experience and prepare for professional opportunities:
            </p>
            <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Developing solutions for local businesses to understand real-world requirements</li>
              <li>• Learning and implementing industry best practices</li>
              <li>• Building a portfolio of practical applications</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 