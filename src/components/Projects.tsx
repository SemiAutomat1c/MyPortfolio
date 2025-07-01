'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiVite } from 'react-icons/si';

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

  return (
    <section id="projects" className="py-16">
      <div className="container max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">My Projects</h2>
        
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden bg-white dark:bg-dark shadow-sm"
            >
              <div className="relative h-64 w-full">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 dark:text-white">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
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
                      default: icon = null;
                    }
                    
                    return (
                      <span key={i} className="flex items-center gap-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm dark:bg-gray-800 dark:text-gray-300">
                        {icon}
                        {tech}
                      </span>
                    );
                  })}
                </div>
                <p className="text-gray-700 mb-4 dark:text-gray-300">{project.description}</p>
                <Link href={project.link} className="text-primary hover:underline">
                  Learn more
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 