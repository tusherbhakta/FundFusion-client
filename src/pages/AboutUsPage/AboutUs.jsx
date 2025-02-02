
import { motion } from "framer-motion";
import { FaHandHoldingHeart, FaUsers, FaShieldAlt } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-12 md:px-16 lg:px-24">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <motion.h1 
          className="text-4xl font-bold md:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Empowering Dreams, One Contribution at a Time
        </motion.h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Fund Fusion is a community-driven crowdfunding platform designed to bring ideas to life through collective support.
        </p>
      </div>
      
      {/* Our Mission Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.img 
          src="https://images.unsplash.com/photo-1589561253898-768105ca91a8?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Our Mission" 
          className="rounded-lg shadow-lg w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        <div>
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We strive to connect people with innovative ideas to a community that supports and funds their ambitions.
          </p>
        </div>
      </div>
      
      {/* Why Choose Us */}
      <div className="mt-16">
        <h2 className="text-3xl font-semibold text-center mb-6">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
            whileHover={{ scale: 1.05 }}
          >
            <FaShieldAlt className="text-5xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Secure & Transparent</h3>
            <p className="text-gray-600 dark:text-gray-300">All transactions are encrypted and secure.</p>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
            whileHover={{ scale: 1.05 }}
          >
            <FaHandHoldingHeart className="text-5xl text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Community Support</h3>
            <p className="text-gray-600 dark:text-gray-300">A platform built for and by the community.</p>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
            whileHover={{ scale: 1.05 }}
          >
            <FaUsers className="text-5xl text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">User Friendly</h3>
            <p className="text-gray-600 dark:text-gray-300">A seamless and easy-to-use interface.</p>
          </motion.div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="text-center mt-12">
        <motion.a 
          href="/campaigns" 
          className="px-6 py-3 text-lg bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700"
          whileHover={{ scale: 1.1 }}
        >
          Start Your Campaign
        </motion.a>
      </div>
    </div>
  );
};

export default AboutUs;
