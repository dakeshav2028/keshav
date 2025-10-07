import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { certifications } from '../data/portfolioData';
import { Award, ExternalLink, Download, X, Calendar, Building } from 'lucide-react';

const Certifications = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [selectedCert, setSelectedCert] = useState(null);

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

  const handleDownloadPDF = (pdfFile) => {
    const link = document.createElement('a');
    link.href = `/src/assets/pdfs/${pdfFile}`;
    link.download = pdfFile;
    link.click();
  };

  const CertificationModal = ({ cert, onClose }) => (
    <AnimatePresence>
      {cert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className={`relative max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-xl ${
              darkMode ? 'bg-neural-card' : 'bg-white'
            } p-6`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className={`absolute top-4 right-4 p-2 rounded-full ${
                darkMode ? 'hover:bg-neural-dark' : 'hover:bg-gray-100'
              }`}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Certificate Image */}
            <div className="mb-6">
              <img
                src={`/src/assets/images/${cert.image}`}
                alt={cert.title}
                className="w-full h-64 object-cover rounded-lg"
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/600x300/0EF6CC/FFFFFF?text=${encodeURIComponent(cert.title)}`;
                }}
              />
            </div>

            {/* Certificate Details */}
            <div className="space-y-4">
              <h3 className={`text-2xl font-bold ${
                darkMode ? 'text-neural-text' : 'text-gray-900'
              }`}>
                {cert.title}
              </h3>

              <div className="flex items-center space-x-4 text-sm">
                <div className={`flex items-center ${
                  darkMode ? 'text-neural-text/70' : 'text-gray-600'
                }`}>
                  <Building className="w-4 h-4 mr-2" />
                  {cert.issuer}
                </div>
                <div className={`flex items-center ${
                  darkMode ? 'text-neural-text/70' : 'text-gray-600'
                }`}>
                  <Calendar className="w-4 h-4 mr-2" />
                  {cert.date}
                </div>
              </div>

              {cert.credentialId && (
                <div className={`text-sm ${
                  darkMode ? 'text-neural-text/70' : 'text-gray-600'
                }`}>
                  <strong>Credential ID:</strong> {cert.credentialId}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex space-x-3 pt-4">
                <button
                  onClick={() => handleDownloadPDF(cert.pdfFile)}
                  className="flex items-center px-4 py-2 bg-neural-cyan text-neural-dark rounded-lg hover:bg-neural-cyan/80 transition-colors"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </button>
                
                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center px-4 py-2 border border-neural-cyan rounded-lg transition-colors ${
                      darkMode 
                        ? 'text-neural-cyan hover:bg-neural-cyan hover:text-neural-dark' 
                        : 'text-blue-600 hover:bg-blue-600 hover:text-white'
                    }`}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Verify
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <section id="certifications" className={`py-20 ${darkMode ? 'bg-neural-dark' : 'bg-gray-50'}`} ref={ref}>
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
              Certifications & <span className="text-neural-cyan">Credentials</span>
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="w-24 h-1 bg-neural-cyan mx-auto rounded-full"
            />
          </motion.div>

          {/* Certifications Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`group cursor-pointer overflow-hidden rounded-xl glass backdrop-blur-md ${
                  darkMode ? 'bg-neural-card/30' : 'bg-white/50'
                } border border-neural-cyan/20 shadow-lg hover:shadow-xl transition-all duration-300`}
                onClick={() => setSelectedCert(cert)}
              >
                {/* Certificate Badge */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={`/src/assets/images/${cert.image}`}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x200/0EF6CC/FFFFFF?text=${encodeURIComponent(cert.title)}`;
                    }}
                  />
                  
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Award Icon */}
                  <div className="absolute top-4 right-4">
                    <Award className="w-8 h-8 text-neural-cyan drop-shadow-lg" />
                  </div>
                </div>

                {/* Certificate Info */}
                <div className="p-6">
                  <h3 className={`text-lg font-bold mb-2 line-clamp-2 ${
                    darkMode ? 'text-neural-text' : 'text-gray-900'
                  }`}>
                    {cert.title}
                  </h3>
                  
                  <p className="text-neural-cyan font-semibold mb-2">
                    {cert.issuer}
                  </p>
                  
                  <div className={`flex items-center justify-between text-sm ${
                    darkMode ? 'text-neural-text/70' : 'text-gray-600'
                  }`}>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {cert.date}
                    </span>
                    <span className="text-neural-cyan hover:underline">
                      View Details →
                    </span>
                  </div>

                  {/* Quick Actions */}
                  <div className="flex space-x-2 mt-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDownloadPDF(cert.pdfFile);
                      }}
                      className={`flex-1 py-2 px-3 text-xs rounded-lg border transition-colors ${
                        darkMode 
                          ? 'border-neural-cyan/50 text-neural-cyan hover:bg-neural-cyan/10' 
                          : 'border-blue-300 text-blue-600 hover:bg-blue-50'
                      }`}
                    >
                      <Download className="w-3 h-3 inline mr-1" />
                      PDF
                    </button>
                    
                    {cert.verifyUrl && (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className={`flex-1 py-2 px-3 text-xs rounded-lg border transition-colors text-center ${
                          darkMode 
                            ? 'border-neural-cyan/50 text-neural-cyan hover:bg-neural-cyan/10' 
                            : 'border-blue-300 text-blue-600 hover:bg-blue-50'
                        }`}
                      >
                        <ExternalLink className="w-3 h-3 inline mr-1" />
                        Verify
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View All Button */}
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
              View All Certifications
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Certification Modal */}
      <CertificationModal 
        cert={selectedCert} 
        onClose={() => setSelectedCert(null)} 
      />
    </>
  );
};

export default Certifications;
