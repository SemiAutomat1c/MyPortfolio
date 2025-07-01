import { Metadata } from 'next';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'About | Ryan Deniega',
  description: 'Learn about my background, skills, and journey in web development',
};

export default function AboutPage() {
  const skills = [
    {
      category: "Frontend Development",
      technologies: [
        "React/Next.js",
        "TypeScript",
        "Tailwind CSS",
        "JavaScript",
        "HTML/CSS",
        "Framer Motion"
      ]
    },
    {
      category: "Backend Development",
      technologies: [
        "Node.js",
        "PHP",
        "MySQL",
        "RESTful APIs",
        "Supabase",
        "Firebase"
      ]
    },
    {
      category: "Tools & Others",
      technologies: [
        "Git",
        "VS Code",
        "Figma",
        "Vercel",
        "Responsive Design",
        "UI/UX Principles"
      ]
    }
  ];

  return (
    <div className="container max-w-4xl mx-auto px-4 py-24">
      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-900 dark:text-white">About Me</h1>
      
      {/* Introduction Section */}
      <div className="bg-white dark:bg-dark border border-gray-200 dark:border-gray-800 rounded-lg p-8 mb-10 shadow-sm">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              Hi! I'm Ryan Deniega, a web developer and Computer Science student focused on building modern, user-friendly web applications. I work mainly with React, Next.js, and other up-to-date web technologies.
            </p>
            
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              I've developed a range of projects, from a book management system for school to portfolio websites for clients. I'm into full-stack development and currently exploring areas like automation to expand what I can offer.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Need a developer you can rely on? Let's work together!
            </p>
          </div>
        </div>
      </div>
      
      {/* Education Section */}
      <div className="bg-white dark:bg-dark border border-gray-200 dark:border-gray-800 rounded-lg p-8 mb-10 shadow-sm">
        <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">
          Education Journey
        </h2>
        
        <div className="space-y-16 relative">
          <div className="absolute left-[7px] top-0 w-[2px] h-full bg-blue-500/20"></div>

          {/* College */}
          <div className="relative pl-10">
            <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-blue-500"></div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">BS in Computer Science</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">UM Tagum College • 2020 - Present</p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Currently in 3rd year, focusing on building a strong foundation in software development, algorithms, and modern web technologies.
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>• Software Development & Programming</li>
              <li>• Data Structures & Algorithms</li>
              <li>• Web Development</li>
              <li>• Database Management Systems</li>
            </ul>
          </div>

          {/* Senior High */}
          <div className="relative pl-10">
            <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-blue-500"></div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Senior High School - ICT</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">STI College Tagum • 2018 - 2020</p>
            <p className="text-gray-700 dark:text-gray-300">
              Specialized in Information and Communications Technology, laying the groundwork for my programming journey.
            </p>
          </div>

          {/* Junior High */}
          <div className="relative pl-10">
            <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-blue-500"></div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Junior High School</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">La filipina National High School • 2014 - 2018</p>
            <p className="text-gray-700 dark:text-gray-300">
              Discovered my passion for technology and problem-solving through basic computer subjects.
            </p>
          </div>

          {/* Elementary */}
          <div className="relative pl-10">
            <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-blue-500"></div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Elementary Education</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">Rizal Elementary School • 2008 - 2014</p>
            <p className="text-gray-700 dark:text-gray-300">
              Built a strong academic foundation while developing curiosity for learning and problem-solving.
            </p>
          </div>

          {/* Preschool */}
          <div className="relative pl-10">
            <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-blue-500"></div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Early Childhood Education</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">Central Elementary School • 2006 - 2008</p>
            <p className="text-gray-700 dark:text-gray-300">
              Started my educational journey with fundamental learning and social skills development.
            </p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="bg-white dark:bg-dark border border-gray-200 dark:border-gray-800 rounded-lg p-8 mb-10 shadow-sm">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Technical Skills</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skillSet, index) => (
            <div key={index}>
              <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">{skillSet.category}</h3>
              <ul className="space-y-2">
                {skillSet.technologies.map((tech, techIndex) => (
                  <li key={techIndex} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <FaCode className="text-primary" />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Professional Interests */}
      <div className="bg-white dark:bg-dark border border-gray-200 dark:border-gray-800 rounded-lg p-8 shadow-sm">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">What I'm Looking For</h2>
        
        <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
          I'm actively seeking job opportunities in web development where I can:
        </p>
        
        <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300">
          <li>Join a company as a Junior Web Developer or Full-Stack Developer</li>
          <li>Work in an environment that values learning and professional growth</li>
          <li>Contribute to meaningful projects using modern web technologies</li>
          <li>Collaborate with experienced developers to expand my skills</li>
          <li>Apply my knowledge of React/Next.js, TypeScript, and other modern frameworks</li>
        </ul>

        <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <p className="text-blue-800 dark:text-blue-200">
            <span className="font-semibold">Currently Available:</span> I'm ready to start immediately and open to both full-time and part-time positions in web development.
          </p>
        </div>
      </div>
    </div>
  );
} 