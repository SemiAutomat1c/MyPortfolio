'use client';

import { useState, FormEvent } from 'react';
import { FaEnvelope, FaGithub, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: <FaEnvelope className="text-primary" size={24} />,
      title: "Email",
      value: "ryan.deniega13@gmail.com",
      link: "mailto:ryan.deniega13@gmail.com",
      description: "Send me an email for job opportunities or project inquiries"
    },
    {
      icon: <FaGithub className="text-primary" size={24} />,
      title: "GitHub",
      value: "github.com/SemiAutomat1c",
      link: "https://github.com/SemiAutomat1c",
      description: "Check out my code repositories and contributions"
    },
    {
      icon: <FaInstagram className="text-primary" size={24} />,
      title: "Instagram",
      value: "@ryan_0101010",
      link: "https://www.instagram.com/ryan_0101010/",
      description: "Follow me on Instagram"
    }
  ];

  return (
    <div className="container max-w-6xl mx-auto px-4 py-24">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold mb-6 text-center text-gray-900 dark:text-white"
      >
        Let's Connect
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
      >
        Currently seeking job opportunities in web development. Feel free to reach out for positions, collaborations, or just to say hello!
      </motion.p>
      
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="bg-white dark:bg-dark border border-gray-200 dark:border-gray-800 rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Contact Methods</h2>
            
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-start p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <div className="mr-4">{method.icon}</div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">{method.title}</h3>
                    <a 
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {method.value}
                    </a>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{method.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-purple-500/10 border border-gray-200 dark:border-gray-800 rounded-lg p-8">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Looking for Web Development Opportunities</h3>
            <p className="text-gray-700 dark:text-gray-300">
              I'm currently available for full-time and part-time positions in web development. 
              Particularly interested in roles involving React, Next.js, and full-stack development.
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white dark:bg-dark border border-gray-200 dark:border-gray-800 rounded-lg p-8 shadow-sm"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send a Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-gray-700 dark:text-gray-300 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900 dark:text-white"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2 text-gray-700 dark:text-gray-300 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900 dark:text-white"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block mb-2 text-gray-700 dark:text-gray-300 font-medium">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900 dark:text-white"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-2 text-gray-700 dark:text-gray-300 font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900 dark:text-white resize-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-6 rounded-lg transition-colors font-medium flex items-center justify-center space-x-2 ${
                isSubmitting 
                  ? 'bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-gray-400 cursor-not-allowed'
                  : 'bg-primary hover:bg-blue-600 text-white'
              }`}
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
                  <span>Sending...</span>
                </>
              ) : (
                'Send Message'
              )}
            </button>
            
            {submitStatus === 'success' && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-lg text-center"
              >
                Your message has been sent successfully! I'll get back to you soon.
              </motion.p>
            )}
            
            {submitStatus === 'error' && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg text-center"
              >
                There was an error sending your message. Please try again or use another contact method.
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm; 