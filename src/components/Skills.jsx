import React from "react";
import { skills } from "../data";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-black px-6 md:px-20">
      <motion.h2
        className="text-3xl font-bold text-primary mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My Skills
      </motion.h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Frontend Skills */}
        <motion.div
          className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-primary/50 transition duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-primary mb-4">
            Frontend
          </h3>
          <ul className="space-y-2">
            {skills.frontend.map((skill, index) => (
              <li
                key={index}
                className="bg-gray-800 px-4 py-2 rounded-md text-gray-300 hover:bg-primary hover:text-black transition duration-300"
              >
                {skill}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Backend Skills */}
        <motion.div
          className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-primary/50 transition duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-primary mb-4">
            Backend
          </h3>
          <ul className="space-y-2">
            {skills.backend.map((skill, index) => (
              <li
                key={index}
                className="bg-gray-800 px-4 py-2 rounded-md text-gray-300 hover:bg-primary hover:text-black transition duration-300"
              >
                {skill}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Tools Skills */}
        <motion.div
          className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-primary/50 transition duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-primary mb-4">
            Tools
          </h3>
          <ul className="space-y-2">
            {skills.tools.map((skill, index) => (
              <li
                key={index}
                className="bg-gray-800 px-4 py-2 rounded-md text-gray-300 hover:bg-primary hover:text-black transition duration-300"
              >
                {skill}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
