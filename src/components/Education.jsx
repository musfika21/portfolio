import React from "react";
import { education } from "../data";
import { motion } from "framer-motion";

const Education = () => {
  if (!education.length) return null;

  return (
    <section id="education" className="py-16 bg-black px-6 md:px-20">
      <motion.h2
        className="text-3xl font-bold text-primary mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Education
      </motion.h2>

      <div className="space-y-8">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-primary/50 transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-primary">
              {edu.degree}
            </h3>
            <p className="text-gray-300">{edu.institution}</p>
            <p className="text-gray-400 text-sm">{edu.year}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
