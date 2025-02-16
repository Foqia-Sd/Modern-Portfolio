"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16"
        >
          About Me
        </motion.h2>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden"
          >
            <Image
              src="/images/about.png" // Replace with your image path
              alt="Professional photo"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="prose dark:prose-invert prose-lg max-w-none text-justify tracking-normal">
              <p className="text-gray-700 dark:text-gray-300">
                {/* Replace with your bio content */}
                👋             Hi, I'm Foqia, a passionate Full Stack Developer with expertise in modern web technologies. I specialize in building responsive, high performance web applications using Next.js, TypeScript, and Tailwind CSS.
                I'm constantly learning the latest advancements in Web3, AI, and the Metaverse to stay ahead in the tech industry. My goal is to craft seamless digital experiences that merge innovation with functionality.
                🌎 With a vision to work in the international market, I’m open to freelance projects and collaborations.
              </p>
            </div>

            {/* Download Resume Button */}
            <motion.a
              href="https://drive.google.com/file/d/1tKSGr8_vRo-kHrgkBe5R-oVWsY33N7rm/view?usp=sharing" // Replace with your resume link
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 bg-blue-500 text-white rounded-lg font-medium
                       hover:bg-blue-600 transition-colors duration-200
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                       dark:focus:ring-offset-gray-800"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 