import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { experience } from '../data/portfolioData';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';

const Experience = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: {
        duration: 2,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="experience" className={`py-20 ${darkMode ? 'bg-neural-dark' : 'bg-gray-50'}`} ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className={`text-4xl md:text-5xl font-space font-bold mb-4 ${
              darkMode ? 'text-neural-text' : 'text-gray-900'
            }`}
          >
            Work <span className="text-neural-cyan">Experience</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-neural-cyan mx-auto rounded-full"
          />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 bg-gray-300 h-full">
            <motion.div
              variants={lineVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="w-full bg-neural-cyan"
            />
          </div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: index * 0.3 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}
              >
                {/* Timeline Dot */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full border-4 z-10 ${
                    darkMode ? 'bg-neural-dark border-neural-cyan' : 'bg-white border-neural-cyan'
                  }`}
                />

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`ml-16 md:ml-0 w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <div className={`p-6 rounded-xl glass backdrop-blur-md ${
                    darkMode ? 'bg-neural-card/30' : 'bg-white/50'
                  } border border-neural-cyan/20 shadow-lg`}>
                    
                    {/* Company & Position */}
                    <div className="mb-4">
                      <h3 className={`text-xl font-bold ${
                        darkMode ? 'text-neural-text' : 'text-gray-900'
                      }`}>
                        {exp.position}
                      </h3>
                      <p className="text-neural-cyan font-semibold text-lg">
                        {exp.company}
                      </p>
                    </div>

                    {/* Duration & Location */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm">
                      <div className={`flex items-center ${
                        darkMode ? 'text-neural-text/70' : 'text-gray-600'
                      }`}>
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.duration}
                      </div>
                      <div className={`flex items-center ${
                        darkMode ? 'text-neural-text/70' : 'text-gray-600'
                      }`}>
                        <MapPin className="w-4 h-4 mr-2" />
                        {exp.location}
                      </div>
                    </div>

                    {/* Description */}
                    <ul className={`space-y-2 mb-4 ${
                      darkMode ? 'text-neural-text/80' : 'text-gray-700'
                    }`}>
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-neural-cyan mr-2 mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 text-xs rounded-full ${
                            darkMode 
                              ? 'bg-neural-cyan/20 text-neural-cyan' 
                              : 'bg-blue-100 text-blue-800'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Verify Button */}
                    {exp.verifyUrl && (
                      <motion.a
                        href={exp.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`inline-flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                          darkMode 
                            ? 'bg-neural-cyan/20 text-neural-cyan hover:bg-neural-cyan/30 border border-neural-cyan/30' 
                            : 'bg-blue-50 text-blue-600 hover:bg-blue-100 border border-blue-200'
                        }`}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Verify Certificate
                      </motion.a>
                    )}
                  </div>
                </motion.div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
