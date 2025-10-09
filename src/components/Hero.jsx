import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Hero = ({ darkMode }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = personalInfo.tagline;

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullText]);

  const handleDownloadResume = () => {
    // Create a link to download the resume PDF from public folder
    const link = document.createElement('a');
    link.href = `/pdfs/${personalInfo.resumeFile}`;
    link.download = personalInfo.resumeFile;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <div className="relative inline-block">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-neural-cyan to-purple-500 p-1"
              >
                <div className={`w-32 h-32 rounded-full ${darkMode ? 'bg-neural-dark' : 'bg-white'}`}></div>
              </motion.div>
              <img
                src={`/images/${personalInfo.profileImage}`}
                alt={personalInfo.name}
                className="relative w-32 h-32 rounded-full object-cover border-4 border-transparent"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `
                    <div class="w-32 h-32 rounded-full bg-gradient-to-br from-neural-cyan/30 to-purple-500/30 border-4 border-neural-cyan flex items-center justify-center">
                      <div class="text-neural-cyan text-4xl">👨‍💻</div>
                    </div>
                  `;
                }}
              />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className={`text-5xl md:text-7xl font-space font-bold mb-4 ${
              darkMode ? 'text-neural-text' : 'text-gray-900'
            }`}
          >
            <span className="bg-gradient-to-r from-neural-cyan to-purple-500 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className={`text-2xl md:text-3xl font-inter font-medium mb-6 ${
              darkMode ? 'text-neural-text/80' : 'text-gray-700'
            }`}
          >
            {personalInfo.title}
          </motion.h2>

          {/* Animated Tagline */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <p className={`text-lg md:text-xl font-inter ${
              darkMode ? 'text-neural-text/70' : 'text-gray-600'
            } min-h-[2rem]`}>
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.button
              onClick={handleDownloadResume}
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(14, 246, 204, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 bg-neural-cyan text-neural-dark font-semibold rounded-lg hover:bg-neural-cyan/90 transition-all duration-300 group"
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Resume
            </motion.button>

            <motion.button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center px-8 py-3 border-2 border-neural-cyan rounded-lg font-semibold transition-all duration-300 cursor-pointer ${
                darkMode 
                  ? 'text-neural-cyan hover:bg-neural-cyan hover:text-neural-dark' 
                  : 'text-blue-600 hover:bg-blue-600 hover:text-white'
              }`}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6"
          >
            {personalInfo.social.github && (
              <motion.a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                className={`p-3 rounded-full transition-all duration-300 ${
                  darkMode 
                    ? 'text-neural-text hover:text-neural-cyan hover:bg-neural-card' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                }`}
              >
                <Github className="h-6 w-6" />
              </motion.a>
            )}

            {personalInfo.social.linkedin && (
              <motion.a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                className={`p-3 rounded-full transition-all duration-300 ${
                  darkMode 
                    ? 'text-neural-text hover:text-neural-cyan hover:bg-neural-card' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                }`}
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
            )}

            {personalInfo.social.kaggle && (
              <motion.a
                href={personalInfo.social.kaggle}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                className={`p-3 rounded-full transition-all duration-300 ${
                  darkMode 
                    ? 'text-neural-text hover:text-neural-cyan hover:bg-neural-card' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                }`}
              >
                <ExternalLink className="h-6 w-6" />
              </motion.a>
            )}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-(-4) left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className={`w-6 h-10 border-2 rounded-full flex justify-center ${
                darkMode ? 'border-neural-cyan' : 'border-blue-600'
              }`}
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className={`w-1 h-3 rounded-full mt-2 ${
                  darkMode ? 'bg-neural-cyan' : 'bg-blue-600'
                }`}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
