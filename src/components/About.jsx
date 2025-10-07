import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { personalInfo, education, achievements } from '../data/portfolioData';
import { Award, GraduationCap, Code, Database, Brain } from 'lucide-react';

const About = ({ darkMode }) => {
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

  const stats = [
    { icon: Code, label: 'Projects Completed', value: '10+' },
    { icon: Database, label: 'Datasets Analyzed', value: '10+' },
    { icon: Brain, label: 'ML Models', value: '25+' },
    { icon: Award, label: 'Certifications', value: '10+'}
  ];

  return (
    <section id="about" className={`py-20 ${darkMode ? 'bg-neural-dark' : 'bg-gray-50'}`} ref={ref}>
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
            About <span className="text-neural-cyan">Me</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-neural-cyan mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.p
              variants={itemVariants}
              className={`text-lg leading-relaxed ${
                darkMode ? 'text-neural-text/80' : 'text-gray-600'
              }`}
            >
              {personalInfo.bio}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className={`text-lg leading-relaxed ${
                darkMode ? 'text-neural-text/80' : 'text-gray-600'
              }`}
            >
              {personalInfo.description}
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 mt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  className={`p-4 rounded-lg glass text-center ${
                    darkMode ? 'bg-neural-card/30' : 'bg-white/30'
                  }`}
                >
                  <stat.icon className="h-8 w-8 text-neural-cyan mx-auto mb-2" />
                  <div className={`text-2xl font-bold ${
                    darkMode ? 'text-neural-text' : 'text-gray-900'
                  }`}>
                    {stat.value}
                  </div>
                  <div className={`text-sm ${
                    darkMode ? 'text-neural-text/60' : 'text-gray-600'
                  }`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Education & Achievements */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Education */}
            <motion.div variants={itemVariants}>
              <h3 className={`text-2xl font-space font-semibold mb-6 flex items-center ${
                darkMode ? 'text-neural-text' : 'text-gray-900'
              }`}>
                <GraduationCap className="mr-3 h-6 w-6 text-neural-cyan" />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu) => (
                  <motion.div
                    key={edu.id}
                    whileHover={{ x: 10 }}
                    className={`p-4 rounded-lg glass border-l-4 border-neural-cyan ${
                      darkMode ? 'bg-neural-card/30' : 'bg-white/50'
                    }`}
                  >
                    <h4 className={`font-semibold ${
                      darkMode ? 'text-neural-text' : 'text-gray-900'
                    }`}>
                      {edu.degree}
                    </h4>
                    <p className="text-neural-cyan font-medium">{edu.school}</p>
                    <p className={`text-sm ${
                      darkMode ? 'text-neural-text/60' : 'text-gray-600'
                    }`}>
                      {edu.duration} • {edu.location}
                    </p>
                    {edu.gpa && (
                      <p className={`text-sm ${
                        darkMode ? 'text-neural-text/60' : 'text-gray-600'
                      }`}>
                        GPA: {edu.gpa}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div variants={itemVariants}>
              <h3 className={`text-2xl font-space font-semibold mb-6 flex items-center ${
                darkMode ? 'text-neural-text' : 'text-gray-900'
              }`}>
                <Award className="mr-3 h-6 w-6 text-neural-cyan" />
                Key Achievements
              </h3>
              <div className="space-y-3">
                {achievements.map((achievement) => (
                  <motion.div
                    key={achievement.id}
                    whileHover={{ x: 10 }}
                    className={`p-3 rounded-lg glass ${
                      darkMode ? 'bg-neural-card/30' : 'bg-white/50'
                    }`}
                  >
                    <h4 className={`font-semibold ${
                      darkMode ? 'text-neural-text' : 'text-gray-900'
                    }`}>
                      {achievement.title}
                    </h4>
                    <p className={`text-sm ${
                      darkMode ? 'text-neural-text/70' : 'text-gray-600'
                    }`}>
                      {achievement.description}
                    </p>
                    <span className="text-neural-cyan text-xs font-medium">
                      {achievement.date}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
