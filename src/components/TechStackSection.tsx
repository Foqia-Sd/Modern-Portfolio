"use client";
import { motion } from "framer-motion";
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaPython, 
  FaReact, 
  FaJs 
} from "react-icons/fa";
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiOpenai 
} from "react-icons/si";

// Tech stack data with icons
const technologies = [
  { id: 1, name: "HTML", Icon: FaHtml5, color: "text-orange-500" },
  { id: 2, name: "CSS", Icon: FaCss3Alt, color: "text-blue-500" },
  { id: 3, name: "TypeScript", Icon: SiTypescript, color: "text-blue-600" },
  { id: 4, name: "Next.js", Icon: SiNextdotjs, color: "text-gray-900 dark:text-white" },
  { id: 5, name: "Tailwind", Icon: SiTailwindcss, color: "text-cyan-400" },
  { id: 6, name: "Python", Icon: FaPython, color: "text-yellow-300" },
  { id: 7, name: "React", Icon: FaReact, color: "text-cyan-400" },
  { id: 8, name: "Agentic AI", Icon: SiOpenai, color: "text-green-500" }
];

const TechStackSection = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-100 dark:bg-[#0F1624] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Tech Stack
        </motion.h2>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {technologies.map((tech) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-900 dark:border-gray-700 border border-gray-300 
                         shadow-md hover:shadow-lg rounded-xl p-6 
                         flex flex-col items-center justify-center 
                         transition-all duration-300"
            >
              <tech.Icon className={`w-12 h-12 ${tech.color}`} />
              <span className="text-base font-semibold text-gray-900 dark:text-gray-200 mt-2">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
