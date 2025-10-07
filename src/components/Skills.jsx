import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../data/portfolioData';

const Skills = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [animatedLevels, setAnimatedLevels] = useState({});

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const levels = {};
        Object.keys(skills).forEach(skill => {
          levels[skill] = skills[skill].level;
        });
        setAnimatedLevels(levels);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const SkillBar = ({ skill, level, tools, index }) => {
    const [currentLevel, setCurrentLevel] = useState(0);

    useEffect(() => {
      if (animatedLevels[skill]) {
        const timer = setTimeout(() => {
          setCurrentLevel(level);
        }, index * 200);
        return () => clearTimeout(timer);
      }
    }, [animatedLevels, skill, level, index]);

    return (
      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
        className={`p-6 rounded-xl glass backdrop-blur-md ${
          darkMode ? 'bg-neural-card/30' : 'bg-white/30'
        } border border-neural-cyan/20`}
      >
        <div className="flex justify-between items-center mb-3">
          <h3 className={`text-xl font-semibold ${
            darkMode ? 'text-neural-text' : 'text-gray-900'
          }`}>
            {skill}
          </h3>
          <span className="text-neural-cyan font-bold text-lg">
            {level}%
          </span>
        </div>

        {/* Progress Bar */}
        <div className={`w-full h-3 rounded-full mb-4 ${
          darkMode ? 'bg-neural-dark/50' : 'bg-gray-200'
        }`}>
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-neural-cyan to-purple-500"
            initial={{ width: 0 }}
            animate={{ width: `${currentLevel}%` }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </div>

        {/* Tools */}
        <div className="flex flex-wrap gap-2">
          {tools.map((tool, toolIndex) => (
            <motion.span
              key={tool}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: (index * 0.2) + (toolIndex * 0.1) }}
              className={`px-3 py-1 text-sm rounded-full ${
                darkMode 
                  ? 'bg-neural-cyan/20 text-neural-cyan' 
                  : 'bg-blue-100 text-blue-800'
              }`}
            >
              {tool}
            </motion.span>
          ))}
        </div>
      </motion.div>
    );
  };

  return (
    <section 
      ref={ref}
      id="skills" 
      className={`py-20 ${darkMode ? 'bg-neural-dark' : 'bg-gray-50'}`}
    >
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
            Skills & <span className="text-neural-cyan">Expertise</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-neural-cyan mx-auto rounded-full"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-6 md:grid-cols-2"
        >
          {Object.entries(skills).map(([skill, data], index) => (
            <SkillBar
              key={skill}
              skill={skill}
              level={data.level}
              tools={data.tools}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
