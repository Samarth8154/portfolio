import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm{' '}
              <div className="inline-block">
                <span className="text-blue-500">Samarth</span>{' '}
                <span className="text-purple-500">Bargale</span>
              </div>
            </h1>
            <h2 className="text-2xl sm:text-3xl text-gray-300 mb-8">
              Software Engineer | Data Scientist | AI Enthusiast
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto lg:mx-0">
              Passionate about creating innovative solutions using cutting-edge technologies.
              Specializing in full-stack development, machine learning, and artificial intelligence.
            </p>
            <div className="flex space-x-4">
              <a
                href="/Samarth Bargale Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                My Resume
              </a>
              <a
                href="https://www.linkedin.com/in/samarth-bargale/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-300 flex items-center space-x-2"
              >
                <FaLinkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:samarthbargale@gmail.com"
                className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-300 flex items-center space-x-2"
              >
                <FaEnvelope className="w-5 h-5" />
                <span>Gmail</span>
              </a>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-first lg:order-last flex justify-center items-center"
          >
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-spin-slow"></div>
              <div className="absolute inset-[3px] rounded-full overflow-hidden">
                <img
                  src="/images/profile.jpg"
                  alt="Samarth Bargale"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 