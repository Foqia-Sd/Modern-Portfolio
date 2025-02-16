"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Sample project data
const projects = [
  {
    id: 1,
    title: "Landing Page",
    description: "A modern, responsive landing page.",
    image: "/images/landing-page.png",
    demoUrl: "https://figmahack.vercel.app/",
  },
  {
    id: 2,
    title: "Blog Website",
    description: "Dynamic with a clean and modern design.",
    image: "/images/blog.png",
    demoUrl: "https://blog-red-beta-62.vercel.app/",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A portfolio clean and modern design.",
    image: "/images/portfolio.png",
    demoUrl: "https://portfolio2-olive-iota.vercel.app/",
  },
  {
    id: 4,
    title: "Giaic Web Clone",
    description: "Giaic Clone modern and responsive.",
    image: "/images/giaic-clone.png",
    demoUrl: "https://giaic-clone-six.vercel.app/",
  },
  {
    id: 5,
    title: "Avion Marketplace",
    description: "E-commerce website with stripe payment.",
    image: "/images/avion.png",
    demoUrl: "https://avion-marketplace-six.vercel.app/",
  },
  {
    id: 6,
    title: "Admin Dashboard",
    description: "Dashboard using zod and shadcn/ui.",
    image: "/images/admin.png",
    demoUrl: "https://admin-dashboard-sigma-beige-94.vercel.app/",
  },
  // Add more projects here...
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-16 px-4 max-w-6xl mx-auto">
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-center mb-12 dark:text-white text-gray-900"
      >
        Featured Work
      </motion.h2>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="group relative bg-white dark:bg-gray-800 rounded-lg 
                       shadow-md hover:shadow-lg transition-all duration-300"
          >
            {/* Project Image */}
            <div className="relative h-48 w-full">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>

            {/* Project Content */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                {project.description}
              </p>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 
                            group-hover:opacity-100 transition-opacity duration-300 
                            flex items-center justify-center">
              <Link
                href={project.demoUrl}
                className="px-4 py-2 bg-blue-500 text-white text-sm rounded-md
                          transition-all duration-300 hover:bg-blue-600 hover:scale-105"
              >
                Live Demo
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
