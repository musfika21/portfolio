import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

// Sample education data - replace with your actual data
const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Your University Name",
    year: "2021 - 2025",
  },
  {
    degree: "Higher Secondary Certificate",
    institution: "Your College Name",
    year: "2019 - 2021",
  },
  {
    degree: "Secondary School Certificate",
    institution: "Your School Name",
    year: "2017 - 2019",
  },
];

const Education = () => {
  const { colors } = useTheme();

  if (!education.length) return null;

  return (
    <section
      id="education"
      className="py-16 px-6 md:px-20 transition-colors duration-300"
      style={{ backgroundColor: colors.bg.secondary }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-10 text-center"
          style={{ color: colors.accent.primary }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg shadow-lg transition-all duration-300 cursor-pointer"
              style={{
                backgroundColor: colors.bg.card,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                y: -8,
                boxShadow: `0 20px 25px -5px ${colors.accent.primary}40`,
              }}
            >
              <div className="space-y-3">
                <h3
                  className="text-xl font-semibold"
                  style={{ color: colors.accent.primary }}
                >
                  {edu.degree}
                </h3>
                <p style={{ color: colors.text.secondary }}>{edu.institution}</p>
                <p
                  className="text-sm"
                  style={{ color: colors.text.muted }}
                >
                  {edu.year}
                </p>
              </div>

              {/* Decorative border animation */}
              <motion.div
                className="mt-4 h-1 rounded-full"
                style={{ backgroundColor: colors.accent.border }}
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;