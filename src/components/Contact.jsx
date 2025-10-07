import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink, MessageSquare } from 'lucide-react';

const Contact = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Using Formspree for form handling (free service)
      const response = await fetch('https://formspree.io/f/xdkobqpv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Portfolio Contact from ' + formData.name,
          message: formData.message,
          _replyto: formData.email,
          _subject: `New Portfolio Contact: ${formData.subject || 'Message from ' + formData.name}`,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      
      // Fallback to mailto if form service fails
      const subject = encodeURIComponent(formData.subject || 'Portfolio Contact from ' + formData.name);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n---\nSent from your portfolio contact form`
      );
      
      // Open mailto as backup
      window.open(`mailto:dakeshav000@gmail.com?subject=${subject}&body=${body}`, '_blank');
      
      setSubmitStatus('fallback');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'text-red-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: 'text-green-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: '#',
      color: 'text-blue-500'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: personalInfo.social.github,
      color: 'hover:text-gray-600'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: personalInfo.social.linkedin,
      color: 'hover:text-blue-600'
    },
    {
      icon: ExternalLink,
      label: 'Kaggle',
      href: personalInfo.social.kaggle,
      color: 'hover:text-orange-500'
    }
  ];

  return (
    <section id="contact" className={`py-20 ${darkMode ? 'bg-neural-dark/50' : 'bg-white'}`} ref={ref}>
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
            Let's <span className="text-neural-cyan">Connect</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-neural-cyan mx-auto rounded-full mb-6"
          />
          <motion.p
            variants={itemVariants}
            className={`text-lg max-w-2xl mx-auto ${
              darkMode ? 'text-neural-text/70' : 'text-gray-600'
            }`}
          >
            Ready to turn your data into actionable insights? Let's discuss how we can work together 
            to solve your most challenging problems.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className={`text-2xl font-space font-semibold mb-6 flex items-center ${
                darkMode ? 'text-neural-text' : 'text-gray-900'
              }`}>
                <MessageSquare className="mr-3 h-6 w-6 text-neural-cyan" />
                Get In Touch
              </h3>
              <p className={`text-lg mb-8 ${
                darkMode ? 'text-neural-text/80' : 'text-gray-600'
              }`}>
                I'm always interested in new opportunities, challenging projects, and meaningful collaborations. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </motion.div>

            {/* Contact Methods */}
            <motion.div variants={itemVariants} className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className={`flex items-center p-4 rounded-lg glass backdrop-blur-md ${
                    darkMode ? 'bg-neural-card/30' : 'bg-gray-50/50'
                  } border border-neural-cyan/20 hover:border-neural-cyan/50 transition-all duration-300 group`}
                >
                  <method.icon className={`w-6 h-6 mr-4 ${method.color} group-hover:scale-110 transition-transform`} />
                  <div>
                    <p className={`font-semibold ${
                      darkMode ? 'text-neural-text' : 'text-gray-900'
                    }`}>
                      {method.label}
                    </p>
                    <p className={`${
                      darkMode ? 'text-neural-text/70' : 'text-gray-600'
                    }`}>
                      {method.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h4 className={`text-lg font-semibold mb-4 ${
                darkMode ? 'text-neural-text' : 'text-gray-900'
              }`}>
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  social.href && (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-3 rounded-full transition-all duration-300 ${
                        darkMode 
                          ? 'bg-neural-card text-neural-text hover:text-neural-cyan hover:bg-neural-cyan/20' 
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      } ${social.color}`}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  )
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className={`p-8 rounded-xl glass backdrop-blur-md ${
                darkMode ? 'bg-neural-card/30' : 'bg-gray-50/50'
              } border border-neural-cyan/20 space-y-6`}
            >
              <h3 className={`text-2xl font-space font-semibold mb-6 ${
                darkMode ? 'text-neural-text' : 'text-gray-900'
              }`}>
                Send a Message
              </h3>

              {/* Name & Email Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-neural-text' : 'text-gray-700'
                  }`}>
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                      darkMode 
                        ? 'bg-neural-dark/50 border-neural-cyan/30 text-neural-text focus:border-neural-cyan' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-neural-cyan/20`}
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-neural-text' : 'text-gray-700'
                  }`}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                      darkMode 
                        ? 'bg-neural-dark/50 border-neural-cyan/30 text-neural-text focus:border-neural-cyan' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-neural-cyan/20`}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-neural-text' : 'text-gray-700'
                }`}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                    darkMode 
                      ? 'bg-neural-dark/50 border-neural-cyan/30 text-neural-text focus:border-neural-cyan' 
                      : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                  } focus:outline-none focus:ring-2 focus:ring-neural-cyan/20`}
                  placeholder="Project Collaboration"
                />
              </div>

              {/* Message */}
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-neural-text' : 'text-gray-700'
                }`}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 resize-none ${
                    darkMode 
                      ? 'bg-neural-dark/50 border-neural-cyan/30 text-neural-text focus:border-neural-cyan' 
                      : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                  } focus:outline-none focus:ring-2 focus:ring-neural-cyan/20`}
                  placeholder="Tell me about your project or how we can work together..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-neural-cyan hover:bg-neural-cyan/80 hover:shadow-lg'
                } text-neural-dark`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-neural-dark border-t-transparent rounded-full animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-500 text-center font-medium p-4 bg-green-50 rounded-lg border border-green-200"
                >
                  ✅ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'fallback' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-blue-500 text-center font-medium p-4 bg-blue-50 rounded-lg border border-blue-200"
                >
                  📧 Your email client has been opened. Please send the message from there.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-center font-medium p-4 bg-red-50 rounded-lg border border-red-200"
                >
                  ❌ Something went wrong. Please try again or email me directly at dakeshav000@gmail.com
                </motion.div>
              )}
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
