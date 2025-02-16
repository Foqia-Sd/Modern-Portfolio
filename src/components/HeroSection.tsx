"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Dynamically import ScrollLink (react-scroll)
const ScrollLink = dynamic(() => import("react-scroll").then((mod) => mod.Link), { ssr: false });

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      {/* Profile Image Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-48 h-48 mb-8 rounded-full overflow-hidden ring-4 ring-blue-500/20"
      >
        <Image
          src="/images/pic.png" // Replace with actual image path
          alt="Professional headshot"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Text Content */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white text-center mb-4"
      >
        I'm a Web Developer
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-xl text-gray-600 dark:text-gray-300 text-center mb-8"
      >
       Transforming ideas into stunning digital experiences.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <ScrollLink to="projects" smooth={true} duration={500}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-blue-500 text-white rounded-lg font-medium
                     hover:bg-blue-600 transition-colors duration-200
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                     dark:focus:ring-offset-gray-900"
          >
            View Projects
          </motion.button>
        </ScrollLink>

        <motion.a
          href="https://github.com/Foqia-Sd" // Replace with your GitHub profile
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 border-2 border-blue-500 text-blue-500 rounded-lg font-medium
                   hover:bg-blue-500 hover:text-white transition-colors duration-200
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                   dark:text-blue-400 dark:border-blue-400 dark:hover:text-white
                   dark:focus:ring-offset-gray-900 mb-4"
        >
          GitHub
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
