import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ darkMode, toggleTheme }) => {
  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`fixed top-20 right-4 z-50 p-3 rounded-full transition-all duration-300 ${
        darkMode 
          ? 'bg-neural-card text-neural-cyan hover:bg-neural-cyan hover:text-neural-dark' 
          : 'bg-white text-blue-600 hover:bg-blue-600 hover:text-white shadow-lg'
      }`}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
    >
      <motion.div
        key={darkMode ? 'dark' : 'light'}
        initial={{ rotate: 180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
