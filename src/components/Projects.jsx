import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { projects } from '../data/portfolioData';
import { ExternalLink, Github, Eye, Filter } from 'lucide-react';

const Projects = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);

  // Get unique categories
  const categories = ['All', ...new Set(projects.map(project => project.category))];

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section id="projects" className={`py-20 ${darkMode ? 'bg-neural-dark/50' : 'bg-white'}`} ref={ref}>
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
            Featured <span className="text-neural-cyan">Projects</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-neural-cyan mx-auto rounded-full mb-8"
          />
          
          {/* Category Filter */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            <Filter className={`w-5 h-5 mr-2 ${darkMode ? 'text-neural-text' : 'text-gray-700'}`} />
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-neural-cyan text-neural-dark'
                    : darkMode
                      ? 'bg-neural-card text-neural-text hover:bg-neural-cyan/20'
                      : 'bg-gray-200 text-gray-700 hover:bg-blue-100'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{ y: -10 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className={`group relative overflow-hidden rounded-xl glass backdrop-blur-md ${
                  darkMode ? 'bg-neural-card/30' : 'bg-white/50'
                } border border-neural-cyan/20 shadow-lg cursor-pointer`}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-neural-cyan text-neural-dark px-3 py-1 rounded-full text-xs font-bold">
                      Featured
                    </span>
                  </div>
                )}

                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={`/src/assets/images/${project.image}`}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x200/0EF6CC/FFFFFF?text=${encodeURIComponent(project.title)}`;
                    }}
                  />
                  
                  {/* Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                    className="absolute inset-0 bg-neural-dark/80 flex items-center justify-center space-x-4"
                  >
                    {project.demoUrl && (
                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-neural-cyan text-neural-dark rounded-full hover:bg-neural-cyan/80 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-neural-text text-neural-dark rounded-full hover:bg-neural-text/80 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    )}
                    {project.caseStudyUrl && (
                      <motion.a
                        href={project.caseStudyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors"
                      >
                        <Eye className="w-5 h-5" />
                      </motion.a>
                    )}
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className={`text-xl font-bold ${
                      darkMode ? 'text-neural-text' : 'text-gray-900'
                    }`}>
                      {project.title}
                    </h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      darkMode 
                        ? 'bg-neural-cyan/20 text-neural-cyan' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {project.category}
                    </span>
                  </div>

                  <p className={`text-sm mb-4 line-clamp-3 ${
                    darkMode ? 'text-neural-text/70' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className={`px-2 py-1 text-xs rounded ${
                          darkMode 
                            ? 'bg-neural-dark/50 text-neural-text/80' 
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className={`px-2 py-1 text-xs rounded ${
                        darkMode 
                          ? 'bg-neural-dark/50 text-neural-text/80' 
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-2 bg-neural-cyan text-neural-dark rounded-lg text-sm font-medium hover:bg-neural-cyan/80 transition-colors"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 text-center py-2 border border-neural-cyan rounded-lg text-sm font-medium transition-colors ${
                          darkMode 
                            ? 'text-neural-cyan hover:bg-neural-cyan hover:text-neural-dark' 
                            : 'text-blue-600 hover:bg-blue-600 hover:text-white'
                        }`}
                      >
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-3 border-2 border-neural-cyan rounded-lg font-semibold transition-all duration-300 ${
              darkMode 
                ? 'text-neural-cyan hover:bg-neural-cyan hover:text-neural-dark' 
                : 'text-blue-600 hover:bg-blue-600 hover:text-white'
            }`}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
