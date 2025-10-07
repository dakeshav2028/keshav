import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { Github, Linkedin, ExternalLink, Heart, ArrowUp } from 'lucide-react';

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: Github,
      href: personalInfo.social.github,
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: personalInfo.social.linkedin,
      label: 'LinkedIn'
    },
    {
      icon: ExternalLink,
      href: personalInfo.social.kaggle,
      label: 'Kaggle'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className={`relative ${darkMode ? 'bg-neural-dark' : 'bg-gray-900'} text-white`}>
      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-neural-cyan text-neural-dark p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-space font-bold text-neural-cyan mb-4">
                Keshav Sarda
              </h3>
              <p className={`text-lg mb-6 ${darkMode ? 'text-neural-text/80' : 'text-gray-300'}`}>
                {personalInfo.tagline}
              </p>
              <p className={`mb-6 leading-relaxed ${darkMode ? 'text-neural-text/70' : 'text-gray-400'}`}>
                Passionate about transforming complex data into actionable insights. 
                Specializing in machine learning, predictive analytics, and data visualization 
                to drive business growth and innovation.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  social.href && (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, y: -2 }}
                      className={`p-2 rounded-lg transition-all duration-300 ${
                        darkMode 
                          ? 'bg-neural-card/30 text-neural-text hover:text-neural-cyan hover:bg-neural-cyan/20' 
                          : 'bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700'
                      }`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  )
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-neural-cyan mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={`transition-colors duration-300 hover:text-neural-cyan ${
                        darkMode ? 'text-neural-text/70' : 'text-gray-400'
                      }`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-neural-cyan mb-4">Get In Touch</h4>
              <div className="space-y-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className={`block transition-colors duration-300 hover:text-neural-cyan ${
                    darkMode ? 'text-neural-text/70' : 'text-gray-400'
                  }`}
                >
                  {personalInfo.email}
                </a>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className={`block transition-colors duration-300 hover:text-neural-cyan ${
                    darkMode ? 'text-neural-text/70' : 'text-gray-400'
                  }`}
                >
                  {personalInfo.phone}
                </a>
                <p className={`${darkMode ? 'text-neural-text/70' : 'text-gray-400'}`}>
                  {personalInfo.location}
                </p>
              </div>

              {/* Resume Download */}
              <motion.a
                href={`/src/assets/pdfs/${personalInfo.resumeFile}`}
                download={personalInfo.resumeFile}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block mt-4 px-4 py-2 bg-neural-cyan text-neural-dark rounded-lg font-medium hover:bg-neural-cyan/80 transition-colors duration-300"
              >
                Download Resume
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className={`my-8 h-px ${darkMode ? 'bg-neural-cyan/20' : 'bg-gray-700'}`} />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className={`text-sm ${darkMode ? 'text-neural-text/60' : 'text-gray-400'}`}>
            <p className="flex items-center">
              © {currentYear} {personalInfo.name}. Made with 
              <Heart className="w-4 h-4 mx-1 text-red-500 animate-pulse" /> 
              and lots of ☕
            </p>
          </div>

          <div className={`text-sm ${darkMode ? 'text-neural-text/60' : 'text-gray-400'}`}>
            <p>
              Thankyou For Reviewing my Portfolio
            </p>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute top-10 right-10 opacity-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-32 h-32 border border-neural-cyan rounded-full"
          />
        </div>

        <div className="absolute bottom-10 left-10 opacity-10">
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-16 h-16 bg-neural-cyan/20 rounded-lg"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
