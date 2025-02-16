"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section id="contact" className="w-full py-20 px-4 bg-white dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side - Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="p-6 rounded-lg bg-gray-50 dark:bg-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>+92 345 1234567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                    />
                  </svg>
                  <span>Pakistan, Karachi</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>foqia.sd99@gmail.com</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 
                    bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                    focus:ring-2 focus:ring-blue-500 focus:border-transparent
                    transition-all duration-200 ease-in-out
                    hover:border-blue-500 dark:hover:border-blue-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 
                    bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                    focus:ring-2 focus:ring-blue-500 focus:border-transparent
                    transition-all duration-200 ease-in-out
                    hover:border-blue-500 dark:hover:border-blue-500"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 
                    bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                    focus:ring-2 focus:ring-blue-500 focus:border-transparent
                    transition-all duration-200 ease-in-out
                    hover:border-blue-500 dark:hover:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-blue-500 text-white font-medium
                  hover:bg-blue-600 transition-colors duration-200
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                  dark:focus:ring-offset-gray-900"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection; 